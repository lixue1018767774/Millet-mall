$(function(){
	// 首页顶部图片上的叉号被点击，图片和叉号都消失的效果
	$('header #ch').click(function(){
		$('header #ch').fadeOut();
		$('header .top').slideUp();
	});
	// 首页头部第一个横向菜单最后一个li的效果
	$('.menufirst-right').bind('mouseover',function(){
		$('.shoppingcar').attr('src','images/shopping2.png');
	}).bind('mouseout',function(){
		$('.shoppingcar').attr('src','images/shopping1.png');
	});
	// 首页头部搜索框的效果
	$('header .nav .search').bind('mouseover',function(){
		$('header .nav .search').css('background','#FF6700');
		$('header .nav .search img').attr('src','images/search2.png');
	}).bind('mouseout',function(){
		$('header .nav .search').css('background','#fff');
		$('header .nav .search img').attr('src','images/search1.png');
	});

	$('header .nav .searchtxt').bind('focus',function(){
		$('header .nav .search-menu').show();
		$('header .nav .xiaomi').hide();
		$('header .nav .dianshi').hide();
	}).bind('blur',function(){
		$('header .nav .search-menu').hide();
		$('header .nav .xiaomi').show();
		$('header .nav .dianshi').show();
	});
	// 首页图片轮转
	var imgno=0;
	function bannershow(){
		$('.content>.banner>a>img').attr('src','images/banner'+imgno+".jpg");
		$('.content>.banner>.imgnum>div').eq(imgno).css('background','#ccc')
		.siblings().css('background','rgba(0,0,0,0.6)');
		imgno++;
		if (imgno>7) {
			imgno=0;
		}
	}
	var timer=setInterval(bannershow,1800);

	$('.content>.banner>.imgnum>div').hover(function(){
		imgno=$(this).index();
		clearInterval(timer);
		$('.content>.banner>a>img').attr('src','images/banner'+imgno+".jpg");
		$('.content>.banner>.imgnum>div').eq(imgno).css('background','#ccc')
		.siblings().css('background','rgba(0,0,0,0.6)');
	},function(){
		timer=setInterval(bannershow,1800);
	});

	$('.content>.banner>.jtleft').bind('click',function(){
		clearInterval(timer);
		imgno--;
		if (imgno<0) {
			imgno=7;
		}
		$('.content>.banner>a>img').attr('src','images/banner'+imgno+".jpg");
		$('.content>.banner>.imgnum>div').eq(imgno).css('background','#ccc')
		.siblings().css('background','rgba(0,0,0,0.6)');

		timer=setInterval(bannershow,1800);
	});

	$('.content>.banner>.jtright').bind('click',function(){
		clearInterval(timer);
		imgno++;
		if (imgno>7) {
			imgno=0;
		}
		$('.content>.banner>a>img').attr('src','images/banner'+imgno+".jpg");
		$('.content>.banner>.imgnum>div').eq(imgno).css('background','#ccc')
		.siblings().css('background','rgba(0,0,0,0.6)');

		timer=setInterval(bannershow,1800);
	});
	// banner图下面左边的div里的效果
	$('.content>.bannerbottom>.bbleft>div').eq(0).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(0).attr('src','images/phone2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(0).attr('src','images/phone1.png');
	});
	$('.content>.bannerbottom>.bbleft>div').eq(1).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(1).attr('src','images/shft2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(1).attr('src','images/shft1.png');
	});
	$('.content>.bannerbottom>.bbleft>div').eq(2).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(2).attr('src','images/sx2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(2).attr('src','images/sx1.png');
	});
	$('.content>.bannerbottom>.bbleft>div').eq(3).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(3).attr('src','images/phonecar2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(3).attr('src','images/phonecar1.png');
	});
	$('.content>.bannerbottom>.bbleft>div').eq(4).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(4).attr('src','images/jx2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(4).attr('src','images/jx1.png');
	});
	$('.content>.bannerbottom>.bbleft>div').eq(5).hover(function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(5).attr('src','images/cz2.png');
	},function(){
		$('.content>.bannerbottom>.bbleft>div>img').eq(5).attr('src','images/cz1.png');
	});
	// 小米明星产品处的左右滑动效果
	$('.product>.starproduct>.btn>.btnr').click(function(){
		if ($('.product>.starproduct>.spshow>ul').offset().left==60) {
			$('.product>.starproduct>.spshow>ul').animate({ left:'-=1224px'},1000);
			$('.product>.starproduct>.btn>.btnr>img').attr('src','images/jright2.png');
			$('.product>.starproduct>.btn>.btnl>img').attr('src','images/jleft1.png');
		}
	});
	$('.product>.starproduct>.btn>.btnl').click(function(){
		if ($('.product>.starproduct>.spshow>ul').offset().left==-1164) {
			$('.product>.starproduct>.spshow>ul').animate({ left:'+=1224px'},1000);
			$('.product>.starproduct>.btn>.btnr>img').attr('src','images/jright1.png');
			$('.product>.starproduct>.btn>.btnl>img').attr('src','images/jleft2.png');
		}
	});
	// 智能产品处的查看更多效果
	$('.product>.znproduct>.seemore').hover(function(){
		$('.product>.znproduct>.seemore>img').attr('src','images1/more2.png');
	},function(){
		$('.product>.znproduct>.seemore>img').attr('src','images1/more1.png');
	})
	// 智能产品处的查看更多效果
	$('.product>.dpproduct>.seemore').hover(function(){
		$('.product>.dpproduct>.seemore>img').attr('src','images1/more2.png');
	},function(){
		$('.product>.dpproduct>.seemore>img').attr('src','images1/more1.png');
	});
	// 视频处的查看更多效果
	$('.tv>.seemore').hover(function(){
		$('.tv>.seemore>img').attr('src','images1/more2.png');
	},function(){
		$('.tv>.seemore>img').attr('src','images1/more1.png');
	});
	// 视频处的视频播放按钮效果
	$('.tv>.tvshow>ul>li>div>.tshow').hover(function(){
		$(this).parent().find('.play').attr('src','images1/play2.png');
	},function(){
		$(this).parent().find('.play').attr('src','images1/play1.png');
	})
	$('.tv>.tvshow>ul>li>div>.play').hover(function(){
		$(this).attr('src','images1/play2.png');
	},function(){
		$(this).attr('src','images1/play1.png');
	})
	// 视频播放效果
	$('.tv>.tvshow>ul>li>div>.play').click(function(){
		$(this).parent().find('.ttshow').show();
	});
	$('.tv>.tvshow>ul>li>div>.ttshow>span').click(function(){
		$(this).parent().hide();
		$(this).next().pause();
	});

	// 底部效果
	$('footer>.footertop>.service>li>a').eq(0).hover(function(){
		$('footer>.footertop>.service>li>a').eq(0).find('img').attr('src','images1/wx2.png');
	},function(){
		$('footer>.footertop>.service>li>a').eq(0).find('img').attr('src','images1/wx1.png');
	});
	$('footer>.footertop>.service>li>a').eq(1).hover(function(){
		$('footer>.footertop>.service>li>a').eq(1).find('img').attr('src','images1/seven2.png');
	},function(){
		$('footer>.footertop>.service>li>a').eq(1).find('img').attr('src','images1/seven1.png');
	})
	$('footer>.footertop>.service>li>a').eq(2).hover(function(){
		$('footer>.footertop>.service>li>a').eq(2).find('img').attr('src','images1/fifteen2.png');
	},function(){
		$('footer>.footertop>.service>li>a').eq(2).find('img').attr('src','images1/fifteen1.png');
	})
	$('footer>.footertop>.service>li>a').eq(3).hover(function(){
		$('footer>.footertop>.service>li>a').eq(3).find('img').attr('src','images1/lw2.png');
	},function(){
		$('footer>.footertop>.service>li>a').eq(3).find('img').attr('src','images1/lw1.png');
	})
	$('footer>.footertop>.service>li>a').eq(4).hover(function(){
		$('footer>.footertop>.service>li>a').eq(4).find('img').attr('src','images1/dw2.png');
	},function(){
		$('footer>.footertop>.service>li>a').eq(4).find('img').attr('src','images1/dw1.png');
	})

});