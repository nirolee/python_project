# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
#codecs 这个包文件的编码不错
import codecs
import json
import MySQLdb
from scrapy.exporters import JsonItemExporter
from scrapy.pipelines.images import ImagesPipeline

class ArticlespiderPipeline(object):
    def process_item(self, item, spider):
        return item

class JsonWithEncodingPipeline(object):
    def __init__(self):
        self.file = codecs.open('article.json', 'w', encoding='utf-8') #写
    def process_item(self, item, spider):
        lines = json.dumps(dict(item),ensure_ascii=False) #ensure_ascii要改为False,要不然写入中文会出错
        self.file.write(lines)
        return lines
    def close_spider(self,spider):
        self.file.close()
class JsonExportPipeline(object):
    #调用scrapy提供的json exporter 导出json文件
    def __init__(self):
        self.file = open('articleexport.json','wb')
        self.exporter = JsonItemExporter(self.file,encoding="utf-8",ensure_ascii=False)
        self.exporter.start_exporting()
    def close_spider(self,spider):
        self.exporter.finish_exporting()
        self.file.close()
    def process_item(self,item,spider):
        self.exporter.export_item(item)
        return item
class MysqlPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.connect('127.0.0.1', 'root', 'root', 'scrapy', charset="utf8", use_unicode=True )
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        insert_sql = """
          insert into jobbole(title, url, praise_nums, fav_nums, content, create_time, front_img_url)
          VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        self.cursor.execute(insert_sql, (item["title"], item["url"], item["praise_nums"], item["fav_nums"], item["content"], item["create_time"], item["front_img_url"]) )
        self.conn.commit()

class ArticleImagePipeline(ImagesPipeline):
    def item_completed(self, results, item, info):
        for ok, value in results:
            flont_file_path = value['path']
            item['front_img_path'] = flont_file_path
        return item