// webkit tap highlight color
// -webkit-tap-highlight-color:
// Overrides the highlight color shown when the user taps a link or a JavaScript clickable element in Safari on iPhone.
//
// This property obeys the alpha value, if specified. If you don’t specify an alpha value, Safari on iPhone applies a default alpha value to the color. To disable tap highlighting, set the alpha value to 0 (invisible). If you set the alpha value to 1.0 (opaque), the element is not visible when tapped.
// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
// http://phonegap-tips.com/articles/essential-phonegap-css-webkit-tap-highlight-color.html

;(function(){
    //@TODO tap 点击延时绑定
    //$(".tap").live('click', function(e){
    //    e.preventDefault();
    //    setTimeout(function(){
            //callback      
    //    },300);
    //});

    //tap highlight
    if($.os.android){
        $(".tap")
            .live('touchstart',function(){
                $(this).data('background', $(this).css('background'));
                $(this).css('background','#D9E9FF')
            }).live('touchend', function(){
                var background = $(this).data('background');
                if(background){
                    $(this).css('background',background);
                }else{
                    $(this).css('background','transparent')
                }
            })
    }
    //@TODO data api
}($, window, document));
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
