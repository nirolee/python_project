# -*- coding: utf-8 -*-
import scrapy
import re


class JobboleSpider(scrapy.Spider):
    name = 'jobbole'
    allowed_domains = ['blog.jobbole.com']
    start_urls = ['http://blog.jobbole.com/112170']

    def parse(self, response):
        # title = response.xpath("//div[@class='entry-header']/h1/text()").extract()[0]
        # time = response.xpath("//p[@class='entry-meta-hide-on-mobile']/text()").extract()[0].strip().replace("·","")
        # praise_nums = response.xpath("//span[contains(@class,'vote-post-up')]/h10/text()").extract()[0]
        title = response.css(".entry-header h1::text").extract()[0]
        time = response.css(".entry-meta-hide-on-mobile::text").extract()[0].strip().replace("·", "")
        praise_nums = response.css(".vote-post-up h10::text").extract()[0]
        fav_nums = response.css(".bookmark-btn::text").extract()[0]
        match_nums = re.match(".*(\d+).*", fav_nums)
        if(match_nums):
            match_nums.group(1)
        content = response.css(".category-it-tech p::text").extract()
        for i, p in enumerate(content):
            print(i, p)
    pass
