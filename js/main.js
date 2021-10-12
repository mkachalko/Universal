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

});