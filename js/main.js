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

    $('.all_menu_open > button').on('click', function(){
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
        speed: 1000,
        autoplay: {
            duration: 3000,
        },

        navigation: {
          nextEl: '.main_slide_next button',
          prevEl: '.main_slide_prev button',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

      });
      
      $('.main_slide_onOff').on('click', function(){
        if($(this).hasClass('play')){
            $(this).removeClass('play').addClass('pause');
            main_slide.autoplay.stop();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 시작');
        }
        else if($(this).hasClass('pause')){
            $(this).removeClass('pause').addClass('play');
            main_slide.autoplay.start();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 정지');
        }
      });

      var main_wide_banner_slide = new Swiper('.main_wide_banner_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
          },
          touchRatio: 0,

        speed: 1000,
        autoplay: {
            duration: 2000,
        },
      
        pagination: {
          el: '.wbs_pagination',
          clickable: true,
        },

      });

      $('.notice_tab_btn ul li button').on('click', function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        var height = $(this).siblings('.notice_tab').outerHeight();
        var idx = $(this).parent().index();

        $('.notice_tab_box').height($('.notice_tab_btn ul li.active').children('.notice_tab').height());

      });

      $('.notice_tab_box').each(function(){
        $(this).height($('.notice_tab_btn ul li.active').children('.notice_tab').height());
      });

      var gov_banner_slide = new Swiper('.gov_banner_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
          },
          touchRatio: 0,

        speed: 1000,
        autoplay: {
            duration: 3000,
        },
      
        pagination: {
          el: '.wbs_pagination',
          clickable: true,
        },

      });

      var main_info_slide = new Swiper('.main_info_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        speed: 1000,

        navigation: {
          nextEl: '.main_slide_next button',
          prevEl: '.main_slide_prev button',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

        on: {
            
            slideChange: function(){
                this.slides.forEach(slide => slide.classList.remove('active'));
                var idx = this.activeIndex;
                this.slides[idx + 2].classList.add('active');
            }
        }
      });
});
