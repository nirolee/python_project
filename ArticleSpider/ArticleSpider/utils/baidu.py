from stem import Signal
from stem.control import Controller
import requests
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains

chromedriver = "E:\chromedriver_win32\chromedriver"

driver = webdriver.Chrome(executable_path=chromedriver)

print("start")
for i in range(1, 1000):
    driver.get("http://hero.beisen.com/Home/Index/vote.html?from=timeline")
    left_click = driver.find_element_by_css_selector(".vote div[vid='3']").click()
    sleep(3)
    qeuding_click = driver.find_element_by_css_selector(".btn.btn-default").click()
    driver.delete_all_cookies()


# proxies = {
#   'http': '127.0.0.1:8118'
# }
# headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
#            'Referer':'http://hero.beisen.com/Home/Index/vote.html?from=timeline','Host':'hero.beisen.com','Set-Cookie':'voteStatus=QWXAf_1dCkqU3QdAHbPoRIE'}
#
#


# def post():
#     post_url = "http://hero.beisen.com/Home/Index/voteAdd.html"
#
#     post_data = {
#         "25215": "r21068",
#         "id": 3,
#     }
#     response_page = s.post(url=post_url, data=post_data, headers=headers)
#     print(s.cookies.keys())
#     s.cookies.clear()
#     print(s.cookies.keys())
#
# for i in range(10, 1000):
#     post()
#     print(i)
