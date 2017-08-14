#!/bin/bash
source /etc/profile
export PYTHONIOENCODING=utf-8
cd /data/service/clip-spider
nohup python start.py >> spider.log 2>&1&
