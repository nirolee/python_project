# -*- coding: utf-8 -*-
# from __future__ import absolute_import
import abc


class Database(object):
    __metaclass__ = abc.ABCMeta
    # Name of your Database subclass, this is used in configuration
    # to refer to your class
    type = None

    def __init__(self):
        super(Database, self).__init__()
        print 'Database init'

    def before_fork(self):
        """
        Called before the database instance is given to the new process
        """
        pass

    def after_fork(self):
        """
        Called after the database instance has been given to the new process

        This will be called in the new process.
        """
        pass

    @abc.abstractmethod
    def search_video(self, video_id, page_url, table='youtube'):
        """
        :param video_id:
        :param page_url:
        :param table:
        :return:
        """
        pass

    @abc.abstractmethod
    def save_video(self, video, table='youtube'):
        """
        :param video: dict
        :param table:
        :return:
        """
        pass

    @abc.abstractmethod
    def delete_video(self, uuid, table='youtube'):
        """

        :param uuid:
        :param table:
        :return:
        """
        pass

    @abc.abstractmethod
    def set_cookies(self, site, cookies):
        """
        :param site
        :param cookies:
        :return:
        """
        pass

    @abc.abstractmethod
    def get_cookies(self, site):
        """
        :param site:
        :return:
        """
        pass

def get_database(database_type=None):
    # Default to using the mysql database
    database_type = database_type or "mysql"
    # Lower all the input.
    database_type = database_type.lower()

    for db_cls in Database.__subclasses__():
        if db_cls.type == database_type:
            return db_cls

    raise TypeError("Unsupported database type supplied.")


import service.database_sql
