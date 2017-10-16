# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
import re
import datetime
from  scrapy.loader import ItemLoader
from scrapy.loader.processors import MapCompose, TakeFirst, Join
from ScrapyRedisTest.models.es_types import ArticleType
from elasticsearch_dsl.connections import connections

es = connections.create_connection(ArticleType._doc_type.using)

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

def remove_comment_tags(value):
    # 去掉tag中提取的评论
    if "评论" in value:
        return ""
    else:
        return value


class ArticleItemLoader(ItemLoader):
    # 自定义itemloader
    default_output_processor = TakeFirst()


def gen_suggests(index, info_tuple):
    used_words = set()
    suggests = []
    for text, weight in info_tuple:
        if text:     # 调用es的analyze分词器
            words = es.indices.analyze(index=index, analyzer="ik_max_word", params={'filter': ["lowercase"]}, body=text)
            analyzed_words = set([r["token"] for r in words["tokens"] if len(r["token"])>1])
            new_words = analyzed_words - used_words
        else:
            new_words = set()

        if new_words:
            suggests.append({"input": list(new_words), "weight": weight})

    return suggests


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
    tags = scrapy.Field(
        input_processor=MapCompose(remove_comment_tags),
        output_processor=Join(",")
    )

    def get_insert_sql(self):
        insert_sql = """
                    INSERT INTO jobbole (title, url,  create_time, content, fav_nums, praise_nums)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE fav_nums=VALUES(fav_nums)
                """
        params = (
            self["title"], self['praise_nums'], self['url'], self['create_time'], self['content'],
            self['praise_nums']
        )
        return insert_sql, params


    def save_to_es(self):
        article = ArticleType()
        article.title = self['title']
        article.url = self['url']
        article.content = self['content']
        article.create_time = self['create_time']
        article.praise_nums = self['praise_nums']
        article.fav_nums = self['fav_nums']
        article.tags = self['tags']
        article.suggest = gen_suggests(ArticleType._doc_type.index, ((article.title, 10), (article.tags, 7)))
        article.save()
        return

class TencentItem(scrapy.Item):
    title = scrapy.Field()
    work_type = scrapy.Field()
    num = scrapy.Field()
    location = scrapy.Field()
    duty = scrapy.Field()
    request = scrapy.Field()
    def get_insert_sql(self):
        insert_sql = """
        INSERT  INTO tencentHR (title,work_type,num,location,duty,request,from_client) VALUES (%s,%s,%s,%s,%s,%s,%s)
        ON DUPLICATE KEY UPDATE
        title=VALUES(title),work_type=VALUES(work_type),num=VALUES(num),location=VALUES(location),
        duty=VALUES(duty),request=VALUES (request),from_client=VALUES (from_client)
    """
        params = (
            self["title"], self["work_type"], self["num"], self["location"],self["duty"], self["request"], 'local'
        )
        return insert_sql, params