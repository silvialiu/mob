/**
 * method: 
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

            if(this.$el.hasClass('aside-push')){
                this.bindEl.removeClass("slideout")
                    .addClass("slidein")
                    .one('click', function(){
                        me.hide.call(me)                
                    })
                    
            } else { // if $el has class aside-overlay
                this.$el.after("<div class='aside-backdrop'></div>")            
                this.$el.siblings('.aside-backdrop').bind('click', function(){
                    this.remove();
                    me.hide();
                })
            }

        },
        "hide": function(){
            this.$el
                .removeClass("slidein")
                .addClass("slideout")
                .removeClass("show")

            if(this.$el.hasClass('aside-push')){
                this.bindEl.removeClass("slidein")
                    .addClass("slideout")
            }else{ // if $el has class aside=-overlay
                this.$el.siblings('.aside-backdrop').remove();
            }

        },
        "toggle": function(){
            this.$el.hasClass("show") ? this.hide() : this.show();
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
