$("document").ready(function(){
    
    /* initiate pugin assigning the desired button labels  */
    $("div.holder").jPages({
        containerID : "itemContainer",
        perPage     : 1,
        first       : false,
        previous    : "span.arrowPrev",
        next        : "span.arrowNext",
        last        : false
    });
    
    //
    $( "[class^='btn0']" ).click(function(event) {
    	$(".flechaRojaIzquierda").css("display", "none")	
    });

    //console.log(tl)
});    