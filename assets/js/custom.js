$(document).ready(function () {
  console.log("ready");

  $('.js-tab').click(function (e) {
    e.preventDefault();
    const tab = $(this).attr('href');
    $('.js-tab').removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('.tabs').find('.tab').removeClass('tab_active');
    $(this).parent().siblings('.tabs').find('.tab'+tab).addClass('tab_active');
  });

  $('.menu__item').click(function (){
    const link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 1000);
  });

  $('.lang-top').click(function () {
    $('.lang-dd').slideToggle(250);
  });

  $('.to-top').click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
  });

});