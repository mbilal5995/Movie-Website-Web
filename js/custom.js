$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("open");
    });
});
$(document).ready(function () {
    $('#Carousel').carousel({
        interval: 10000
    })
});