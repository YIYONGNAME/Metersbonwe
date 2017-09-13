//链接公用文件	
	$("#box-top").load("../index22.html .box-top",function(){
		$(".showpull").on("mouseenter",".lili",function(){
			
			console.log( $(".showpull>li").eq(1) )
//			alert($(this).index())
			$("#son-pull").show()
		}).on("mouseleave",function(){
			$("#son-pull").hide()
		})
		$("#son-pull").on("mouseleave",function(){
			$("#son-pull").hide()
		})
		
	})
	
	
	
	
	$("#content-wrap").load("../index22.html .content-list",function(){
		$("#content-wrap").on("mouseover","img",function(){
			$(this).stop().animate({"opacity":0.5},500,function(){
				$(this).stop().animate({"opacity":0.8},500)
			})
		})
		$("#content-wrap").on("mouseout", "img", function(){
			$(this).stop().animate({"opacity":1},500)
		})
	})
	
	
	$("#footer-wrap").load("../index22.html .footer")
/*-------------------------------轮播图---------------*/
		var timer=setInterval(aotuPlay,2000)
		var index=0;
		var flag=null;
		function aotuPlay(){
			index++;
			if(index ==$(".main-top-center img").size()){
				index=0;
			}
			$(".main-top-center img").eq(index).stop().animate({"opacity":1},500).siblings("img").animate({"opacity":0},500);
			$(".main-top-center li").eq(index).css({
													"border-top":"2px solid red",
													"margin-top":"2px"
													}).siblings("li").css({
														"border-top":"",
													})
				return index;
		}
	
/*-------------------------------点击控制图片的运动---------------*/
		$(".main-top-center").on("mouseenter",function(){
			$("#leftgo").show()
			$("#rightgo").show()
			clearInterval( timer)
			$(".main-top-center img").eq(index).stop().animate({"opacity":0.5},700,function(){
				$(".main-top-center img").eq(index).stop().animate({"opacity":0.8},700)
			})
			
		}).on("mouseleave",function(){
			$("#leftgo").hide()
			$("#rightgo").hide()
			timer=setInterval(aotuPlay,2000)
			$(".main-top-center img").eq(index).stop().animate({"opacity":1},700)
		})
	
		$("#leftgo").on("click",function(){
			index--;
			if(index==-1){
				index=$(".main-top-center img").size()-1;
			}
				$(".main-top-center img").eq(index).stop().animate({"opacity":1},500).siblings("img").animate({"opacity":0},500);
				$(".main-top-center li").eq(index).css({
														"border-top":"2px solid red",
														"margin-top":"2px"
														}).siblings("li").css({
															"border-top":"",
														});
		});

		$("#rightgo").on("click",function(){
//			clearInterval( timer)
			index++;
			if(index==$(".main-top-center img").size()){
				index=0;
			}
			$(".main-top-center img").eq(index).stop().animate({"opacity":1},500).siblings("img").animate({"opacity":0},500);
			$(".main-top-center li").eq(index).css({
													"border-top":"2px solid red",
													"margin-top":"2px"
													}).siblings("li").css({
														"border-top":"",
													});
		});



//图片滑动
	$(".go-left").click(function(){
		
		$(".slide-roll").animate({"left":-1200},1000)
	})
	
	$(".go-right").click(function(){
		
		$(".slide-roll").animate({"left":0},1000)
	})
	
//小火箭
	$(window).scroll(function(){
		var sTop=$(document).scrollTop();
		if(sTop>400){
			$(".go-top").css("display","block")
		}
		if(sTop<400){
			$(".go-top").css("display","none")
		}
		$(".go-top").click(function(){
			
			$(".go-top").css("display","none")
			$("body,huml").animate({"scrollTop":0},1000,function(){
				$("body,huml").scrollTop=""
			})
		})
	})


