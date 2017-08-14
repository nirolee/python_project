# -*- coding: utf-8 -*-
import requests
import oss2
from oss2.exceptions import OssError
from service.logger import Logger
import os
import re
import json
import subprocess
import ConfigParser
import urllib2
import multiprocessing
from database import get_database
import string
import shutil

config = ConfigParser.ConfigParser()
config.read("config/config.ini")
logger = Logger.get_logger('utils')
with open("config/database.cnf") as f:
    conf = json.load(f)


def coverterMp4(inname, outname, transcode=False):
    if transcode:
        cups = multiprocessing.cpu_count()
        command = '%s -i %s -y -threads %s -preset veryfast  -crf 18 -vcodec libx264 -c:a aac -r 25 -g 25 -keyint_min 25 %s' % (
            config.get("Preference", "ffmpeg"), inname, cups, outname)
        print command
        os.system(command)
        length = getVideoLength(outname)
    else:
        concatfile = outname + '.txt'
        open(concatfile, 'a+').write('file ' + string.replace(inname, 'cache/', '') + "\n")
        length = mergeVideo(outname, concatfile)

    return length

def mergeVideo(outname, listfile):
    command = '%s -y -f concat -i %s -bsf:a aac_adtstoasc -c copy %s' % (
    config.get("Preference", "ffmpeg"), listfile, outname)
    print command
    os.system(command)
    return getVideoLength(outname)


# 获取视频时长
def getVideoLength(outname):
    command = [config.get("Preference", "ffmpeg"), "-i", outname]
    stdoutData, stderrData = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE).communicate()

    reg = "Duration:\\s+(\\d+):(\\d+):(\\d+)\\.(\\d+)"
    pattern = re.compile(reg)
    match = pattern.search(stderrData)
    length = 0
    if match:
        # 使用Match获得分组信息
        duration = match.group()[len("Duration: "):]
        arr = duration.split(":")
        length = int(arr[0]) * 60 * 60 + int(arr[1]) * 60 + int(float(arr[2]))
    return length


def paseUploadUrl(uploadUrl):
    try:
        result = re.split(r"://", uploadUrl, maxsplit=1)[1]
        split = re.split(r"\.", result, maxsplit=1)
        backet = split[0]
        sp = re.split(r"/", split[1], maxsplit=1)
        endpoint = sp[0]
        obj = re.split(r"\?", sp[1], maxsplit=1)[0]
        logger.info('pase upload url:' + uploadUrl)
        return endpoint, backet, obj
    except Exception, e:
        logger.error('pase upload url:' + uploadUrl)
        return None


def uploadVideo(filePath, endpoint, backetName, object):
    print 'uploadVideo'
    try:

        auth = oss2.Auth(config.get("Preference", "aliyun_accessid")
                         , config.get("Preference", "aliyun_accesskey"))
        bucket = oss2.Bucket(auth, config.get("Preference", "oss_endpoint")
                             , backetName)
        result = bucket.put_object_from_file(object, filePath, progress_callback=progress_callback)
        print result
        logger.info('upload video')
        return result
    except OssError, e:
        print e
        return False


def uploadVideoByUrl(url, endpoint, backetName, object):
    print 'uploadVideoByUrl'
    try:
        auth = oss2.Auth(config.get("Preference", "aliyun_accessid")
                     , config.get("Preference", "aliyun_accesskey"))
        bucket = oss2.Bucket(auth, config.get("Preference", "oss_endpoint")
                             , backetName)
        result = bucket.put_object(object, requests.get(url), progress_callback=progress_callback)
        print result
        logger.info('upload video by url' + url)
        return result
    except OssError, e:
        print e
        return False



def progress_callback(bytes_consumed, total_bytes):
    """
    oss 上传进度
    :param bytes_consumed:
    :param total_bytes:
    :return:
    """
    if bytes_consumed and total_bytes:
        status = r"%10d  [%3.2f%%]" % (bytes_consumed, bytes_consumed * 100. / total_bytes)
        status = status + chr(8) * (len(status) + 1)
        print status,
    else:
        status = r"%10d  [%s]" % (bytes_consumed, total_bytes)
        status = status + chr(8) * (len(status) + 1)
        print status,


def callback_result(callback_url=None, data=None, headers=None):
    print data
    times = 3
    while times > 0:
        try:
            if headers:
                r = requests.post(callback_url, data=data, headers=headers)
            else:
                r = requests.post(callback_url, data=data)
            print r
            times = 0
            if r.status_code != 200:
                logger.error(callback_url + " " + json.dumps(data) + str(r.json()))
                return True
            result = r.json()
            print u'callback successed', result
            logger.info(callback_url + " " + json.dumps(data) + str(r.json()))
            return result

        except Exception, e:
            print u'callback failed', e
            logger.error(u'callback failed ' + json.dumps(data) + callback_url)
            times -= 1

    return None


