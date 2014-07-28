/**
 * method: 
 *
 *  - data api:
 *      data-aside = "hide|show|toggle" 
 *  - js:
 *      $(this).aside("toggle"|"show"|"hide")
 *
 * fire aside-show,aside-shown, aside-hide event 
 */

;(function ($, window, document) {
    "use strict"; 
    var Aside = function(element){
        var $btn = $(element);
        this.$el = $($btn.attr("href") || $btn.data("target"));
        if(this.$el.hasClass('aside-push')){

            this.isPush = true;
            var bindEl = this.bindEl = $(this.$el.data("bind"))
                bindEl.addClass('aside-push-obj')
                    .removeClass('aside-push-obj-right')
                    .removeClass('aside-push-obj-left')
                    .removeClass('aside-push-obj-top')
                    .removeClass('aside-push-obj-bottom')

            if (this.$el.hasClass('aside-right')){
                this.bindClass = "aside-push-obj-right"
            }else if (this.$el.hasClass('aside-left')){
                this.bindClass = "aside-push-obj-left"
            }else if (this.$el.hasClass('aside-top')){
                this.bindClass = "aside-push-obj-top"
            }else if (this.$el.hasClass('aside-bottom')){
                this.bindClass = "aside-push-obj-bottom"
            }
            bindEl.addClass(this.bindClass)
        }

    }

    Aside.prototype={
        "show": function(){
            var me = this;
            this.$el
                .removeClass("slideout")
                .addClass("show")
                .addClass("slidein")

            this._apear(this.$el)
            if(this.isPush){
                this.bindEl.removeClass("slideout")
                    .addClass("slidein")
                    .one('click', function(e){
                        me.hide.call(me)                
                    })
                    .on('touchmove', this.bindEl, this._preventMove)
         
            } else { // if $el has class aside-overlay
                this._addBackdrop() 
            }
        },
        "hide": function(){
            this.$el
                .removeClass("slidein")
                .addClass("slideout")
                .removeClass("show")

            this._disapear(this.$el)
            if(this.isPush){
                this.bindEl.removeClass("slidein")
                    .addClass("slideout")
                    .off('touchmove', this.bindEl, this._preventMove)
            }else{ // if $el has class aside=-overlay
                this._removeBackdrop()
            }
        },
        "toggle": function(){
            this.$el.hasClass("show") ? this.hide() : this.show();
        },
        "_disapear": function(el){
                setTimeout(function(){
                    el.addClass('disapear');
                },300); //trick for side bar 
        },
        "_apear": function(el){
                el.removeClass('disapear');
        },
        "_addBackdrop": function(){
            var me = this;
            this.$el.after("<div class='aside-backdrop'></div>")            
            this.$el.siblings('.aside-backdrop').one('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                this.remove();
                me.hide();
            })
        },
        "_removeBackdrop": function(){
            this.$el.siblings('.aside-backdrop').remove();
        },
        "_preventMove" :function(e){
            e.preventDefault()
        }
    }

    /*
     * ASIDE PLUGIN DEFINITION
     */

    $.fn.aside = function ( option ) {
        return this.each(function () {
            var aside = new Aside(this);
            if (typeof option == 'string') aside[option]();
        });
    }

    /*
     * ASIDE DATA API
     */

    $(document).on('click.data-api', '[data-aside="toggle"]', function (e) {
        e.preventDefault();
        $(this).aside('toggle');
    });

}($, window, document));

/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */

