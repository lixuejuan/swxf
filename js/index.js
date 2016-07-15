/**
 * Created by Administrator on 2016/6/15.
 */
$(function () {

    //页面刚开始加载时的动画效果
    $(".nav").animate({"height": "72px", "opacity": "1"}, 1500);
    $(".hero_s_left").animate({"left": "0px"}, 1500);
    $(".hero_s_right").animate({"right": "0px"}, 1500);
    $(".hero_s_center img").animate({"top": "184px"}, 1500);

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
            $(".nav").css({"positon": "relative", "top": navHeight + "px", "left": "20", "width": "97%"});
        }
    });

    //鼠标移入/离开按钮，背景颜色渐变
    $(".news_all a").mouseenter(function () {
        $(this).stop().animate({"backgroundColor": "#00A5E2", "color": "#FFF"}, 500);
    });
    $(".news_all a").mouseleave(function () {
        $(this).stop().animate({"backgroundColor": "#F0EDF2", "color": "#00A5E2"}, 500);
    });
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

    $(".explore_g_btn a,.game_introduce .game_i_left,.game_introduce .game_i_right,.nav .btn_buy a").mouseenter(function () {
        $(this).stop().animate({"backgroundColor": "#ff5700", "color": "#feefdd"}, 800);
    });
    $(".explore_g_btn a,.game_introduce .game_i_left,.game_introduce .game_i_right,.nav .btn_buy a").mouseleave(function () {
        $(this).stop().animate({"backgroundColor": "#FF9C00", "color": "#FFF"}, 800);
    });


    //新闻公告轮播图
    //1.复制前三个li添加到最后
    $(".news_n_c li").each(function (index, element) {
        if (index < 3) {
            var $li = $(this).clone();
            $(".news_n_c ul").append($li);
        }
    });
    console.log($(".news_n_c li").length);
    var timers = null;
    var index = 0;

    timers = setInterval(autoPlay, 2000);
    function autoPlay() {
        if (index > 2) {
            $(".news_n_c ul").animate({"left": "0px"}, 0);
            index = 0;
        }
        index++;
        $(".news_n_c ul").stop().animate({"left": -1169 * index + "px"}, 1000);
    }

    //鼠标移动新闻公告li时的动画
    $(".news_n_c li").mouseenter(function () {
        clearInterval(timers);
        $(this).stop().animate({
            "borderColor": "rgba(64, 115, 226,0.3)",
            "opacity": "1"
        }, 500).siblings().stop().animate({"opacity": "0.5"}, 300);
        $(this).find("img").stop().animate({"opacity": "0.5", "top": "-300px"}, 0).animate({
            "opacity": "1",
            "top": "0px"
        }, 500);
        $(this).find("p").stop().animate({"height": "0"}, 0).animate({"height": "56px"}, 500);
    });


    $(".news_n_c").mouseleave(function () {
        timers = setInterval(autoPlay, 2000);
        $(this).find("ul li").stop().animate({"opacity": "1", "borderColor": "rgba(255,255,255,0.3)"}, 500);
    });
    //探索游戏切换背景图片
    var arr = ["images/cairo-desktop.jpg", "images/london-2560.jpg", "images/volskaya-2560.png"];
    var i = -1;
    var timerss = null;

    timerss = setInterval(autoPlayBg, 3000);

    function autoPlayBg() {
        i++;
        $(".explore_g_bg img").animate({"opacity": "0.5"}, 0).animate({"opacity": "1"}, 1000).attr("src", arr[i]);
        $(".explore_g_content").animate({"top": "0px"}, 0).animate({"top": "-690px"}, 2000);
        if (i > 1) {
            i = -1;
        }
    }

    //鼠标经过探索游戏，动画停止，鼠标离开，自动播放
    $(".explore_game").mouseenter(function () {
        clearInterval(timerss);
    });
    $(".explore_game").mouseleave(function () {
        timerss = setInterval(autoPlayBg, 3000);
    });


    //鼠标经过游戏介绍，显示播放按钮
    $(".game_i_left a").mouseenter(function () {
        $(".game_i_left s").stop().show();
    });
    $(".game_i_left a").mouseleave(function () {
        $(".game_i_left s").stop().hide();
    });
    $(".game_i_left s").mouseenter(function (e) {
        $(this).stop().show();
        e.stopPropagation();
    });

    //鼠标经过立即购买按钮，人物的动画效果
    $(".game_i_right").mouseenter(function () {
        $(this).find("a").stop().animate({"top":"-200px","opacity":"0"},0).animate({"top":"-55px","opacity":"1"},500);
    });

    //英雄选择部分开始
    var objname = [
        {"name": "源氏"},
        {"name": "麦克雷"},
        {"name": "法老之鹰"},
        {"name": "死神"},
        {"name": "士兵:76"},
        {"name": "猎空"},
        {"name": "堡垒"},
        {"name": "半藏"},
        {"name": "狂鼠"},
        {"name": "美托"},
        {"name": "比昂"},
        {"name": "黑百合"},
        {"name": "D.VA"},
        {"name": "哈特"},
        {"name": "路霸"},
        {"name": "温斯顿"},
        {"name": "查莉"},
        {"name": "娅卢"},
        {"name": "西奥天使"},
        {"name": "秩序之光"},
        {"name": "禅雅塔"}
    ];
    var objexplain = [
        {"src": "一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。"},
        {"src": "一名亡命天涯的神枪手，以自己的方式伸张正义。"},
        {"src": "一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。"},
        {"src": "一名无情的杀手，一直在追杀前守望先锋的特工们。"},
        {"src": "一名试图自己将守望先锋敌人绳之于法的独行侠。"},
        {"src": "一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。"},
        {"src": "一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。"},
        {"src": "一名强大而致命的弓箭大师。"},
        {"src": "一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。"},
        {"src": "一名能够操控天气，为了保护环境而选择战斗的科学家。"},
        {"src": "一名天才工程师，可以在战场上打造武器系统。"},
        {"src": "一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。"},
        {"src": "一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。"},
        {"src": "一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。"},
        {"src": "一名残暴的杀手，因残忍和肆意破坏而臭名昭著。"},
        {"src": "一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。"},
        {"src": "世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。"},
        {"src": "一位国际名人，通过音乐和巡演激发社会正能量。"},
        {"src": "一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。"},
        {"src": "一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。"},
        {"src": "一位游走于世界寻找灵魂升华之道的机械僧侣。"}
    ]
    //英雄名字遍历，动态添加
    for (var i = 0; i < objname.length; i++) {
        $(".herolist .heroname").append('<h2>' + objname[i].name + '</h2>');
    }
    $(".herolist .heroname>h2").eq(0).text(objname[0].name).siblings().hide();

    //英雄说明遍历，动态添加
    for (var i = 0; i < objexplain.length; i++) {
        $(".herolist .heroexplain").append('<span>' + objexplain[i].src + '</span>')
    }
    //最后一个英雄图标居中
    $(".herolist-l li:last-child").css("left", "170px");

    //鼠标放到英雄图标时，图标变大，并显示对应的大图
    $(".herolist-l li").mouseenter(function () {
        var idx = $(this).index();
        $(".herolist-l img").eq(idx).stop().animate({
            "width": "100px",
            "height": "100px",
            "backgroundColor": "#F7931E"
        }, 200);
        $(".herolist-l em").eq(idx).show();
        $(".herolist-r li").eq(idx).fadeIn(500).siblings().hide();

        $(".herolist-r h2").eq(idx).show(300).siblings().hide();
        $(".herolist-r span").eq(idx).slideDown(300).siblings().hide();
        $(".herolist-l span").eq(idx).hide();
    })
    $(".herolist-l li").mouseleave(function () {
        $(".herolist-l img").stop().animate({
            "width": "80px",
            "height": "90px",
            "backgroundColor": "#444344"
        }, 300)
        $(".herolist-l em").hide();
        $(".herolist-l span").show();
    });
    //英雄选择部分结束
});

