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
