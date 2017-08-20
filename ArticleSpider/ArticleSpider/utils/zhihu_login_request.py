# -*- coding: utf-8 -*-

import requests
try:
    import cookielib
except:
    import http.cookiejar as cookielib
import re
import time
import os.path
from urllib import request
from PIL import Image
session = requests.session()
session.cookies = cookielib.LWPCookieJar(filename="cookies.txt")

try:
    session.cookies.load(ignore_discard=True)
except IOError:
    print('Cookie未加载！')

agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
header = {
    "HOST":"www.zhihu.com",
    "Referer":"https://www.zhihu.com",
    "User-Agent":agent
}
captcha_index = [[12.95, 14.969999999999998], [36.1, 16.009999999999998], [57.16, 24.44], [84.52, 19.17],
                              [108.72, 28.64], [132.95, 24.44], [151.89, 23.380000000000002]]
# 获取验证码
def get_captcha():
    # t = str(int(time.time() * 1000))
    response = session.get("https://www.zhihu.com", headers=header)
    pattern_captcha_timestmp = r'<script type="text/json" class="json-inline" data-name="ga_vars">{"user_created":0,"now":(.*?),'
    ss = response.text
    _captcha_timestmp = re.findall(pattern_captcha_timestmp, ss, re.S | re.I)
    timestamp = _captcha_timestmp[0]
    captcha_url = 'https://www.zhihu.com/captcha.gif?r=' + timestamp + "&type=login&lang=cn"
    r = session.get(captcha_url, headers=header)
    with open('captcha.jpg', 'wb') as f:
        f.write(r.content)
        f.close()
    session.cookies.save()
    # 用pillow 的 Image 显示验证码
    # 如果没有安装 pillow 到源代码所在的目录去找到验证码然后手动输入
    try:
        im = Image.open('captcha.jpg')
        im.show()
        im.close()
    except:
        print(u'请到 %s 目录找到captcha.jpg 手动输入' % os.path.abspath('captcha.jpg'))
    captcha = []
    index_input = input("请输入验证码(1-7对应倒立的文字，比如第三六个就输入36):")
    index_list = list(str(index_input))
    for index in index_list:
        for index_, location in enumerate(captcha_index):
            if (index_ + 1) == int(index):
                captcha.append(location)
    captcha = {"img_size": [200, 44], "input_points": captcha}
    return captcha

# def location(a,b):
#     a = 20 * int(a) +2
#     b = 20 * int(b) +2
#     if b != 0 :
#         captcha = "{\"img_size\":[200,44],\"input_points\":[[%s,26.45],[%s,29.45]]}" %(int(a),int(b))
#     else:
#         captcha = "{\"img_size\":[200,44],\"input_points\":[[%s,26.45]]}" % (a)
#     return  captcha

def get_index():
    response = session.get("https://www.zhihu.com/people/li-guo-qi-80/activities", headers=header)
    with open("asdad.html", "wb") as f:
        f.write(response.text.encode('utf-8'))
        print("ok")
def is_login():
    inbox_url = "https://www.zhihu.com/inbox"
    response = session.get(url=inbox_url, headers=header, allow_redirects=False)
    if response.status_code == 200:
        return True
    else:
        return False
    pass
def get_xsrf():
    response = session.get("https://www.zhihu.com", headers=header)
    match_obj = re.match('.*name="_xsrf" value="(.*?)"', response.text, re.S)
    if match_obj:
        return match_obj.group(1)
    else:
        return ""

    pass
def zhihu_login(account,password):
    if re.match("^1\d{10}",account):
        post_url = "https://www.zhihu.com/login/phone_num"
        post_data = {
            "_xsrf": get_xsrf(),
            "phone_num": account,
            "password": password
        }
        response_page = session.post(post_url, data=post_data, headers=header)
        response_code = response_page.json()
        if response_code['r'] == 1:
            post_data["captcha"] = get_captcha()
            post_data["captcha_type"] = 'cn'
            response_page = session.post(post_url, data=post_data, headers=header)
            response_code = response_page.json()
            print(response_code['msg'])
        session.cookies.save()
# is_login()
# get_index()
# get_captcha()
zhihu_login("13632499177", "88322429")
# get_xsrf()
