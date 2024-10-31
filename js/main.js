$(document).ready(function(){

    var header = $('#header');

    $('#nav').on('mouseenter focusin', function(){
        header.addClass('nav_active');
    });

    $('#nav').on('mouseleave focusout', function(){
        header.removeClass('nav_active');
    });


    $('.floor1 > li').on('mouseover focusin', function(){
        var tg = $(this);
        var megaMenuHeight = tg.children('.mega_container').height();
        var activeHeaderHeight = megaMenuHeight + 140;
        console.log(megaMenuHeight);

        tg.addClass('active').siblings().removeClass('active');
        // console.log(activeHeaderHeight);
        header.stop().animate({
            height: activeHeaderHeight,
        }, 200); 

    });

    $('#nav').on('mouseout', function(){
        $('#nav .floor1 li').removeClass('active');
        header.stop().animate({
            height: 140,
        }, 200); 
    });

    $('.hb_left, .hb_right').on('focusin', function(){
        $('#nav .floor1 li').removeClass('active');
        header.stop().animate({
            height: 140,
        }, 200); 
    });
});