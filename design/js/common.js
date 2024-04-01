$(document).ready(function () {
    $('.g-nav li.has-menu a').on('click', function () {
        $(this).toggleClass('active');
        $('.sub-menu').toggleClass('is-show');
        $('.sub-menu li').hover(function(){
             $(this).find('ul').first().stop().toggle(200);
             $('.dropdown-menu').addClass('menu-active');
          }, function(){
            $(this).find('ul').hide();
            $('.dropdown-menu').removeClass('menu-active');
          });
    });
});