//请求json文件给女生馆添加数据
	$(function(){
		$.ajax({
			type:"get",
			url:"index.json",
			success: function(res){
			var str="";
			var arr =res.girl.small;
			for(var i in arr){
				//var ch=res.girl.small;
				//console.log(arr[i])
				//console.log( $("ch").eq.src )
				
				
				str=`<div class="main-center-boy">
				<a href="#" style="position: absolute; width: 240px; height: 185px; top: 0px; left: 0px; opacity: 1;"><img src="indeximg/${arr[0].src}" style="display: block; width:100%; height: 100%;"/></a>
				<div class="main-center-boy-left">
					<a href="#" style="position: absolute; top: 13px; left: 20px; opacity: 1;">${arr[0].name}</a>
					<a href="#" style="position: absolute; top: 13px; left: 130px; opacity: 1;">${arr[1].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 20px; opacity: 1;">${arr[2].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 130px; opacity: 1;">${arr[3].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 20px; opacity: 1;">${arr[4].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 130px; opacity: 1;">${arr[5].name}</a>
				</div>
				
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:0px; opacity: 1;"><img src="${arr[0].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:120px; opacity: 1;"><img src="${arr[1].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:0px; opacity: 1;"><img src="${arr[2].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:120px; opacity: 1;"><img src="${arr[3].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:0px; opacity: 1;"><img src="${arr[4].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:120px; opacity: 1;"><img src="${arr[5].src1}" style="display: block; width:100%; height: 100%;"/></a>


				<a href="#" style="position: absolute; width: 240px; height: 480px; top: 0px; left: 240px; opacity: 1;"><img src="indeximg/${arr[1].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 480px; height: 240px; top: 0px; left: 480px; opacity: 1;"><img src="indeximg/${arr[2].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 0px; right: 0px; opacity: 1;"><img src="indeximg/${arr[3].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 480px; opacity: 1;"><img src="indeximg/${arr[4].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 720px; opacity: 1;"><img src="indeximg/${arr[5].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 960px; opacity: 1;"><img src="indeximg/${arr[6].src}" style="display: block; width:100%; height: 100%;"/></a>
			</div>`
			
			
			}
		$(".main-center-girl").html(str );
//请求json文件给潮牌馆添加数据			
			var html="";
			var brr =res.fashion.small;
			for(var i in brr){
				//var ch=res.girl.small;
				//console.log(brr[i])
				//console.log( $("ch").eq.src )	
				
				html=`<div class="main-center-boy">
				<a href="#" style="position: absolute; width: 240px; height: 185px; top: 0px; left: 0px; opacity: 1;"><img src="indeximg/${brr[0].src}" style="display: block; width:100%; height: 100%;"/></a>
				<div class="main-center-boy-left">
					<a href="#" style="position: absolute; top: 13px; left: 20px; opacity: 1;">${brr[0].name}</a>
					<a href="#" style="position: absolute; top: 13px; left: 130px; opacity: 1;">${brr[1].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 20px; opacity: 1;">${brr[2].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 130px; opacity: 1;">${brr[3].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 20px; opacity: 1;">${brr[4].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 130px; opacity: 1;">${brr[5].name}</a>
				</div>
				
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:0px; opacity: 1;"><img src="${brr[0].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:120px; opacity: 1;"><img src="${brr[1].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:0px; opacity: 1;"><img src="${brr[2].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:120px; opacity: 1;"><img src="${brr[3].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:0px; opacity: 1;"><img src="${brr[4].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:120px; opacity: 1;"><img src="${brr[5].src1}" style="display: block; width:100%; height: 100%;"/></a>


				<a href="#" style="position: absolute; width: 240px; height: 480px; top: 0px; left: 240px; opacity: 1;"><img src="indeximg/${brr[1].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 480px; height: 240px; top: 0px; left: 480px; opacity: 1;"><img src="indeximg/${brr[2].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 0px; right: 0px; opacity: 1;"><img src="indeximg/${brr[3].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 480px; opacity: 1;"><img src="indeximg/${brr[4].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 720px; opacity: 1;"><img src="indeximg/${brr[5].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 960px; opacity: 1;"><img src="indeximg/${brr[6].src}" style="display: block; width:100%; height: 100%;"/></a>
			</div>`
			
			
			}
		$(".main-center-fashion").html(html );
		
//请求json文件给儿童馆添加数据			
			var num="";
			var Arr =res.son.small;
			for(var i in Arr){
				//var ch=res.girl.small;
				//console.log(brr[i])
				//console.log( $("ch").eq.src )	
				
				num=`<div class="main-center-boy">
				<a href="#" style="position: absolute; width: 240px; height: 185px; top: 0px; left: 0px; opacity: 1;"><img src="indeximg/${Arr[0].src}" style="display: block; width:100%; height: 100%;"/></a>
				<div class="main-center-boy-left">
					<a href="#" style="position: absolute; top: 13px; left: 20px; opacity: 1;">${Arr[0].name}</a>
					<a href="#" style="position: absolute; top: 13px; left: 130px; opacity: 1;">${Arr[1].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 20px; opacity: 1;">${Arr[2].name}</a>
					<a href="#" style="position: absolute; top: 46px; left: 130px; opacity: 1;">${Arr[3].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 20px; opacity: 1;">${Arr[4].name}</a>
					<a href="#" style="position: absolute; top: 79px; left: 130px; opacity: 1;">${brr[5].name}</a>
				</div>
				
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:0px; opacity: 1;"><img src="${Arr[0].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 120px; left:120px; opacity: 1;"><img src="${Arr[1].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:0px; opacity: 1;"><img src="${Arr[2].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 60px; left:120px; opacity: 1;"><img src="${Arr[3].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:0px; opacity: 1;"><img src="${Arr[4].src1}" style="display: block; width:100%; height: 100%;"/></a>
				<a href="#" style="position: absolute; width:120px; height:60px;bottom: 0px; left:120px; opacity: 1;"><img src="${Arr[5].src1}" style="display: block; width:100%; height: 100%;"/></a>


				<a href="#" style="position: absolute; width: 240px; height: 480px; top: 0px; left: 240px; opacity: 1;"><img src="indeximg/${Arr[1].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 480px; height: 240px; top: 0px; left: 480px; opacity: 1;"><img src="indeximg/${Arr[2].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 0px; right: 0px; opacity: 1;"><img src="indeximg/${Arr[3].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 480px; opacity: 1;"><img src="indeximg/${Arr[4].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 720px; opacity: 1;"><img src="indeximg/${Arr[5].src}" style="display: block; width:100%; height: 100%;"/></a>
				
				<a href="#" style="position: absolute; width: 240px; height: 240px; top: 240px; left: 960px; opacity: 1;"><img src="indeximg/${Arr[6].src}" style="display: block; width:100%; height: 100%;"/></a>
			</div>`
			
			
			}
		$(".main-center-son").html(num );	
			}
		});
	})


