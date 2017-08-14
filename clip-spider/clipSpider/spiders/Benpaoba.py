# -*- coding: utf-8 -*-
import scrapy
import ConfigParser
import time
import re
import requests
import json
from service.logger import Logger
from scrapy.exceptions import CloseSpider
from scrapy.selector import Selector
from service.database import get_database
import service.utils
import os
import service.mail
import sys
import  argparse
import server.utils
from openpyxl import load_workbook

reload(sys)
sys.setdefaultencoding('utf-8')

logger = Logger.get_logger('cztv')
with open("config/config.cnf") as f:
    config = json.load(f)

class BenpaobaSpider(scrapy.Spider):
    name = "benpaoba"
    callbacked = False
    video_id = None
    times = 0

    def __init__(self, url, uuid, upload_url, callback, platform=11001, check_video_url=None, live_callback=None, *args,
                 **kwargs):
        super(BenpaobaSpider, self).__init__(*args, **kwargs)

        self.config = ConfigParser.ConfigParser()
        self.config.read("config/config.ini")
        self.url = url
        self.uuid = uuid
        self.upload_url = upload_url
        self.callback = callback
        self.check_video_url = check_video_url
        self.live_callback = live_callback
        # initialize db
        with open("config/database.cnf") as f:
            config = json.load(f)
        db_cls = get_database(config.get("database_type", None))
        self.db = db_cls(**config.get("database", {}))
        self.platform = platform
        self.start_urls.append(url)
        self.user_id, self.library_id = self.excelgetuesrIDandlibID(url)

    def parse(self, response):
        print response.url
        print self.start_urls
        try:
            self.video_id = self.match_id(self.start_urls[0])
            #print self.video_id
        except AssertionError, e:
            raise CloseSpider('link not supported')

        if self.check_db():
            return

        sel = Selector(response).extract()
        cid = re.compile('cid:\d+').search(sel).group(0)[4:]
        pid = re.compile('pid:\d+').search(sel).group(0)[4:]
        url = 'http://api.cms.cztv.com/mms/out/album/videos?id=%s&cid=%s&platform=pc&vid=%s' % (pid, cid, self.video_id)
        print url
        info = requests.get(url).json()['data']
        i = 0
        while True:
            url = info[i]['url']
            video_id1 = re.compile('\d+.html').search(url).group(0)[:-5]
            url1 = 'http://api.cms.cztv.com/mms/out/video/playJson?id=%s&platid=111&splatid=1002&format=1&pt=4&at=1&domain=tv.cztv.com' % video_id1
            info1 = requests.get(url1).json()
            title = info1['playurl']['title']
            duration = info1['playurl']['duration']
            pic = info1['playurl']['pic']
            video_url1 = info1['playurl']['dispatch'][0]['url'][0].values()[0]
            page_url = 'http://tv.cztv.com/vplay/%s.html' % video_id1
            #   命令传入的url，右边视频的title，长度，图片，右边视频的视频, userID,  libID
            #print self.url,title, duration, pic, video_url1,self.user_id, self.library_id
            #result = self.search_video(video_id1, video_url1, config.get('easub')['check_video_url'])
            #print result
            video_data = {
            "user_id": self.user_id,
            "library_id": self.library_id,
            'title': title,
            'video_id': video_id1,
            'publish': time.strftime('%Y-%m-%d %H:%M:%S'),
            'page_url': page_url,
            'video_length': duration,
            'pic': pic,
            'video_url': video_url1,
            'author': '',
            #'video_size': file_size,
            #'easub_uuid': uuid,
            #'cover': cover
            }
            print video_data
            i += 1
            if i >= len(info):
                break


        '''
        duration = info['playurl']['duration']
        pic = info['playurl']['pic']
        video_url = info['playurl']['dispatch'][0]['url'][0].values()[0]
        print 'video_url', video_url
        file_path = 'cache/%s.mp4' % self.uuid
        length = service.utils.download_m3u8(video_url, file_path, self.uuid, False)
        if length < 1:
            raise CloseSpider('download video failed')

        cover = service.utils.get_clip_cover_url(pic, self.uuid)

        endpoint, backet, obj = service.utils.paseUploadUrl(self.upload_url)
        print endpoint, backet, obj

        result = service.utils.uploadVideo(file_path, endpoint, backet, obj)
        if not result:
            raise CloseSpider('upload oss failed')

        filesize = os.path.getsize(file_path)
        print 'filesize', filesize
        # callback
        data = {
            "video_id": self.uuid,
            "state": 1,
            "message": u'成功',
            "length": length,
            "play_id": self.uuid,
            "size": filesize,
            "cover": cover,
            "title": title
        }
        self.callbacked = service.utils.callback_result(self.callback, data=data)
        logger.info('[finished]' + str(self.callbacked) + '[uuid]' + self.uuid)

        video_data = {
            'title': title,
            'video_id': self.video_id,
            'author': 'v.qq',
            'publish': time.strftime('%Y-%m-%d %H:%M:%S'),
            'page_url': self.start_urls[0],
            'video_length': length,
            'video_size': filesize,
            'video_url': video_url,
            'easub_uuid': self.uuid
        }
        self.db.save_video(video_data)
'''

    def match_id(self, url):
        regx = r"https?://(.*\.)?cztv\.com/vplay/(?P<video_id>\d+).html"
        m = re.compile(regx).match(url)
        assert m
        return m.group('video_id')

    def check_db(self):
        result = service.utils.search_video(video_id=self.video_id, page_url=self.start_urls[0],
                                            check_url=self.check_video_url)

        if result:
            print 'db note url:', self.start_urls[0]
            logger.warn('[db note url]' + self.start_urls[0] + '[uuid]' + self.uuid)
            data = {
                "video_id": self.uuid,
                "state": 1,
                "message": u'成功',
                "length": result[2],
                "play_id": result[0],
                "size": result[3],
                "cover": result[4],
                "title": result[1]
            }
            self.callbacked = service.utils.callback_result(self.callback, data=data)
            return True

    '''
    def closed(self, reason):
        print '[closed]', reason
       
        if not self.callbacked:
            data = {
                "video_id": self.uuid,
                "state": 0,
                "message": reason,
                "length": 0,
                "play_id": '',
                "cover": '',
                "title": ''
            }
            service.utils.callback_result(self.callback, data=data)
            service.mail.send_mail('spider failed:' + self.name, self.uuid + ' ' + reason)
       
        logger.info('[closed reason]' + reason + "[uuid]" + self.uuid)
        if self.video_id:
            # subprocess.Popen('rm -rf ' + 'cache/' + self.uuid + '*', shell=True)
            service.utils.remove_all_files('cache/', self.uuid)
    '''

    def excelgetuesrIDandlibID(self,url):
        dict = []
        parser = argparse.ArgumentParser()
        parser.add_argument('-S', '--source_path', help="excel path")
        parser.add_argument('-N', '--number', help="sheet number", type=int, default=-1)
        parser.add_argument('-L', '--line', help="line", type=int, default=-1)
        parser.add_argument('-LT', '--line_end', help="line end", type=int, default=-1)
        parser.add_argument('-ST', '--start_time', help="爬取视频列表视频的开始时间", default='19700101')
        parser.add_argument('-ET', '--end_time', help="爬取视频列表结束时间", default='now')
        args = parser.parse_args()
        #print 'source_path:', args.source_path, "\nnumber:", args.number
        number = args.number
        line_start = args.line
        line_end = args.line_end
        start_time = args.start_time
        end_time = args.end_time
        wb = load_workbook(filename='C:\Users\yaowenfeng\Desktop\zjws.xlsx')
        # print wb.get_active_sheet
        sheets = wb.get_sheet_names()
        if number > -1:
            sheets = [sheets[number]]
        # print sheets
        for sheet in sheets:
            ws = wb.get_sheet_by_name(sheet)
            rows = ws.rows
            for idx, row in enumerate(rows):
                if (line_start > -1) and (idx < line_start or idx > line_end):
                    print line_start, idx, line_end
                    continue
                line = [col.value for col in row]
                url = line[1]
                if (not url):
                    continue
                # t = threading.Thread(target=get_youtube_urls, name=sheet + '_' + str(idx),
                #                      args=(line[1], url, start_time, end_time,))
                # t.start()
                #      userID , libID , title , url
                #print line[4], line[5], line[0], url, start_time, end_time
                dict.append(line)
        #print dict
        for excel in dict:
            if self.url in excel:
                return excel[4], excel[5]

    def search_video(self, video_id, page_url, check_url, table='youtube'):
        result = self.db.search_video(video_id=video_id, page_url=page_url, table=table)
        #print result
        if result:
            if not check_url:
                return result

            resp = requests.get(check_url + '?play_id=' + result[0])
            if resp.status_code == 200:
                return result
            self.db.delete_video(result[0], table)

        return None