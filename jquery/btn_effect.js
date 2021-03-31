/*page Up*/
    $(document).ready(function(){
        $('.page_up_btn').click(function() {
        $( 'html, body' ).animate( { scrollTop : 0 },0 );
    });
    });

/*news List*/
    $(document).ready(function(){
        var listState = 1;
        var $nextNewsBtn = $('#next_news');
        var $prevNewsBtn = $('#prev_news');
        var $newsList = $('.thumb_box_container');

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
/*shop List*/
    $(document).ready(function(){
        var shopListState = 1;
        var $nextListBtn = $('#next_category');
        var $prevListBtn = $('#prev_category');
        var $shopList = $('.list_event');

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