---
title: CSS
descript: 基础布局和CSS样式 
layout: defaults
permalink: /css.html
previous: getting-started.html
previous_name: 新手指南
next: components.html
next_name: 组件
---
##页面布局

###Page Container

page 用来显示一个满屏页面的架子.

{% highlight html %}
    <section class="page"> ... </section>
{% endhighlight %}

也可用div元素实现

{% highlight html %}
    <div class="page"> ... </div>
{% endhighlight %}

###Topbar

top bar 为页面顶部的工具栏, 有随页面固定和随页面滚动两种。要注意其与 Header 的区别

{% highlight html %}
<div class="toolbar">
    <span class="icon-list">
    <span class="title">TOOLBAR</span>
    <span class="icon-cog"></span>
</div>
{% endhighlight %}

###Header

header 为页面头部通栏封面或广告。例子: [examples/audio-player.html](examples/audio-player.html)

{% highlight html %}
<div class="page-header page-header-cover">
</div>
{% endhighlight %}

###Content
`page-content` 用来表示page中navbar, topbar,aside以外的主要内容。page-content 会自动进行垂直布局。
例子: [examples/audio-player.html](examples/audio-player.html)

{% highlight html %}
<div class="page-content"></div>
{% endhighlight %}

###Aside

Aside 是侧边栏。Mob 支持两种形式的侧边栏。一个是[进入时覆盖的侧边栏](examples/aside.html)，一个是[进入时推原来页面的侧边栏](examples/aside-push.html)

默认侧边栏:

{% highlight html %}
<aside class="aside aside-right"> 
{% endhighlight %}

进入时push的侧边栏:
{% highlight html %}
<aside class="aside aside-push aside-right" data-bind='.page'>
{% endhighlight %}

###Bottombar

Bottombar是底部导航栏

{% highlight html %}
 <div class='navbar bottombar bottombar-fixed'>
{% endhighlight %}

###Tables

普通表格

{% highlight html %}
<table class="table">
    <tr>
        <th> TH1 </th><th> TH2 </th><th> TH3 </th>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
</table>
{% endhighlight %}

有边框的表格

{% highlight html %}
<table class="table-bordered">
    <tr>
        <th> TH1 </th><th> TH2 </th><th> TH3 </th>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
</table>
{% endhighlight %}

有背景颜色条的表格

{% highlight html %}
<table class="table-striped">
    <tr>
        <th> TH1 </th><th> TH2 </th><th> TH3 </th>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
    <tr>
        <td> TD1 </td><td> TD2 </td><td> TD3 </td>
    </tr>
</table>
{% endhighlight %}

##Grids (九宫格)
Grids 为九宫格自动排版的组件

{% highlight html %}
<div class="grids">
    <div class="grids-row">
        <div class="grids-grid"> First Grid</div>
        <div class="grids-grid"> Second Grid</div>
        <div class="grids-grid"> Third Grid</div>
    </div>
    <div class="grids-row">
        <div class="grids-grid"> Forth Grid</div>
        <div class="grids-grid"> Fiveth Grid</div>
        <div class="grids-grid"> Sixth Grid</div>
    </div>
    <div class="grids-row">
        <div class="grids-grid"> Seventh Grid</div>
        <div class="grids-grid"> Eighth Grid</div>
        <div class="grids-grid"> Nighth Grid</div>
    </div>
</div>
{% endhighlight %}

##Menu (菜单)
Menu 适合作为 app 首屏显示. <a href="examples/menu.html"> 示例 </a>