def download_file(url, file_path, headers=None):
    times = 3
    while times > 0:
        try:
            if headers:
                request = urllib2.Request(url, headers=headers)
            else:
                request = urllib2.Request(url)
            u = urllib2.urlopen(request, timeout=30)
            f = open(file_path, 'wb')
            meta = u.info()
            file_size = int(meta.getheaders("Content-Length")[0])
            print "Downloading: %s Bytes: %s" % (file_path, file_size)

            file_size_dl = 0
            block_sz = 8192
            while True:
                buffer = u.read(block_sz)
                if not buffer:
                    break

                file_size_dl += len(buffer)
                f.write(buffer)
                status = r"%10d  [%3.2f%%]" % (file_size_dl, file_size_dl * 100. / file_size)
                status = status + chr(8) * (len(status) + 1)
                print status,

            f.close()
            if file_size_dl != file_size:
                times -= 1
                continue

            return file_size, file_size_dl == file_size
        except urllib2.URLError, e:
            print e
            times -= 1
        except Exception, e:
            print e
            times -= 1

    return 0, False


def block_download(url, file_path, headers={}):
    start_size = 0
    block_size = 1024 * 1024 * 3
    print 'block_size', block_size
    try:
        request = urllib2.Request(url)
        u = urllib2.urlopen(request, timeout=30)
        meta = u.info()
        file_size = int(meta.getheaders("Content-Length")[0])
        print "Downloading: %s Bytes: %s" % (file_path, file_size)
        size = 0
        while start_size < file_size:
            if start_size + block_size < file_size:
                headers['Range'] = "bytes=%d-%d" % (start_size, start_size + block_size)
                start_size += block_size + 1
            else:
                headers['Range'] = "bytes=%d-" % (start_size,)
                start_size = file_size
            print headers
            times = 1
            while times < 3:
                r = requests.get(url, headers=headers, stream=True)
                if r.status_code > 400:
                    times += 1
                    continue
                with open(file_path, 'ab+') as fd:
                    for chunk in r.iter_content(chunk_size=8192):
                        if chunk:
                            size += len(chunk)
                            fd.write(chunk)
                        status = r"%10d  [%3.2f%%]" % (size, size * 100. / file_size)
                        status = status + chr(8) * (len(status) + 1)
                        print status,
                break

            if times >= 3:
                return 0, False

        return file_size, size == file_size
    except:
        return 0, False


def search_video(video_id, page_url, check_url, table='youtube'):
    db_cls = get_database(conf.get("database_type", None))
    db = db_cls(**conf.get("database", {}))
    result = db.search_video(video_id=video_id, page_url=page_url, table=table)
    print result
    if result:
        if not check_url:
            return result

        resp = requests.get(check_url + '?play_id=' + result[0])
        if resp.status_code == 200:
            return result

    return None


def download_m3u8(url, path, id, transcode=True):
    resp = requests.get(url)
    m3u8 = resp.text
    lines = string.split(m3u8, "\n")
    base_url = re.split(r"[a-zA-Z0-9-_\.]+\.m3u8", url)[0]
    print 'base_url', base_url
    # print lines
    concatfile = 'cache/' + id + '.txt'
    index = 1
    for line in lines:
        if '.ts' in line:
            print 'ts', line
            if 'http' not in line:
                ts = base_url + line
            else:
                ts = line
            ts_path = 'cache/%s_%s.ts' % (id, index)
            print ts_path, ts
            filesize, success = download_file(ts, ts_path)
            if not success:
                return 0

            ts_path2 = '%s_%s.ts' % (id, index)
            open(concatfile, 'a+').write("file %s\n" % ts_path2)
            index += 1
    if transcode:
        command = '%s -y -f concat -i %s -crf 18 -ar 48000 -vcodec libx264 -c:a aac -r 25 -g 25 -keyint_min 25 %s' % (
            config.get("Preference", "ffmpeg"), concatfile, path)
        print command
        os.system(command)
        return getVideoLength(path)
    else:
        return mergeVideo(path, concatfile)



def remove_start(s, start):
    return s[len(start):] if s is not None and s.startswith(start) else s


def remove_end(s, end):
    return s[:-len(end)] if s is not None and s.endswith(end) else s


def burn_subtitle_into_video(video_path, subtitle_path):
    parent, filename = os.path.split(video_path)
    name, extension = os.path.splitext(filename)
    out = parent + '/' + name + "_" + extension

    command = '%s -y -i %s -vf "subtitles=%s:fontsdir=/usr/share/fonts/zh/:charenc=utf-8:force_style=\'Fontname=msyh.ttf,Fontsize=24\'" -acodec aac -vcodec libx264 %s' \
              % (config.get("Preference", "ffmpeg"), video_path, subtitle_path, out)
    print command
    os.system(command)
    return out, os.path.exists(out)


def remove_all_files(dir, start_with):
    dirs = os.listdir(dir)
    for file in dirs:
        if file.startswith(start_with):
            if os.path.isdir(dir + file):
                shutil.rmtree(dir + file)
            if os.path.isfile(dir + file):
                os.remove(dir + file)


def get_clip_cover_url(url, uuid):
    uploadVideoByUrl(url, '', 'cloud-clip-img', 'cover/%s.jpg' % uuid)
    return 'http://image.clip.easub.com/' + 'cover/%s.jpg' % uuid
