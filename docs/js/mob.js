/**
 * aside fire toggle 
 * data-toggle sidebar
 */

<<<<<<< HEAD
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
        
=======
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
            console.log(this.target);
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
    $(document).on('click.sidebar.data-api', '[data-toggle="sidebar"]', function (e) {
        console.log("get trigger event");
        e.preventDefault();
        $(this).sidebar('toggle');
  });
}($, window, document));
//  Partly lines from Zepto.js
;(function($){
  if ($.os.ios) {
    var gesture = {}, gestureTimeout;

    function parentIfText(node){
      return 'tagName' in node ? node : node.parentNode;
>>>>>>> f7fe83b0f25004c25002de1633ddf729eed65599
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
