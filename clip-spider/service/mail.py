#!/usr/bin/env python
# -*- coding: utf-8 -*-
import smtplib
import json
from email.mime.text import MIMEText
import random

with open("config/config.cnf") as f:
    config = json.load(f)


receivers = []
mail_receive = config.get("mail_receive").keys()
for receiver in mail_receive:
    a = config.get("mail_receive").get(receiver)
    receivers.append(a)


def send_mail(sub, content, to_list=receivers):
    '''
    to_list:发给谁
    sub:主题
    content:内容
    send_mail("aaa@126.com","sub","content")
    '''
    # 设置服务器，用户名、口令以及邮箱的后缀
    mail_send = config.get("mail_send%s" % random.randint(0, 2))
    mail_host = mail_send.get("mail_host")
    mail_user = mail_send.get("mail_user")
    mail_pass = mail_send.get("mail_pass")
    mail_postfix = mail_send.get("mail_postfix")

    me = mail_user + "<" + mail_user + ">"
    msg = MIMEText(content)
    msg['Subject'] = sub
    msg['From'] = me
    msg['To'] = ";".join(to_list)
    try:
        s = smtplib.SMTP()
        s.connect(mail_host)
        s.login(mail_user, mail_pass)
        s.sendmail(me, to_list, msg.as_string())
        s.close()
        return True
    except Exception, e:
        print str(e)
        return False


if __name__ == '__main__':
    if send_mail("subject", "content", ['ql@easub.com']):
        print "发送成功"
    else:
        print "发送失败"