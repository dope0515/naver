$(document).ready(function(){
    $(window).scroll(function(){
        var positionY = $(window).scrollTop();
        if(positionY > 210) {
            $('header').attr('class','header_scroll');
        }
        else {
            $('header').attr('class','');
        }
    });
});