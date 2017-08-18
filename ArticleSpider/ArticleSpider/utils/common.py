# -*- coding: utf-8 -*-
import hashlib
def  get_md5(url):
    m = hashlib.md5()
    m.update(url)
    return m.hexdigest()



if __name__ == "__main__": #你写的脚本模块既可以导入到别的模块中用，另外该模块自己也可执行
    print(get_md5("https://blog.jobbole.com".encode("utf-8")))