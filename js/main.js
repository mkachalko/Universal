$(document).ready(function () {
  var tabsItem = $('.recommend-tabs__item');
  var contentItem = $('.recommend-content__item');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    contentItem.removeClass('recommend-content__item_active');
    tabsItem.removeClass('recommend-tabs__item_active');
    $(activeContent).addClass('recommend-content__item_active');
    $(this).addClass('recommend-tabs__item_active');
  })

  var menuButton = $('.menu-button');
  menuButton.on('click', function() {    
    $('.header').toggleClass('header_mobile_visible');
    $('.nav-menu').toggleClass('nav-menu_mobile_visible');
    $('.request').toggleClass('request_mobile_visible');
    $('.nav-menu__list').toggleClass('nav-menu__list_mobile_visible');
    // body.toggleClass('lock'); 
   });

  var modalButton = $('[data-toggle=modal]');
  var closeButton = $('[data-toggle=close]');
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  var body = $('body');

  modalButton.on('click', openModal);
  closeButton.on('click', closeModal);

  function openModal() {
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowWidth = parseInt(window.innerWidth);
    const scrollbarWidth = windowWidth - documentWidth;
    body.append(`<style>body.lock {margin-right: ${scrollbarWidth}px; overflow: hidden;}</style>`);
    $('.header_mobile_visible').append(`<style>.header_mobile_visible {margin-right: ${scrollbarWidth}px}</style>`);
    $('.to-top').append(`<style>.to-top {margin-right: ${scrollbarWidth}px}</style>`);
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    body.addClass('lock');
    
    
  }
  function closeModal(event) {
    
    event.preventDefault()
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
    body.removeClass('lock'); 
    $('.header_mobile_visible').append(`<style>.header_mobile_visible {margin-right: 0}</style>`);
    $('.to-top').append(`<style>.to-top {margin-right: 0}</style>`);   
    
  }

  $(document).on('keydown', function(event){
    if(event.key == 'Escape'){
      event.preventDefault();
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
      body.removeClass('lock');
      $('.header_mobile_visible').append(`<style>.header_mobile_visible {margin-right: 0}</style>`);
      $('.to-top').append(`<style>.to-top {margin-right: 0}</style>`);
    }
  });

  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 18
        },
        message_required: {
          required: true,
          minlength: 100
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя"
        },
        phone: {
          required: "Пожалуйста, укажите номер телефона",
          minlength:"Ваш номер должен состоять из 11 цифр"
        },
        email: {
          required: "Пожалуйста, укажите свой email",
          email: "Введите в формате name@domain.com"
        },
        message_required: {
          required: "Пожалуйста, введите сообщение",
          minlength:"Минимальная длинна 100 символов"
        }
      }
    });
  });

  $('[name=phone]').mask('+7 (999) 999-99-99', {
    translation: {9: {pattern: /[0-9]/}}
  });

  var bookmark = $('.bookmark');

  bookmark.on('click', function(){
    $(this).toggleClass('bookmark_active')
  })

  const careerSlider = new Swiper('.career-slider', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  const articleSlider = new Swiper('.article-slider', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.article-slider__button_next',
    prevEl: '.article-slider__button_prev',
  },

    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  var loadButton = $('.comment__button');
  var loadItem = $('[data-toggle=loading]');
  var lastVisibleItem = $('.comment__item_toggle');

  loadButton.on('click', function(){
    loadItem.removeClass('comment__item_hidden');
    lastVisibleItem.toggleClass('comment__item_last');
    loadButton.addClass('load_hidden');
  });

});