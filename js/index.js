$(function(){
	var i = 1;
	$(".searchTxt").click(function(){
		$(".list").css("zIndex","2")
		$(".list").stop().slideToggle();
		return false;
	})
	 
	$(".list li").click(function () {
		$(".list").stop().slideUp();
		if ($(this).find("a").html().length<3) {
			$('.searchTxt').html($(this).find("a").html());
		}		
	})
	$(document).click(function () {
		$(".list").stop().slideUp()
	})
	
	$("#all").click(function(){
		$(".list_item_box input").prop("checked", true);  
	}) 
	
	$("#noall").click(function(){
		$(".list_item_box input").prop("checked", false);
	}) 
	$("#unall").click(function(){
		$(".list_item_box input").each(function () {  
	        $(this).prop("checked", !$(this).prop("checked"));  
	   });
	})
	fun(".tab_title li",".smList ul","hover");
	function fun(sobj,obj,even){
		$(sobj).on(even,function(){
			$(sobj).find('div').removeClass("active");
			$(this).find('div').addClass("active");
			$(obj).removeClass("show");
			var s = $(this).index();
			$(obj).eq(s).addClass("show");
		})
	}
})
