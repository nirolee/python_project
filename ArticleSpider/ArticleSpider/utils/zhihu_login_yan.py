


    def __init__(self):
        # 声明一个CookieJar对象实例来保存cookie
        self.cookie = http.cookiejar.CookieJar()
        # 创建opener
        self.handler = urllib.request.HTTPCookieProcessor(self.cookie)
        self.opener = urllib.request.build_opener(self.handler)  # 建立opener对象，并添加头信息
        urllib.request.install_opener(self.opener)
        self.header = {"Accept": "*/*",
                        "Accept-Encoding": "gzip,deflate,br",
                        "Accept-Language": "zh-CN,zh;q = 0.8",
                        # "Connection": "keep-alive",
                        # "Content-Length": "227",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "User-Agent": 'Mozilla/5.0(Windows NT 6.1; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko)\
                                       Chrome/60.0.3112.90 Safari/537.36',
                       "Host": "www.zhihu.com",
                       "Origin": "https://www.zhihu.com",
                        "Referer": "https://www.zhihu.com/signin?next=%2F",
                        "X-Requested-With": "XMLHttpRequest",
                        # "X-Xsrftoken": "29153f3bb3b4959147e4c17910961950"
                }
        self.captcha_index = [[12.95, 14.969999999999998], [36.1, 16.009999999999998], [57.16, 24.44], [84.52, 19.17],
                              [108.72, 28.64], [132.95, 24.44], [151.89, 23.380000000000002]]
        self.localcaptchapath = "F:\zhihu\zhihucaptchapath\captcha.gif"
        self.login_url = "https://www.zhihu.com/login/email"
        self.email = "610733719@qq.com"
        self.password = "1q2w3e4r5t"
        self.cookie_ = ""

        def get_captcha_and_open(self):
            req_ = urllib.request.Request(url="https://www.zhihu.com", headers=self.header)
            urllib.request.urlopen(req_)
            for item in self.cookie:
                self.cookie_ += item.name + "=" + item.value + "; "
            self.header.update({"Cookie": self.cookie_[:-2]})
            _xsrf = self.header["Cookie"].split(";")
            for i in _xsrf:
                if " _xsrf" in i:
                    self._xsrf = i[7:]

            udid_url = "https://www.zhihu.com/udid"
            udid_form_data = urllib.parse.urlencode({"_xsrf": self._xsrf}).encode('utf-8')
            req__ = urllib.request.Request(url=udid_url, headers=self.header, data=udid_form_data)
            webPage = urllib.request.urlopen(req__)
            data = webPage.read().decode('utf-8')
            self.cookie_ = ""
            for item in self.cookie:
                self.cookie_ += item.name + "=" + item.value + "; "
            self.header.update({"Cookie": self.cookie_[:-2]})

            captcha_url = 'https://www.zhihu.com/captcha.gif?r=%d&type=login&lang=cn' % (time.time() * 1000)
            print(captcha_url)
            # 用urlopen函数保存验证图片
            req = urllib.request.Request(url=captcha_url, headers=self.header)
            content = urllib.request.urlopen(req)
            content = content.read()
            with open(self.localcaptchapath, 'wb') as f:
                f.write(content)
            # os.startfile(self.localcaptchapath)
            self.cookie_ = ""
            for item in self.cookie:
                self.cookie_ += item.name + "=" + item.value + "; "
            self.header.update({"Cookie": self.cookie_[:-2]})

            def login(self):
                self.get_captcha_and_open()
                captcha = []
                index_input = input("请输入验证码(1-7对应倒立的文字，比如第三六个就输入36):")
                index_list = list(str(index_input))
                for index in index_list:
                    for index_, location in enumerate(self.captcha_index):
                        if (index_ + 1) == int(index):
                            captcha.append(location)
                form_data = {
                    "_xsrf": self._xsrf,
                    "password": self.password,
                    "captcha_type": "cn",
                    "email": self.email,
                    "captcha": {"img_size": [200, 44], "input_points": captcha}
                }
                print(form_data)
                print(111, self.header)
                # res = requests.post(url=self.login_url, data=form_data, headers=self.header)
                # print(res)
                postData_encoded = urllib.parse.urlencode(form_data).encode('utf-8')
                req = urllib.request.Request(url=self.login_url, data=postData_encoded, headers=self.header)
                webPage = urllib.request.urlopen(req)
                data = webPage.read().decode('utf-8')
                print(data)