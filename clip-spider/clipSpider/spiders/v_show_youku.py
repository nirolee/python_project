# -*- coding: utf-8 -*-
import scrapy
import ConfigParser
import youtube_dl
import string
import json
import subprocess
import os
import time
import re
from service.database import get_database
import service.utils
from service.logger import Logger
from scrapy.exceptions import CloseSpider
import service.mail
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

logger = Logger.get_logger('youku')


class VShowYoukuSpider(scrapy.Spider):
    name = "youku"
    allowed_domains = ["youku.com"]
    # start_urls = (
    #     'http://www.i.youku.com/',
    # )
    logger = None
    callbacked = False

    def __init__(self, url, uuid, upload_url, callback, check_video_url=None, *args, **kwargs):
        super(VShowYoukuSpider, self).__init__(*args, **kwargs)
        self.start_urls.append(url)
        self.config = ConfigParser.ConfigParser()
        self.config.read("config/config.ini")
        self.uuid = uuid
        self.upload_url = upload_url
        self.callback = callback
        self.check_video_url = check_video_url
        # initialize db
        with open("config/database.cnf") as f:
            config = json.load(f)
        db_cls = get_database(config.get("database_type", None))
        self.db = db_cls(**config.get("database", {}))

    def parse(self, response):
        print response.url

        try:
            self.video_id = self._match_id(self.start_urls[0])
        except AssertionError, e:
            raise CloseSpider('link not supported')

        logger.warn('[parse]' + self.start_urls[0] + ' [uuid]' + self.uuid + ' [video_id]' + self.video_id)
        if self.check_db():
            return

        try:
            if self.you_get(response.xpath('//title/text()').extract()[0]):
                return
        except ValueError, e:
            print e

        ydl_opts = {
            'writeinfojson': True,
            'skip_download': False,
            'format': '22/best',
            'outtmpl': 'cache/' + self.uuid + '_%(id)s.%(ext)s',
            # 'ignoreerrors': True,
            'progress_hooks': [self.hooks],
            # 'noplaylist': True,
            # 'logger': MyLogger(),
        }
        print ydl_opts

        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download(self.start_urls)

    def you_get(self, title):
        dir_path = 'cache/%s/' % self.uuid
        command = ['you-get', '-n', '-o', dir_path, self.start_urls[0]]
        print command
        stdout, stderr = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE).communicate()
        print 'stdout', stdout, 'stderr', stderr
        if stderr:
            return False
        logger.info('[you-get]' + '[uuid]' + self.uuid)

        concatfile = 'cache/' + self.uuid + '.txt'
        dirs = os.listdir(dir_path)
        for idx, file in enumerate(sorted(dirs)):
            new = dir_path + str(idx) + '.mp4'
            print dir_path + file, new
            os.rename(dir_path + file, new)
            open(concatfile, 'a+').write('file ' + string.replace(new, 'cache/', '') + "\n")
        mp4file = 'cache/' + self.uuid + '.mp4'
        length = service.utils.mergeVideo(mp4file, concatfile)
        print '[merged video duration]', length
        if length == 0:
            return False
        filesize = os.path.getsize(mp4file)
        endpoint, backet, obj = service.utils.paseUploadUrl(self.upload_url)
        print endpoint, backet, obj
        uploadResult = service.utils.uploadVideo(mp4file, endpoint, backet, obj)
        print 'uploadResult:', uploadResult
        if not uploadResult:
            return False

        logger.warn('[uploadVideo]' + '[uuid]' + self.uuid)

        data = {
            "video_id": self.uuid,
            "state": 1,
            "message": u'成功',
            "length": length,
            "play_id": self.uuid,
            "size": filesize,
            "cover": '',
            "title": title
        }
        self.callbacked = service.utils.callback_result(self.callback, data=data)
        logger.info('[finished]' + str(self.callbacked) + '[uuid]' + self.uuid)

        video_data = {
            'title': title,
            'video_id': self.video_id,
            'author': self.name,
            'publish': time.strftime('%Y-%m-%d %H:%M:%S'),
            'page_url': self.start_urls[0],
            'video_length': length,
            'video_size': filesize,
            'video_url': '',
            'easub_uuid': self.uuid
        }
        self.db.save_video(video_data)
        raise CloseSpider('you-get success')

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

    def hooks(self, d):

        if d['status'] == 'finished':
            filename = d['filename']
            l = filename.split('.')
            ext = l[len(l) - 1]
            print ext
            jsonfile = string.replace(filename, ext, 'info.json')
            info = json.loads(open(jsonfile).read())
            # id = info['playlist_id']
            concatfile = 'cache/' + self.uuid + '.txt'
            open(concatfile, 'a+').write('file ' + string.replace(filename, 'cache/', '') + "\n")
            if info['playlist_index'] == info['n_entries']:
                mp4file = 'cache/' + self.uuid + '.mp4'
                length = service.utils.mergeVideo(mp4file, concatfile)
                print '[merged video duration]', length
                if length == 0:
                    raise CloseSpider('merge video failed')
                filesize = os.path.getsize(mp4file)
                endpoint, backet, obj = service.utils.paseUploadUrl(self.upload_url)
                print endpoint, backet, obj
                uploadResult = service.utils.uploadVideo(mp4file, endpoint, backet, obj)
                print 'uploadResult:', uploadResult
                if not uploadResult:
                    raise CloseSpider('upload oss failed')

                logger.warn('[uploadVideo]' + '[uuid]' + self.uuid)
                if 'thumbnail' in info:
                    cover = service.utils.get_clip_cover_url(info['thumbnail'], self.uuid)
                else:
                    cover = ''
                data = {
                    "video_id": self.uuid,
                    "state": 1,
                    "message": u'成功',
                    "length": length,
                    "play_id": self.uuid,
                    "size": filesize,
                    "cover": cover,
                    "title": info['fulltitle']
                }
                self.callbacked = service.utils.callback_result(self.callback, data=data)
                logger.info('[finished]' + str(self.callbacked) + '[uuid]' + self.uuid)

                video_data = {
                    'title': info['fulltitle'],
                    'video_id': self.video_id,
                    'author': info['extractor'],
                    'publish': time.strftime('%Y-%m-%d %H:%M:%S'),
                    'page_url': self.start_urls[0],
                    'video_length': length,
                    'video_size': filesize,
                    'video_url': '',
                    'easub_uuid': self.uuid,
                    'cover': cover
                }
                self.db.save_video(video_data)
                raise CloseSpider('finished')

        if d['status'] == 'error':
            print 'error', d['filename']
            raise CloseSpider('download failed')

    def _match_id(self, url):
        # tudou = r'https?://(?:www\.)?tudou\.com/(?:(?:programs|wlplay)/view|(?:listplay|albumplay)/[\w-]{11})/(?P<id>[\w-]{11})'
        # tudou_album = r'https?://(?:www\.)?tudou\.com/album(?:cover|play)/(?P<id>[\w-]{11})'
        youku = r'''(?x)
                    (?:
                        http://(?:v|player)\.youku\.com/(?:v_show/id_|player\.php/sid/)|
                        youku:)
                    (?P<id>[A-Za-z0-9]+)(?:\.html|/v\.swf|)
                '''
        # m = re.compile(tudou).match(url) or re.compile(youku).match(url) or re.compile(tudou_album).match(url)
        m = re.compile(youku).match(url)
        assert m
        return m.group('id')

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
