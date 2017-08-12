# -*- coding: utf-8 -*-
import scrapy


class JobboleSpider(scrapy.Spider):
    name = 'jobbole'
    allowed_domains = ['blog.jobole.com']
    start_urls = ['http://blog.jobole.com/']

    def parse(self, response):
        pass
