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


class ZhihuQuestionItem(scrapy.Item):
    zhihu_id = scrapy.Field()
    topics = scrapy.Field()
    url = scrapy.Field()
    title = scrapy.Field()
    content = scrapy.Field()
    create_time = scrapy.Field()
    update_time = scrapy.Field()
    answer_num = scrapy.Field()
    comments_num = scrapy.Field()
    watch_user_num = scrapy.Field()
    click_num = scrapy.Field()
    crawl_time = scrapy.Field()
    crawl_update_time = scrapy.Field()

    def get_insert_sql(self):
        insert_sql = """
                    INSERT INTO
                      zhihu_question (zhihu_id, topics, url, title, content, answer_num, watch_user_num)
                    VALUES
                      (%s, %s, %s, %s, %s, %s, %s )
                    ON DUPLICATE KEY UPDATE
                      content=VALUES(content), answer_num=VALUES(answer_num),
                      comments_num=VALUES(comments_num), watch_user_num=VALUES(watch_user_num)
                """

        zhihu_id = self["zhihu_id"][0]
        topics = ",".join(self["topics"])
        url = self["url"][0]
        title = "".join(self["title"])
        content = "".join(self["content"])
        answer_num = get_num_value("".join(self["answer_num"]))
        watch_user_num = get_num_value(self["watch_user_num"][0])

        params = (zhihu_id, topics, url, title, content, answer_num, watch_user_num)

        return insert_sql, params

class ZhihuAnswerItem(scrapy.Item):
    zhihu_id = scrapy.Field()
    url = scrapy.Field()
    question_id = scrapy.Field()
    author_id = scrapy.Field()
    content = scrapy.Field()
    praise_num = scrapy.Field()
    comments_num = scrapy.Field()
    create_time = scrapy.Field()
    update_time = scrapy.Field()
    crawl_time = scrapy.Field()
    crawl_update_time = scrapy.Field()

    def get_insert_sql(self):
        insert_sql = """
                    INSERT INTO
                      zhihu_answer (zhihu_id, url, question_id, author_id, content, praise_num, comments_num)
                    VALUES
                      (%s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                      content=VALUES(content), comments_num=VALUES(comments_num), praise_num=VALUES(praise_num)
                """

        params = (
            self["zhihu_id"], self["url"], self["question_id"], self["author_id"],
            self["content"], self["praise_num"], self["comments_num"]
        )

        return insert_sql, params


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