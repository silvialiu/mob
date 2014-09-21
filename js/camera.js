//take a photo in the mobile phone and return the photo's image data.
//support ios safari 6+, android.

//////////////////////////////////////////// view model
;
(function(window, $){
function Snap(conf){
    var me = this;
    this.conf = conf || {};
    this.os = null;
    this.camera = new Camera();
    this.checkEnv();
    this.maskEl="#mask";
    this.action = 'vis.topgen';
    this.handlers = {
        'self.cat': function(){
            if(typeof detector != undefined){
                detector.abortCurrent();
            }
            if(this.os == 'ios'){
                $("#progress").text('猫脸识别暂不支持ios,请尝试其它功能');
            }else{
                detector.detectCats();
            }
        },
        'self.more': function(){
            if(typeof detector != undefined){
                detector.abortCurrent();
            }
            showMoreResult();
        },
        'vis.flower': function(){
            if(typeof detector != undefined){
                detector.abortCurrent();
            }
            var canvas = $("#preview").get(0);
            var imgData = canvas.toDataURL("image/jpeg"); 
            me.send(imgData);
        },
        'vis.topgen': function(){
            if(typeof detector != undefined){
                detector.abortCurrent();
            }
            var canvas = $("#preview").get(0);
            var imgData = canvas.toDataURL("image/jpeg"); 
            me.send(imgData);
        }
    }
}

Snap.prototype = {
    'snap': function(event){
        $(this.conf.snap_image).trigger('click');
    },
    'localSnap': function(event){
        $(this.conf.local_snap_image).trigger('click');
    },
    'detect': function(event, first){
        var me = this;
        this.step.snap.end();
        this.maskShow();
        this.step.detect.start();
        var img = this.camera.getImage(function(img){
            if(first){
                drawToCanvas(img);
            }
            me.handlers[me.action]();
            setTimeout(function(){
                me.maskHide();
                if(me.resultCallback){
                    me.resultCallback();
                }
            }, 1000);
        });

    },
    'checkEnv': function(){
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            this.os = "ios";
        }   
    },
    'bindEvents': function(){
        var me = this,
        handling = false;
        $(this.conf.snap_btn).on('click', function(event){
            me.snap.call(me, event)
        });
        
        $(this.conf.local_snap_btn).on('click', function(event){
            me.localSnap.call(me, event)
        });

        $(this.conf.snap_image).on('change', function(event){
            me.camera.capture(event);
            me.detect.call(me, event, true);
        });

        $(this.conf.local_snap_image).on('change', function(event){
            me.camera.capture(event);
            me.detect.call(me, event, true);
        });
    },
    'bindClickTo': function(ele){
        this.conf.snap_btn = ele;
        return this;
    },
    'bindLocalSnapTo': function(ele){
        this.conf.local_snap_btn = ele;
        return this;
    },
    'setCameraInput': function(ele){
        this.conf.snap_image = ele;
        return this;
    },
    'setLocalInput': function(ele){
        this.conf.local_snap_image = ele;
        return this;
    },
    'setTabs': function(el){
        var me = this;
        $(el).on('click', function(event){
            me.action = $(this).data("action");
            me.detect(event);
        });
        return this;
    },
    'start': function(){
        this.bindEvents();
        return this;
    },
    'step': {
        'snap': {
            'start': function(){
                return this.step;
            },
            'end': function(){
                $("#camera").addClass("hide");
                return this.step;
            }
        },
        'detect': {
            'start': function(){
                $("#detect").removeClass("hide");
                return this.step;
            },
            'end': function(){
                return this.step;
            }
        }
    },
    'send': function(img){
        var options = {
            img : img
        }
        var me = this;
        $.post('/api/' + this.action , options, function(res){
            //console.log(res);
            switch(me.action){
                case 'vis.topgen':
                    showVisTopgenResult(res);
                    break;
                case 'vis.flower':
                    showVisFlowerResult(res);
                    break;
            }
        }, 'json')
    },
    'maskShow': function(){
        $(this.maskEl).show();
        return this;
    },
    'maskHide': function(){
        $(this.maskEl).hide();
        return this;
    },
    'onReady': function(callback){
        this.resultCallback = callback;
        return this;
    }
}

var createSnap = function(){
    return new Snap();
}

///////////////////////////////////////////////////// detector model

var showVisTopgenResult = function(data){
    if(!data 
        || !data.status 
        || !data.result 
        || !data.result.GENERAL_CLASS 
        || !data.result.GENERAL_CLASS.length){
        $("#progress").text('抱歉，没有找到与图片相关的内容');
    }else{
        var result = data.result.GENERAL_CLASS;
        var msg = "";
        for (var i = 0; i < result.length; i++){
            var item = result[i];
            var slices = item.name.split("-");
            for (var j = 0; j < slices.length; j++){
                var sub_item = slices[j];
                msg += "<a href='http://m.baidu.com/s?word=" + sub_item + "&st=11104i&ts=2164184&sa=ib&tn=iphone&ss=11&ix=461%25' target='_blank'>" + sub_item + '</a>';
            }
        }
        $("#progress").html('您要找的是不是：<br>' + msg);
    }
}

var showVisFlowerResult = function(data){
    if(!data 
        || !data.status 
        || !data.result 
        || !data.result.FLOWER_INFO 
        || !data.result.FLOWER_INFO.length){
        $("#progress").text('抱歉，没有找到与图片相关的花');
    }else{
        var result = data.result.FLOWER_INFO;
        var msg = "";
        var bdImgMsg = "";
        for (var i = 0; i < result.length; i++){
            var item = result[i];
            msg += "<a href='http://m.baidu.com/s?word=" + item.name + "&st=11104i&ts=2164184&sa=ib&tn=iphone&ss=11&ix=461%25' target='_blank'>" + item.name + '</a>';
            bdImgMsg += "<a href='http://m.baidu.com/img?tn=bdidxiphone#!/search/" + item.name + "' target='_blank'>" + item.name + '</a>';
        }
        $("#progress").html('<p>图片中的花可能是：</p><p>' + msg + '</p><p>看看相似图片：</p><p>' + bdImgMsg + '</p>');
    }
}

var showMoreResult = function(){
        $("#progress").html('更多功能即将上线<br>敬请期待!');
}

//////////////////////////////////////////////////////  camrea model

var Camera = function(){
    this.event = null;
}

Camera.prototype = {
    'capture': function(event){
        this.event = event;
        //this.imgType = 'image/png';
        this.imgType = 'image/jpeg';
        return this;
    },
    'getImage': function(callback){                         // @API
        return this.getImageByUrl(callback)
            || this.getImageByFileRead(callback)
    },
    'getImageByUrl': function(callback){
        var url = this.getUrl();
        var img = new Image();
        img.src = url;
        img.onload = function() {
            callback(img)
        }
        return img
    },
    'getImageByFileRead': function(){
        var file = this.getFile(this.event);
        var fileReader = new FileReader();
        var img = new Image();
        fileReader.onload = function (event) {
            img.src = event.target.result;
        };
        fileReader.readAsDataURL(file);
        return img;
    },
    'getData': function(){                     // @API
        return this.getDataByUrl() 
            || this.getDataByFileRead();
    },
    'getDataByUrl': function(){
        var canvas = this.getCanvasByUrl();
        return canvas.toDataURL(this.imgType) || null;
    },
    'getDataByFileRead': function(){
        var canvas = this.getCanvasByFileRead();
        return canvas.toDataURL(this.imgType) || null;
    },
    'getCanvas': function(){                       // @API
        return this.getCanvasByUrl() 
            || this.getCanvasByFileRead();
    },
    'getCanvasByUrl': function(){
        var file = this.getFile();
        var URL = window.URL || window.webkitURL;
        var imgURL = URL.createObjectURL(file);
        var canvas = document.createElement("canvas");
        canvas.src = imgURL;
        return canvas; 
    },
    'getCanvasByFileRead': function(){
        var file = this.getFile();
        var fileReader = new FileReader();
        var canvas = document.createElement("canvas");
        fileReader.onload = function (event) {
            canvas.src = event.target.result;
        };
        fileReader.readAsDataURL(file);
        return canvas
    },
    'getFile':function(){
        var files = this.event.target.files,
            file;
            if (files && files.length > 0) {
                file = files[0];
            }else{
                return null;
            }
        return file;         
    },
    'getUrl': function(){
        var file = this.getFile();
        var URL = window.URL || window.webkitURL;
        var imgURL = URL.createObjectURL(file);
        return imgURL;
    }
}
})(window, $);
