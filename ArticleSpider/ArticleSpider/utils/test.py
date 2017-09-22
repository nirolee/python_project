# -*- coding: utf-8 -*-
import requests
from requests.exceptions import RequestException
import json
def the_url():
    url = 'http://comment.mobilem.360.cn/comment/getComments?callback=jQuery17209056727722758744_1502991196139&baike=%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96+Android_com.sankuai.meituan.takeoutnew&start='+str(0)
    use_agent= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
    Headers = {'User-Agent': use_agent}
    try:
        response = requests.get(url,headers=Headers)
        if response.status_code==200:
            return response.text.json.loads
        return None
    except RequestException:
        print('请求出错')
        return None



def main():
    html=the_url()
    print(html)


if __name__ == '__main__':
    main()