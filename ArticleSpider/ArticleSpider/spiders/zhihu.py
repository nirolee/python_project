# -*- coding: utf-8 -*-
import scrapy
import re
import json
import time
import os
from scrapy.http import Request, FormRequest
from PIL import Image
from zheye import zheye

class ZhihuSpider(scrapy.Spider):
    name = 'zhihu'
    allowed_domains = ['www.zhihu.com']
    start_urls = ['http://www.zhihu.com/']
    header = {
        "HOST": "www.zhihu.com",
        "Referer": "https://www.zhihu.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
    }
    phone = '13632499177'
    password = '88322429'

    # 这是入口！
    def start_requests(self):#代替start_urls
        return [Request(
            url='https://www.zhihu.com/#signin',
            headers=self.header,
            meta={'cookiejar':1},
            callback=self.login
        )]
    pass

    def parse(self, response):
        print(response.text)
        pass

    def login(self, response):
        response_text = response.text
        match_obj = re.match('.*name="_xsrf" value="(.*?)"', response_text, re.S)
        if match_obj:
            xsrf = match_obj.group(1)
        t = str(int(time.time() * 1000))
        captcha_url = 'https://www.zhihu.com/captcha.gif?r={0}&type=login'.format(t)
        yield scrapy.Request(url=captcha_url,meta={'xsrf':xsrf}, headers=self.header, callback=self.login_after_captcha)
        # pattern_captcha_timestmp = r'<script type="text/json" class="json-inline" data-name="ga_vars">{"user_created":0,"now":(.*?),'  # 验证码对应的时间戳
        # ss = response.text
        # _captcha_timestmp = re.findall(pattern_captcha_timestmp, ss, re.S | re.I)  # 不分换行符，不分大小写
        # t = _captcha_timestmp[0]
        # 用者也识别
        # z = zheye()
        # positions = z.Recognize('captcha.jpg')  # 默认倒立文字的y坐标在前，x坐标在后
        # # 知乎网要求的倒立文字坐标是x轴在前，y轴在后，所以我们需要定义一个列表来改变默认的，倒立文字坐标位置
        # pos_arr = []
        # if len(positions) == 2:
        #     if positions[0][1] > positions[1][1]:  # 判断哪个数字在右边 第一个0代表坐标数，第二个代表Y轴
        #         pos_arr.append([positions[1][1], positions[1][0]])
        #         pos_arr.append([positions[0][1], positions[0][0]])
        #     else:
        #         pos_arr.append([positions[0][1], positions[0][0]])
        #         pos_arr.append([positions[1][1], positions[1][0]])
        # else:
        #     pos_arr.append([positions[0][1], positions[0][0]])
        # print('处理后的验证码坐标', pos_arr)
        # if len(pos_arr) == 2:
        #     data = {
        #         '_xsrf': response.meta['xsrf'],
        #         'phone_num':self.phone,
        #         'password':self.password,
        #         'captcha':'{"img_size":"[200,44]", "input_points": [[%.2f, %f],[%.2f,%f]]} ' % (
        #     positions[0][0] / 2, positions[0][1] / 2, positions[1][0] / 2, positions[1][1] / 2),
        #         'captcha_type': 'cn'
        #     }
        # else:
        #     data = {
        #         '_xsrf': response.meta['xsrf'],
        #         'phone_num':self.phone,
        #         'password':self.password,
        #         'captcha':'{"img_size": "[200,44]", "input_points": [[ % .2f, % f]]}' % (
        #     positions[0][0] / 2, positions[0][1] / 2),
        #         'captcha_type': 'cn'
        #     }
    def login_after_captcha(self,response):
        with open('captcha.jpg', 'wb') as f:
            f.write(response.body)
            f.close()
        try:
            im = Image.open('captcha.jpg')
            im.show()
            im.close()
        except:
            print(u'请到 %s 目录找到captcha.jpg 手动输入' % os.path.abspath('captcha.jpg'))
        captcha = input("please input the captcha\n>")

        postdata = {
            '_xsrf': response.meta['xsrf'],
            'phone_num': self.phone,
            'password':self.password,
            'captcha': captcha
        }
        return [scrapy.FormRequest(
            url='https://www.zhihu.com/login/phone_num',
            headers=self.header,
            formdata=postdata,
            callback=self.check_login
        )]
    def check_login(self,response):
        text_json = json.loads(response.text)
        if "msg" in text_json and text_json["msg"] == "登录成功":
            for url in self.start_urls:
                yield scrapy.Request(url, dont_filter=True,headers=self.header)
        else:
            for url in self.start_urls:
                yield scrapy.Request(url,headers=self.header, callback=self.login)
        result = response.body.decode('utf-8')
        Cookie2 = response.request.headers.getlist('Cookie')
        print('登录时携带请求的Cookies：', Cookie2)
        print('登录结果响应:',result)
        yield Request(
            url="https://www.zhihu.com/people/li-guo-qi-80/activities",
            headers=self.header,
            meta={'cookiejar':True},
            callback=self.next2
        )
    def next2(self,response):
        Cookie3 = response.request.headers.getlist('Cookie')
        print('查看需要登录才可以访问的页面携带Cookies：',Cookie3)
        liguoqi = response.xpath('/html/head/title/text()').extract()
        print(liguoqi)
