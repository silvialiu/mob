#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys,os
path = sys.argv[1]

def get_type(pd):
    '''
    获取图片的类型，支持传入路径和文件内容
    '''
    ftype = None
    if os.path.isfile(pd):
        splittext = os.path.splitext(pd)
        if splittext and len(splittext)>=2:
            if splittext[1] in [".jpg",".png",".bmp",".gif"]:
                return "image/"+splittext[1]
            elif splittext[1]==".svg":
                return "image/svg+xml"
            elif splittext[1]==".woff":
                return "application/font-woff"
            elif splittext[1]==".ttf":
                return "application/x-font-ttf"
            elif splittext[1]==".otf":
                return "font/opentype"
            elif splittext[1]==".css":
                return "text/css"
        else:
            f = file(pd, 'rb')
            data = f.read(10).encode('hex')
    else:
        data = pd.encode('hex')
    if data.startswith('ffd8'):
        ftype = 'image/jpeg'
    if data.startswith('424d'):
        ftype = 'image/bmp'
    if data.startswith('474946'):
        ftype = 'image/gif'
    elif data.startswith('89504e470d0a1a0a'):
        ftype = 'image/png'
    return ftype

img_tag=""
file_type=get_type(path)
if file_type:
  if sys.version_info[0]>2:
    import base64
    data_uri = str(base64.encodestring(open(path, "rb").read()) , "utf8").replace("\n", "")
  else:
    data_uri = open(path, "rb").read().encode("base64").replace("\n", "")
    img_tag = 'data:%s;base64,%s'%(file_type,data_uri)
print img_tag