{% highlight html %}
<ul id="menu" class="page-content menu">
    <li class="menu-item">
        <div class="menu-item-icon">
            <span class="icon-expand icon"></span> 
        </div>
        <div class="menu-item-content">
            <p>未播放的单集</p>
            <p>
                <small>快速找到尚未播放的单集。</small>
            </p>
        </div>
    </li>
    <li class="menu-item">
        <div class="menu-item-icon">
            <span class="icon-stats icon"></span> 
        </div>
        <div class="menu-item-content">
            <p>浏览提要</p>
            <p>
                <small>流化可用的单集或者</small>
            </p>
        </div>
    </li>
    <li class="menu-item">
        <div class="menu-item-icon">
            <span class="icon-floppy-save icon"></span> 
        </div>
        <div class="menu-item-content">
            <p>已存储的单集</p>
            <p>
                <small>存储喜爱的单集作为永久收藏。</small>
            </p>
        </div>
    </li>
    <li class="menu-item">
        <div class="menu-item-icon">
            <span class="icon-trash icon"></span> 
        </div>
        <div class="menu-item-content">
            <p>删除已播放的单集</p>
            <p>
                <small>单集在播放后可被自动删除。</small>
            </p>
        </div>
    </li>
</ul>

{% endhighlight %}


##Buttons

### 默认 button:

{% highlight html %}
   	<button type="button" class="btn btn-default">button</button>
{% endhighlight %}
    
### 圆按钮(Circle button):
    
{% highlight html %}
   	<div class="btn btn-circle">circle</div>
{% endhighlight %}

### 方形按钮(Square button):

{% highlight html %}
   	<div class="btn btn-square">square</div>
{% endhighlight %}

### 按钮大小(Sizes)

{% highlight html %}
	<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>
{% endhighlight %}

### 按钮状态(Active state)

{% highlight html %}
<button type="button" class="btn btn-default btn-lg active">Button</button>
{% endhighlight %}

###Tips / Alert

提示

{% highlight html %}
<div class="alert">This is a tips.</div>
{% endhighlight %}

###Images

图标装饰效果

{% highlight html %}
<img class="img-circle" src="img/list-icon-1.jpg">
<img class="img-rounded" src="img/list-icon-1.jpg">
<img class="img-polaroid" src="img/list-icon-1.jpg">
{% endhighlight %}

###Icons 

小图标

