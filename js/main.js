$(document).ready(function(){

    var header = $('#header');

    $('#nav').on('mouseenter focusin', function(){
        header.addClass('nav_active');
    });

    $('#nav').on('mouseleave focusout', function(){
        header.removeClass('nav_active');
    });

    var basicHeight = 140;
    if($(window).outerWidth() <= 737){
      basicHeight = 100;
    }
    else{
      basicHeight = 140;
    }

    $('.floor1 > li').on('mouseover focusin', function(){
        var tg = $(this);
        var megaMenuHeight = tg.children('.mega_container').height();
        
        var activeHeaderHeight = megaMenuHeight + basicHeight;
        if($(window).outerWidth() <= 737){
          basicHeight = 100;
        }
        console.log(megaMenuHeight);

        tg.addClass('active').siblings().removeClass('active');
        // console.log(activeHeaderHeight);
        header.stop().animate({
            height: activeHeaderHeight,
        }, 200); 

    });

    $('#nav').on('mouseout', function(){
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
      }
        $('#nav .floor1 li').removeClass('active');
        header.stop().animate({
            height: basicHeight,
        }, 200); 
    });

    $('.hb_left, .hb_right').on('focusin', function(){
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
      }
        $('#nav .floor1 li').removeClass('active');
        header.stop().animate({
            height: basicHeight,
        }, 200); 
    });

    $(window).on('resize', function(){
      if($(window).outerWidth() <= 737){
        basicHeight = 100;
        header.css('height', basicHeight + 'px');
      }
      else{
        basicHeight = 140;
        header.css('height', basicHeight + 'px');
      }
    });

    $('.all_menu_open > button').each(function(){
      $(this).on('click', function(){
        $('.all_menu_container').addClass('active');
        setTimeout(() => {
          $('.all_menu_container').get(0).focus();
        }, 1);
        $('body').addClass('fixed');
    });
    });



    $('.all_menu_close').on('click', function(){
        $('.all_menu_container').removeClass('active'); 
        $('body').removeClass('fixed');
        setTimeout(() => {
          $('.all_menu .all_menu_open button').get(0).focus();
        }, 1);
        if($(window).outerWidth() <= 737){
          setTimeout(() => {
            $('.mob_menu_open button').get(0).focus();
          }, 1);
        }
    });

    $('.mob_search_open > button').on('click', function(e){
      e.stopPropagation();
      $('.mob_search_box').toggleClass('active');
      if($('.mob_search_box').hasClass('active')){
        $(this).children('.hidden_text').text('검색창 닫기');
      }
      else{
        $(this).children('.hidden_text').text('검색창 열기');
      }
    });

    $('.mob_search button').on('focusout', function(){
      $('.mob_search_box').removeClass('active');
    });

    $(document).on('click', function(e){
      if(!$(e.target).closest('.mob_search').length){
        $('.mob_search_box').removeClass('active');
      }
    });

    $('.am_floor2 > li').each(function(){
      if($(this).children('.am_floor3').length > 0){
        $(this).addClass('deco');
      }
    });

    $('.aml_tit > a').on('click', function(e){
      if($(window).outerWidth() <= 737){
        e.preventDefault();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
      }
    });


    $('.amf2_tit > a').on('click', function(e){
      if($(this).closest('li').hasClass('deco')){
        e.preventDefault();
      }
      if($(window).outerWidth() <= 737){
        $(this).closest('li.deco').toggleClass('active').siblings().removeClass('active');
      }
      // $('.am_floor2 > li.deco').each(function(){
      //   if($(this).hasClass('active')){
      //     $(this).children('.am_floor3').stop().slideDown(300);
      //   }
      //   if($(this).hasClass('active') == false){
      //     $(this).children('.am_floor3').stop().slideUp(300);
      //   }
      // });


    });

    var main_slide = new Swiper('.main_slide', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true, 
        slidesPerView: 1,
        spaceBetween: 40,
        
        speed: 1000,
        autoplay: {
            duration: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
          1300 : {
            slidesPerView: 'auto',
            spaceBetween: 0,
          }
        },

        navigation: {
          nextEl: '.main_slide_next button',
          prevEl: '.main_slide_prev button',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

        // on: {
        //   slideChange: function(){
        //     var idx = this.realIndex;
        //     var idx2 = this.activeIndex;
        //     var msLength = this.slides.length - 1;
        //     $(this.slides[idx]).on('keyup', function(e){
        //       if($(e.keyCode == "9" && e.shiftKey)){
        //         if(idx == msLength){
        //           $('.mob_search_open button').focus();
        //         }
        //       }
        //     });

      
        //   }
        // }


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
        loop: true,
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
          },

          speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },


      
        pagination: {
          el: '.wbs_pagination',
          clickable: true,
          disableOnInteraction: false,
        },

      });

      $('.wbs_onOff').on('click', function(){
        if($(this).hasClass('play')){
            $(this).removeClass('play').addClass('pause');
            main_wide_banner_slide.autoplay.stop();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 시작');
        }
        else if($(this).hasClass('pause')){
            $(this).removeClass('pause').addClass('play');
            main_wide_banner_slide.autoplay.start();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 정지');
        }
      });

      $('.notice_tab_btn ul li button').on('click', function(){
        $(this).parent().addClass('active').siblings().removeClass('active');

        $('.notice_tab_box').height($('.notice_tab_btn ul li.active').children('.notice_tab').height());

      });

      $('.notice_tab_box').each(function(){
        $(this).height($('.notice_tab_btn ul li.active').children('.notice_tab').height());
      });

      $(window).on('resize', function(){
        $('.notice_tab_box').each(function(){
          $(this).height($('.notice_tab_btn ul li.active').children('.notice_tab').height());
        });
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

        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
          nextEl: '.gbs_next',
          prevEl: '.gbs_prev',
        },

        a11y: {
          prevSlideMessage: '이전 슬라이드로 이동',
          nextSlideMessage: '다음 슬라이드로 이동',
      },
      
        pagination: {
          el: '.gbc_pagination',
          type: "fraction",
        },

      });

      $('.gbs_onOff').on('click', function(){
        if($(this).hasClass('play')){
            $(this).removeClass('play').addClass('pause');
            gov_banner_slide.autoplay.stop();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 시작');
        }
        else if($(this).hasClass('pause')){
            $(this).removeClass('pause').addClass('play');
            gov_banner_slide.autoplay.start();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 정지');
        }
      });

      var main_info_slide = new Swiper('.main_info_slide', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        speed: 1000,
        watchOverflow: false,

        navigation: {
          nextEl: '.mis_next button',
        },

        a11y: {
            nextSlideMessage: '다음 슬라이드로 이동',
        },

        on: {
            
            slideChange: function(){
                this.slides.forEach(slide => slide.classList.remove('active', 'deactive'));
                var idx = this.activeIndex;
                this.slides[idx + 2].classList.add('active');
                if($(window).outerWidth() >= 1300){
                  this.slides[idx + 3].classList.add('deactive');
                }
                else{
                  return;
                }


            }
        }
      });



      var main_commu_slide = new Swiper('.main_commu_slide', {
        loop: true,
        direction: 'horizontal',
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,

        navigation: {
          prevEl: '.mcs_prev',
          nextEl: '.mcs_next',
        },

        breakpoints: {
          1200: {
            centeredSlides: false,
            slidesPerView: 'auto',
          },

          1300 :{
            slidesPerView: 3,
            centeredSlides: true,
          },
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

        on: {
          slideChange: function(){
            this.slides.forEach(slide => slide.classList.remove('active'));
            var idx = this.activeIndex;
            if($(window).outerWidth() <= 1200){
              this.slides[idx + 2].classList.add('active');
            }
        } 
      }

      });

      $('.frws_select button').each(function(){
        $(this).on('click', function(){
          $(this).closest('li').toggleClass('active');
          if($(this).closest('li').hasClass('active')){
            $(this).parent().siblings('.frws_floor2').stop().slideDown(300);
          }
          else{
            $(this).closest('li').removeClass('active');
            $(this).parent().siblings('.frws_floor2').stop().slideUp(300);
          }
        });
      });

      $(document).on('mouseup', function(e){
        var frwsSelectBtn = $('.frws_select');
        frwsSelectBtn.each(function(){
          if($(this).has(e.target).length === 0){
            $(this).closest('li').removeClass('active');
            $(this).siblings('.frws_floor2').stop().slideUp(300);
          }
        });

      });
      
      $('.frws_floor2 li button').each(function(){
        $(this).on('click', function(){
          var txt = $(this).text();
          $(this).parent().parent().siblings('.frws_select').children().find('strong').text(txt);
        });
      });

      var bot_banner_slide = new Swiper('.bot_banner_slide', {
        loop: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 1000,

        navigation: {
          prevEl: '.mcs_prev',
          nextEl: '.mcs_next',
        },

        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

      });

      $('.bbs_onOff').on('click', function(){
        if($(this).hasClass('play')){
            $(this).removeClass('play').addClass('pause');
            bot_banner_slide.autoplay.stop();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 시작');
        }
        else if($(this).hasClass('pause')){
            $(this).removeClass('pause').addClass('play');
            bot_banner_slide.autoplay.start();
            $(this).children().find('.hidden_text').text('슬라이드 자동재생 정지');
        }
      });

      $('.frs_btn button').each(function(){
        $(this).on('click', function(){
          $(this).closest('li').toggleClass('active');
          if($(this).closest('li').hasClass('active')){
            $(this).parent().siblings('.frs_floor2').stop().slideDown(300);
          }
          else{
            $(this).closest('li').removeClass('active');
            $(this).parent().siblings('.frs_floor2').stop().slideUp(300);
          }
        });
      });

      $('.frws_floor2 li button').on('click', function(){
        $(this).closest('.frws_floor2').closest('li').removeClass('active');
        $(this).closest('.frws_floor2').stop().slideUp(300);
      });

      $(document).on('mouseup', function(e){
        var frsSelectBtn = $('.frs_btn');
        frsSelectBtn.each(function(){
          if($(this).has(e.target).length === 0){
            $(this).closest('li').removeClass('active');
            $(this).siblings('.frs_floor2').stop().slideUp(300);
          }
        });

      });

      
});

$(window).on('orientationchange', function(){
  setTimeout(() => {
    location.reload();
  }, 1);
});