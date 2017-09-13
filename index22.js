	$(".content-list").on("mouseover", "img", function(){
		$(this).stop().animate({"opacity":0.5},500,function(){
			$(this).stop().animate({"opacity":0.7},500)
	
		})
	})
	$(".content-list").on("mouseout", "img", function(){
		$(this).stop().animate({"opacity":1},500)
	})
//	$("img").mouseover(function(){
//		$(this).stop().animate({"opacity":0.5},500,function(){
//			$(this).stop().animate({"opacity":0.7},500)
//		})
//	})