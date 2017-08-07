$(function(){
	// 点击第一个框框会出现下拉列表进行选择
	// 
	$('section>.content>form>#tel').click(function(){
 		$('section>.content>form>.telarea').toggleClass('noservice')
	});

	$('section>.content>form>.todownimg').click(function(){
 		$('section>.content>form>.telarea').toggleClass('noservice')
	});
	// 点击每一项li,会在第一个框内出现相应内容
	$('section>.content>form>.telarea>ul>li').click(function(){
		var $li=$(this).text();
		// console.log($li);
		$('section>.content>form>#tel').val($li);
	});

	// 表单验证
	$("#signupForm").validate({
		rules:{
			phone:{
					required:true,
					number:true,
					minlength:11,
					maxlength:11
				},
			imgpwd:{
					required:true,
					minlength:5,
					maxlength:5
				},
		},
		messages:{
			phone:{
					required:"手机号码不能为空",
					number:"手机号码是数字组成的",
					minlength:"手机号码的长度为11位",
					maxlength:"手机号码的长度为11位"
				},
			imgpwd:{
					required:"图片验证码不能为空",
					minlength:"图片验证码的长度为5位",
					maxlength:"图片验证码的长度为5位"
				},
		},
		errorPlacement:function(error,element){
			error.prependTo(element.next()); 
		}
	});
});