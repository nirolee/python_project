# -*- coding: utf-8 -*-
import urllib2
import urllib


class VQqgetcookie:
    def __init__(self,user,pwd):
        self.username = user
        self.password = pwd
        self.hosturl = ''
        self.posturl = 'http://xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&target=self&low_login=1&style=20&hln_logo=&hide_close_icon=1&appid=532001601&f_url=loginerroralert&qlogin_auto_login=0&s_url=http%3A//v.qq.com/toolpages/redirect.html%3Fclientjumpurl%3Dhttp%253A//v.qq.com/u/history/%26jumpurl%3D'
        self.headers = {'User-Agent': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5'}


    def get_post_data(self):
        postData = {
        'u': self.username,
        'verifycode': '!CGP',
        'pt_vcode_v1':'0',
        'pt_verifysession_v1':'85472be5c1416e17e8b2eecf9efeccdf32b448a7508db7ff2ae6ed43422963368876af1bc8e79697b700ca1e000afc8074aae0cdfc3a4e02',
        'p':'xC5-EBAePmRB6aqaQYdB0IB3PRu6q*c-JggUvIiVg30A68saVuOzd9fzO9Drut-RNy-H7zW9YrsIRbHV2BGHVCeBVuRoJPFvPVe*MyuYbstESWVBf4GjXTHPlU7UDF6M4we-bT1iyzyczKz70fx2d1Z9gjrWfNI4X6wWLe*A3i-ajirc3uiq*T5x5IiPXFSMV6WXiCrH6DIm7fdYuGbGr4vL7r-YSlgLYI-tt1l8HA-7Up7njXr5Pp-SLg*eQh8P7pq7KNNUoyAlNYYhwUK6s2zny0hZ4YAIC8GUT2iauKX8dDIt-vPEhHRDyM17CEmBdY9Hv2Y9chYcuJ9xX35SLg__',
        'pt_randsalt':'2',
        'u1':'http://v.qq.com/toolpages/redirect.html?clientjumpurl=http%3A//v.qq.com/u/history/&jumpurl=',
        'ptredirect':'0',
        'h':'1',
        't':'1',
        'g':'1',
        'from_ui':'1',
        'ptlang':'2052',
        'action':'3-15-1493347370130',
        'js_ver':'10216',
        'js_type':' 1',
        'login_sig':' ',
        'pt_uistyle':'40',
        'aid': '532001601',
        }
        postData = urllib.urlencode(postData)
        return postData

    def  post(self):
        postdata = self.get_post_data()
        #print postdata
        request = urllib2.Request(self.posturl, postdata, self.headers)
        result = urllib2.urlopen(request)
        print result.read()



if __name__ == "__main__":
    user = '610733719'
    pas = '1q2w3e4r5tXY'
    a = VQqgetcookie(user,pas)
    #a.get_post_data()
    a.post()















