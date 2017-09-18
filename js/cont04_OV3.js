$(function(){
	console.log("Hola cont 04!")
	
	$('.cls_not_lert').trigger('click')
	
	$('#btn_tab1').trigger('click')

	$("div.holder").jPages({
        containerID : "itemContainer",
        perPage     : 1,
        first       : false,
        previous    : "span.arrowPrev",
        next        : "span.arrowNext",
        last        : false
    });
})