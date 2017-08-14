#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import base64
import urllib
import re
import toolClass
import requests


class ChaseAcfun:
    def __init__(self):
        self.videoLink = ''
        self.sourceID = ''
        self.idInfoUrl = 'http://api.aixifan.com/contents/'
        self.infoUrl = 'http://api.aixifan.com/plays/'
        self.youkuCfgUrl = 'https://api.youku.com/players/custom.json?type=h5&client_id=908a519d032263f8'
        self.youkuInfoUrl = 'http://play.youku.com/partner/get.json?ct=86&cid=908a519d032263f8'
        self.videoTypeList = {'n': 'mp4', 'h': 'hd2', 's': 'hd3'}
        self.fileUrlPrefix = 'http://pl.youku.com/partner/m3u8?ctype=86&ev=1'
        self.videoType = 'n'
        self.tempCookie = ''
        self.Tools = toolClass.Tools()

    def chaseUrl(self):
        videoID = self.__getVideoID(self.videoLink)

        if not videoID:
            return None

        info = self.__getVideoInfo(videoID)
        if not info:
            return None

        sourceInfo = self.__getSourceInfo(info)
        if not sourceInfo:
            return None

        fileUrl = self.__getVideoFileUrl(sourceInfo)
        return fileUrl
        # if not fileUrl:
        #     return None
        #
        # listFile = self.__getFileList(fileUrl)
        #
        # return listFile

    def __getVideoID(self, link):
        result = re.findall(r"/ac([\d_]*)", link)
        if len(result) > 0:
            videoIDList = result[0].split('_')
            videoID = videoIDList[0]
            if len(videoIDList) > 1:
                videoPart = int(videoIDList[1]) - 1
            else:
                videoPart = 0

            headers = {'deviceType':'2',
                       'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'}
            info_url = self.idInfoUrl + str(videoID)
            resp = requests.get(info_url, headers=headers)
            videoInfo = resp.json()
            print videoInfo
            if videoInfo['code'] == 200:
                videoID = videoInfo['data']['videos'][videoPart]['videoId']
            else:
                videoID = False

        else:
            videoID = False

        return videoID

    def __getVideoInfo(self, videoID):
        try:
            # pageHeader, pageBody = self.Tools.getPage(self.infoUrl + str(videoID), ['deviceType:2',
            #                                                                         'User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'])
            # videoInfo = json.JSONDecoder().decode(pageBody)
            headers = {'deviceType':'2',
                       'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'}
            resp = requests.get(self.infoUrl + str(videoID), headers=headers)
            videoInfo = resp.json()
            print videoInfo
        except:
            videoInfo = False

        return videoInfo

    def __getSourceInfo(self, videoInfo):
        if videoInfo['code'] == 200:
            self.sourceID = videoInfo['data']['sourceId']
            embsig = videoInfo['data']['embsig']

            # pageHeader, pageBody = self.Tools.getPage(
            #     self.youkuCfgUrl + '&video_id=' + self.sourceID + '&embsig=' + embsig)
            # partnerInfo = json.JSONDecoder().decode(pageBody)
            partnerInfo = requests.get( self.youkuCfgUrl + '&video_id=' + self.sourceID + '&embsig=' + embsig).json()
            print partnerInfo
            sign = partnerInfo['playsign']

            # pageHeader, pageBody = self.Tools.getPage(self.youkuInfoUrl + '&vid=' + self.sourceID + '&sign=' + sign)

            # sourceInfo = pageBody
            url = self.youkuInfoUrl + '&vid=' + self.sourceID + '&sign=' + sign
            print url
            sourceInfo = requests.get(url).json()
        else:
            sourceInfo = False

        return sourceInfo

    def __getVideoFileUrl(self, videoInfo):
        # videoInfo = json.JSONDecoder().decode(videoInfo)
        if 'security' in videoInfo['data']:
            ep = videoInfo['data']['security']['encrypt_string']
        else:
            ep = False

        if ep:
            oip = videoInfo['data']['security']['ip']
            vid = videoInfo['data']['video']['encodeid']

            temp = self.__rc4('10ehfkbv', base64.decodestring(ep))
            sid = temp.split('_')[0]
            token = temp.split('_')[1]

            ep = urllib.quote(
                base64.encodestring(self.__rc4('msjv7h2b', str(sid) + '_' + str(self.sourceID) + '_' + str(token))), '')
            epList = re.findall(r"(.*?)%0A$", ep)
            ep = epList[0]

            videoType = self.videoTypeList[self.videoType]

            fileUrl = self.fileUrlPrefix + '&ep=' + str(ep) + '&oip=' + str(oip) + '&sid=' + str(sid) + '&token=' + str(
                token) + '&vid=' + str(self.sourceID) + '&type=' + str(videoType)
        else:
            fileUrl = False

        return fileUrl

    # def __getFileList(self, fileUrl):
    #     pageHeader, pageBody = self.Tools.getPage(fileUrl)
    #
    #     data = self.__formatList(pageBody)
    #     return data

    def __formatList(self, data):
        result = []
        listContent = re.findall(r"(.*)\.ts\?", data)
        for x in listContent:
            if x not in result:
                result.append(x)
        return result

    def __rc4(self, a, c):
        f = h = 0
        b = list(range(256))
        result = ''

        while h < 256:
            f = (f + b[h] + ord(a[h % len(a)])) % 256
            b[h], b[f] = b[f], b[h]
            h += 1
        q = f = h = 0

        while q < len(c):
            h = (h + 1) % 256
            f = (f + b[h]) % 256
            b[h], b[f] = b[f], b[h]
            if isinstance(c[q], int):
                result += chr(c[q] ^ b[(b[h] + b[f]) % 256])
            else:
                result += chr(ord(c[q]) ^ b[(b[h] + b[f]) % 256])
            q += 1

        return result


if __name__ == "__main__":
    acfun = ChaseAcfun()
    acfun.videoLink = "http://www.acfun.cn/v/ac3491111"
    url = acfun.chaseUrl()
    print url