;
(function ($, window, document) {
    "use strict"; // jshint ;_;
    var PullToRefresh = function(options){
        var me = this;
        this.heightRange = 40;
        this.animationDuration = 80;
        this.done = false;
        this.startPos = {x: 0 , y: 0};
        this.time = 0;
        this.pulledClassName = "pull-to-refresh-status-pulled";
        this.loadingClassName = "pull-to-refresh-status-loading";
        if(options){
            $.extend(this, options);
        }
        $(document).on("touchstart", function(e){
            me.onTouchstart.apply(me, [e]);
        })
        .on("touchmove", function(e){
            me.onTouchmove.apply(me, [e]);
        })
        .on("touchend", function(e){
            me.onTouchend.apply(me, [e]);
        });
    }
    
    $.extend(PullToRefresh.prototype, {
        onTouchstart: function(e){
            if (e && e.touches){
                var touch = e.touches[0];
            }else{
                return;
            }
            this.startPos = { 
                'x': touch.pageX,
                'y': touch.pageY
            }
            this.time = new Date().getTime();
            this.done = false;
        },
        onTouchmove: function(e){
            if (e && e.touches && e.touches.length > 0){
                var now = new Date().getTime();
                if ((now - this.time) < this.animationDuration){
                    return;
                }else{
                    this.time = now;
                }
                var touch = e.touches[0];
            }else{
                return;
            }
            this.pos = {
                'x': touch.pageX,
                'y': touch.pageY
            }
            var scrollY = this.pos.y - this.startPos.y
            if ( scrollY < 6) {
                return;
            }

            var top_ = parseInt(this.bind.css('top')) || 0;
            if( top_ < this.heightRange){
                this.bind.css('top', scrollY > this.heightRange ?
                        this.heightRange : scrollY);
                return;
            }else{
                this.done = true;
                $(".pull-to-refresh").addClass(this.pulledClassName)// change icon style
                return;
            }
        },
        onTouchend: function(e){
            if(this.done && this.callback){
                this.loading();
                this.callback.call(this);
            } else {
                this.cancel();
            }
        },
        loading: function(){
            $(".pull-to-refresh").removeClass(this.pulledClassName)// change icon style
                .addClass(this.loadingClassName)
        },
        back: function(){
            this.bind.css('top', 0);
            $(".pull-to-refresh").removeClass(this.pulledClassName)// change icon style       
                .removeClass(this.loadingClassName)
        },
        cancel: function(){
            this.back();
        }
    });

    $.fn.pullToRefresh = function(options){
        var callback;
        if (typeof options == "function"){
            callback = options;
        }
        var bind = this.parent('.pullable');
        options = {
            "callback": callback,
            "target": this,
            "bind": bind
        }

        var pullToRefresh = new PullToRefresh(options);
        return pullToRefresh;
    }

}($, window, document));
