;(function(){
    "use strict";
    var SmartBar = function(){
        this.y = window.pageYOffset;  
        this.lastTime = new Date().getTime();
        this.isShow = true;
        this.intervarTime = 300; 
        var me = this;
        $(document).on("touchstart", function(e){
            me.onTouchstart.apply(me, [e])
        });
        $(window).on('scroll', function(e){
            me.handle.apply(me, [e]);
        }, false);
    };
    
    $.extend(SmartBar.prototype, {
        // Bind touch event
        onTouchstart: function(e){
            this.y = window.pageYOffset;
            if (e && e.touches){
                var touch = e.touches[0];
            }else{
                return;
            }
        },
        hide: function(){
            $('.smartbar').hide();
            this.isShow = false;
        },
        show: function(){
            $('.smartbar').show();
            this.isShow = true;
        },
        // Set function running interval.
        checkInterval: function(){
            var thisTime = new Date().getTime();
            if (thisTime - this.lastTime < this.intervarTime){
                return false;
            }
            this.lastTime = thisTime;           
            return true;
        },
        // Check if trigger hidden event
        isTriggerHidden: function(){
            return (this.moveY > 0 && this.isShow);
        },
        // Check if trigger show event
        isTriggerShow: function(){
            return (this.moveY < 0 && Math.abs(this.moveY) > 20 && !this.isShow);
        },
        // Check if action match show/hide bar condition.
        handle: function(e){
            if(!this.checkInterval()) return;    
            this.moveY = window.pageYOffset - this.y;
            if (this.isTriggerHidden()){
                this.hide();
            }else if(this.isTriggerShow()){
                this.show();
            }
        }
    });

    var smartbar = new SmartBar();

})();
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
