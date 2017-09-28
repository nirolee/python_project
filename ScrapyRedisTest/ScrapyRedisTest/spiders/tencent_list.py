# -*- coding: utf-8 -*-

from scrapy.http import Request
from urllib import parse
import re
from redis import Redis
from scrapy_redis.spiders import RedisSpider
from ScrapyRedisTest.items import TencentItem

class TencentSpider(RedisSpider):
    name = 'tencent_list'
    allowed_domains = ['hr.tencent.com']
    start_urls = ['http://hr.tencent.com/position.php']
    root_url = 'http://hr.tencent.com'
    redis_key = 'tencent:start_urls'
    redis = Redis(host='139.199.224.13', password='88322429')

    def parse(self, response):
        urls = response.css(".l.square a::attr(href)").extract()
        for url in urls:
            self.redis.lpush('tencent:start_urls', parse.urljoin(self.root_url, url))
        # for each_url in url:
        #     yield Request(url=parse.urljoin(self.root_url, each_url), callback=self.parse_detail)
        next_url = response.css("#next ::attr(href)").extract_first()
        if next_url:
            yield Request(url=parse.urljoin(self.root_url, next_url), callback=self.parse)

