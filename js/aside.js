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
    }

    Aside.prototype={
        "show": function(){
            var me = this;
            this.$el
                .removeClass("slideout")
                .addClass("show")
                .addClass("slidein")
                .after("<div class='aside-backdrop'></div>")            
            this.$el.siblings('.aside-backdrop').bind('click', function(){
                this.remove();
                me.hide();
            })

 //           if(this.$el.hasClass('aside-push')){
 //               this.$el.closest(".page")
 //                   .removeClass("slidein")
  //                  .addClass("slideout");
   //         }
        },
        "hide": function(){
            this.$el
                .removeClass("show")
                .removeClass("slidein")
                .addClass("slideout");

            this.$el.siblings('.aside-backdrop').remove();

     //       if(this.$el.hasClass('aside-push')){
    //            this.$el.closest(".page")
     //               .removeClass("slideout")
      //              .addClass("slidein");
       //     }
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
