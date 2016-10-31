$(document).ready(function(){
	console.log($(".img_one"))
	$(".img_one").hover(function(){
//	$(this).find(".xuan").css("display","block");
  	$(".xuan").css("display","block");
  },function(){
    $(".xuan").css("display","none");
  })
	
	$(".img_two").hover(function(){
		$(".xuan2").css("display","block");
	},function(){
		$(".xuan2").css("display","none");
	})
	
	$(".img_there").hover(function(){
		$(".xuan3").css("display","block");
	},function(){
		$(".xuan3").css("display","none");
	})
	
	$(".img_for").hover(function(){
		$(".xuan4").css("display","block");
	},function(){
		$(".xuan4").css("display","none");
	})
	
	$(".img_five").hover(function(){
		$(".xuan5").css("display","block");
	},function(){
		$(".xuan5").css("display","none");
	})
	
	$(".img_six").hover(function(){
		$(".xuan6").css("display","block");
	},function(){
		$(".xuan6").css("display","none");
	})
})