//模糊层
	$("a,img:not(.imgs) ").mouseenter(function(){
		$(this).stop().animate({"opacity":0.5},700,function(){
			$(this).stop().animate({"opacity":0.8},700)
		})
	}).mouseleave(function(){
		$(this).stop().animate({"opacity":1},700)
	})
//、、、、、、、、、、、、、、、、、
	$(".main-center-girl").on("mouseenter", "img", function(){
		$(this).stop().animate({"opacity":0.5},700,function(){
			$(this).stop().animate({"opacity":0.8},700)
	
		})
	})
	$(".main-center-girl").on("mouseleave", "img", function(){
		$(this).stop().animate({"opacity":1},700)
	})
//、、、、、、、、、、、、、、
	$(".main-center-fashion").on("mouseenter", "img", function(){
		$(this).stop().animate({"opacity":0.5},700,function(){
			$(this).stop().animate({"opacity":0.8},700)
	
		})
	})
	$(".main-center-fashion").on("mouseleave", "img", function(){
		$(this).stop().animate({"opacity":1},700)
	})
//、、、、、、、、、、、、、、
	$(".main-center-son").on("mouseenter", "img", function(){
		$(this).stop().animate({"opacity":0.5},700,function(){
			$(this).stop().animate({"opacity":0.8},700)
	
		})
	})
	$(".main-center-son").on("mouseleave", "img", function(){
		$(this).stop().animate({"opacity":1},700)
	})













	
