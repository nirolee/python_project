# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ArticlespiderItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass
class JobBoleArticleItem(scrapy.Item):
    title = scrapy.Field()
    front_img_url = scrapy.Field()
    front_img_path = scrapy.Field()
    url = scrapy.Field()
    time = scrapy.Field()
    praise_nums = scrapy.Field()
    fav_nums = scrapy.Field()
    content = scrapy.Field()
    pass