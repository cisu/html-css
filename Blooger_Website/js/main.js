$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });

    // owl-carousel for blog, xreaizetai na na deiksei to content
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
    //    use custom icons
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });
});