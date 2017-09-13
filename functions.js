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
});