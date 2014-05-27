#需要js的components

##Tab
###示例1

	<!-- Nav tabs -->
	<ul class="nav nav-tabs">
	  <li><a href="#home" data-toggle="tab">Home</a></li>
	  <li><a href="#profile" data-toggle="tab">Profile</a></li>
	</ul>
	
	<!-- Tab panes -->
	<div class="tab-content">
	  <div class="tab-pane active" id="home">...</div>
	  <div class="tab-pane" id="profile">...</div>
	</div

###示例2

你可以仅使用HTML代码来实现tab切换效果，不需要写一行js代码。你只需要在html标签里标记<b>data-toggle="tab"</b>就能显示 mob样式的tab。                

    <nav class="navbar">
        <a href="#tab-1" data-toggle="tab"> tab 1 </a>
        <a href="#tab-2" data-toggle="tab"> tab 2 </a>
        <a href="#tab-3" data-toggle="tab"> tab 3 </a>
        <a href="#tab-4" data-toggle="tab"> tab 4 </a>
        <a href="#tab-5" data-toggle="tab"> tab 5 </a>
    </nav>
    <div class="tab-content">
        <section id="tab-1" class="tab-pane">
            tab 1
        </section>
        <section id="tab-2" class="tab-pane">
            tab 2
        </section>
        <section id="tab-3" class="tab-pane">
            tab 3
        </section>
        <section id="tab-4" class="tab-pane">
            tab 4
        </section>
        <section id="tab-5" class="tab-pane">
            tab 5
        </section>
    </div>


####可调用的方法

    $().tab

事件:
    - .show
    - .shown

    $('a[data-toggle="tab"]').on('shown', function (e) {
            e.target // activated tab
            e.relatedTarget // previous tab
    })


##Modal

###示例1
	<!-- Button trigger modal -->
	<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	  Launch demo modal
	</button>
	
	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
	      </div>
	      <div class="modal-body">
	        ...
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->



###示例2

        <div id="offlineTipsDialog" class="modal">
            <h1>离线提醒</h1>
            <p>本书共1200章，预计<span class="data-size"></span></p>
            <button>立即下载</button><button>取消</button>
        </div>

        <div id="downloadSearchboxDialog" class="modal">
            <span>X</span>
            <h1>使用百度客户端</h1>
            <p>提升阅读体验，直达海量小说</p>
            <p>请安装最新版</p>
            <button>立即下载</button>
        </div>
        <button onclick='$("modal").modal()'>Modal</button>





##Carousel
    首页新功能介绍的滚动

##Webapp
    载入时向上滚动

