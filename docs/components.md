#MOB框架组件模版

##Header

header指页面顶部横栏。

   	<div class="header">
	  <h1>Example page header <small>Subtext for header</small></h1>
	</div>

##Tabs

    <ul class="nav nav-pills">
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
    </ul>

Another example:

    <ul class="nav nav-pills nav-justified">
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
    </ul>

##Navs

##Navbar

用navbar 组件实现topbar

   	<nav class="navbar navbar-default">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
  	</nav>

用navbar 实现 bottom-bar

    <nav class="navbar">
      <a><span class="icon-home"></span>Home</a>
      <a><span class="icon-message"></span>Message</a>
      <a><span class="icon-friend"></span>Friend</a>
      <a><span class="icon-search"></span>Search</a>
      <a><span class="icon-more"></span>More</a>
    </nav>


##Searchbar

    <div class="searchbar"><input class="search-query"><button class="btn search-btn">Cancel</button></div>


##Breadcrumbs

    <nav class="breadcrumb">
      <a href="a">全部文件</a><span class="divider"></span>
      <a href="###">...</a><span class="divider"></span>
      <a href="b">新建文件夹</a><span class="divider"></span>
      <a href="" class="active">电影</a>
    </nav>


##Lists

   	<ul class="list-group">
	  <li class="item">Cras justo odio</li>
	  <li class="item">Dapibus ac facilisis in</li>
	  <li class="item">Morbi leo risus</li>
	  <li class="item">Porta ac consectetur ac</li>
	  <li class="item">Vestibulum at eros</li>
	</ul>	

Another example of list:

    <ul class="list">
        <li>
            <span><img src="img/list-icon-1.jpg" class="img-circle"></span><span class="main"> Item 1 </span>
        </li>
        <li>
            <span><img src="img/list-icon-2.png" class="img-circle"></span><span class="main"> Item 2 </span>
        </li>
    </ul>

Swipe to delete

Tap

##Aside

<nav>
<a><span class="icon-home"></span>Home</a>
<a><span class="icon-setting"></span>Setting</a>
</nav>

##Pagination

##Labels and Badges

Badges 的例子

<a href="#">Inbox <span class="badge">42</span></a>

另一个例子

<ul class="nav nav-pills nav-stacked">
  <li class="active">
    <a href="#">
      <span class="badge pull-right">42</span>
      Home
    </a>
  </li>
  ...
</ul>

##Typography

##Thumbnails

<li><a href="#media"><i class="icon-chevron-right"></i> Media object</a></li>
<li><a href="#alerts"><i class="icon-chevron-right"></i> Alerts</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Message</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Layouts</a></li>
<li><a href=""><i class="icon-chevron-right"></i> Scaffolding</a></li>

##Media object

##Alerts

##Message

##Layouts

pinboard style
timeline

##Scaffolding

#Pull-Refresh

#以下为组合Demo

##Pager 
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

##Settings
<button type="button" class="btn btn-default">
setting
<span class="glyphicon glyphicon-chevron-right"></span>
</button>


##百度搜索框
<form>
<div class="se-box">
<input type="search" class="se-input" value="">
<button type="submit" class="se-btn">百度一下</button>
</div>
</form>

##小说书籍通用排版
<div class="com-book-lis">
<ul>
<li>
<a href="" class="book-lis-link">
<div class="book-img"><img src="http://m.baidu.com/static/wapbook/novel/nocover.png"></div>
<div class="book-cont">
<div class="book-info">
<div class="bname ellipsis">美女总裁俏佳人</div>
<div class="book-detail">
<div class="book-detail-left">
<span class="penname ellipsis">醉酒望明月</span>
</div>
<div class="book-detail-right">
<span class="cate ellipsis">都市传奇</span>
<span class="sep">|</span>
<span class="status ellipsis">完结</span>
</div>
</div>
<div class="read-detail clr">
<span class="read-ico">荐</span>
<span class="read-cont">杀手头子偶遇绝色俏佳人，不占便宜不是人。</span>
</div>
</div>
</div>
</a>
</li>
</ul>
</div>

##loading-加载更多组件
<div class="load_status">
<div class="load_cont">
<div class="load_more ">点击加载更多<span class="load_down_ico"></span></div>
<div class="load_ing " style="display:none"><span class="load_ing_txt">加载中</span><img src="http://m.baidu.com/static/wapbook/genuine/loading.png" title="loading" class="loading_ico"></div>
<div class="load_fail " style="display:none">网络不稳定，请重新加载</div>
<div class="load_end " style="display:none">已经到底了</div>
</div>
</div>


##Loading

	<div class="loading">加载中</div>

加载出错

	<div class="loading loading-fail">网络不给力 <a href="javascript:history.go(0)" class="load_retry">重试</a></div>

##Media

### Audio

提供音频控制组件,具体实例查看 examples/audio-player.html

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

