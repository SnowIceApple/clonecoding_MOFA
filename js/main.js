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

    $('.all_menu_open').on('click', function(){
        $('.all_menu').addClass('active');
        $('body').addClass('fixed');
    });

    $('.all_menu_close').on('click', function(){
        $('.all_menu').removeClass('active'); 
        $('body').removeClass('fixed');
    });

    var main_slide = new Swiper('.main_slide', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true, 
        slidesPerView: 'auto',
        speed: 800,

      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
});