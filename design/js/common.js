$(window).scroll(function(){
    if ($(window).scrollTop() >= 90) {
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});

$(document).ready(function () {
    $('.g-nav li.has-menu a').on('click', function () {
        $(this).toggleClass('active');
        $('.sub-menu').toggleClass('is-show');
    });
});

$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('is-show');
    });
});
