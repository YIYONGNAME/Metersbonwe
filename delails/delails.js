
//获取界面
	$("#box-top").load("../index22.html .box-top",function(){
		$("#showall a").bind("mouseenter",function(){
			$("#pull-down").show();
		})
		$("#pull-down").bind("mouseleave",function(){
			//alert("你好")
			$("#pull-down").hide()
		})
		$("#pull-down").on("mouseenter",".lili",function(){
			$("#son-pull").show()
		})
		$("#son-pull").bind("mouseleave",function(){
			$("#son-pull").hide()
		})
//		var nums=getCookie("obj");
//		console.log(nums)
//		for(var i in nums){
//			var scount=0;
//			scount+=nums[i].count;
//			
//			alert("不好意思 我执行了")
//		}
//		$(".shopcount").html(scount)
		var scount=0;
		var brr=getCookie("obj");
		for(var i in brr){
			scount+=Number(brr[i].count);
		}
		$(".shopcount").html(scount)
		
	})
	$("#content-wrap").load("../index22.html .content-list")
	
	$("#footer-wrap").load("../index22.html .footer")

	



//为中间左边垂直导航加图片
	$(function(){
		$.ajax({
			type:"get",
			url:"delails.json",
			success : function(res){
				var str="";
				var arr= res.leftnav;
				//console.log(arr)
				for(var i in arr){
					str+=`<dl>
							 <dt><img src=" ${arr[i].src} "/></dt>
							 <dd>  ${arr[i].wen} </dd>
							 <dd> ${arr[i].price} </dd>
						  </dl>`
				}
				$(".leftnav22").html( str )
				
//给falls添加数据
				var html="";
				var brr=res.falls;
				for( var i in brr){
					html+=`<img src="${ brr[i].src}" />`
						
					
				}
				$(".fallscenter").html( html )
				
//给falls中的dl添加数据  			
				var num="";
				var Arr=res.ten;
				for(var i in Arr){
					num+=`<dd><img src="${ Arr[i].src}"/>
 							  <h5>${ Arr[i].name}</h5>
 						  </dd>`
					
					
				}
				$(".fallsfooter").html( num)
//给falls中的discuss（评论）添加数据 				
				var dis="";
				var arrAy=res.discuss;
				for(var i in arrAy){
					
					dis +=`<dl>
 							<dt>
 								<img src="${ arrAy[i].src}"/>
 								<p>${ arrAy[i].pname}</p>
 							</dt>
 							<dd>
 								<ul>
 									<li><b>${ arrAy[i].my}</b><i></i><span>${ arrAy[i].sj}</span></li>
 									<li>${ arrAy[i].wz}</li>
 									<li>${ arrAy[i].cm}</li>
 								</ul>
 							</dd>
 						</dl>`
				}
				$(".discussmain").html( dis )
			
//给falls中的fallsbottom（评论）添加数据 	
				var str1="";
				var arr1=res.fallsbottom;
				for(var i in arr1){
//					str1+=`<h5>${ arr1[i].h5} </h5>
// 							<p>${ arr1[i].p}</p>`
					str1+=`<h5> ${ arr1[i].h5 }  </h5>
 					<p>${ arr1[i].p }<br><span>${ arr1[i].span}</span></p>`
				}

				$(".fallsbottom").html( str1)
//---------给potionColor中添加数据	
				$("#least2").on("click","img",function(){
					index22=$(this).index();
					var optionC="";
					var arrs=res.optioncolor;
						optionC=`${arrs[index22].val}`
					$("#optionColor").html( optionC )

				})

//---------给least2中添加数据
				var str2="";
				var arr2=res.least2;
				for(var i in arr2){
					str2 +=`<img src="${ arr2[i].src}"/>`	
							/*<span data-src= ${ arr2[i].span } style="display:none"></span>*/
				}
				$("#least2").html( str2 )
//---------给chicun中添加数据
				var str3="";
				var arr3=res.chicun;
				for(var i in arr3){
					str3 +=`<span>${ arr3[i].span }</span>`
							/*<span data-src= ${ arr3[i].span } style="display:none"></span>*/
				}
				$(".chicun").html( str3 )
				}
		})
	
	//------------------------------------------------加入购物车	---------------------------
/*-------------加减控制数量----------------------	*/	
		$(".addr").click(function(){
			var num=$(this).parent().find(".shuliang").html();
			num++;
			$(".shuliang").html( num );
		})
		$(".reduce").click(function(){
			var num=$(this).parent().find(".shuliang").html();
			num--;
			if(num==0){
				return;
			}
			$(".shuliang").html( num );
		})
		/*--------------------------*/
		var flag11=null;
		$("#least2").on("click","img",function(){
			index0=$(this).index();
			$(this).css({"border":"2px solid red"}).siblings("img").css("border","1px solid #808080");
			flag11=true;
			$(".shuliang").html(1);
			return index0;
		})
		var flag22=null;
		$(".chicun").on("click","span",function(){
			index1=$(this).index();
			$(this).css({"border":"2px solid red"}).siblings("span").css("border","1px solid #808080");
			flag22=true;
			$(".shuliang").html(1);
			return index1;
		})
	//点击购物车跳转到购物车界面	
		$("#btn").click(function(){
//		alert( $("#money").html() )
			if(!flag11 || !flag22){
				alert("要先选择商品颜色和尺寸")
			}else{
				var arr=[];
				var flag=true;;
				var _json={
					val:$("#optionColor").html(),
					src: $("#least2 img").eq(index0).attr("src"),
					sspan:$(".chicun span").eq(index1).html(),
					money:$("#money").html(),
					bianh:$("#bianh").html(),
					del:$("#del").html(),
					count:$(".shuliang").html()
				}
				var cookieInfo=getCookie("obj");
				
				if(cookieInfo.length!=0){
					arr=cookieInfo;
					for( var i in arr){
						if(_json.src==arr[i].src && _json.span==arr[i].span){
							arr[i].count=Number(_json.count) + Number(arr[i].count);
							flag=false;
						}
					}
				}
				
		//判断有没有同样的   有同样的就不存		
				if(flag){
					arr.push(_json);
				}
				setCookie("obj",JSON.stringify(arr));
				//console.log(arr)
				
				location.reload();
				var f=confirm("是否继续购买？确定--继续购买，取消----去购物车结算");
				if( !f){
					location.href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/shopcart/shop.html";
				}
			}
		})
		
	})
	
