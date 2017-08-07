$(function(){
	// 放大镜效果
	$("section>.leftimg>.small_pic").bind("mousemove",function(event){
		var mousex=event.pageX;
		var mousey=event.pageY;
		var divoffset=$(this).offset();
		var l=mousex-divoffset.left-$(".overlay").width()/2;
		var t=mousey-divoffset.top-$(".overlay").height()/2;
		if(l>=450){
			l=450;
		}
		else if(l<=25){
			l=0;
		}

		if(t>=450){
			t=450;
		}
		else if(t<=25){
			t=0;
		}
		$("section>.leftimg>.small_pic>.overlay").css({
			left:l,
			top:t
		});
		$("section>.leftimg>.big_pic>img").css({
			left:-l,
			top:-t
		});
		
	}).hover(function(){
		$("section>.leftimg>.small_pic>.overlay,section>.leftimg>.big_pic").show();
	},function(){
		$("section>.leftimg>.small_pic>.overlay,section>.leftimg>.big_pic").hide();
	});
	//选择框效果
	$('section>.rightcontent>.sectionone>div>div').click(function(){
		$(this).css('border','1px #FF6700 solid').siblings().css('border','1px #ccc solid');
	})
	$('section>.rightcontent>.sectiontwo>div>div').click(function(){
		$(this).css('border','1px #FF6700 solid').siblings().css('border','1px #ccc solid');
		var num=$(this).index()+1;
		$('section>.leftimg>.small_pic>img').attr('src','images1/phone'+num+'.png')
		$('section>.leftimg>.big_pic>img').attr('src','images1/phone'+num+'.png')
	})
});