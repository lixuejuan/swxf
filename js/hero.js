$(function () {
    var json = [{
        "left": "0px",
        "top": "0px"
    }, {
        "left": "164px",
        "top": "0px"
    }, {
        "left": "328px",
        "top": "0px"
    }, {
        "left": "492px",
        "top": "0px"
    }, {
        "left": "656px",
        "top": "0px"
    }, {
        "left": "820px",
        "top": "0px"
    }, {
        "left": "984px",
        "top": "0px"
    }, {
        "left": "0px",
        "top": "280px"
    }, {
        "left": "164px",
        "top": "280px"
    }, {
        "left": "328px",
        "top": "280px"
    }, {
        "left": "492px",
        "top": "280px"
    }, {
        "left": "656px",
        "top": "280px"
    }, {
        "left": "820px",
        "top": "280px"
    }, {
        "left": "984px",
        "top": "280px"
    }, {
        "left": "0px",
        "top": "560px"
    }, {
        "left": "164px",
        "top": "560px"
    }, {
        "left": "328px",
        "top": "560px"
    }, {
        "left": "492px",
        "top": "560px"
    }, {
        "left": "656px",
        "top": "560px"
    }, {
        "left": "820px",
        "top": "560px"
    }, {
        "left": "984px",
        "top": "560px"
    }];
    //顶部固定导航部分开始
    var navTop = $(".nav").position().top + 20;
    var navHeight = $(".nav").height() + 15;
    $(window).scroll(function () {
        if ($(this).scrollTop() > navTop) {
            $(".nav").addClass("fixed");
            $(".hero").css("paddingTop", navHeight + "px");
        } else {
            $(".hero").css("paddingTop", "0px");
            $(".nav").removeClass("fixed");
        }
    });
    //顶部固定导航部分结束

    //导航部分开始
    $(".active").css("opacity", 1);
    $(".hero-nav li").mouseenter(function () {
        $(this).css("opacity", 1).siblings().css("opacity", 0.5);
        $(".active").css("opacity", 1);
    })
    $(".hero-nav>ul").mouseleave(function () {
        $(this).children().css("opacity", 0.5);
        $(".active").css("opacity", 1);
    })
    $(".hero-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".hero-nav li:eq(0)").click(function () {
        $(".hero-main li").each(function (index, element) {
            var index = $(this).index();
            $(this).animate(json[index], 500);
            $(this).css({
                "boxShadow": "0 0 0px #00c3ff inset",
                "backgroundColor": "rgba(0, 195, 255, 0)"
            });
            $(".hero-main li").css("opacity", 1);
            $(".hero-main span").css("backgroundColor", "rgba(50, 50, 100, .9)");
            $(".hero-main span").css("color", "#D0D0DC");
        })
    })
    $(".hero-nav li:eq(1)").click(function () {
        $(".hero-main li").each(function (index, element) {
            var index = $(this).index();
            $(this).animate(json[index], 500);
            $(this).css({
                "boxShadow": "0 0 0px #00c3ff inset",
                "backgroundColor": "rgba(0, 195, 255, 0)"
            });
            $(".hero-main span").css("backgroundColor", "rgba(50, 50, 100, .9)");
            $(".hero-main span").css("color", "#D0D0DC");
            $(this).siblings().css("opacity", 0.6);
            for (var i = 0; i < 6; i++) {
                $(".hero-main li")[i].style.opacity = 1;
                $(".hero-main span")[i].style.backgroundColor = "#00BFFA";
                $(".hero-main span")[i].style.color = "white";
                $(".hero-main li")[i].style.boxShadow = "0 0 20px #00c3ff inset";
                $(".hero-main li")[i].style.backgroundColor = "rgba(0, 195, 255, 0.3)";
            }
        })
    })
    $(".hero-nav li:eq(2)").click(function () {
        var json = [{
            "left": "984px",
            "top": "0px"
        }, {
            "left": "0px",
            "top": "280px"
        }, {
            "left": "164px",
            "top": "280px"
        }, {
            "left": "328px",
            "top": "280px"
        }, {
            "left": "492px",
            "top": "280px"
        }, {
            "left": "656px",
            "top": "280px"
        }, {
            "left": "0px",
            "top": "0px"
        }, {
            "left": "164px",
            "top": "0px"
        }, {
            "left": "328px",
            "top": "0px"
        }, {
            "left": "492px",
            "top": "0px"
        }, {
            "left": "656px",
            "top": "0px"
        }, {
            "left": "820px",
            "top": "0px"
        }, {
            "left": "820px",
            "top": "280px"
        }, {
            "left": "984px",
            "top": "280px"
        }, {
            "left": "0px",
            "top": "560px"
        }, {
            "left": "164px",
            "top": "560px"
        }, {
            "left": "328px",
            "top": "560px"
        }, {
            "left": "492px",
            "top": "560px"
        }, {
            "left": "656px",
            "top": "560px"
        }, {
            "left": "820px",
            "top": "560px"
        }, {
            "left": "984px",
            "top": "560px"
        }];
        $(".hero-main li").each(function (index, element) {
            var index = $(this).index();
            $(this).animate(json[index], 500);
            $(this).css({
                "boxShadow": "0 0 0px #00c3ff inset",
                "backgroundColor": "rgba(0, 195, 255, 0)"
            });
            $(".hero-main span").css("backgroundColor", "rgba(50, 50, 100, .9)");
            $(".hero-main span").css("color", "#D0D0DC");
            $(this).siblings().css("opacity", 0.6);
            for (var i = 6; i < 12; i++) {
                $(".hero-main li")[i].style.opacity = 1;
                $(".hero-main span")[i].style.backgroundColor = "#00BFFA";
                $(".hero-main span")[i].style.color = "white";
                $(".hero-main li")[i].style.boxShadow = "0 0 20px #00c3ff inset";
                $(".hero-main li")[i].style.backgroundColor = "rgba(0, 195, 255, 0.3)";
            }
        })
    })

    $(".hero-nav li:eq(3)").click(function () {
        var json = [{
            "left": "820px",
            "top": "0px"
        }, {
            "left": "984px",
            "top": "0px"
        }, {
            "left": "0px",
            "top": "280px"
        }, {
            "left": "164px",
            "top": "280px"
        }, {
            "left": "328px",
            "top": "280px"
        }, {
            "left": "492px",
            "top": "280px"
        }, {
            "left": "656px",
            "top": "280px"
        }, {
            "left": "820px",
            "top": "280px"
        }, {
            "left": "984px",
            "top": "280px"
        }, {
            "left": "0px",
            "top": "560px"
        }, {
            "left": "164px",
            "top": "560px"
        }, {
            "left": "328px",
            "top": "560px"
        }, {
            "left": "0px",
            "top": "0px"
        }, {
            "left": "164px",
            "top": "0px"
        }, {
            "left": "328px",
            "top": "0px"
        }, {
            "left": "492px",
            "top": "0px"
        }, {
            "left": "656px",
            "top": "0px"
        }, {
            "left": "492px",
            "top": "560px"
        }, {
            "left": "656px",
            "top": "560px"
        }, {
            "left": "820px",
            "top": "560px"
        }, {
            "left": "984px",
            "top": "560px"
        }];
        $(".hero-main li").each(function (index, element) {
            var index = $(this).index();
            $(this).animate(json[index], 500);
            $(this).css({
                "boxShadow": "0 0 0px #00c3ff inset",
                "backgroundColor": "rgba(0, 195, 255, 0)"
            });
            $(".hero-main span").css("backgroundColor", "rgba(50, 50, 100, .9)");
            $(".hero-main span").css("color", "#D0D0DC");
            $(this).siblings().css("opacity", 0.6);
            for (var i = 12; i < 17; i++) {
                $(".hero-main li")[i].style.opacity = 1;
                $(".hero-main span")[i].style.backgroundColor = "#00BFFA";
                $(".hero-main span")[i].style.color = "white";
                $(".hero-main li")[i].style.boxShadow = "0 0 20px #00c3ff inset";
                $(".hero-main li")[i].style.backgroundColor = "rgba(0, 195, 255, 0.3)";
            }
        })
    })

    $(".hero-nav li:eq(4)").click(function () {
        var json = [{
            "left": "656px",
            "top": "0px"
        }, {
            "left": "820px",
            "top": "0px"
        }, {
            "left": "984px",
            "top": "0px"
        }, {
            "left": "0px",
            "top": "280px"
        }, {
            "left": "164px",
            "top": "280px"
        }, {
            "left": "328px",
            "top": "280px"
        }, {
            "left": "492px",
            "top": "280px"
        }, {
            "left": "656px",
            "top": "280px"
        }, {
            "left": "820px",
            "top": "280px"
        }, {
            "left": "984px",
            "top": "280px"
        }, {
            "left": "0px",
            "top": "560px"
        }, {
            "left": "164px",
            "top": "560px"
        }, {
            "left": "328px",
            "top": "560px"
        }, {
            "left": "492px",
            "top": "560px"
        }, {
            "left": "656px",
            "top": "560px"
        }, {
            "left": "820px",
            "top": "560px"
        }, {
            "left": "984px",
            "top": "560px"
        }, {
            "left": "0px",
            "top": "0px"
        }, {
            "left": "164px",
            "top": "0px"
        }, {
            "left": "328px",
            "top": "0px"
        }, {
            "left": "492px",
            "top": "0px"
        }];
        $(".hero-main li").each(function (index, element) {
            var index = $(this).index();
            $(this).animate(json[index], 500);
            $(this).css({
                "boxShadow": "0 0 0px #00c3ff inset",
                "backgroundColor": "rgba(0, 195, 255, 0)"
            });
            $(this).siblings().css("opacity", 0.6);
            $(".hero-main span").css("backgroundColor", "rgba(50, 50, 100, .9)");
            $(".hero-main span").css("color", "#D0D0DC");
            for (var i = 17; i < 21; i++) {
                $(".hero-main li")[i].style.boxShadow = "0 0 20px #00c3ff inset";
                $(".hero-main li")[i].style.opacity = 1;
                $(".hero-main span")[i].style.backgroundColor = "#00BFFA";
                $(".hero-main span")[i].style.color = "white";
                $(".hero-main li")[i].style.backgroundColor = "rgba(0, 195, 255, 0.3)";
            }
        })
    })

//导航部分结束


//主体内容部分开始
    $(".hero-main li").each(function (index, element) {
        var index = $(this).index();
        $(this).css(json[index]);
    })
    var $py = null;
    var $color = null;
    var $op = null
    $(".hero-main li").mouseenter(function () {
        $color = $(this).children("span").css("backgroundColor");
        $op = $(this).css("opacity");
        $(this).css({
            "opacity": 1,
            "backgroundColor": "rgba(0, 195, 255, 0)",
            "boxShadow": "0 0 0px #00c3ff inset"
        });
        $(this).children("span").css({
            "backgroundColor": "white",
            "color": "#1A325E",
        });
        var $positionY = parseInt($(this).find("i").css("backgroundPositionY"));
        $py = $positionY
        $(this).find("i").css("backgroundPositionY", 101 + $positionY + "px");
    })
    $(".hero-main li").mouseleave(function () {
        if ($color == "rgb(0, 191, 250)") {
            $(this).children("span").css({
                "backgroundColor": "#00BFFA",
                "color": "white"
            })
            $(this).css({
                "backgroundColor": "rgba(0, 195, 255, 0.3)",
                "boxShadow": "0 0 20px #00c3ff  inset"
            })
        } else {
            $(this).children("span").css({
                "backgroundColor": "rgba(50, 50, 100, .9)",
                "color": "#D0D0DC",
            })
        }
        if ($op == 0.6) {
            $(this).css("opacity", 0.6);
        }
        $(this).find("i").css("backgroundPositionY", $py + "px");
    })
//主体内容部分结束
})
