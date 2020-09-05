jQuery(function($) {
    $("jQuery, div.jquery", document).each(function() {
        src = "fun = function (parent){"+$(this).text()+"}"
        eval(src)
        parent = $(this).parent().each(function() {
	        fun(this)
        })
        $(this).remove()
    })
})

jQuery(document).ready(function($){
  
 nsZoomZoom(); 
  
 $( window ).resize(function() { 
   nsZoomZoom();
 });
  
  
 function nsZoomZoom() {
    htmlWidth = $('html').innerWidth();
    bodyWidth = 1100;
   
    if (htmlWidth > bodyWidth) {
       scale = htmlWidth / bodyWidth; 
    }
    else {
       scale = 1;
    }

    scale *= 100;

    $("body").css('zoom', '' + scale + '%');
 
    // Req for IE9
    //$("body").css('-ms-transform', 'scale(' + scale + ')');
    //$("body").css('transform', 'scale(' + scale + ')');
 } 
    
});