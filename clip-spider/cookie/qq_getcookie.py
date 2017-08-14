# -*- coding: utf-8 -*-
from selenium import webdriver
import time
import json
import execjs
import requests
import xmltodict
import string
import urllib2
import sys
sys.path.append("..")
from service.database import get_database


def get_v_qq_cookie():
    driver = webdriver.PhantomJS()
    driver.get(
        'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&target=self&low_login=1&style=20&hln_logo=&hide_close_icon=1&appid=532001601&f_url=loginerroralert&qlogin_auto_login=0&s_url=https%3A//v.qq.com/toolpages/redirect.html%3Fclientjumpurl%3Dhttps%253A//v.qq.com')

    with open("../config/qq_account.json") as f:
        config = json.load(f)
    # driver.switch_to.frame('login_frame')
    time.sleep(2)
    driver.find_element_by_id('switcher_plogin').click()
    time.sleep(1)
    driver.find_element_by_id('u').clear()
    driver.find_element_by_id('u').send_keys(config.get('name'))
    time.sleep(1)
    driver.find_element_by_id('p').clear()
    driver.find_element_by_id('p').send_keys(config.get('pwd'))
    time.sleep(1)
    driver.find_element_by_id('login_button').click()
    time.sleep(2)

    print json.dumps(driver.get_cookies())
    items = [item['name'] + '=' + item['value'] for item in driver.get_cookies()]
    cookie = ';'.join(items)
    print cookie
    #
    driver.quit()
    return cookie


def parse(vid, cookie):
    getinfo_url = 'https://vv.video.qq.com/getinfo?&vid=%s&guid=11b723226ba84692eb159c32b62bfdf4&platform=10901&sdtfrom=v1010&newplatform=10901' % vid
    ctx = execjs.compile(open('../service/qq.js').read())
    vf = ctx.call('xx', '10901', vid, 'v1010', '1', ctx.call('getTimeStampStr', 10))
    print vf
    getinfo_url += '&_qv_rmt=%s&_qv_rmt2=%s' % (vf['u1'], vf['u2'])
    print getinfo_url
    resp = requests.get(getinfo_url, headers={
        'Cookie': "3g_guest_id=-9077422267364798464; tvfe_boss_uuid=d022f6440c50128e; pac_uid=1_97239340; eas_sid=71d4j7f145a7U8J7e9m553z2Q1; mobileUV=1_157d0e8a427_4c770; pgv_pvi=9225408512; pgv_si=s2221405184; RK=rTeDBaards; g_ut=2; zzpaneluin=; zzpanelkey=; qv_swfrfu=; LW_uid=X1I4a93054h314V8e9c4D610i2; LW_sid=m144p9b0u4d3D6B6v1Y112P0k4; rv2=805246D101D44EB86FAE88923F5BB3F03CF6C38FC0E3377F4E; property20=B6EBB47AD3F52F3E6C4CBF32E96107FB96C1B11C167163EF766D84FDA1496BD5FC5081DD50338904; verifysession=h014457e3eaddabeb0cb067f48b6bee31f0939d5a12c4eaa11cec56e79d5717ee0d78cdf8bbfe100ebf; qm_authimgs_id=1; qm_verifyimagesession=h014a97691ce3217b6522faa8cffeeaafc72c37dca6feaf254e0f540a2971fb9f7338262e4528b97c81; guid=10z56z21z910123456789qwertyuiopa; gid=197509103927660544; qv_swfrfh=v.qq.com; qv_swfrfc=v10; login_time_last=2017-4-24 18:39:59; ptui_loginuin=97239340; pt2gguin=o0097239340; uin=o0097239340; ptisp=ctc; ptcz=8b7a611db1cb23fdfd06778b3303d88abbd22c26d6c61cf498aa3cd64974f386; pgv_info=ssid=s8162391808&pgvReferrer=; pgv_pvid=9253023115; o_cookie=97239340"})
    # resp = requests.get(getinfo_url, headers={'Cookie': self.config.get('Preference', 'v_qq_vip_cookie')})
    print resp.content
    info = xmltodict.parse(resp.content)

    video = info['root']['vl']['vi']
    part = video['cl']['fc']

    vkey = video['fvkey']
    name = video['fn']
    filesize = video['fs']
    length = video['td']
    title = video['ti']
    base_url = video['ul']['ui'][0]['url']

    # url = base_url + name
    # real_url = string.replace(url, '.mp4', '.1.mp4') + "?vkey=" + vkey
    real_url = base_url + name + "?sdtfrom=v1010&guid=11b723226ba84692eb159c32b62bfdf4&vkey=" + vkey
    if part == 1 or requests.head(real_url).status_code > 302:
        real_url = string.replace(real_url, '.mp4', '.1.mp4')

    print 'video real url:', real_url, filesize, length, title
    file_path = 'cache/%s.mp4' % vid
    filesize, success = download_file(real_url, file_path)


def download_file(url, file_path, headers=None):
    times = 3
    while times > 0:
        try:
            if headers:
                request = urllib2.Request(url, headers=headers)
            else:
                request = urllib2.Request(url)
            u = urllib2.urlopen(request, timeout=30)
            f = open(file_path, 'wb')
            meta = u.info()
            file_size = int(meta.getheaders("Content-Length")[0])
            print "Downloading: %s Bytes: %s" % (file_path, file_size)

            file_size_dl = 0
            block_sz = 8192
            while True:
                buffer = u.read(block_sz)
                if not buffer:
                    break

                file_size_dl += len(buffer)
                f.write(buffer)
                status = r"%10d  [%3.2f%%]" % (file_size_dl, file_size_dl * 100. / file_size)
                status = status + chr(8) * (len(status) + 1)
                print status,

            f.close()
            if file_size_dl != file_size:
                times -= 1
                continue

            return file_size, file_size_dl == file_size
        except urllib2.URLError, e:
            print e
            times -= 1
        except Exception, e:
            print e
            times -= 1

    return 0, False


def save_cookie(cookie):
    print 'set cookie cache', cookie
    with open("../config/database.cnf") as f:
            config = json.load(f)
    db_cls = get_database(config.get("database_type", None))
    db = db_cls(**config.get("database", {}))
    db.set_cookies('v.qq', cookie)

if __name__ == "__main__":
    cookie = get_v_qq_cookie()
    # parse('f0023da2pa0', cookie)
    save_cookie(cookie)
