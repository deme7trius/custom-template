$(document).ready(function () {

	$( window ).scroll(function() {
		var t = $('#Body');
		$( "header" ).css( "padding", "0" );
		$("div.layer").css( "display", "block" );
		if(t.scrollTop() == 0)
		{
			$( "header" ).css( "padding", "20px 0" );
			$("div.layer").css( "display", "none" )
		}

	});
//flexslider

  $('#main').flexslider({
	    animation: "slide",
	slideshowSpeed: 10000,
	animationSpeed: 4000,
	touch: true,
	easing: "swing",
	animationLoop: true,
	directionNav: true
  });
$('#secondary').flexslider({
	animation: "slider"
});
      //end function
      $(window).scroll(function () {
      	$('#phoneimage').each(function () {
      		var imagePos = $(this).offset().top;
      		var imageHeight = $(this).height();
      		var topOfWindow = $(window).scrollTop();

      		if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
      			$(this).css("background-attachment", "unset"); 
      		} else {
      			$(this).css("background-attachment", "fixed");
      		}
      	});
      });
       //end function
       $(".up").click(function(e){
       	e.preventDefault();
       	$('html, body').animate({ scrollTop: 0 }, 1000);
       });

       window.onscroll = function() {scrollFunction()};
       $('.up').css('display','none');
       function scrollFunction() {
       	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
       		$('.up').css('display','block');
       	} else {
       		$('.up').css('display','none');
       	}
       }
   });