//     放大镜
	
	$("#least dd").bind("mouseenter", function(){
		var index=$(this).index();
		$(".small img").eq(index).show().siblings("img").hide();
		$(".big img").eq(index).show().siblings("img").hide();
	})
	$("#least2").on("mouseenter","img",function(){
		var index=$(this).index();
		$(".small img").eq(index+5).show().siblings("img").hide();
		$(".big img").eq(index+5).show().siblings("img").hide();
	})
	/////////
	$("#small").on({
		mouseenter : function(){
			$("#mask").show();
			$("#big").show();
		},
		mouseleave : function(){
			$("#mask").hide();
			$("#big").hide();
		},
		mousemove : function(e){
			var e = e ||event;
			var x =e.pageX-$("#small").offset().left- $("#mask").width()/2;
			var y =e.pageY-$("#small").offset().top- $("#mask").height()/2;
			maxl=$("#small").width()-$("#mask").width();
			maxt=$("#small").height()-$("#mask").height();
			x=Math.min( maxl,  Math.max(0,x) );
			y=Math.min( maxt,  Math.max(0,y) );
			$("#mask").css({ left:x, top:y });
//		大图的移动	
			var bigX=$(".bigimg").eq(0).width() / $(".smallimg").eq(0).width()*x;
			var bigY=$(".bigimg").eq(0).height() / $(".smallimg").eq(0).height()*y;
//			alert($("#small").width())
			$(".bigimg").css({ left:-bigX ,top:-bigY });
		}
	})	
	
	
//              通过绑定找到传入过去的图片	
//	$(".fallscenter").on("mousemove","img",function(){
//		alert("恭喜你到我了")
//		
//小火箭
	$(window).scroll(function(){
		var sTop=$(document).scrollTop();
//悬浮窗口
		if(sTop>600){
			
			$(".suspeed").css("display","block");
		}
		if(sTop<600){
			$(".suspeed").css("display","none");
		}
//小火箭显示隐藏		
		if(sTop>400){
			$(".go-top").css("display","block");
			
		}
		if(sTop<400){
			$(".go-top").css("display","none");
		}
		
	})
	
	
  ///////////////////小火箭返回
			$(".go-top").click(function(){
				$("body,huml").animate({"scrollTop":0+"px"},2000,function(){
					$(".go-top").css("display","none");
				})
			})
	//商品详情
			$("#spxq").click(function(){
				$("body,huml").animate( {"scrollTop":880+"px"} );
			})
	//商品评价		
			$("#sppj").click(function(){
				$("body,huml").animate( {"scrollTop":25750+"px"} );
			})
	//购买须知		
			$("#gmxz").click(function(){
				$("body,huml").animate( {"scrollTop":29350+"px"} );
			})		
	//商品详情		
			$("#xzspxx").click(function(){
				$("body,huml").animate( {"scrollTop":230+"px"} );
			})


			
			
			
			
		
