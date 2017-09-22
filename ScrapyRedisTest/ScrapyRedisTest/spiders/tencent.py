# -*- coding: utf-8 -*-

from scrapy.http import Request
from urllib import parse
import re
from scrapy_redis.spiders import RedisCrawlSpider
from ScrapyRedisTest.items import TencentItem

class TencentSpider(RedisCrawlSpider):
    name = 'tencent'
    allowed_domains = ['hr.tencent.com']
    start_urls = ['http://hr.tencent.com/position.php']
    root_url = 'http://hr.tencent.com'
    redis_key = 'tencent:start_urls'

    def parse(self, response):
        url = response.css(".l.square a::attr(href)").extract()
        for each_url in url:
            yield Request(url=parse.urljoin(self.root_url, each_url), callback=self.parse_detail)
        next_url = response.css("#next ::attr(href)").extract_first()
        if next_url:
            yield Request(url=parse.urljoin(self.root_url, next_url), callback=self.parse)

    def parse_detail(self, response):
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