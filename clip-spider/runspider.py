from scrapy.cmdline import execute


#execute(['scrapy', 'crawl','-a','url=http://video.tudou.com/v/XMjYyNzQzNDM0OA==.html&seccateId=10116?spm=a2h28.8313475.c5.dimg11&file=XMjYyNzQzNDM0OA==.html&seccateId=10116','-a','callback=""','-a','upload_url=""','-a','uuid=""','tudou'])


#execute(['scrapy', 'crawl','-a','url=http://tv.cztv.com/vplay/1916.html','-a','callback=""','-a','upload_url=""','-a','uuid=""','benpaoba'])


execute(['scrapy', 'crawl','-a','url=http://www.meipai.com/media/753039272','-a','callback=""','-a','upload_url=""','-a','uuid=""','meipai'])

#execute(['scrapy', 'crawl','-a','url=http://www.le.com/ptv/vplay/28312451.html#vid=28312451','-a','callback=""','-a','upload_url=""','-a','uuid=test','le_test'])