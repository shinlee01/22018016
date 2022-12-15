$(document).ready(function(){
	// 마우스오버 메뉴
	  $('.navi > li').mouseover(function(){
		$(this).find('.subMenu').stop().slideDown(300);
	  }).mouseout(function(){
		$(this).find('.subMenu').stop().slideUp(300);
	  });
});