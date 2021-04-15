/*update News*/
    $(document).ready(function updateNews(){
        setTimeout(function(){
            $('#recent_news p:first').animate( {marginTop: '-16px'}, 400, function()
            {
                $(this).detach().appendTo('#recent_news').removeAttr('style');
            });
            updateNews();
        }, 2000); 
    });