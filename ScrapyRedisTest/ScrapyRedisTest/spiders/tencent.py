# -*- coding: utf-8 -*-

from scrapy.http import Request
from urllib import parse
import re
from scrapy_redis.spiders import RedisSpider
from ScrapyRedisTest.items import TencentItem

class TencentSpider(RedisSpider):
    name = 'tencent'
    allowed_domains = ['hr.tencent.com']
    start_urls = []
    root_url = 'http://hr.tencent.com'
    redis_key = 'tencent:start_urls'

    def parse(self, response):
        tencent_item = TencentItem()
        tencent_item['title'] = response.css("#sharetitle::text").extract_first()
        tencent_item['location'] = response.css(".c.bottomline td::text").extract()[0]
        tencent_item['work_type'] = response.css(".c.bottomline td::text").extract()[1]
        tencent_item['num'] = response.css(".c.bottomline td::text").extract()[2]
        duty = response.css(".squareli").extract()[0]
        tencent_item['duty'] = re.sub('<.*?>', '', duty)
        request = response.css(".squareli").extract()[1]
        tencent_item['request'] = re.sub('<.*?>', '', request)
        yield tencent_item