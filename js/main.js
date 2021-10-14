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
     
   });

  var modalButton = $('[data-toggle=modal]');
  var closeButton = $('[data-toggle=close]');
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  var body = $('body');

  modalButton.on('click', openModal);
  closeButton.on('click', closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    body.addClass('lock');
  }
  function closeModal(event) {
    
    event.preventDefault()
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
    body.removeClass('lock');
    
  }

  $(document).on('keydown', function(event){
    if(event.key == 'Escape'){
      event.preventDefault();
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
      body.removeClass('lock');
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
          email: "Ваш email должен вводиться в формате name@domain.com"
        }
      }
    });
  });

  $('[name=phone]').mask('+999 (99) 999-99-99', {
    translation: {9: {pattern: /[0-9]/}}
  });

  var bookmark = $('.bookmark');

  bookmark.on('click', function(){
    $(this).toggleClass('bookmark_active')
  })

});