//旋转木马效果
window.onload = function () {
    var flag = true;
    //获取元素
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var ul = document.getElementById("slide").children[0];
    var list = ul.children;
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var timer = null;
    //鼠标经过轮播图,显示箭头
    wrap.onmouseover = function () {
        slowAnimate(arrow, {"opacity": 1});
        $(".herodetail .herodetail-2 a").css("display","block");
        clearInterval(timer);
    }
    //立即购买按钮显示
    $(".herodetail .herodetail-2 a").mouseenter(function(){
        $(this).css("display","block");
        slowAnimate(arrow, {"opacity": 1});
        clearInterval(timer);
    });

    //鼠标离开轮播图,隐藏箭头
    wrap.onmouseout = function () {
        slowAnimate(arrow, {"opacity": 0});
        $(".herodetail .herodetail-2 a").css("display","none");
        timer = setInterval(autoPlay, 1000);
    }

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.6,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 20,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 858,
            "top": 20,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 20,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.6,
            "zIndex": 2
        },//4
        {
            "width": 200,
            "top": 20,
            "left": 750,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 200,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        },//4
        {
            "width": 400,
            "top": 20,
            "left": 850,
            "opacity": 0,
            "zIndex": 0
        }
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


    assign();

    //点击右箭头
    arrRight.onclick = function () {
        $(".herodetail .herodetail-2 a").css("display","none");
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    }

    //点击左箭头
    arrLeft.onclick = function () {
        $(".herodetail .herodetail-2 a").css("display","none");
        if(flag){
            flag = false;
            config.push(config.shift());
            assign();
        }
    }

    function assign() {
        for (var i = 0; i < list.length; i++) {
            slowAnimate(list[i], config[i], function () {
                flag = true;
            });
        }
    }

    //自动切换
    timer = setInterval(autoPlay, 1000);
    function autoPlay() {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    }
}
//封装缓动框架  让任意对象的  任意数值属性  变为任意的目标值
function slowAnimate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        //遍历json获取所有的属性名和属性的目标值
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 10);
}

//封装 获取任意对象的 任意计算后的属性
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}