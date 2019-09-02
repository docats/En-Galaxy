$(function () {
    var $li = $('#member .wrapTab ul.tabBookmark li'); //抓設定頁籤
    $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tabInner').hide(); //預設Tab

    $li.click(function (e) {
        e.preventDefault();
        $($(this).find('a').attr('href')).show().siblings('.tabInner').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
});