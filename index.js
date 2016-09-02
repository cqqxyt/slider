$(function(){
	init();
})

  function init(){

  	var slider =
	  Swipe(document.getElementById('slider'), {
	    auto: 2000,
	    continuous: true
	  });

	  $(".close-icon").on("click", function(){
	  	$("#slider").remove();
	  })

  }