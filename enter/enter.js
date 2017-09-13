
$(".mainrighttop .hh").bind("click",function(){
	var index=$(this).index();
	$(".mainrightcenter").eq(index).css("z-index","10").siblings(".mainrightcenter").css("z-index","-1");
	$(this).css({	"width": "113px",
					"height": "37px",					
					"margin-top": "-3px",
					
					"border-top": "3px solid red",
					"border-bottom": "none"
					})
	$(this).siblings(".hh").css({
								"height": "37px",
								"margin-top": "0px",
								"border-bottom": "1px solid #999999",
								"border-top": "1px solid #999999",
							})
})

//随机数
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

//获取焦点时提示内容
$(".pname").focus(function(){
	$(".s1").html("请输入账号或邮箱地址");
	$(".s1").show()
})
$(".pname").blur(function(){
	
	$(".s1").hide()
})
//用户名
$(".ppwd").focus(function(){
	$(".s2").html("请输入密码");
	$(".s2").show()
})
$(".ppwd").blur(function(){
	
	$(".s2").hide()
})
//验证码
$("#yzm").focus(function(){
	$("#s3").html("请输入验证码");
	$("#s3").show()
})
$("#yzm").blur(function(){
	
	$("#s3").hide()
})


//提交时验证
var arr=getCookie("message");
var brr=getCookie("pass");
var pname=arr[0].name;
var pfigure=arr[0].figure;
var ppass=brr[0].password;
$("#btn").on("click",function(){
//判断用户名
	var flagN=false;
	if($(".pname").val()==pname){
		alert("ssss")
		flagN=true;
	}else{
		$(".s1").html("用户名错误");
		$(".s1").show();
	}
//判断密码
	var flagP=false;
	if($(".ppwd").val()==ppass){
		alert("dui");
		flagP=true;
	}else{
		$(".s2").html("密码错误");
		$(".s2").show();
	}
	if( flagN && flagP){
		location.href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/index/index.html"
	}
	
	
})
