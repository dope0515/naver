/*page Up*/
    $(document).ready(function(){
        $('.page_up_btn').click(function() {
        $( 'html, body' ).animate( { scrollTop : 0 },0 );
    });
    });

/*view Mode*/
    $(document).ready(function(){
        var $modeState = 0;
        $(".dark_mode_btn").click(function() {
            if($modeState == 0) {
                $("header,footer,.news_stand_header,.login,.group_mall,.theme_link_container").css("backgroundColor", "#292a2d");
                $("body").css("backgroundColor", "#1e1f21");
                $("*").css("borderColor", "#3a3b3d").css("color","#d9d9d9");
                $(".dark_mode_btn").attr("class","light_mode_btn");
                $modeState = 1;
            }
            else {
                $("*").removeAttr('style');
                $(".light_mode_btn").attr("class","dark_mode_btn");
                $modeState = 0;
            }
        });
    });