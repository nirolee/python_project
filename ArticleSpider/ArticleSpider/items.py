# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
import datetime
import re

from scrapy.loader.processors import MapCompose,TakeFirst
from scrapy.loader import ItemLoader
class ArticlespiderItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass

def date_convert(value):
    try:
        create_time = datetime.datetime.strftime(value, "%Y%m%d").date()
    except Exception as e:
        create_time = datetime.datetime.now().date()
    return create_time


def get_num_value(value):
    match_nums = re.match(".*(\d+).*", value)
    if (match_nums):
        nums = match_nums.group(1)
    else:
        nums = 0
    return nums


class ArticleItemLoader(ItemLoader):
    default_output_processor = TakeFirst()


class JobBoleArticleItem(scrapy.Item):
    title = scrapy.Field()
    # front_img_path = scrapy.Field()
    url = scrapy.Field()
    praise_nums = scrapy.Field(
        input_processor=MapCompose(get_num_value),
    )
    fav_nums = scrapy.Field(
        input_processor=MapCompose(get_num_value),
    )
    content = scrapy.Field()
    create_time = scrapy.Field(
        input_processor=MapCompose(date_convert),
    )
    front_img_url = scrapy.Field()