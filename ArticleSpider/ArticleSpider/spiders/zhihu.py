# -*- coding: utf-8 -*-
import scrapy
import re
import json
import time
import os
from urllib import parse
from scrapy.http.cookies import CookieJar
from scrapy.http import Request, FormRequest
from PIL import Image
from scrapy.loader import ItemLoader
from ArticleSpider.items import ZhihuAnswerItem
from zheye import zheye

class ZhihuSpider(scrapy.Spider):
    name = 'zhihu'
    allowed_domains = ['www.zhihu.com']
    start_urls = ['http://www.zhihu.com/']
    start_answer_urls = '''https://www.zhihu.com/api/v4/questions/{0}/answers?include=data%5B*%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B*%5D.mark_infos%5B*%5D.url%3Bdata%5B*%5D.author.follower_count%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset={1}&limit={2}&sort_by=default'''
    header = {
        "HOST": "www.zhihu.com",
        "Referer": "https://www.zhihu.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
    }
    phone = '13632499177'
    password = '88322429'
    custom_settings = {
        "COOKIES_ENABLED": True  # 覆盖配置文件中的配置
    }
    cookies = {
        'aliyungf_tc': 'AQAAAOt5aXB3twEAcg8N2vIGBIw+5/Od',
        'q_c1': '6992c6bdb66442acb642f022f201254c|1503478241000|1503478241000',
        '_xsrf': 'c5fa0b67dec96f01675f31d010afc0d7',
        'r_cap_id': '"ODI2ZmZhNWM5ODlhNGYxZThmZWY0YjFiNDhlNjQwM2U=|1503478241|db674365d384d42fd153f1418d4ef0497f89985d"',
        'cap_id': '"OWQ5NDUwYjU3YjZiNGM3NWE4NjVjM2M1MmYxY2U3YWE=|1503478241|ce496651f465e68e09729da87ad52d38da91e736"',
        'd_c0': '"AGACZwKmQwyPTlyEJ5Fnsm52R4Nk1GpCHWE=|1503478242"',
        '_zap': '553b75ca-858c-4528-ac52-e4169168a505',
        'l_n_c': '1',
        'z_c0': 'Mi4xT1V3OEFBQUFBQUFBWUFKbkFxWkREQmNBQUFCaEFsVk43YzdFV1FBY0xydTNjMWlvRnQtZmVyMGtldFJnRnpuQkN3|1503478253|504deb97015bdaf336bbef0a6b1d29721d2d5de3',
        '__utmt': '1',
        '__utma': '51854390.14300998.1491362939.1491362939.1491372580.2',
        '__utmb': '51854390.2.10.1491372580',
        '__utmc': '51854390',
        '__utmz': '51854390.1491372580.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic',
        '__utmv': '51854390.100--|2=registration_date=20170330=1^3=entry_date=20170330=1'
    }
    # cookiejar = CookieJar()
    # 这是入口！
    def start_requests(self):#代替start_urls
        yield scrapy.Request("https://www.zhihu.com", cookies=self.cookies, headers = self.header)
        # return [Request(
        #     url='https://www.zhihu.com/#signin',
        #     headers=self.header,
        #     meta={'cookiejar':self.cookiejar},
        #     callback=self.login
        # )]
    pass

    def parse(self, response):
        # print(response.request.headers.getlist('Cookie'))
        all_urls = response.css('a::attr(href)').extract()
        for i, url in enumerate(all_urls):
            all_urls[i] = parse.urljoin(response.url, url)
        all_urls = filter(lambda x: True if x.startswith('https') else False, all_urls)
        for url in all_urls:
            match_obj = re.match('(.*zhihu.com/question/(\d+)/|$)', url)
            if match_obj:
                request_url = match_obj.group(1)
                yield scrapy.Request(request_url, headers=self.header, cookies=self.cookies, callback=self.parse_question)
            else:
                yield scrapy.Request(url, headers=self.header, cookies=self.cookies)
        pass


    def parse_question(self, response):
        match_obj = re.match('(.*zhihu.com/question/(\d+))(/|$).*', response.url)
        if match_obj:
            question_id = int(match_obj.group(2))
        item_loader = ItemLoader(item=ZhihuAnswerItem(),response=response)
        item_loader.add_css("title", "h1.QuestionHeader-title::text")
        item_loader.add_css("content", ".QuestionRichText--expandable span::text")
        item_loader.add_value("url", response.url)
        item_loader.add_value("zhihu_id", question_id, 20 ,0)
        item_loader.add_css("answer_num", ".List-headerText span::text")
        item_loader.add_css("click_num", ".NumberBoard-value:nth-child(2)::text")
        item_loader.add_css("watch_user_num", ".NumberBoard-value::text")
        item_loader.add_css("topics", ".QuestionHeader-topics::text")
        question_item = item_loader.load_item()
        yield scrapy.Request(url=self.start_answer_urls.format(question_id,0,20), headers=self.header, cookies=self.cookies, callback=self.parse_answer)


    def parse_answer(self,response):
        answer_json = json.loads(response.text)
        pass



    def login(self, response):
        response_text = response.text
        match_obj = re.match('.*name="_xsrf" value="(.*?)"', response_text, re.S)
        if match_obj:
            xsrf = match_obj.group(1)
        # pattern_captcha_timestmp = r'<script type="text/json" class="json-inline" data-name="ga_vars">{"user_created":0,"now":(.*?),'  # 验证码对应的时间戳
        # ss = response.text
        # _captcha_timestmp = re.findall(pattern_captcha_timestmp, ss, re.S | re.I)  # 不分换行符，不分大小写
        # t = _captcha_timestmp[0]
        t = str(int(time.time() * 1000))
        captcha_url = 'https://www.zhihu.com/captcha.gif?r={0}&type=login'.format(t)
        #&lang=cn
        yield scrapy.Request(url=captcha_url,meta={'xsrf':xsrf, 'cookiejar':response.meta['cookiejar']}, headers=self.header, callback=self.login_after_captcha)


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
        # 用者也识别
        # z = zheye()
        # positions = z.Recognize('captcha.jpg')  # 默认倒立文字的y坐标在前，x坐标在后
        # 知乎网要求的倒立文字坐标是x轴在前，y轴在后，所以我们需要定义一个列表来改变默认的，倒立文字坐标位置
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
        #     postdata = {
        #         '_xsrf': response.meta['xsrf'],
        #         'phone_num':self.phone,
        #         'password':self.password,
        #         'captcha':'{"img_size":"[200,44]", "input_points": [[%.2f, %f],[%.2f,%f]]} ' % (
        #      positions[0][1] / 2, positions[0][0] / 2, positions[1][1] / 2, positions[1][0] / 2),
        #         'captcha_type': 'cn'
        #     }
        # else:
        #     postdata = {
        #         '_xsrf': response.meta['xsrf'],
        #         'phone_num':self.phone,
        #         'password':self.password,
        #         'captcha':'{"img_size": "[200,44]", "input_points": [[ % f, % .2f]]}' % (
        #         positions[0][1] / 2,positions[0][0] / 2),
        #         'captcha_type': 'cn'
        #     }
        postdata = {
            '_xsrf': response.meta['xsrf'],
            'phone_num': self.phone,
            'password':self.password,
            'captcha': captcha
        }
        return [scrapy.FormRequest(
            url='https://www.zhihu.com/login/phone_num',
            headers=self.header,
            meta={'cookiejar':response.meta['cookiejar']},
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