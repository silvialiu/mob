;
(function ($, window, document) {
    "use strict"; // jshint ;_;
    var PullRefresh = function(options){
        var me = this;
        this.heightRange = 40;
        this.animationSpeed = 8;
        this.animationDuration = 80;
        this.done = false;
        this.startPos = {x: 0 , y: 0};
        $(document).on("touchstart", function(e){
            me.onTouchstart.apply(me, [e]);
        })
        .on("touchmove", function(e){
            console.log(e);
            me.onTouchmove.apply(me, [e]);
        })
        .on("touchend", function(e){
            me.onTouchend.apply(me, [e]);
        });
        if(options){
            this.doneFunc = options.done;
        }
        this.time = 0;
    }
    
    $.extend(PullRefresh.prototype, {
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
            if (e && e.touches){
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
            console.log(this.pos.y, this.startPos.y, this.pos.y - this.startPos.y );
            if (this.pos.y - this.startPos.y < 6) {
                return;
            }
            var top_ = parseInt($(".page").css('top')) || 0;
            if( top_ < this.heightRange){
                $(".page").css('top', top_ + this.animationSpeed);
                return;
            }else{
                this.done = true;
                return;
            }
        },
        onTouchend: function(e){
            if(this.done && this.doneFunc){
                this.finishPull();
                this.loading();
                this.doneFunc.call(this);
            } else {
                this.cancel();
            }
        },
        finishPull: function(){
             $(".pull-refresh-icon").addClass('finish')// change icon style
        },
        loading: function(){
             $(".pull-refresh-loading").show();
        },
        back: function(){
            $(".page").css('top', 0);
            $(".pull-refresh-loading").hide();
            $(".pull-refresh-icon").removeClass('finish')// change icon style       
        },
        cancel: function(){
            $(".page").css('top', 0);
        }
    });

    $.fn.pullRefresh = function(options){
        var done;
        if (typeof options == "function"){
            done = options;
            options = {
                "done": done
            }
        }
        var pullRefresh = new PullRefresh(options);
        return pullRefresh;
    }

}($, window, document));
