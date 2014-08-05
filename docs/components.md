---
title: 组件文档
descript: 由基本CSS组合成的组件
layout: defaults
permalink: /components.html
previous: css.html
previous_name: CSS组件
next: javascript.html
next_name: javascript组件
---

###Header

header是页面顶部横栏。
    
{% highlight html %}
<div class="header">
  <h1>Example page header <small>Subtext for header</small></h1>
</div>
{% endhighlight %}

###Tabs

Tabs 是可切换标签
{% highlight html %}
<ul class="nav nav-pills">
    <li>tab1</li>
    <li>tab2</li>
    <li>tab3</li>
</ul>
{% endhighlight %}

另外一个示例:

{% highlight html %}
    <ul class="nav nav-pills nav-justified">
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
    </ul>
{% endhighlight %}

###Navs

导航

####Navbar

导航栏
用navbar 组件实现topbar

{% highlight html %}
<nav class="navbar navbar-default">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
</nav>
{% endhighlight %}

用navbar 实现 bottom-bar

{% highlight html %}
<nav class="navbar">
  <a><span class="icon-home"></span>Home</a>
  <a><span class="icon-message"></span>Message</a>
  <a><span class="icon-friend"></span>Friend</a>
  <a><span class="icon-search"></span>Search</a>
  <a><span class="icon-more"></span>More</a>
</nav>
{% endhighlight %}


###Searchbar

搜索框

{% highlight html %}
    <div class="searchbar"><input class="search-query"><button class="btn search-btn">Cancel</button></div>
{% endhighlight %}

###Breadcrumbs

面包屑导航

{% highlight html %}
<nav class="breadcrumb">
  <a href="a">全部文件</a><span class="divider"></span>
  <a href="###">...</a><span class="divider"></span>
  <a href="b">新建文件夹</a><span class="divider"></span>
  <a href="" class="active">电影</a>
</nav>
{% endhighlight %}

###Lists

列表:

{% highlight html %}
<ul class="list-group">
    <li class="item">Cras justo odio</li>
    <li class="item">Dapibus ac facilisis in</li>
    <li class="item">Morbi leo risus</li>
    <li class="item">Porta ac consectetur ac</li>
    <li class="item">Vestibulum at eros</li>
</ul>	
{% endhighlight %}

另一个列表的例子:

{% highlight html %}
<ul class="list">
    <li>
        <span><img src="img/list-icon-1.jpg" class="img-circle"></span><span class="main"> Item 1 </span>
    </li>
    <li>
        <span><img src="img/list-icon-2.png" class="img-circle"></span><span class="main"> Item 2 </span>
    </li>
</ul>
{% endhighlight %}

<!--
Swipe to delete
-->

### Aside

{% highlight html %}
<nav>
<a><span class="icon-home"></span>Home</a>
<a><span class="icon-setting"></span>Setting</a>
</nav>
{% endhighlight %}


### Labels and Badges

Badges 的例子

{% highlight html %}
<a href="#">Inbox <span class="badge">42</span></a>
{% endhighlight %}

另一个例子

{% highlight html %}
<ul class="nav nav-pills nav-stacked">
  <li class="active">
    <a href="#">
      <span class="badge pull-right">42</span>
      Home
    </a>
  </li>
  ...
</ul>
{% endhighlight %}

### Thumbnails

{% highlight html %}
<li><a href="#media"><i class="icon-chevron-right"></i> Media object</a></li>
<li><a href="#alerts"><i class="icon-chevron-right"></i> Alerts</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Message</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Layouts</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Scaffolding</a></li>
{% endhighlight %}

### Pagination

#### Pull-Refresh

{% highlight html %}
<div class="pull-refresh">下拉刷新</div>
{% endhighlight %}

#### 上一页/下一页  + 下拉菜单翻页方式

{% highlight html %}
<div class="panel panel-default">
<div class="panel-body">
<button type="button" class="btn btn-default">
<span class="glyphicon glyphicon-chevron-up"></span>
</button>

<select class="paging-select">
<option value="0">第1页</option>
<option value="1">第2页</option>
</select>

<button type="button" class="btn btn-default">
<span class="glyphicon glyphicon-chevron-down"></span>
</button>
</div>
</div>

{% endhighlight %}

### 设置按钮

{% highlight html %}
<button type="button" class="btn btn-default">
setting
<span class="glyphicon glyphicon-chevron-right"></span>
</button>
{% endhighlight %}


### 搜索框

{% highlight html %}
<form>
<div class="se-box">
<input type="search" class="se-input" value="">
<button type="submit" class="se-btn">百度一下</button>
</div>
</form>
{% endhighlight %}

### 列表(有图)

{% highlight html %}
<ul class="media-list-group">
    <li class="list-item">
        <a href="1.html">
            <div class="list-item-img"><img src="cover.png"></div>
            <div class="list-item-content">
                <span class="bookname">美女总裁俏佳人</span>
                <span class="penname">醉酒望明月</span>
                <span class="cate">都市传奇</span>
                <span class="sep">|</span>
                <span class="status">完结</span>
            </div>
            <div class="list-item-subcontent">
                <span class="read-ico">荐</span>
                <span class="read-cont">杀手头子偶遇绝色俏佳人，不占便宜不是人。</span>
            </div>
        </a>
    </li>
</ul>
{% endhighlight %}

### Loading

	<div class="loading">加载中</div>

加载出错

	<div class="loading loading-fail">网络不给力 <a href="javascript:history.go(0)" class="load_retry">重试</a></div>

### Media

#### Audio

提供音频控制组件,具体实例查看 [examples/audio-player.html]:examples/audio-player.html

{% highlight html %}
    <div class="audio-player">
        <div class="audio-progress">
             0:00 <progress class="audio-progress-bar" max="100" value="10"></progress> -2:14
        </div>
        <div id="audio-info">
            <h1 class="title">Song Name</h1>
            <p class="descript">Author</p>
        </div>
        <div class='audio-controls'>
            <div>
                <span class="icon icon-backward"></span>
            </div>
            <div>
                <span class="icon icon-play"></span>
            </div>
            <div>
                <span class="icon icon-forward"></span>
            </div>
        </div>
        <div class="audio-volumn">
            <span class="icon icon-volume-down"></span> 
            <progress max="100" value="10" class="audio-volume-slidebar"></progress> 
            <span class="icon icon-volume-up"></span>
        </div>
    </div>
{% endhighlight %}
