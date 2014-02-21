#轻框架组件模版

##topbar
   	<nav class="navbar navbar-default">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
  	</nav>


##header
   	<div class="header">
	  <h1>Example page header <small>Subtext for header</small></h1>
	</div>


##list
   	<ul class="list-group">
	  <li class="item">Cras justo odio</li>
	  <li class="item">Dapibus ac facilisis in</li>
	  <li class="item">Morbi leo risus</li>
	  <li class="item">Porta ac consectetur ac</li>
	  <li class="item">Vestibulum at eros</li>
	</ul>>	


##icons 
   	<span class="icon icon-chevron-down"></span> 向下标签 <br>
	<span class="icon glyphicon-chevron-up"></span> 向上标签 <br>
	<span class="icon icon-chevron-left"></span> 向左标签 <br>
	<span class="icon icon-chevron-right"></span> 向右标签 <br>

	<span class="icon icon-separator"></span> 分割线 <br>

	<span class="icon icon-check"></span>  圆形按钮 <br>
	<span class="icon icon-uncheck"></span> 圆形未选中按钮 <br>

	<span class="icon icon-search"></span> 搜索图片 <br>
    <span class="icon icon-ribbon"></span> 绸缎(2.jpg) <br>

##buttons 
   	<button type="button" class="btn btn-default">button</button>

##blocks
	<div class="panel panel-default">
	  <div class="panel-body">
	    Basic panel example
	  </div>
	</div>

##loading
	<div class="loading"></div>

##badge
	<span class="badge">read</span>

#refresh

#以下为组合Demo

##pager 
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
	
##settings
	<button type="button" class="btn btn-default">
		setting
		<span class="glyphicon glyphicon-chevron-right"></span>
	</button>



##九宫格
	<div class="grids">
	    <div class="row">
	         <div class="grid">第一格</div>
	         <div class="grid">第二格</div>
	         <div class="grid">第三格</div>
	    </div>
	    <div class="row">
	         <div class="grid">第四格</div>
	         <div class="grid">第五格</div>
	         <div class="grid">第六格</div>
	    </div>
		<div class="row">
	         <div class="grid">第七格</div>
	         <div class="grid">第八格</div>
	         <div class="grid">第九格</div>
	    </div>
	</div>


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

##loading组件
1. page loading 组件

<div class="load_ing"><img src="http://m.baidu.com/static/wapbook/genuine/loading.png" title="loading" class="loading_ico">加载中...</div>
<div class="load_fail">网络不给力 <a href="javascript:history.go(0)" class="load_retry">重试</a></div>

2. 加载更多组件
<div class="load_status">
	<div class="load_cont">
		<div class="load_more ">点击加载更多<span class="load_down_ico"></span></div>
		<div class="load_ing " style="display:none"><span class="load_ing_txt">加载中</span><img src="http://m.baidu.com/static/wapbook/genuine/loading.png" title="loading" class="loading_ico"></div>
		<div class="load_fail " style="display:none">网络不稳定，请重新加载</div>
		<div class="load_end " style="display:none">已经到底了</div>
	</div>
</div>



##toolbar



