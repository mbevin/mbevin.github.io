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
