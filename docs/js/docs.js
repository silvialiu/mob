$("code").each(function(){
    var source = this.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
    if($(this).hasClass("showDemo")){
        $(this).after("<iframe data-html='"+this.innerHTML.replace(/\n/g,"")+"' src='phone.html' ></iframe>")
    }
    $(this).after("<pre class='prettyprint'>"+source+"</pre>");
});

$("iframe").each(function(){
    var html = $(this).data("html");
    this.onload=function(){
        var idom = this.contentWindow ? this.contentWindow.document : this.contentDocument;
        idom.getElementById("example").innerHTML=html;
    }
});

