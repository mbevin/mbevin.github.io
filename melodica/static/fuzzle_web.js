jQuery(function ($) {
	
    $(".menu").each(function() {
        this.src = $(this).attr("src_main")
    })
    $(".menu").hover(function(){
        this.src = $(this).attr("src_alt")
    },function(){
        if ($(this).hasClass(window.current)) return;
        
        this.src = $(this).attr("src_main")
    })
   
    $(".menu.about").click(function(){
        $("#text").html("")
        $("#text").html($(".text_about").clone(true))
        $("div", $("#text")).show()
        $(".menu").each(function() {
            $(this).attr("src",  $(this).attr("src_main"))
        })
        $(".menu.about").attr("src",  $(".menu.about").attr("src_alt"))
        window.current = "about"
        return false;
    })
    $(".menu.support").click(function(){
        $("#text").html("")
        $("#text").html($(".text_support").clone(true))
        $("div", $("#text")).show()
        $(".menu").each(function() {
            $(this).attr("src",  $(this).attr("src_main"))
        })
        $(".menu.support").attr("src",  $(".menu.support").attr("src_alt"))
        window.current = "support"
        return false;
    })
    $(".menu.candy_cane").click(function(){
        $("#text").html("")
        $("#text").html($(".text_candy_cane").clone(true))
        $("div", $("#text")).show()
        $(".menu").each(function() {
            $(this).attr("src",  $(this).attr("src_main"))
        })
        $(".menu.candy_cane").attr("src",  $(".menu.candy_cane").attr("src_alt"))
        window.current = "candy_cane"
        return false;
    })
    $(".menu.about").click()
})

jQuery(function($) {
    $("jQuery", document).each(function() {
        src = "fun = function (parent){"+$(this).text()+"}"
        eval(src)
        parent = $(this).parent().each(function() {
	        fun(this)
        })
        $(this).remove()
    })
})