/**
 * take a photo in the mobile phone and return the photo's image data.
 * support ios safari 6+, android.
 */

;
(function(window, $){
    "use strict"; 
   
    var Camera = function(el, callback){
        this.event = null;
        //this.imgType = 'image/png';
        this.imgType = 'image/jpeg';
        var me = this;
        $(el).on('change', function(event){
            me.capture(event);
            callback.apply(me, [event]);
        });
    }

    Camera.prototype = {
        'capture': function(event){
            this.event = event;
            return this;
        },
        'getImage': function(callback){
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

    /*
     * Camera PLUGIN DEFINITION
     */

    $.fn.camera = function ( option ) {
        return this.each(function () {
            var camera = new Camera(this);
            if (typeof option == 'string') camera[option]();
        });
    }

})(window, $);
