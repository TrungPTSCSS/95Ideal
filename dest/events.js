$(window).on('load', function () {
  $('.nav-mobile').on('click', function () {
    $('.hidden-menu').toggleClass('active');
    $('.nav-mobile').toggleClass('active-nav');
  });
  $('.loading').fadeOut(1000);
});
