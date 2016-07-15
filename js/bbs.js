/**
 * Created by Administrator on 2016/6/15.
 */
$(function () {
    $(".nav").animate({"height": "72px", "opacity": 1}, 1500);
    $(".hero_s_left").animate({"left": "0px"}, 1500);
    $(".hero_s_right").animate({"right": "0px"}, 1500);
    $(".hero_s_center img").animate({"top": "184px"}, 1500);
    $(".box1").mouseenter(function () {
        $(this).children("div").children("p").css("fontSize", "18px");
    })
    $(".box1").mouseleave(function () {
        $(this).children("div").children("p").css("fontSize", "12px");
    })
    $(".box5").mouseenter(function () {
        $(this).children("div").children("p").css("fontSize", "18px");
    })
    $(".box5").mouseleave(function () {
        $(this).children("div").children("p").css("fontSize", "12px");
    })
    //±³¾°Í¼Æ¬ÒÆ¶¯
    $("#bgPic img").animate({
        "right": "0px"
    }, 1500);
});



