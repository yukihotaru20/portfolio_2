$(function() {

    // animation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // animation関数
    function scrollAnimation() {
        $(window).scroll(function() {
            // $(".js-scroll-trigger").each(function() {
            //     let position = $(this).offset().top,
            //         scroll = $(window).scrollTop(),
            //         windowHeight = $(window).height();

            //     if (scroll > position - windowHeight + 200) {
            //         $(this).addClass('is-active');
            //     }
            // });
            $(".js-scroll--200").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--300").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 300) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--400").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 400) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--500").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 500) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--600").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 600) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--700").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 700) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--800").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 800) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--900").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 900) {
                    $(this).addClass('is-active');
                }
            });
            $(".js-scroll--1000").each(function() {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 1000) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});