$(function(){
	// 登录页面上右上角图片效果
	$('section>img').hover(function(){
		$(this).attr('src','images1/erweima2.png');
	},function(){
		$(this).attr('src','images1/erweima1.png');
	});
	// 登录页面上其他登录方式处的效果
	$('section>.content>.tubiao>.qq').hover(function(){
		$(this).attr('src','images1/qq2.png');
	},function(){
		$(this).attr('src','images1/qq1.png');
	});
	$('section>.content>.tubiao>.sina').hover(function(){
		$(this).attr('src','images1/sina2.png');
	},function(){
		$(this).attr('src','images1/sina1.png');
	});
	$('section>.content>.tubiao>.zhifu').hover(function(){
		$(this).attr('src','images1/zhifu2.png');
	},function(){
		$(this).attr('src','images1/zhifu1.png');
	});

	// 表单验证
	$("#signupForm").validate({
		rules:{
			txt:"required",
			pwd:{
				required:true,
				rangelength:[6,12]
			}
		},
		messages:{
			txt:"请输入邮箱/手机号/小米账号",
			pwd:{
				required:"请输入密码",
				rangelength:"密码的长度为6-12位"
			}
		},
		errorPlacement:function(error,element){
			error.prependTo(element.next()); 
		}
	});

	// 二维码登录
	$('section>img').click(function(){
		$('.otherlogin').show();
		$('section').hide();
	});
	$('.otherlogin>span').click(function(){
		$('.otherlogin').hide();
		$('section').show();
	})
});

