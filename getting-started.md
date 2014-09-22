---
title: 新手指南
descript: 框架概览，下载使用，基本模板和样例
layout: defaults
permalink: /getting-started.html
next: css.html
next_name: CSS文档
---

### 概况

Mob 是参考 bootstrap 实现的移动版的前端框架。如果你会使用 bootstrap, 那么你早已知道怎么使用 Mob :)

### 下载 

你可以从github下载Mob框架的源码.

<a href="https://github.com/mobframe/mob/zipball/master" class="btn btn-lg btn-outline" role="button" >Download source</a>

### 代码结构

Mob的代码结构参考了bootstrap的结构，在下载文件的release文件夹中有压缩后供线上产品使用的代码版本和未压缩供线下开发调试使用的版本

### 编译

Mob CSS采用less编写，编译采用grunt 编译

{% highlight bash %}
grunt build
{% endhighlight %}

### 基础模板(Basic template)

移动web页示例模板(Examples)如下：

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no"/>
    <title>Mob 101 Template</title>

    <!-- Mob -->
    <link href="css/mob.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="http://zeptojs.com/zepto.min.js"></script>
    <script src="js/mob.min.js"></script>
  </body>
</html>
{% endhighlight %}

### 示例(Examples)

   * [手机Media播放器页面](examples/media-player.html)

<!--

### 页面布局

mob支持多种页面布局方式

#### 普通布局

#### webapp 布局

#### 上下栏固定布局

### 页面组件

#### 按钮

#### 对话框

### 页面动画效果
-->

### 自定义(Customizing Mob)

可以通过修改less/mob.less里引入的Mob组件来定制属于您的专属框架

### 浏览器和设备支持

浏览器和设备支持(Browser and device support) 

   * Android 2.3+ 
   * iOS 5+ 

移动版Firefox和移动版IE不在支持范围内,如果后续市场情况变化再做相应考虑

