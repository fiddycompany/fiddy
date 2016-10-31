$(document).ready(function(){
	var now=0;
	var t=setInterval(move,2000);
	$(".dian1").eq(0).addClass("hot");
	$(".yout").on("mouseover",function(){
      clearInterval(t);
	  
   })
   $(".yout").on("mouseout",function(){
    t=setInterval(move,2000)
	  
   })
	function move(){
	  now++;
	  if(now==$(".imgs").size()){
	    now=0;
	  }
	  $(".imgs").fadeOut().eq(now).fadeIn();
	  $(".dian1").removeClass("hot").eq(now).addClass("hot")
 
}
	function move1(){
    now--;
    if(now<0){
      now=$(".imgs").length-1;
    }
    $(".imgs").fadeOut().eq(now).fadeIn();
    $(".dian1").removeClass("hot").eq(now).addClass("hot")
  } 

	
$(".jian2").on("click",function(){
      move();
  })
$(".jian1").on("click",function(){
    move1();
  })
 $(".dian1").each(function(index){
   $(".dian1").eq(index).mouseover(function(){
  $(".imgs").fadeOut().eq(index).fadeIn();
  $(".dian1").removeClass("hot").eq(index).addClass("hot");
     now=index;
   })
 })	


})
