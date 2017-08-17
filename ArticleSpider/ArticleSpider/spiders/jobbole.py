# -*- coding: utf-8 -*-
import scrapy
import re
from scrapy.http import Request
from urllib import parse
from ArticleSpider.items import JobBoleArticleItem

class JobboleSpider(scrapy.Spider):
    name = 'jobbole'
    allowed_domains = ['blog.jobbole.com']
    start_urls = ['http://blog.jobbole.com/category/php-programmer/']

    def parse(self, response):
        post_nodes = response.css("#archive .floated-thumb .post-thumb a")
        #extract()之后变成一个数组，就无法二次操作
        # post_urls = response.css("#archive .floated-thumb .post-thumb").extract()
        for post_node in post_nodes:
            post_url = post_node.css("::attr(href)").extract_first("")
            img_url = post_node.css("img::attr(src)").extract_first("")
            yield Request(url=parse.urljoin(response.url, post_url), meta={"front_img_url": img_url}, callback=self.parse_detail)
        next_url = response.css(".next.page-numbers::attr(href)").extract_first()
        if next_url:
            yield Request(url=parse.urljoin(response.url, next_url), callback=self.parse)

    def parse_detail(self, response):
        article_item = JobBoleArticleItem()
        # title = response.xpath("//div[@class='entry-header']/h1/text()").extract()[0]
        # time = response.xpath("//p[@class='entry-meta-hide-on-mobile']/text()").extract()[0].strip().replace("·","")
        # praise_nums = response.xpath("//span[contains(@class,'vote-post-up')]/h10/text()").extract()[0]
        title = response.css(".entry-header h1::text").extract()[0]
        front_img_url = response.meta.get("front_img_url","")
        url = response.url
        time = response.css(".entry-meta-hide-on-mobile::text").extract()[0].strip().replace("·", "")
        praise_nums = response.css(".vote-post-up h10::text").extract_first("0")
        fav_nums = response.css(".bookmark-btn::text").extract_first("0")
        match_nums = re.match(".*(\d+).*", fav_nums)
        if(match_nums):
             fav_nums = match_nums.group(1)
        else:
            fav_nums = 0
        content = response.css("div.entry").extract()
        # for i, p in enumerate(content):
        #     print(i, p)
        article_item["title"] = title
        article_item["front_img_url"] = [front_img_url]
        article_item["praise_nums"] = praise_nums
        article_item["fav_nums"] = fav_nums
        article_item["time"] = time
        article_item["url"] = url
        article_item["content"] = content
        yield article_item