;(function (window, document) {
    $(".aside").on("tap",function(){

    });
}(window, document));
;(function ($, window, document) {
    "use strict"; // jshint ;_;
    /**
     * 弹出层和对话框的基础组件  
     * 示例:
     *      $(".tips").modal();
     */
    $.fn.Modal = function(options){
        
    }
    /**
     * 对话框
     * 示例:
     *      $(".dialog").dialog();
     */
    $.fn.Dialog = function(options){
        var me = this;                                                                                 
        this.$el = options.el || $("#dialogPanel");                                                                  
        if (options){                                                                                  
            if (options.$el) this.$el = $(options.$el);                                                
            if (options.confirm) this.confirm = options.confirm;                                       
        }                                                                                              
        this.$el.find(".btn-confirm").bind("click",function(){                                         
            if(me.confirm){                                                                            
                me.confirm.call(me,this);                                                              
            }                                                                                          
        });                                                                                            
        this.$el.find(".btn-cancel").bind("click",function(){                                          
            me.hide();                                                                                 
        }); 
    }

    $.fn.Dialog.prototype = {                                                                         
        pos : function () {                                                                            
            this.$el.css({                                                                             
                top     : window.pageYOffset + (window.innerHeight - 85)*0.5 + 'px',                   
                left    : (window.innerWidth - 216)*0.5 + 'px'                                         
            })                                                                                         
        },                                                                                             
        show : function(options){                                                                      
            if(this.showed) return;                                                                    
            this.pos();                                                                                
            if(options.msg){                                                                           
                $(".dialog-tip",this.$el).text(options.msg);                                           
            }                                                                                          
            this.$el.addClass("show");                                                                 
            this.showed = true;                                                                        
        },                                                                                             
        hide : function(){                                                                             
            if(!this.showed) return;                                                                   
            this.$el.removeClass("show");                                                              
            this.showed = false;                                                                       
        }                                                                                              
    };          

}($, window, document));
/**
 * nav:
 *     (class)
 *     data-target href
 *
 * content:
 *     (class) tab-content tab-pane
 * 
 * methods:
 *     show
 *     activate
 *
 * @todo 
 *  动画 
 *  绑定 data-api 
 *  nav-tab 不在 tab-pane中时 nav-tab的切换
 */
