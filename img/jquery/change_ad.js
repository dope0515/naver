/*change ad*/
$(document).ready(function(){
    var $randomNum = Math.floor(Math.random()*3+1);
    var $adContent = $('.ad_content:nth-child('+$randomNum+')');
    function showAd(){
        $adContent.attr('class','show_ad');
    };
    showAd();
});