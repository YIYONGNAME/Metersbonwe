//获取界面
	$("#content-wrap").load("../index22.html .content-list")
	
	$("#footer-wrap").load("../index22.html .footer")
//取出cookie中的数据  显示到界面中	
$(function(){
	var arr=getCookie("obj");
//	让原来界面的信息隐藏
	if(arr.length!=0){
		$("#former").hide();
		$(".firstone").show();
		$(".goodslast").show();
	}
	var str="";
	for(var i in arr){
		
		str+=`<ul class="goodsone">
								<li><input type="checkbox" id="ck" value="" /></li>
								<li><img src="${arr[i].src}" id="imgss" data-imgss="${arr[i].src}"></li>
								<li>
									<p>17新品夏装时尚潮男糖果色系绳系运动休闲短裤</p>
									<i class="bianh">商品编号：${arr[i].bianh}</i>
									<img src="shopimg/QQ截图20170911171156.png"/>
								</li>
								<li>
									<p>颜色：<span class="getColor">${arr[i].val}</span></p>
									<p>尺码：<span class="sp">${arr[i].sspan}</span></p>
								</li>
								<li>
									<del>￥${arr[i].del}</del><br>
									<strong>￥<strong id="str1">${arr[i].money}</strong></strong>
									<div id="xiug">修改优惠<span></span></div>
									<p class="bsy">不使用活动优惠</p>
								</li>
								<li>
									<span class="btngoleft">-</span>
									<span id="txt" class="txt1"> ${arr[i].count} </span>
									<span class="btngoright">+</span>
									
								</li>
								<li>￥<span id="zspan" class="zspan">${arr[i].money*arr[i].count}</span></li>
								<li>
									<span id="btn1">移入我的点赞</span>
									<a href="#" id="btn2">删除</a>
								</li>
							</ul>`

	}
	$(".goodsnow").html( str)
	
	
//全选中
	$("#selectall").click(function(){
		if( $(this).prop('checked') ){
			$(".goodsnow #ck").prop("checked",$(this).prop("checked") ) ;
			jisuan()
		}else{
			$(".goodsnow #ck").prop("checked",$(this).prop("checked") ) ;
			jisuan()
			$("#spanone").html( 0 )
			$("#spantwo").html( 0 )
			$("#spanlast").html( 0 ) 
		}
	})

	
	
	
	
//单选	
	$(".goodsnow").on("click","#ck",function(){
	//	alert( $(this).prop('checked'))
		var str=$("#ck");
		if( $(this).prop('checked') ){
			jisuan()
		}else{
			jisuan()
		}
//		for(var i=0; i<str.length; i++){
//			if( str[i].prop("checked") ){
//				$("#spanone").html( 0)
//				$("#spantwo").html( 0)
//				$("#spanlast").html( 0)
//			}
//		}
	})
	
	
//删除	
	$(".goodsnow").on("click","#btn2",function(){
		var sp=$(this).parent().parent().find(".sp").html();
		var imgss=$(this).parent().parent().find("#imgss").data("imgss");
		for(var i in arr){
			if(sp=arr[i].sspan && imgss==arr[i].src){
				arr.splice(i,1);
				setCookie("obj",JSON.stringify(arr));
				$(this).parent().parent().remove();
				jisuan();
				if( arr==""){
					location.reload();
//					setCookie("obj",JSON.stringify(arr));
//					$(".firstone").hide();
//					$(".goodslast").hide();
//					$("#former").show();
				}
			}
		}
	})
//加减的操作	
	$(".btngoleft").click(function(){
		var sp=$(this).parent().parent().find(".sp").html();
		var getColor=$(this).parent().parent().find(".getColor").html();
		var num=$(this).parent().find(".txt1").html();
		console.log(num)
		if(num==1){
			return;
		}else{
		for(var i in arr){
			if(sp==arr[i].sspan && getColor==arr[i].val){
				arr[i].count--;
					setCookie("obj",JSON.stringify(arr) );
					$(this).parent().find(".txt1").html( arr[i].count );
					$(this).parent().parent().find(".zspan").html( arr[i].money*arr[i].count )
					jisuan();
				}
			}
		}
	})
//	-------------------+++的操作
	$(".btngoright").click(function(){
		var sp=$(this).parent().parent().find(".sp").html();
		var getColor=$(this).parent().parent().find(".getColor").html();
		for(var i in arr){
			if(sp==arr[i].sspan && getColor==arr[i].val){
				arr[i].count++;
				setCookie("obj",JSON.stringify(arr) );
				$(this).parent().find(".txt1").html( arr[i].count );
				$(this).parent().parent().find(".zspan").html( arr[i].money*arr[i].count )
				jisuan();
			}
		}
	})
	
	
	
	
	
})




function jisuan(){
	var smoney=0;
	var scount=0;
	$("#ck:checked").each(function(){
		smoney+=parseInt( $(this).parent().parent().find("#zspan").html() )
		scount+=parseInt( $(this).parent().parent().find("#txt").html() )
		$("#spanone").html( scount)
		$("#spantwo").html( smoney)
		$("#spanlast").html( smoney)
	})
}


