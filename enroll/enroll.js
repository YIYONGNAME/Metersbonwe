
function rand(min,max){
	return Math.floor(Math.random()* (max-min+1) +min)
}
//验证码
yzm()
function yzm(){
	var str="123456789abcdefghijknolwopqrstwvuxyz";
	var arr="";
	for(var i=0; i<4; i++){
		arr+=str[ rand(0, str.length-1)];  
	}
	$("#yzm1").val( arr);
}

$("#huan").click(function(){
	yzm()
})

//存cookie
//判断用户名
var flagN=null;
$("#pname").blur(function(){
	var reg=/^[a-z_]\w{5,9}$/
	var pname=$("#pname").val()
	if($("#pname").val().length==0 ){
		
		$("#s1").html("用户名不能为空");
		$("#s1").show();
		return;
	}
	if( !reg.test(pname) ){
		$("#s1").html("以中、英文开头，与数字、下划线组成")
		
		$("#s1").show();
		flagN=false;
	}else{
		flagN=true;
		$("#s1").hide()
	}
	return flagN;
})

//判断手机号
var flagF=null;
$("#figure").blur(function(){
	var reg= /^1(5|3|9)\d{9,}$/
	var figure=$("#figure").val();
	if( reg.test(figure) ){
			$("#s2").hide()
			flagF=true;
	}else{
		$("#s2").show()
		flagF=false;
	}
	return flagF;
})
//判断验证码

$("#yzm").blur(function(){
	if(  $("#yzm").val().length==0  ){
		$("#s3").show();
	}
	if( $("#yzm").val()!= $("#yzm1").val() ){
		$("#s3").html("验证码错误");
		$("#s3").show();
	}else{
		$("#s3").hide();
	}
})


$("#btn").click(function(){
	var arr=[];
	var _json={
		name:$("#pname").val(),
		figure: $("#figure").val(),
	}
	var cookieInfo=getCookie("message");
	
	if(cookieInfo.length!=0){ 
		removeCookie("message")// cookie 中有数据
	}
	arr.push(_json);
	setCookie("message",JSON.stringify(arr) );
	
	


	if( $("#yzm").val()== $("#yzm1").val() && flagF && flagN){
		$("#s3").hide();
		alert("请进行下一步操作");
		location.href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/enroll22/enroll22.html"
		console.log(document.cookie)
	}
	
	
})






//function color(){
//	var str="23456789abcdef";
//	var num="#"
//	for(var i=0; i<6; i++){
//		num+=str[ rand( 0, str.length-1) ]
//	}
//	return num;
//}

//图片验证码
//yzm()
//function yzm(){
//	$.ajax({
//		type:"get",
//		url:"enroll.json",
//		success:function(res){
//			var str="";
//			var arr=res.yzm;
//			//console.log(arr)
//			str=`<img src="enrollimg/${ arr[ rand(0,arr.length-1)].src }" />`
//			
//			$("#yzm1").html( str )
//		}
//		
//	});
//}
//$("#huan").click(function(){
//	yzm()
//})	

//用户名


