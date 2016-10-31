$(document).ready(function(){
	var now=0;
	var t=setInterval(move,2000);
	function move(){
  now++;
  if(now==$(".imgs").size()){
    now=0;
  }
  $(".imgs").fadeOut().eq(now).fadeIn();
 

}
})
