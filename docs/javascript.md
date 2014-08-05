---
title: 需要js的组件文档
layout: defaults
descript: 用到Javascript的复杂组件用法
permalink: /javascript.html
previous: components.html
previous_name: 组件文档
---

### Tab

#### 示例1

{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li><a href="#home" data-toggle="tab">Home</a></li>
  <li><a href="#profile" data-toggle="tab">Profile</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home">...</div>
  <div class="tab-pane" id="profile">...</div>
</div>
{% endhighlight %}

#### 示例2

你可以仅使用HTML代码来实现tab切换效果，不需要写一行js代码。你只需要在html标签里标记<b>data-toggle="tab"</b>就能显示 mob样式的tab。                


{% highlight html %}
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
{% endhighlight %}

#### 可调用的方法

{% highlight javascript %}
$().tab
{% endhighlight %}

事件:
<pre>
    - .show
    - .shown
</pre>

{% highlight javascript %}
    $('a[data-toggle="tab"]').on('shown', function (e) {
            e.target // activated tab
            e.relatedTarget // previous tab
    })
{% endhighlight %}


###Modal

#### 示例1

[查看例子](examples/modal.html)

{% highlight html %}
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
{% endhighlight %}

#### 示例2

{% highlight html %}
    <div class="modal-wrapper">
        <div id="offlineTipsDialog" class="modal">
            <div class="modal-body">
                <p class="hilight offline-tip-title">离线提醒</p>
                <p class="subscript offline-tip-text" >本书共1200章，预计<span class="data-size">3M</span></p>
            <div class="btn-confirm"><span class="download-icon"></span>立即下载</div><div class="btn-cancel">取消</div>
        </div>
    </div>
    <div class="modal-backdrop"></div>
{% endhighlight %}

### Carousel

    首页新功能介绍的滚动

### 点击延迟
    移动浏览器因为支持双击事件会有一个点击穿透现象。该组件会给浏览器加一个点击延迟，解决点击穿透现象。

{% highlight html %}
    <a href='test.html' class='delay-tap'>test</a>
{% endhighlight %}


### 返回顶部

{% highlight html %}
    <div class='nav-top'>返回顶部</div>
{% endhighlight %}
