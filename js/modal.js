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
