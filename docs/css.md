#CSS

##Global Styles

###Container

###Page

page 用来显示一个满屏页面的架子.

    <section class="page"></section>

也可用div元素实现

    <div class="page"></div>

###Content
content 用来表示page中navbar, topbar,aside以外的主要内容

###Aside


###Topbar

###Bottombar


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