;(function ($, window, document) {
    
    "use strict"; 

    /* TAB CLASS DEFINITION */
    var Tab = function (element) {
        this.element = $(element);
    }

    Tab.prototype = {
        show: function () {
            var $this = this.element,
                target_selector = $this.attr('data-target') || $this.attr('href'),
                target = target_selector ? $(target_selector) : $this,
                container = target.closest('.tab-content');

            if ( $this.hasClass('active') ) return;
                
            var previous = container.find('.tab-pane.active');
            $this.trigger('show', [previous]);
            this.activate(target, container, function () {
                $this.trigger('shown', [previous]);
            })
        },

        activate: function ( element, container, callback) {
            var $active = container.find('.tab-pane.active'),
                transition = callback && $active.hasClass('fade');
            function next() {
                $active.removeClass('active');
                element.addClass('active');
                if (transition) {
                  element[0].offsetWidth; // reflow for transition
                  element.addClass('in');
                } else {
                  element.removeClass('fade');
                }
                callback && callback();
            }
            transition ? $active.one(transition.end, next) : next();
            $active.removeClass('in');
        }
  }

 /*
  * TAB PLUGIN DEFINITION
  */
  $.fn.tab = function ( option ) {
    return this.each(function () {
      var tab = new Tab(this);
      if (typeof option == 'string') tab[option]();
    })
  }

 /*
  * TAB DATA-API
  */

  $(document).on('click.tab.data-api', '[data-toggle="tab"]', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

}($, window, document));
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */

;(function ($, window, document) {
    "use strict"; // jshint ;_;
    /**
     * 弹出层和对话框的基础组件  
     * 示例:
     *      $(".model").modal();
     */
    var Model = function(options){
        var me = this;
        if (!options) return;
        if (typeof options == 'string'){
            this.el = options;
            this.$el = $(this.el);
        }else{
            this.$el = options.$el || $(options.el);
            this.confirm = options.confirm;                                       
        }
        this.$el.find(".btn-confirm").bind("click",function(){
            if(me.confirm){
                me.confirm.call(me,this);
            }
        }); 
        this.$el.find(".btn-cancel").bind("click",function(){
            me.hide(); 
        });
    };

    Model.prototype = {
        pos : function () {
            var dialog = this.$el.find('.modal-dialog');
            console.log(dialog);
                dialog.css({
                    //top     : window.pageYOffset + (window.innerHeight - 85)*0.5 + 'px',
                    //left    : (window.innerWidth - 216)*0.5 + 'px'
                })
        },
        show : function(options){ 
            if(this.showed) return;
            this.pos();
            if(options && options.msg){
                $(".dialog-tip",this.$el).text(options.msg);
            }
            this.$el.removeClass("hide").addClass("show");
            this.showed = true;
            $('body').append('<div class="modal-backdrop"></div>');
        }, 
        hide : function(){
            if(!this.showed) return;
            this.$el.removeClass("show").addClass("hide");
            $('.modal-backdrop').remove();
            this.showed = false;
        }
    };

    $.fn.modal = function(options){
        var modal = new Model(options);
        return modal
    }

}($, window, document));

/**
 * nav:
 *     (class)
 *     data-target href
 *
 * content:
 *     (class) tab-content tab-pane
 * 
 * methods:
 *     show
 *     activate
 *     hide
 *
 * @todo 
 *  动画 
 *  绑定 data-api 
 *  nav-tab 不在 tab-pane中时 nav-tab的切换
 *  滑动切换
 */
;(function ($, window, document) {
    
    "use strict"; 

    /* TAB CLASS DEFINITION */
    var Tab = function (element) {
        this.element = $(element);
    }

    Tab.prototype = {
        show: function () {
            var $this = this.element,
                target_selector = $this.attr('data-target') || $this.attr('href'),
                target = target_selector ? $(target_selector) : $this,
                container = target.closest('.tab-content');

            if ( $this.hasClass('active') ) return;
                
            var previous = container.find('.tab-pane.active');
            $this.trigger('show', [previous]);
            this.activate(target, container, function () {
                $this.trigger('shown', [previous]);
            })
        },

        activate: function ( element, container, callback) {
            var $active = container.find('.tab-pane.active'),
                transition = callback && $active.hasClass('fade');
            function next() {
                $active.removeClass('active');
                element.addClass('active');
                if (transition) {
                  element[0].offsetWidth; // reflow for transition
                  element.addClass('in');
                } else {
                  element.removeClass('fade');
                }
                callback && callback();
            }
            transition ? $active.one(transition.end, next) : next();
            $active.removeClass('in');
        }
  }

 /*
  * TAB PLUGIN DEFINITION
  */
  $.fn.tab = function ( option ) {
    return this.each(function () {
      var tab = new Tab(this);
      if (typeof option == 'string') tab[option]();
    })
  }

 /*
  * SWIPE PLUGIN
  */

 /*
  * TAB DATA-API
  */

  $(document).on('click.tab.data-api', '[data-toggle="tab"]', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

}($, window, document));

/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */

// webkit tap highlight color
// -webkit-tap-highlight-color:
// Overrides the highlight color shown when the user taps a link or a JavaScript clickable element in Safari on iPhone.
//
// This property obeys the alpha value, if specified. If you don’t specify an alpha value, Safari on iPhone applies a default alpha value to the color. To disable tap highlighting, set the alpha value to 0 (invisible). If you set the alpha value to 1.0 (opaque), the element is not visible when tapped.
// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
// http://phonegap-tips.com/articles/essential-phonegap-css-webkit-tap-highlight-color.html

;(function(){
    // tap 点击延时绑定
 
    //tap highlight
    if($.os.android){
        $(".tap")
            .live('touchstart',function(){
                $(this).data('background', $(this).css('background'));
                $(this).css('background','#D9E9FF')
            }).live('touchend', function(){
                var background = $(this).data('background');
                if(background){
                    $(this).css('background',background);
                }else{
                    $(this).css('background','transparent')
                }
            })
    }

    //data api
    
    $(document).on('click.tap', '[data-url]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = $(this).data('url');
        setTimeout(function(){
            location.href = url;
        },300);
    });

    $(document).on('click.tap', '[data-openurl]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = $(this).data('openurl');
        setTimeout(function(){
            window.open(url);
        },300);
    });

}($, window, document));
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
