# -*- coding: utf-8 -*-
from scrapy import Request
from scrapy_redis.spiders import RedisSpider
from urllib import parse

class MySpider(RedisSpider):
    name = 'jobbole'
    allowed_domains = ["blog.jobbole.com", "www.jobbole.com"]
    start_urls = ['http://blog.jobbole.com/all-posts']
    redis_key = 'jobbole:start_urls'

    def parse(self, response):
        post_nodes = response.css("#archive .floated-thumb .post-thumb a")
        for post_node in post_nodes:
            post_url = post_node.css("::attr(href)").extract_first("")
            img_url = post_node.css("img::attr(src)").extract_first("")
            yield Request(url=parse.urljoin(response.url, post_url), meta={"front_img_url": img_url},
                          callback=self.parse_detail)
        # do stuff

    def parse_detail(self, respnonse):

        pass