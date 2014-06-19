/**
 * method: 
 *  - html:
 *      data-sidebar = "hide|show|toggle" 
 *  - js:
 *      $(this).sidebar("toggle"|"show"|"hide")
 *
 * fire sidebar-show,sidebar-shown, sidebar-hide event 
 */

;(function ($, window, document) {
    "use strict"; 
    var Sidebar = function(element){
        var $element = $(element);
        this.page = $element.closest(".page");
        this.target = $element.attr("href") || $element.data("target");
    }
    Sidebar.prototype={
        "show": function(){
            $(this.target)
            .removeClass("slideout")
            .addClass("show")
            .addClass("slidein");
            this.page.removeClass("slidein").addClass("slideout");
        },
        "hide": function(){
            $(this.target)
            .removeClass("show")
            .removeClass("slidein")
            .addClass("slideout");
            this.page.removeClass("slideout").addClass("slidein");
        },
        "toggle": function(){
            $(this.target).hasClass("show") ? this.hide() : this.show();
        }
    }

    /*
     * TAB PLUGIN DEFINITION
     */
    $.fn.sidebar = function ( option ) {
        return this.each(function () {
            var sidebar = new Sidebar(this);
            if (typeof option == 'string') sidebar[option]();
        });
    }
    $(document).on('click.tap.data-api', '[data-sidebar="toggle"]', function (e) {
        e.preventDefault();
        $(this).sidebar('toggle');
  });
}($, window, document));

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
    //tap 点击延时
    var tap = function(){
        if (S.now() - this._lastClickTime < 200) {
            return true;
        }
        this._lastClickTime = S.now();
        return false;
    }

    //tap 点击态
    var tapHighlight = function(){
        if (!options.selector) throw Error('Anchor Contructor requires "selector" option.');

        this.options = S.tool.extend({
            context : $('body'),
            hoverClass : '',
            fn : function () {}
        }, options);

        this.timeBeforeStylize  = 15;
        this.timeBeforeTouchEnd = 400;
        this.timer              = null;
        this.startX             = 0;
        this.startY             = 0;
        this.diffX              = 0;
        this.diffY              = 0;
        this.startTime          = 0;
        this.anchor             = null;
        this.lastAnchor         = null;
        this._isFinish          = false;

        this.initialize();
    };

    S.tool.extend(Anchor.prototype, {
        initialize : function () {
            var t = this,
            selector = t.options.selector,
            context = t.options.context,
            hoverClass = t.options.hoverClass;
            // android2.1.x的手机用click模拟
            if (($.os && $.os.android && Number($.os.version)<2.3) || (!S.support.touch && !$.os.ios)){
                context.delegate(selector, 'click', function (e) {
                var anchor = $(this);
                if (hoverClass) {
                    anchor.addClass(hoverClass);
                    setTimeout(function () {
                    t.options.fn.call(anchor[0], e, anchor);
                }, 30);
                setTimeout(function () {
                    anchor.removeClass(hoverClass);
                }, 100);
                } else {
                    t.options.fn.call(anchor[0], e, anchor);
                }
                });
            } else {
                context.delegate(selector, 'touchstart', S.tool.bind(t._touchStart, t));
            }
        },
        _touchStart : function (e) {
            var t = this, hoverClass = t.options.hoverClass;
            // 重新赋值
            t.anchor = $(e.target).closest(t.options.selector);
            t._isFinish = false;
            t.startX = e.touches[0].pageX;
            t.startY = e.touches[0].pageY;
            t.startTime = S.now();
            // 添加样式
            if (hoverClass) {
                t.lastAnchor && t.lastAnchor.removeClass(hoverClass);
                t.lastAnchor = t.anchor;
                t.timer = setTimeout(function () {
                    t.anchor.addClass(hoverClass);
                }, t.timeBeforeStylize);
            }
            t.anchor.on('touchmove', S.tool.bind(t._touchMove, t))
              .on('touchend', S.tool.bind(t._touchEnd, t));
        },
        _touchMove : function (e) {
            var t = this, hoverClass = t.options.hoverClass;
            t.diffX = Math.abs(e.changedTouches[0].pageX - t.startX);
            t.diffY = Math.abs(e.changedTouches[0].pageY - t.startY);
                         if (t.diffX > 10 || t.diffY > 10 ) {
                             t.finish();
                             // 去除样式
                             if (hoverClass) {
                                 t.anchor.removeClass(hoverClass);
                                 clearTimeout(t.timer);
                             }
                         }
                     },
        _touchEnd : function (e) {
                        var t = this;
                        t.diffX = Math.abs(e.changedTouches[0].pageX - t.startX);
                        t.diffY = Math.abs(e.changedTouches[0].pageY - t.startY);
                        t.finish();
                        t.options.hoverClass && t.anchor.removeClass(t.options.hoverClass);
                        if (t.diffX < 10 && t.diffY < 10 && S.now() - t.startTime < t.timeBeforeTouchEnd) {
                            setTimeout(function () {
                                t.options.fn.call(t.anchor[0], e, t.anchor);
                                t.anchor.removeClass(t.options.hoverClass);//补充
                            }, 600);
                        }
                    },
        finish : function () {
                     var t = this;
                     if (t._isFinish) return;
                     t._isFinish = true;
                     t.anchor.off('touchmove').off('touchend');
                 },
        destroy : function () {
                      this.options.context.undelegate(this.options.selector, 'touchstart');
                  },
        clearHover : function () {
            var t = this;
            t.options.hoverClass && t.lastAnchor.removeClass(t.options.hoverClass);
        }
    });

}($, window, document));
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
