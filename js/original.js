// ハンバーガーメニュー
$(".openbtn1").click(function() {
    $(this).toggleClass('active');
    $(".header_menu").toggleClass('active');
});

$(".header_menu_item a").click(function() {
    $(".openbtn1").toggleClass('active');
    $(".header_menu").toggleClass('active');
});

// ナビ固定＆背景色変更
function FixedAnime() {
    var headerH = $('.header').outerHeight(true);
    var header_navH = $('.header_nav').outerHeight(true) - 25;
    var scroll = $(window).scrollTop();
    if (scroll >= header_navH) {
        $('.header_nav').addClass('fixed');
    } else { //それ以外は
        $('.header_nav').removeClass('fixed');
    }
    if (scroll >= headerH) {
        $('.header_nav').addClass('change');
        $('.openbtn1 span').addClass('change');
    } else { //それ以外は
        $('.header_nav').removeClass('change');
        $('.openbtn1 span').removeClass('change');
    }
}

// スクロール時呼び出し
$(window).scroll(function() {
    FixedAnime();
});

// ページ読み込み時呼び出し
$(window).on('load', function() {
    FixedAnime();
});

// スムーススクロール
$('.header_menu a').click(function() {
    var elmHash = $(this).attr('href');
    var pos = Math.round($(elmHash).offset().top - 120);
    $('body,html').animate({ scrollTop: pos }, 500);
    return false;
});