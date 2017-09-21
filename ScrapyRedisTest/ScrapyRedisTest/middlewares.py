# -*- coding: utf-8 -*-

# Define here the models for your spider middleware
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/spider-middleware.html

from scrapy import signals
import redis
import base64


class ScrapyredistestSpiderMiddleware(object):
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, dict or Item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Response, dict
        # or Item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)


class ProxyMiddleware(object):
    def __init__(self, settings):
        self.queue = 'Proxy:queue'
        # 初始化代理列表
        # self.r = redis.Redis(host=settings.get('REDIS_HOST'),port=settings.get('REDIS_PORT'),db=1,password=settings.get('REDIS_PARAMS')['password'])
        self.r = redis.Redis(host=settings.get('REDIS_HOST'), port=settings.get('REDIS_PORT'), db=1)
    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler.settings)

    def process_request(self, request, spider):
        proxy={}
        source, data = self.r.blpop(self.queue)
        proxy['ip_port']=data
        proxy['user_pass']=None

        if proxy['user_pass'] is not None:
            #request.meta['proxy'] = "http://YOUR_PROXY_IP:PORT"
            request.meta['proxy'] = "http://%s" % proxy['ip_port']
            #proxy_user_pass = "USERNAME:PASSWORD"
            encoded_user_pass = base64.encodestring(proxy['user_pass'])
            request.headers['Proxy-Authorization'] = 'Basic ' + encoded_user_pass
            print("********ProxyMiddleware have pass*****" + proxy['ip_port'])
        else:
            #ProxyMiddleware no pass
            print(request.url, proxy['ip_port'])
            request.meta['proxy'] = "http://%s" % proxy['ip_port']

    def process_response(self, request, response, spider):
        """
        检查response.status, 根据status是否在允许的状态码中决定是否切换到下一个proxy, 或者禁用proxy
        """
        print("-------%s %s %s------" % (request.meta["proxy"], response.status, request.url))
        # status不是正常的200而且不在spider声明的正常爬取过程中可能出现的
        # status列表中, 则认为代理无效, 切换代理
        if response.status == 200:
            print('rpush',request.meta["proxy"])
            self.r.rpush(self.queue, request.meta["proxy"].replace('http://',''))
        return response

    def process_exception(self, request, exception, spider):
        """
        处理由于使用代理导致的连接异常
        """
        proxy={}
        source, data = self.r.blpop(self.queue)
        proxy['ip_port']=data
        proxy['user_pass']=None

        request.meta['proxy'] = "http://%s" % proxy['ip_port']
        new_request = request.copy()
        new_request.dont_filter = True
        return new_request
