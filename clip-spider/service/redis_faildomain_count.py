# -*- coding: utf-8 -*-
import redis
from collections import Counter
import time

pool = redis.Redis('127.0.0.1',port=6379)

def faildomain_count():
    dict = []
    domain =  pool.lrange('domain', 0, 10000)
    print domain
    # 计算这段时间内失败域的数量，超过规定数目的写入dict并报错
    for count in Counter(domain).items():
        if count[1] > 3:      ####!!!!!
            dict.append(count[0])
    if dict:
        print "发送短信，%s" % dict
    else:
        pass
    print "清除domain字段"
    pool.delete('domain')
    pass


if __name__ == '__main__':
    faildomain_count()









