# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
import re
import datetime
from scrapy.loader.processors import MapCompose,TakeFirst


class ScrapyredistestItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


def get_num_value(value):
    match_nums = re.match(".*(\d+).*", value)
    if (match_nums):
        nums = match_nums.group(1)
    else:
        nums = 0
    return nums


def date_convert(value):
    try:
        create_time = datetime.datetime.strftime(value, "%Y%m%d").date()
    except Exception as e:
        create_time = datetime.datetime.now().date()
    return create_time


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

class TencentItem(scrapy.Item):
    title = scrapy.Field()
    work_type = scrapy.Field()
    num = scrapy.Field()
    location = scrapy.Field()
    duty = scrapy.Field()
    request = scrapy.Field()

    def get_insert_sql(self):
        insert_sql = """
        INSERT  INTO tencentHR (title,work_type,num,location,duty,request) VALUES (%s,%s,%s,%s,%s,%s)
        ON DUPLICATE KEY UPDATE
        title=VALUES(title),work_type=VALUES(work_type),num=VALUES(num),location=VALUES(location),
        duty=VALUES(duty),request=VALUES (request)
    """
        params = (
            self["title"], self["work_type"], self["num"], self["location"],self["duty"], self["request"]
        )
        return insert_sql, params