{% highlight html %}
<span class="icon icon-asterisk"></span>
<span class="icon icon-plus"></span>
<span class="icon icon-euro"></span>
<span class="icon icon-minus"></span>
<span class="icon icon-cloud"></span>
<span class="icon icon-envelope"></span>
<span class="icon icon-pencil"></span>
<span class="icon icon-glass"></span>
<span class="icon icon-music"></span>
<span class="icon icon-search"></span>
<span class="icon icon-heart"></span>
<span class="icon icon-star"></span>
<span class="icon icon-star-empty"></span>
<span class="icon icon-user"></span>
<span class="icon icon-film"></span>
<span class="icon icon-th-large"></span>
<span class="icon icon-th"></span>
<span class="icon icon-th-list"></span>
<span class="icon icon-ok"></span>
<span class="icon icon-remove"></span>
<span class="icon icon-zoom-in"></span>
<span class="icon icon-zoom-out"></span>
<span class="icon icon-off"></span>
<span class="icon icon-signal"></span>
<span class="icon icon-cog"></span>
<span class="icon icon-trash"></span>
<span class="icon icon-home"></span>
<span class="icon icon-file"></span>
<span class="icon icon-time"></span>
<span class="icon icon-road"></span>
<span class="icon icon-download-alt"></span>
<span class="icon icon-download"></span>
<span class="icon icon-upload"></span>
<span class="icon icon-inbox"></span>
<span class="icon icon-play-circle"></span>
<span class="icon icon-repeat"></span>
<span class="icon icon-refresh"></span>
<span class="icon icon-list-alt"></span>
<span class="icon icon-lock"></span>
<span class="icon icon-flag"></span>
<span class="icon icon-headphones"></span>
<span class="icon icon-volume-off"></span>
<span class="icon icon-volume-down"></span>
<span class="icon icon-volume-up"></span>
<span class="icon icon-qrcode"></span>
<span class="icon icon-barcode"></span>
<span class="icon icon-tag"></span>
<span class="icon icon-tags"></span>
<span class="icon icon-book"></span>
<span class="icon icon-bookmark"></span>
<span class="icon icon-print"></span>
<span class="icon icon-camera"></span>
<span class="icon icon-font"></span>
<span class="icon icon-bold"></span>
<span class="icon icon-italic"></span>
<span class="icon icon-text-height"></span>
<span class="icon icon-text-width"></span>
<span class="icon icon-align-left"></span>
<span class="icon icon-align-center"></span>
<span class="icon icon-align-right"></span>
<span class="icon icon-align-justify"></span>
<span class="icon icon-list"></span>
<span class="icon icon-indent-left"></span>
<span class="icon icon-indent-right"></span>
<span class="icon icon-facetime-video"></span>
<span class="icon icon-picture"></span>
<span class="icon icon-map-marker"></span>
<span class="icon icon-adjust"></span>
<span class="icon icon-tint"></span>
<span class="icon icon-edit"></span>
<span class="icon icon-share"></span>
<span class="icon icon-check"></span>
<span class="icon icon-move"></span>
<span class="icon icon-step-backward"></span>
<span class="icon icon-fast-backward"></span>
<span class="icon icon-backward"></span>
<span class="icon icon-play"></span>
<span class="icon icon-pause"></span>
<span class="icon icon-stop"></span>
<span class="icon icon-forward"></span>
<span class="icon icon-fast-forward"></span>
<span class="icon icon-step-forward"></span>
<span class="icon icon-eject"></span>
<span class="icon icon-chevron-left"></span>
<span class="icon icon-chevron-right"></span>
<span class="icon icon-plus-sign"></span>
<span class="icon icon-minus-sign"></span>
<span class="icon icon-remove-sign"></span>
<span class="icon icon-ok-sign"></span>
<span class="icon icon-question-sign"></span>
<span class="icon icon-info-sign"></span>
<span class="icon icon-screenshot"></span>
<span class="icon icon-remove-circle"></span>
<span class="icon icon-ok-circle"></span>
<span class="icon icon-ban-circle"></span>
<span class="icon icon-arrow-left"></span>
<span class="icon icon-arrow-right"></span>
<span class="icon icon-arrow-up"></span>
<span class="icon icon-arrow-down"></span>
<span class="icon icon-share-alt"></span>
<span class="icon icon-resize-full"></span>
<span class="icon icon-resize-small"></span>
<span class="icon icon-exclamation-sign"></span>
<span class="icon icon-gift"></span>
<span class="icon icon-leaf"></span>
<span class="icon icon-fire"></span>
<span class="icon icon-eye-open"></span>
<span class="icon icon-eye-close"></span>
<span class="icon icon-warning-sign"></span>
<span class="icon icon-plane"></span>
<span class="icon icon-calendar"></span>
<span class="icon icon-random"></span>
<span class="icon icon-comment"></span>
<span class="icon icon-magnet"></span>
<span class="icon icon-chevron-up"></span>
<span class="icon icon-chevron-down"></span>
<span class="icon icon-retweet"></span>
<span class="icon icon-shopping-cart"></span>
<span class="icon icon-folder-close"></span>
<span class="icon icon-folder-open"></span>
<span class="icon icon-resize-vertical"></span>
<span class="icon icon-resize-horizontal"></span>
<span class="icon icon-hdd"></span>
<span class="icon icon-bullhorn"></span>
<span class="icon icon-bell"></span>
<span class="icon icon-certificate"></span>
<span class="icon icon-thumbs-up"></span>
<span class="icon icon-thumbs-down"></span>
<span class="icon icon-hand-right"></span>
<span class="icon icon-hand-left"></span>
<span class="icon icon-hand-up"></span>
<span class="icon icon-hand-down"></span>
<span class="icon icon-circle-arrow-right"></span>
<span class="icon icon-circle-arrow-left"></span>
<span class="icon icon-circle-arrow-up"></span>
<span class="icon icon-circle-arrow-down"></span>
<span class="icon icon-globe"></span>
<span class="icon icon-wrench"></span>
<span class="icon icon-tasks"></span>
<span class="icon icon-filter"></span>
<span class="icon icon-briefcase"></span>
<span class="icon icon-fullscreen"></span>
<span class="icon icon-dashboard"></span>
<span class="icon icon-paperclip"></span>
<span class="icon icon-heart-empty"></span>
<span class="icon icon-link"></span>
<span class="icon icon-phone"></span>
<span class="icon icon-pushpin"></span>
<span class="icon icon-usd"></span>
<span class="icon icon-gbp"></span>
<span class="icon icon-sort"></span>
<span class="icon icon-sort-by-alphabet"></span>
<span class="icon icon-sort-by-alphabet-alt"></span>
<span class="icon icon-sort-by-order"></span>
<span class="icon icon-sort-by-order-alt"></span>
<span class="icon icon-sort-by-attributes"></span>
<span class="icon icon-sort-by-attributes-alt"></span>
<span class="icon icon-unchecked"></span>
<span class="icon icon-expand"></span>
<span class="icon icon-collapse-down"></span>
<span class="icon icon-collapse-up"></span>
<span class="icon icon-log-in"></span>
<span class="icon icon-flash"></span>
<span class="icon icon-log-out"></span>
<span class="icon icon-new-window"></span>
<span class="icon icon-record"></span>
<span class="icon icon-save"></span>
<span class="icon icon-open"></span>
<span class="icon icon-saved"></span>
<span class="icon icon-import"></span>
<span class="icon icon-export"></span>
<span class="icon icon-send"></span>
<span class="icon icon-floppy-disk"></span>
<span class="icon icon-floppy-saved"></span>
<span class="icon icon-floppy-remove"></span>
<span class="icon icon-floppy-save"></span>
<span class="icon icon-floppy-open"></span>
<span class="icon icon-credit-card"></span>
<span class="icon icon-transfer"></span>
<span class="icon icon-cutlery"></span>
<span class="icon icon-header"></span>
<span class="icon icon-compressed"></span>
<span class="icon icon-earphone"></span>
<span class="icon icon-phone-alt"></span>
<span class="icon icon-tower"></span>
<span class="icon icon-stats"></span>
<span class="icon icon-sd-video"></span>
<span class="icon icon-hd-video"></span>
<span class="icon icon-subtitles"></span>
<span class="icon icon-sound-stereo"></span>
<span class="icon icon-sound-dolby"></span>
<span class="icon icon-sound-5-1"></span>
<span class="icon icon-sound-6-1"></span>
<span class="icon icon-sound-7-1"></span>
<span class="icon icon-copyright-mark"></span>
<span class="icon icon-registration-mark"></span>
<span class="icon icon-cloud-download"></span>
<span class="icon icon-cloud-upload"></span>
<span class="icon icon-tree-conifer"></span>
<span class="icon icon-tree-deciduous"></span>
<span class="icon icon-close"></span>
{% endhighlight %}

##Helper classes

工具类

###Close icon

关闭按钮图标

{% highlight html %}
<button type="button" class="close" aria-hidden="true">&times;</button>
{% endhighlight %}

###Carets

插入记号

{% highlight html %}
<span class="caret"></span>
{% endhighlight %}

###Quick floats

快速浮动

{% highlight html %}
<div class="pull-left">...</div>
<div class="pull-right">...</div>
{% endhighlight %}

###Clearfix

清除浮动

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

###Showing and hiding content

显示和隐藏内容

{% highlight html %}
<div class="show">...</div>
<div class="hidden">...</div>
{% endhighlight %}

###Blocks

块状内容

{% highlight html %}
<div class="panel panel-default">
  <div class="panel-body">
    Basic panel example
  </div>
</div>
{% endhighlight %}

###Badge
徽章样式

{% highlight html %}
<span class="badge">read</span>
{% endhighlight %}
