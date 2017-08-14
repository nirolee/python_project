# -*- coding: utf-8 -*-
from mns.account import Account
from mns.queue import *
import ConfigParser
from service.logger import Logger
import json
import os
import requests
import service.utils
import re
import subprocess
import threading
import multiprocessing
import service.mail

logger = Logger.get_logger()


def getMessage(queueName, mnsAcount):
    myQueue = mnsAcount.get_queue(queueName)
    try:
        recvMsg = myQueue.receive_message()
        print "Receive Message Succeed!"
        print "message_id is %s" % recvMsg.message_id
        print "message_body_md5 is %s" % recvMsg.message_body_md5
        print "message_body is %s" % recvMsg.message_body
        print "dequeue_count is %s" % recvMsg.dequeue_count
        print "enqueue_time is %s" % recvMsg.enqueue_time
        print "first_dequeue_time is %s" % recvMsg.first_dequeue_time
        print "priority %s" % recvMsg.priority
        print "next_visible_time %s" % recvMsg.next_visible_time
        print "receipt_handle is %s" % recvMsg.receipt_handle
        myQueue.delete_message(recvMsg.receipt_handle)
        return recvMsg
    except MNSExceptionBase, e:
        # print "Receive Message Fail:", e
        pass


def originVideo(taskDict):
    url = taskDict['url']
    callback = taskDict['cb']

    contentType = ""
    try:
        resp = requests.head(url, headers={
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
            'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4'
        })
        print resp.status_code, resp.content
        print resp.headers

    except requests.ConnectionError, e:
        print e
        return False

    if 'Content-Type' in resp.headers:
        contentType = resp.headers['Content-Type']
    elif 'content-type' in resp.headers:
        contentType = resp.headers['content-type']

    if ('video' in contentType) or ('mpeg' in contentType):

        easubUuid = taskDict['video_id']
        logger.warn('origin download url' + url + '[uuid]' + easubUuid)
        outPath = 'cache/' + easubUuid + '_.mp4'
        success = False
        if 'm3u8' in url:
            length = service.utils.coverterMp4("'%s'" % url, outPath, True)
            size = os.path.getsize(outPath)
            if length > 0:
                success = True
        else:
            filePath = 'cache/' + easubUuid + '.' + re.split(r'/', contentType)[1]
            size, success = service.utils.download_file(url, filePath, headers={
                'Cache-Control': 'no-cache',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
                'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4'
            })
            length = service.utils.coverterMp4(filePath, outPath)

        if success and length:
            uploadUrl = taskDict['uploadurl']
            endpoint, backet, obj = service.utils.paseUploadUrl(uploadUrl)
            print endpoint, backet, obj
            result = service.utils.uploadVideo(outPath, endpoint, backet, obj)
            if not result:
                data = {
                    "video_id": easubUuid,
                    "state": 0,
                    "message": u'上传OSS失败',
                    "length": 0,
                    "play_id": '',
                    "cover": '',
                    "title": ''
                }
            else:
                data = {
                    "video_id": easubUuid,
                    "state": 1,
                    "message": u'成功',
                    "length": length,
                    "play_id": easubUuid,
                    "size": size,
                    "cover": '',
                    "title": ''
                }

            service.utils.callback_result(callback, data)
        else:
            data = {
                "video_id": easubUuid,
                "state": 0,
                "message": u'下载视频失败',
                "length": 0,
                "play_id": '',
                "cover": '',
                "title": ''
            }
            service.utils.callback_result(callback, data)
        service.utils.remove_all_files('cache/', easubUuid)
        return True


def getSpiderCommand(taskDict):
    url = taskDict['url']
    callback = taskDict['cb']

    command = 'scrapy crawl -a url=\'' + url + '\' -a callback="' + callback + '"'
    if 'check_video_url' in taskDict:
        checkVideoUrl = taskDict['check_video_url']
        command += ' -a check_video_url="' + checkVideoUrl + '"'
    if 'uploadurl' in taskDict:
        command += ' -a upload_url="' + taskDict['uploadurl'] + '"'
    if 'video_id' in taskDict:
        command += ' -a uuid=' + taskDict['video_id']
    if 'live_cb' in taskDict:
        command += ' -a live_callback=' + taskDict['live_cb']

    if 'subtitle' in taskDict:
        command += ' -a sub=' + taskDict['subtitle'] + ' -a lang=' + taskDict['language'] + ' subtitle.youtube'
    else:
        with open("config/site.cnf") as f:
            site_map = json.load(f)
        flag = False
        for site in site_map.keys():
            if 'weibo.com/tv/l/' in url:
                command += " %s" % 'yizhibo'
                flag = True
                break
            elif site in url:
                command += " %s" % site_map.get(site)
                flag = True
                break

        if not flag:
            command += " dl.youtube"

    return command


def schedulingCrawler(taskDict):
    if originVideo(taskDict):
        return

    command = getSpiderCommand(taskDict)
    print command
    logger.warn(command)
    status = os.system(command)
    print 'status', status
    if status != 0:
        data = {
            "video_id": taskDict['video_id'],
            "state": 0,
            "message": u'链接解析失败',
            "length": 0,
            "play_id": '',
            "cover": '',
            "title": ''
        }
        service.utils.callback_result(taskDict['cb'], data)
        errmsg = 'status:' + str(status) + "[uuid]" + taskDict['video_id']
        logger.error(errmsg)
        service.mail.send_mail('spider failed:' + errmsg)


#####################
# python queue
#####################
config = ConfigParser.ConfigParser()
config.read("config/config.ini")
accessId = str(config.get("Preference", "aliyun_accessid"))
accessKey = str(config.get("Preference", "aliyun_accesskey"))
endpoint = str(config.get("Preference", "mns_endpoint"))
mnsAccount = Account(endpoint, accessId, accessKey)
active_count = multiprocessing.cpu_count()
if config.has_option("Preference", "active_count"):
    active_count = config.getint("Preference", "active_count")
print 'active_count', active_count
if __name__ == "__main__":

    while True:
        if threading.activeCount() > active_count:
            print 'thread active count', threading.activeCount(), 'cpu count', multiprocessing.cpu_count()
            time.sleep(5)
            continue

        queueName = str(config.get("Preference", "mns_queue_name"))
        recvMsg = getMessage(queueName, mnsAccount)
        if recvMsg is None or recvMsg.message_body is None:
            time.sleep(3)
            continue

        msgBody = recvMsg.message_body
        logger.warn("receive message :" + msgBody)

        try:
            taskDict = json.loads(msgBody)
        except Exception, e:
            logger.error("json.loads exception:" + msgBody)
            continue

        t = threading.Thread(target=schedulingCrawler, name=time.time(), args=(taskDict,))
        t.start()
