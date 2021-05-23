/*page Up*/
    $(document).ready(function(){
        $('.page_up_btn').click(function() {
        $( 'html, body' ).animate( { scrollTop : 0 },0 );
    });
    });
/*gnb Service*/
$(document).ready(function(){
    $('#sl_toggle').click(function(){
        $('.service_list_container').toggle();
        $(this).text($(this).text() == '접기' ? '더보기' : '접기');
        console.log(this)
    });
});
/*news List*/
    $(document).ready(function(){
        var listState = 1,
            $nextNewsBtn = $('#next_news'),
            $prevNewsBtn = $('#prev_news'),
            $newsList = $('.thumb_box_container');

        $($nextNewsBtn).click(function(){
                $newsList.css('display','none');
                $newsList.eq(listState).css('display','flex');
                $prevNewsBtn.css('display','block');
                listState+=1;
                if(listState == 3){
                    $nextNewsBtn.css('display','none');
                    listState=3;
                }
                console.log(listState);
        });

        $($prevNewsBtn).click(function(){
            listState-=1;
            $newsList.css('display','none');
            $newsList.eq(listState-1).css('display','flex');
            $nextNewsBtn.css('display','block');
            if(listState == 1){
                $prevNewsBtn .css('display','none');
                listState = 1;
            }
            console.log(listState);
    });
    });

/*category List*/
    $(document).ready(function(){
        const  categoryItem = $(".category_item"),
               categoryBtn = $(".category_list_btn"),
               themeContainer = $('.theme_container');

        $(categoryItem.click(function(){
            $(categoryBtn).css({
                "backgroundColor":"#fff","color":"#000"
            });
            $(this).find(categoryBtn).css({"backgroundColor":"transparent","color":"#fff"});
            $(themeContainer).eq($(this).index()).css("display","block").siblings().css("display","none");
        }));
        $("#next_theme").click(function(){
            $("#prev_theme").css("display","block");
            $("#next_theme").css("display","none");
            $(".category_box").css("transform","translateX(-750px)");
        });
        $("#prev_theme").click(function(){
            $("#prev_theme").css("display","none");
            $("#next_theme").css("display","block");
            $(".category_box").css("transform","translateX(0px)");
        });
    });

/*shop List*/
    $(document).ready(function(){   
        var shopListState = 1,
            $nextListBtn = $('#next_category'),
            $prevListBtn = $('#prev_category'),
            $shopList = $('.list_event');

        $($nextListBtn).click(function(){
                $shopList.css('display','none');
                $shopList.eq(shopListState).css('display','block');
                shopListState+=1;
                $('#category_num').html(shopListState);
                if(shopListState == 4){
                    $shopList.eq(2).css('display','block');
                    shopListState = 3;
                    $('#category_num').html(shopListState);
                }
                console.log(shopListState);
        });

        $($prevListBtn).click(function(){
            shopListState-=1;
            $shopList.css('display','none');
            $shopList.eq(shopListState-1).css('display','block');
            $nextListBtn.css('display','block');
            $('#category_num').html(shopListState);
            if(shopListState < 1){
                $shopList.css('display','none');
                $shopList.eq(0).css('display','block');
                shopListState = 1;
                $('#category_num').html(shopListState);
                console.log(shopListState);
            }
            console.log(shopListState);
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

/*poster List*/
    $(document).ready(function(){
        $('#next_poster').click(function(){
            $('.poster_thumb_container:last-child').css('display','flex').siblings().css('display','none');
            $('#next_poster').css('display','none');
            $('#prev_poster').css('display','block');
        });
        $('#prev_poster').click(function(){
            $('.poster_thumb_container:first-child').css('display','flex').siblings().css('display','none');
            $('#next_poster').css('display','block');
            $('#prev_poster').css('display','none');
        });
    });