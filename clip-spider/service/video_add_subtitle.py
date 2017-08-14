# python VideoAddSubtitle.py videopath srtpath outvideopath
# @author ql@easub.com
# coding:utf-8
import subprocess
import os
import sys


def mencoder_add_subtitle(video_path, subtitle_path):
    parent, filename = os.path.split(video_path)
    name, extension = os.path.splitext(filename)
    if not os.path.exists('cache/'):
        os.mkdir('cache')
    temp_path = 'cache/' + name + '.flv'
    command = "mencoder -oac mp3lame -lameopts aq=7:mode=0:vol=1.7:abr:br=96 -vf harddup -ovc x264 -ffourcc H264 -sub " + subtitle_path + " -font /usr/share/fonts/zh/msyh.ttf -subfont-text-scale 3 -subfont-outline 0 -subpos 95 -utf8 " + video_path + " -o " + temp_path
    # command = "mencoder -oac mp3lame -lameopts aq=7:mode=0:vol=1.7:abr:br=96 -vf harddup -ovc x264 -ffourcc H264 -sub " + subtitlePath + " -font /usr/share/fonts/zh/simsun.ttf -sub-bg-color 0 -sub-bg-alpha 0.5 -subfont-text-scale 3 -subfont-outline 2 -subfont-blur 3 -subpos 95 -utf8 " + videoPath + " -o " + tempPath
    print command
    subprocess.call(command, shell=True)
    return temp_path


def transcode(sub_video_path, outh_path):
    command = "ffmpeg -y -i " + sub_video_path + " -vcodec libx264 -acodec libvo_aacenc " + outh_path
    print command
    subprocess.call(command, shell=True)
    return outh_path

if __name__ == '__main__':
    print sys.argv
    if len(sys.argv) < 4:
        print "missing params"
        sys.exit(0)

    videoPath = sys.argv[1]
    subtitlePath = sys.argv[2]
    outPath = sys.argv[3]

    tempPath = mencoder_add_subtitle(videoPath, subtitlePath)
    if not os.path.exists(tempPath):
        print "mencoder add subtitle failed"
        sys.exit(0)

    transcode(tempPath, outPath)

    os.remove(tempPath)

    if not os.path.exists(outPath):
        print "ffmpeg transcode failed"
        sys.exit(0)

    print "add subtitle success",outPath


