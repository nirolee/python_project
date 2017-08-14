# -*- coding: utf-8 -*-
from __future__ import absolute_import
import Queue

import MySQLdb as mysql
import MySQLdb.cursors
from service.logger import Logger
from service.database import Database
import string
import re


class SQLDatabase(Database):

    type = "mysql"

    def __init__(self, **options):
        super(SQLDatabase, self).__init__()
        self.cursor = cursor_factory(**options)
        self._options = options
        self.logger = Logger.get_logger(log_name=self.type)

    def after_fork(self):
        # Clear the cursor cache, we don't want any stale connections from
        # the previous process.
        Cursor.clear_cache()

    def search_video(self, video_id, page_url, table='youtube'):
        m = re.compile(r"(?P<site>\w+)\.(com|cn|tv)").search(page_url)
        site = ''
        if m:
            site = m.group('site')
        with self.cursor() as cur:
            sql = "SELECT easub_uuid, title, video_length, video_size, cover FROM %s WHERE video_id = \"%s\" AND site = \"%s\"" % (table, video_id, site)
            cur.execute(sql)
            result = cur.fetchone()
            self.logger.info('[search_video]' + sql)
            if result:
                return result
            return None

    def save_video(self, video, table='youtube'):
        if 'cover' not in video:
            video['cover'] = ''
        if '"' in video['title']:
            video['title'] = string.replace(video['title'], '"', '\"')

        with self.cursor() as cur:
            # SQL 查询语句
            sql = "SELECT video_id FROM %s WHERE video_id = \"%s\"" % (table, video['video_id'])
            # 执行SQL语句
            cur.execute(sql)
            # 获取所有记录列表
            result = cur.fetchone()
            if result:
                sql = "UPDATE %s SET video_id=\"%s\", title=\"%s\", author=\"%s\", page_url=\"%s\"\
                    , publish=\"%s\", video_length=\"%s\", video_size=\"%s\", easub_uuid=\"%s\", video_url=\"%s\", cover=\"%s\" WHERE video_id=\"%s\"" % (table, video['video_id']\
                    , video['title'], video['author'], video['page_url'], video['publish']\
                    , video['video_length'], video['video_size'], video['easub_uuid'], video['video_url'], video['cover'], video['video_id'])
            else:
                m = re.compile(r"(?P<site>\w+)\.(com|cn|tv)").search(video['page_url'])
                site = ''
                if m:
                    site = m.group('site')
                sql = "INSERT INTO %s (video_id, title, author, page_url\
                    , publish, video_length, video_size, easub_uuid, video_url, cover, site) values (\"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\")" \
                    % (table, video['video_id'], video['title'], video['author']\
                    , video['page_url'], video['publish'], video['video_length'], video['video_size'], video['easub_uuid'], video['video_url'], video['cover'], site)
            ret = cur.execute(sql)
            msg = '[save_video:%s]' % video['easub_uuid'] + sql
            print msg
            self.logger.warn(msg)
            return ret

    def delete_video(self, uuid, table='youtube'):
         with self.cursor() as cur:
            sql = "DELETE FROM %s WHERE easub_uuid = \"%s\"" % (table, uuid)
            cur.execute(sql)
            self.logger.info('[delete_video]' + sql)

    def set_cookies(self, site, cookies):
        with self.cursor() as cur:
            sql = "SELECT cookies FROM cookies WHERE site = '%s'" % (site, )
            # 执行SQL语句
            cur.execute(sql)
            result = cur.fetchone()
            if result:
                sql = "UPDATE cookies SET cookies='%s' WHERE site='%s'" % (cookies, site)
            else:
                sql = "INSERT INTO cookies (site, cookies) values ('%s', '%s')" % (site, cookies)
            print sql
            ret = cur.execute(sql)
            return ret

    def get_cookies(self, site):
        with self.cursor() as cur:
            sql = "SELECT cookies FROM cookies WHERE site = '%s'" % (site)
            cur.execute(sql)
            result = cur.fetchone()
            print sql
            if result:
                return result[0]
            return None

    def __getstate__(self):
        return (self._options,)

    def __setstate__(self, state):
        self._options, = state
        self.cursor = cursor_factory(**self._options)


def cursor_factory(**factory_options):
    def cursor(**options):
        options.update(factory_options)
        return Cursor(**options)
    return cursor


class Cursor(object):
    """
    Establishes a connection to the database and returns an open cursor.


    ```python
    # Use as context manager
    with Cursor() as cur:
        cur.execute(query)
    ```
    """
    _cache = Queue.Queue(maxsize=5)

    def __init__(self, cursor_type=mysql.cursors.Cursor, **options):
        super(Cursor, self).__init__()

        try:
            conn = self._cache.get_nowait()
        except Queue.Empty:
            conn = mysql.connect(**options)
        else:
            # Ping the connection before using it from the cache.
            conn.ping(True)

        self.conn = conn
        self.conn.autocommit(False)
        self.cursor_type = cursor_type

    @classmethod
    def clear_cache(cls):
        cls._cache = Queue.Queue(maxsize=5)

    def __enter__(self):
        self.cursor = self.conn.cursor(self.cursor_type)
        return self.cursor

    def __exit__(self, extype, exvalue, traceback):
        # if we had a MySQL related error we try to rollback the cursor.
        if extype is mysql.MySQLError:
            self.cursor.rollback()

        self.cursor.close()
        self.conn.commit()

        # Put it back on the queue
        try:
            self._cache.put_nowait(self.conn)
        except Queue.Full:
            self.conn.close()
