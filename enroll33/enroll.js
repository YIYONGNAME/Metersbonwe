
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

//取出cookie中的数据
$(function(){
	var arr=getCookie("message");
	var name=arr[0].name;
	$(".span1").html(name)
})

//跳转到主页面
$("#btn").click(function(){
	location.href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/index/index.html";
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
var flagname=null;
$("#pname").blur(function(){
	var reg=/^\w{3,5}/;
	var str=$("#pname").val()
	//alert(str)
	
	if( !reg.test( str)){
		$("#s1").show()
		flagname=false;
	}else{
		flagname=true;
	}
	return flagname
})
//手机号
var flagfigure=null;
$("#figure").blur(function(){
	var reg=/^1(5|3|8)\d{9,}$/
	var str=$("#figure").val();
	if( !reg.test(str) ){
		$("#s2").show()
		flagfigure=false;
	}else{
		flagfigure=true;
	}
	return flagfigure;
})	
//验证码		
var flagyzm=null;
$("#yzm").blur(function(){
	if( $("#yzm").val()==$("#yzm1").val() ){
		flagyzm=true;
	}else{
		$("#s3").show();
		flagyzm=false;
	}
	return flagyzm;
})

