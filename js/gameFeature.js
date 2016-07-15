$(function () {
    $("#gameNav>li").mouseenter(function () {
        $(this).css({
            "left": "10px",
            "backgroundColor": "#009CCC"
        }).siblings().css({
            "left": "83px",
            "backgroundColor": "#323C51"
        });
    });
    $("#gameNav>li").mouseleave(function () {
        $(this).css({
            "left": "83px",
            "backgroundColor": "#323C51"
        })
    });
    //查看所有英雄按钮背景渐变
    $(".hero .game_teams_content a").mouseenter(function(){
        $(this).animate({"backgroundColor":"#ff5700", "color": "#FFF"},500);
    });
    $(".hero .game_teams_content a").mouseleave(function(){
        $(this).animate({"backgroundColor":"#FF9C00", "color": "#f0edf2"},500);
    });
});

$(function () {

    //手风琴效果
    var slideRole = document.getElementById("slideRole");
    var ulRole = slideRole.children[0];
    var lisRole = ulRole.children;
    for (var i = 0; i < lisRole.length; i++) {
        lisRole[i].onmouseover = function () {
            for (var j = 0; j < lisRole.length; j++) {
                animate1(lisRole[j], {"width": 100});
            }
            animate1(this, {"width": 800});
        }
        lisRole[i].onmouseout = function () {
            for (var k = 0; k < lisRole.length; k++) {
                animate1(lisRole[k], {"width": 240});
            }
        }
    }


    var sliderMap = document.getElementById("sliderMap");
    var ulMap =sliderMap.children[0];
    var lisMap = ulMap.children[0];
    var timer = null;
    var imgWidth = lisMap.offsetWidth;

    timer = setInterval(play, 15);

    sliderMap.onmouseover = function () {
        clearInterval(timer);
    }
    sliderMap.onmouseout = function () {
        timer = setInterval(play, 15);
    }

    function play() {
        var leader = ulMap.offsetLeft;
        if (leader > -imgWidth*6) {
            var step = -3;
            leader = leader + step;
            ulMap.style.left = leader + "px";
        } else {
            ulMap.style.left = 0 + "px";
        }
    }



    $(".model-images").mouseenter(function () {
        $(this).css({"opacity": 0.8}).children(".game-produce").stop().animate({
            "height": "160px",
            "opacity": 1
        }, 400);
    });
    $(".model-images").mouseleave(function () {
        $(this).css({"opacity": 1}).children(".game-produce").stop().animate({
            "height": "0px",
            "opacity": 0
        }, 400);

    });

});

//动画封装函数
function animate1(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 20;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

