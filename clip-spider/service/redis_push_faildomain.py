import redis
import time

pool = redis.Redis('127.0.0.1',port=6379)


def push_faildomain(domain, reason):
    if 'download video failed' in reason:
        pool.lpush('domain',domain)
        print 'push %s' % domain
    else:
        return
    return



if __name__ == '__main__':
    while True:
        push_faildomain("bilibili", "123 download video failed")
        push_faildomain("qq", "456 download video failed")
        push_faildomain("bilibili", "789 video not found")
        push_faildomain("iqiyi.com", "4566 download video failed")
        time.sleep(2)

