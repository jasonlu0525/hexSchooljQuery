$(() => {

    $('#backToTopBtn').click(() => {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });

    $('.dropdown-menu').on('click', function (e) {
        e.preventDefault();
        const vm = $(this);

        vm.children('.dropdown-menu-list').stop().slideToggle();
        vm.children('.link').addClass('link--active');
        vm.siblings(vm).children('ul.dropdown-menu-list').slideUp();
        vm.siblings(vm).children('.link').removeClass('link--active');

    });

    new Swiper('.swiper', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

    lightbox.option({
        positionFromTop: '100',
        wrapAround: true,
        positionFromTop: 300,
        alwaysShowNavOnTouchDevices: true
    })

    AOS.init();
})