# -*- coding: utf-8 -*-
#####
# 消息队列中消息数量监控,超过阈值发送短信报警
# author:<ql>
#####
from mns.account import Account
import ConfigParser
import mail
import time


config = ConfigParser.ConfigParser()
config.read("../config/config.ini")
accessId = str(config.get("Preference", "aliyun_accessid"))
accessKey = str(config.get("Preference", "aliyun_accesskey"))
endpoint = str(config.get("Preference", "mns_endpoint"))
mnsAccount = Account(endpoint, accessId, accessKey)
queueName = str(config.get("Preference", "mns_queue_name"))
myQueue = mnsAccount.get_queue(queueName)
active_messages = myQueue.get_attributes().active_messages
print active_messages
if active_messages > 50:
    # send msg
    mail.send_mail('mns msg count notify:' + str(active_messages), 'queue name:' + queueName, ['qiuli@staff.easub.com'])

