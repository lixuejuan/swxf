/**
 * Created by Administrator on 2016/6/18.
 */
$(function () {

//页面刚开始加载时的动画效果
    $(".nav").animate({"height": "72px", "opacity": 1}, 1500);
//点击顶部游戏时弹出图标
    for (var i = 0; i < $(".game ul>li").length; i++) {
        $(".game li i").eq(i).css("backgroundPositionX", i * -70 + "px");
    }
    $(".game").click(function () {
        $(this).find("ul").slideToggle(500);
    });
    $(".game ul").click(function (e) {
        e.stopPropagation();
    });

//鼠标移入/离开导航的li时，背景颜色渐变
    $(".nav li").mouseenter(function () {
        $(this).stop().animate({"apacity": "0"}, 100).animate({
            "backgroundColor": "rgba(255, 255, 255, .2)",
            "color": "#FFF",
            "apacity": "1"
        }, 500);
        $(this).find("a").stop().animate({"marginTop": "200px"}, 10).animate({"marginTop": "0px"}, 500);
    });
    $(".nav li").mouseleave(function () {
        $(this).stop().animate({"backgroundColor": "rgba(40, 53, 79, .9)", "color": "#e6e9ef"}, 500);
    });


//点击导航的li时，切换样式
    $(".nav li").click(function () {
        $(this).css({
            "borderBottom": "5px solid #00C3FF",
            "backgroundColor": "rgba(31,118,188,.2)",
            "height": "67px"
        }).siblings().css({"borderBottom": "0", "backgroundColor": "(40, 53, 79, .9)"});
    });

    //导航栏滚动时固定
    var navHeight = $(".nav").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > navHeight) {
            $(".nav").css({"position": "fixed", "top": "0", "left": "0", "width": "100%"});
        } else {
            $(".nav").css({"positon": "relative", "top": navHeight + "px", "left": "20px", "width": "97%"});
        }
    });
    //立即购买按钮，背景渐变
    $(".join a").mouseenter(function () {
        $(this).stop().animate({"borderColor": "#FFF", "color": "#FFF"}, 500);
    });
    $(".join a").mouseleave(function () {
        $(this).stop().animate({"borderColor": "#FFC70E", "color": "#FFC70E"}, 500);
    });
    $(".buy .buy_btn a").mouseenter(function () {
        $(this).stop().animate({"backgroundColor": "#ff5700", "color": "#FFF"}, 500);
    });
    $(".buy .buy_btn a").mouseleave(function () {
        $(this).stop().animate({"backgroundColor": "#FF9C00;", "color": "#000"}, 500);
    });
});
