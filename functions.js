$(document).ready(function () {

//flexslider

        $('.flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 10000,
            animationSpeed: 4000,
            touch: true,
            easing: "swing",
            animationLoop: true,
            directionNav: true
        });
      //end function
      $('div.phoneimage').css('transform','translateY('+($(window).scrollTop()*.4)+'px)');
});