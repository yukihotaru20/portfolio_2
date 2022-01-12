//ハンバーガーメニューのボタンとハンバーガーメニュー本体にアクティブを付与
$(".openbtn1").click(function() {
    $(this).toggleClass('active');
    $(".header_menu").toggleClass('active');
});

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
    var headerH = $('.header').outerHeight(true); //.header_navのtopと同じ数値で減算させないとガクっとする
    var header_navH = $('.header_nav').outerHeight(true) - 25; //.header_navのtopと同じ数値で減算させないとガクっとする
    var scroll = $(window).scrollTop();
    if (scroll >= header_navH) { //header_navの高さ以上になったら
        $('.header_nav').addClass('fixed'); //fixedというクラス名を付与
    } else { //それ以外は
        $('.header_nav').removeClass('fixed'); //fixedというクラス名を除去
    }
    if (scroll >= headerH) { //header_navの高さ以上になったら
        $('.header_nav').addClass('change'); //fixedというクラス名を付与
        $('.openbtn1 span').addClass('change'); //fixedというクラス名を付与
    } else { //それ以外は
        $('.header_nav').removeClass('change'); //fixedというクラス名を除去
        $('.openbtn1 span').removeClass('change'); //fixedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('.header_menu a').click(function() {
    var elmHash = $(this).attr('href'); //hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top - 120); //headerの高さを引く
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false; //リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
    FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});