
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

//获取cookie数据
$(function(){
	var arr=getCookie("message");
	//alert( arr )
	
	var name=arr[0].name;
	var figure=arr[0].figure;
	$("#pname").val( name);
	$("#figure").val( figure)
})



///               密码
var flagP=null;
$("#password").blur(function(){
	//alert( $("#password").val().length )
	if( $("#password").val().length==0){
		$("#s3").show();
		
		flagP=false;
	}
	if($("#password").val().length<6 || $("#password").val().length>16){
		$("#s3").html("密码长度只能为6~16");
		$("#s3").show();
		flagP=false;
	}else{
		$("#s3").hide();
		flagP=true;
	}
})
//判断两次密码是否一致
var flagP2=null;
$("#password2").blur(function(){
	
	if( $("#password").val()!= $("#password2").val() ){
		$("#s4").show("");
		flagP2=false;
	}else{
		$("#s4").hide();
		flagP2=true;
	}
})
//激活码
var flagC=null;
$("#cdkey").blur(function(){
	if($("#cdkey").val().length==0){
		$("#s5").show();
		flagC=false;
	}else{
		$("#s5").hide();
		flagC=true;
	}
	
	
})
//邀请人手机号
var  flagI=null;
$("#inviter").blur(function(){
	var reg= /^1(5|3|9)\d{9,}$/
	var regs=$("#inviter").val();
	/*if(regs.length==0){
		$("#s6").show();
		flagI=false;
		return;
	}else*/
	if(!reg.test( regs )){
//		$("#s6").html("手机号格式不对")
		$("#s6").show();
		flagI=false;
	}else{
		$("#s6").hide();
		flagI=true;
	}
	
	
	
	
})






//如果所有条件成立   跳转下一个界面
$("#btn").click(function(){
	var arr=[];
	var _json={
		password:$("#password").val(),
	}

	console.log("_json")
	arr.push(_json);
	setCookie("pass",JSON.stringify(arr))
	
	
	
	
	if(flagP || flagP2 || flagC || flagI){
		location.href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/enroll33/enroll.html";
	}
})
///把密码存入到cookie中去
	







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
//var flagname=null;
//$("#pname").blur(function(){
//	var reg=/^\w{3,5}/;
//	var str=$("#pname").val()
//	//alert(str)
//	
//	if( !reg.test( str)){
//		$("#s1").show()
//		flagname=false;
//	}else{
//		flagname=true;
//	}
//	return flagname
//})


