from stem import Signal
from stem.control import Controller
import requests

proxies = {
  'http': '127.0.0.1:8118'
}
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
def get_public_ip(headers):
    res = requests.get("http://icanhazip.com", headers = headers, proxies = proxies)
    print res.content
with Controller.from_port(port = 9051) as controller:
    controller.authenticate()
    controller.authenticate(password='test1234')
    controller.signal(Signal.NEWNYM)
    get_public_ip(headers)


