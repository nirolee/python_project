
# -*- coding: utf-8 -*-
import scrapy
import re

class JobboleSpider(scrapy.Spider):
    name = 'jobbole'
    allowed_domains = ['blog.jobole.com']
    start_urls = ['http://blog.jobole.com/112127']

    def parse(self, response):
        title = response.css(".entry-header h1::text").extract()[0]
        time = response.css(".entry-meta-hide-on-mobile::text").extract()[0].strip().replace("·","")
        praise_nums = response.css(".vote-post-up h10::text").extract()[0]
        fav_nums = response.css(".bookmark-btn::text").extract()[0]
        match_nums = re.match(".*(\d+).*",fav_nums)
        if(match_nums):
            match_nums.group(1)

        pass
