#CSS

##Global Styles

###Page

page 用来显示一个满屏页面的架子.

    <section class="page"></section>

也可用div元素实现

    <div class="page"></div>

##Typography

##Tables

##Forms

##Grids (九宫格)
> @TODO 更新 row 为 grids-row
> @TODO 更新 grid 为 grids-grid

    <div class="grids">
        <div class="row">
            <div class="grid"> First Grid</div>
            <div class="grid"> Second Grid</div>
            <div class="grid"> Third Grid</div>
        </div>
        <div class="row">
            <div class="grid"> Forth Grid</div>
            <div class="grid"> Fiveth Grid</div>
            <div class="grid"> Sixth Grid</div>
        </div>
        <div class="row">
            <div class="grid"> Seventh Grid</div>
            <div class="grid"> Eighth Grid</div>
            <div class="grid"> Nighth Grid</div>
        </div>
    </div>

##Buttons

###Default button:

   	<button type="button" class="btn btn-default">button</button>
    
###Circle button:
    
   	<div class="btn btn-circle">circle</div>

or 

   	<button class="circle">circle</button>

###Square button:

   	<div class="btn btn-square">square</div>

or

    <button class="square">square</button>

###Sizes

	<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>

###Active state

	<button type="button" class="btn btn-default btn-lg active">Button</button>




###ON/OFF button:

##Tips / Alert

    <div class="alert">This is a tips.</div>

##Tags

	<a class="btn btn-default" href="#" role="button">Link</a>
	<button class="btn btn-default" type="submit">Button</button>
	<input class="btn btn-default" type="button" value="Input">
	<input class="btn btn-default" type="submit" value="Submit">

##Images
circle img, polaroid img, rounded img

    <img class="img-circle" src="img/list-icon-1.jpg">
    <img class="img-rounded" src="img/list-icon-1.jpg">
    <img class="img-polaroid" src="img/list-icon-1.jpg">

##Icons 

   	<span class="icon icon-chevron-down"></span> 向下标签 <br>
	<span class="icon glyphicon-chevron-up"></span> 向上标签 <br>
	<span class="icon icon-chevron-left"></span> 向左标签 <br>
	<span class="icon icon-chevron-right"></span> 向右标签 <br>
	<span class="icon icon-separator"></span> 分割线 <br>
	<span class="icon icon-check"></span>  圆形按钮 <br>
	<span class="icon icon-uncheck"></span> 圆形未选中按钮 <br>
	<span class="icon icon-search"></span> 搜索图片 <br>
    <span class="icon icon-ribbon"></span> 绸缎(2.jpg) <br>

##Helper classes

###Close icon

	<button type="button" class="close" aria-hidden="true">&times;</button>

###Carets

	<span class="caret"></span>

##Quick floats

	<div class="pull-left">...</div>
	<div class="pull-right">...</div>

##Clearfix

	<div class="clearfix">...</div>

##Showing and hiding content

	<div class="show">...</div>
	<div class="hidden">...</div>

##Blocks

	<div class="panel panel-default">
	  <div class="panel-body">
	    Basic panel example
	  </div>
	</div>


##Badge
	<span class="badge">read</span>
