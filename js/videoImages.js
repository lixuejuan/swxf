/**
 * Created by Administrator on 2016/6/15.
 */
var data = [{
    "name":"动画短片：《英雄》",
    "url":"hero_media_thumb.jpg"
},{
    name: "动画短片：《双龙》",
    url: "dragons-animated-short.jpg",
}, {
    name: "动画短片：《新生》",
    url: "widowmaker-animated-short.jpg",
}, {
    name: "动画短片：《归来》",
    url: "winston-animated-short.jpg",
}, {
    name: '动画视频："守望动员令"',
    url: "wintro-cinematic-trailer.jpg"
}, {
    name: "剧场版宣传视频",
    url: "theatrical-teaser.2xgWi.jpg"
}, {
    name: "游戏视频1",
    url: "gameplay-trailer.32G0v.jpg"
}, {
    name: "卢西奥游戏预览",
    url: "lucio-preview.2aGz2.jpg",
}, {
    name: "士兵：76游戏预览",
    url: "soldier-76-preview.0QqG7.jpg",
}, {
    name: "堡垒游戏预览",
    url: "bastion-preview.2sKxS.jpg",
}, {
    name: "查莉娅游戏预览",
    url: "zarya-preview.0FnY9.jpg",
}, {
    name: "黑百合游戏预览",
    url: "widowmaker-preview.364gD.jpg",
}];
$(function () {

    //两张图片效果
    //第一张图片效果
    $(".two-photoes .three-people").mouseenter(function () {
        $(this).css({"borderColor": "rgba(255,255,255,0.8)"});
        $(this).find(".out-border").css({
            "borderColor": "rgba(0,195,255,1)",
            "box-shadow": "2px 2px 3px rgba(0,195,255,1) inset,-2px -2px 3px rgba(0,195,255,1) inset"
        });
        $(this).find(".arr").css("background", "url(images/youtube-btn-wh.png) no-repeat ");
        $(this).find(".description").stop().slideDown(300);
        $(this).find(".bgColor").animate({"backgroundColor": "rgba(0,0,0,0.8)"}, 500);
    });
    $(".two-photoes .three-people").mouseleave(function () {
        $(this).css("borderColor", "rgba(255,255,255,0)");
        $(this).find(".out-border").css({
            "borderColor": "rgba(0,195,255,0)",
            "box-shadow": "0px 0px 0px rgba(0,195,255,0) inset,0px 0px 0px rgba(0,195,255,0) inset"
        });
        $(this).find(".arr").css("background", "url(images/youtube-btn-ylw.png) no-repeat ");
        $(this).find(".description").stop().slideUp(300);
        $(this).find(".bgColor").css("backgroundColor", "rgba(0,0,0,0)");
    });
    //第二章图片效果
    $(".two-photoes .fire").mouseenter(function () {
        $(this).css({"borderColor": "rgba(255,255,255,0.8)"});
        $(this).find(".out-border").css({
            "borderColor": "rgba(0,195,255,1)",
            "box-shadow": "2px 2px 3px rgba(0,195,255,1) inset,-2px -2px 3px rgba(0,195,255,1) inset"
        });
        $(this).find(".arr").css("background", "url(images/youtube-btn-wh.png) no-repeat ");
        $(this).find(".description").stop().slideDown(300);
        $(this).find(".bgColor").animate({"backgroundColor": "rgba(0,0,0,0.8)"}, 500);
    });
    $(".two-photoes .fire").mouseleave(function () {
        $(this).css("borderColor", "rgba(255,255,255,0)");
        $(this).find(".out-border").css({
            "borderColor": "rgba(0,195,255,0)",
            "box-shadow": "0px 0px 0px rgba(0,195,255,0) inset,0px 0px 0px rgba(0,195,255,0) inset"
        });
        $(this).find(".arr").css("background", "url(images/youtube-btn-ylw.png) no-repeat ");
        $(this).find(".description").stop().slideUp(300);
        $(this).find(".bgColor").css("backgroundColor", "rgba(0,0,0,0)");
    });
    //追加动态生成多个不同的
    for (var i = 0; i < data.length; i++) {
        var d = data[i];

        var $des = $('<li class="category fl">' +
            '<div class="out-border">' +
            '<em class="arr"></em>' +
            '<a href="javascript:;" class="heroImg" style= "background-image:url(images/' + d.url + ')">' +
            '<div class="description">' + d.name + '</div>' +
            '</a>' +
            '<div class="bgColor"></div>' +
            '</div>' +
            '</li>');
        $(".heros-item>ul").append($des);
    }

    //鼠标放上category盒子上时，border盒子改变透明度，effect盒子显示
    $(".heros-item .category").mouseenter(function () {
        $(this).css("backgroundColor",  "rgba(255, 255, 255, 0.8)");
        $(this).find(".out-border").css("backgroundColor", "rgba(0,195,255,1)").siblings();
        $(this).find(".description").stop().slideDown(300);
        $(this).find(".arr").css("background","url(images/youtube-btn-wh.png) no-repeat ");
        $(this).find(".bgColor").stop().animate({"backgroundColor": "rgba(0,0,0,0.8)"}, 500);

    });
    $(".heros-item .category").mouseleave(function () {
        $(this).css("backgroundColor",  "rgba(255, 255, 255, 0)");
        $(this).find(".out-border").css("backgroundColor", "rgba(255,2555,255,0)");
        $(this).find(".description").stop().slideUp(300);
        $(this).find(".arr").css("background","url(images/youtube-btn-ylw.png) no-repeat");
        $(this).find(".bgColor").stop().animate({"backgroundColor": "rgba(0,0,0,0)"}, 500);

    });

//导航栏滚动时固定
    var navHeight = $(".nav").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > navHeight) {
            $(".nav").css({"position": "fixed", "top": "0", "left": "0", "width": "100%"});
        } else {
            $(".nav").css({"positon": "relative", "top": navHeight+"px", "left": "20px", "width": "97%"});
        }
    });
    //先创建一个然后克隆复制很多相同个的做法；
    /*  var $li = $(".heros-item .category");
     for (var i = 0; i < 19; i++) {
     //console.log("hahah");
     $(".heros-item>ul").append($li.clone(true));
     }*/

    /* for (var i = 0 ; i<data.length; i++) {
     var d = data[i];//每一项取出来；
     var $des = $('<li class="category fl">' +
     '<div class="out-border">' +
     '<a href="javascript:;" class="hero1"  style= "background-image:url("+d.url+")">' +
     '<div class="effect">'+ d.name+'</div>' +
     '</a>' +
     '</div>' +
     '</li>');
     $(".heros-item>ul").append($des);

     }*/
    //var $a = $des.clone(true)
    //$(".heros-item").children().append($a);
});

