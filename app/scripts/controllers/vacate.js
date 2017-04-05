'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('vacateCtrl', ['$scope','$http','$filter',"$location","$state",function ($scope,$http,$filter,$location,$state) {
  	/*
 * Author: ����־
 */
jQuery.fn.extend({
    calendar: function(c) {
        function r() {
            $("#" + c.controlId).find(".tabD a").mouseup(function() {
                var a = new Date($("#" + c.controlId).find(".currentYear").text() + "/" + $("#" + c.controlId).find(".currentMonth").text() + "/1");
                if ($(this).hasClass("prevD")) {
                    a.setMonth(a.getMonth() - 1);
                    a.setDate($(this).text());
                    var b = c.speed;
                    c.speed = 0;
                    $("#" + c.controlId).find(".prevMonth").triggerHandler("mouseup");
                    c.speed = b
                } else if ($(this).hasClass("nextD")) {
                    a.setMonth(a.getMonth() + 1);
                    a.setDate($(this).text());
                    b = c.speed;
                    c.speed = 0;
                    $("#" + c.controlId).find(".nextMonth").triggerHandler("mouseup");
                    c.speed = b
                }
                var d = $(this).text();
                a = a.getFullYear() + "-" + (Number(a.getMonth() + 1) < 10 ? "0" + Number(a.getMonth() + 1) : Number(a.getMonth() + 1)) + "-" + (Number(d) < 10 ? "0" + d: d);
                n.val(a);
                $("#" + c.controlId + " div table a").removeClass("select");
                $("#" + c.controlId + " .tabD a:contains('" + d + "')").each(function() {
                    d == $(this).text() && !$(this).hasClass("prevD") && !$(this).hasClass("nextD") && $(this).addClass("select")
                });
                $("#" + c.controlId).hide();
                c.callback()
            }).hover(function() {
                $(this).addClass("hover")
            },
            function() {
                $(this).removeClass("hover")
            })
        }
        function u() {
            $("#" + c.controlId).find(".tabM a").mouseup(function() {
                var a = s(Number($("#" + c.controlId).find(".currentYear").text()), Number($(this).attr("val")));
                D(a);
                r();
                $("#" + c.controlId).find(".currentMonth").text(Number($(this).attr("val")) + 1)
            }).hover(function() {
                $(this).addClass("hover")
            },
            function() {
                $(this).removeClass("hover")
            })
        }
        function v() {
            $("#" + c.controlId).find(".tabY a").mouseup(function() {
                var a = s(Number($(this).text()), Number($("#" + c.controlId).find(".currentMonth").text()) - 1);
                D(a);
                r();
                $("#" + c.controlId).find(".currentYear").text(Number($(this).text()))
            }).hover(function() {
                $(this).addClass("hover")
            },
            function() {
                $(this).removeClass("hover")
            })
        }
        function s(a, b) {
            var newDate = new Date(a, b, 1);
            newDate.setDate(0);
            var d = 1,
            h = newDate.getDate();
            newDate.setDate(1);
            newDate.setMonth(newDate.getMonth() + 1);
            var m = newDate.getDay();
            if (m == 0) m = 7;
            h = h - m + 1;
            newDate.setMonth(newDate.getMonth() + 1);
            newDate.setDate(0);
            var o = newDate.getDate(),
            g = "<table class='tabD'>";
            g += "<tr><th>\u65e5</th><th>\u4e00</th><th>\u4e8c</th><th>\u4e09</th><th>\u56db</th><th>\u4e94</th><th>\u516d</th></tr>";
            var i = w(),
            l = "",
            p = "",
            t = "";
            c.complement || (t = "style='display:none'");
            for (var x = 0; x < 6; x++) {
                g += "<tr>";
                for (var y = 0; y < 7; y++) {
                    var j = x * 7 + y + 1 - m;
                    p = l = "";
                    if (c.lowerLimit != NaN && c.lowerLimit > new Date(newDate.getFullYear(), newDate.getMonth(), j) || c.upperLimit != NaN && new Date(newDate.getFullYear(), newDate.getMonth(), j) > c.upperLimit) if (0 < j && j <= o) {
                        if (newDate.getFullYear() == e && newDate.getMonth() == f && j == q) l = "current";
                        g += "<td><span class='" + l + "'>" + j + "</span></td>"
                    } else if (j <= 0) {
                        if (newDate.getFullYear() == e && newDate.getMonth() - 1 == f && h == q) l = "current";
                        g += "<td><span class='" + l + "' " + t + ">" + h + "</span></td>";
                        h++
                    } else {
                        if (j > o) {
                            if (newDate.getFullYear() == e && newDate.getMonth() + 1 == f && d == q) l = "current";
                            g += "<td><span class='" + l + "' " + t + ">" + d + "</span></td>";
                            d++
                        }
                    } else if (0 < j && j <= o) {
                        if (newDate.getFullYear() == e && newDate.getMonth() == f && j == q) l = "current";
                        if (newDate.getFullYear() == i.getFullYear() && newDate.getMonth() == i.getMonth() && j == i.getDate()) p = "select";
                        g += "<td><a class='" + p + " " + l + "'>" + j + "</a></td>"
                    } else if (j <= 0) {
                        if (newDate.getFullYear() == e && newDate.getMonth() - 1 == f && h == q) l = "current";
                        if (newDate.getFullYear() == i.getFullYear() && newDate.getMonth() - 1 == i.getMonth() && h == i.getDate()) p = "select";
                        g += "<td><a class='prevD " + p + " " + l + "' " + t + ">" + h + "</a></td>";
                        h++
                    } else if (j > o) {
                        if (newDate.getFullYear() == e && newDate.getMonth() + 1 == f && d == q) l = "current";
                        if (newDate.getFullYear() == i.getFullYear() && newDate.getMonth() + 1 == i.getMonth() && d == i.getDate()) p = "select";
                        g += "<td><a class='nextD " + p + " " + l + "' " + t + ">" + d + "</a></td>";
                        d++
                    }
                    g = g.replace("class=' '", "")
                }
                g += "</tr>"
            }
            g += "</table>";
            return g
        }
        function z(a) {
            var b = w(),
            d = "<table class='tabM'>";
            d += "<tr>";
            d += "<td><a val='0' " + (a == b.getFullYear() && 0 == b.getMonth() ? "class='select'": "") + " " + (a == e && 0 == f ? "class='current'": "") + ">\u4e00\u6708</a></td>";
            d += "<td><a val='1' " + (a == b.getFullYear() && 1 == b.getMonth() ? "class='select'": "") + " " + (a == e && 1 == f ? "class='current'": "") + ">\u4e8c\u6708</a></td>";
            d += "<td><a val='2' " + (a == b.getFullYear() && 2 == b.getMonth() ? "class='select'": "") + " " + (a == e && 2 == f ? "class='current'": "") + ">\u4e09\u6708</a></td>";
            d += "<td><a val='3' " + (a == b.getFullYear() && 3 == b.getMonth() ? "class='select'": "") + " " + (a == e && 3 == f ? "class='current'": "") + ">\u56db\u6708</a></td>";
            d += "</tr>";
            d += "<tr>";
            d += "<td><a val='4' " + (a == b.getFullYear() && 4 == b.getMonth() ? "class='select'": "") + " " + (a == e && 4 == f ? "class='current'": "") + ">\u4e94\u6708</a></td>";
            d += "<td><a val='5' " + (a == b.getFullYear() && 5 == b.getMonth() ? "class='select'": "") + " " + (a == e && 5 == f ? "class='current'": "") + ">\u516d\u6708</a></td>";
            d += "<td><a val='6' " + (a == b.getFullYear() && 6 == b.getMonth() ? "class='select'": "") + " " + (a == e && 6 == f ? "class='current'": "") + ">\u4e03\u6708</a></td>";
            d += "<td><a val='7' " + (a == b.getFullYear() && 7 == b.getMonth() ? "class='select'": "") + " " + (a == e && 7 == f ? "class='current'": "") + ">\u516b\u6708</a></td>";
            d += "</tr>";
            d += "<tr>";
            d += "<td><a val='8' " + (a == b.getFullYear() && 8 == b.getMonth() ? "class='select'": "") + " " + (a == e && 8 == f ? "class='current'": "") + ">\u4e5d\u6708</a></td>";
            d += "<td><a val='9' " + (a == b.getFullYear() && 9 == b.getMonth() ? "class='select'": "") + " " + (a == e && 9 == f ? "class='current'": "") + ">\u5341\u6708</a></td>";
            d += "<td><a val='10' " + (a == b.getFullYear() && 10 == b.getMonth() ? "class='select'": "") + " " + (a == e && 10 == f ? "class='current'": "") + ">\u5341\u4e00\u6708</a></td>";
            d += "<td><a val='11' " + (a == b.getFullYear() && 11 == b.getMonth() ? "class='select'": "") + " " + (a == e && 11 == f ? "class='current'": "") + ">\u5341\u4e8c\u6708</a></td>";
            d += "</tr>";
            d += "</table>";
            return d
        }
        function A(a) {
            a = Math.floor(a / 10) * 10;
            var b = "<table class='tabY'>",
            d = w(),
            h = "",
            m = "",
            o = "";
            c.complement || (o = "style='display:none'");
            for (var g = 0; g < 3; g++) {
                b += "<tr>";
                for (var i = 0; i < 4; i++) {
                    m = h = "";
                    if (g + 1 * i + 1 != 1 && (g + 1) * (i + 1) != 12) {
                        if (a == d.getFullYear()) h = "select";
                        if (a == e) m = "current";
                        b += "<td><a class='" + h + " " + m + "' >" + a + "</a></td>";
                        a++
                    } else if (g + 1 * i + 1 == 1) {
                        if (a - 1 == d.getFullYear()) h = "select";
                        if (a - 1 == e) m = "current";
                        b += "<td><a class='prevY " + h + " " + m + "' " + o + ">" + (a - 1) + "</a></td>"
                    } else {
                        if (a == d.getFullYear()) h = "select";
                        if (a == e) m = "current";
                        b += "<td><a class='nextY " + h + " " + m + "' " + o + ">" + a + "</a></td>"
                    }
                }
                b += "</tr>"
            }
            b += "</table>";
            return b
        }
        function B(a) {
            var b = $("#" + c.controlId).find(".reserve"),
            d = $("#" + c.controlId).find(".enabled");
            b.stop();
            d.stop();
            b.removeClass("reserve").addClass("enabled");
            d.removeClass("enabled").addClass("reserve");
            b.css({
                "margin-left": d.width() + "px",
                "margin-top": "0px"
            });
            b.empty().append(a);
            b.animate({
                "margin-left": "0px"
            },
            c.speed);
            d.animate({
                "margin-left": "-" + d.width() + "px"
            },
            c.speed,
            function() {
                d.empty()
            })
        }
        function C(a) {
            var b = $("#" + c.controlId).find(".reserve"),
            d = $("#" + c.controlId).find(".enabled");
            b.stop();
            d.stop();
            b.removeClass("reserve").addClass("enabled");
            d.removeClass("enabled").addClass("reserve");
            b.css({
                "margin-left": "-" + d.width() + "px",
                "margin-top": "0px"
            });
            b.empty().append(a);
            b.animate({
                "margin-left": "0px"
            },
            c.speed);
            d.animate({
                "margin-left": d.width() + "px"
            },
            c.speed,
            function() {
                d.empty()
            })
        }
        function D(a) {
            var b = $("#" + c.controlId).find(".reserve"),
            d = $("#" + c.controlId).find(".enabled");
            b.stop();
            d.stop();
            b.removeClass("reserve").addClass("enabled");
            d.removeClass("enabled").addClass("reserve");
            $("#" + c.controlId).css({
                "z-index": 1
            });

            b.css({
                "z-index": -1
            });
            d.css({
                "z-index": -1
            });
            b.css({
                "margin-left": "0px",
                "margin-top": d.height() + "px"
            });
            b.empty().append(a);
            b.animate({
                "margin-top": "0px"
            },
            c.speed);
            d.animate({
                "margin-top": "-" + d.width() + "px"
            },
            c.speed,
            function() {
                d.empty();
                $("#" + c.controlId).css({
                    "z-index": 0
                });
                b.css({
                    "z-index": 0
                });
                d.css({
                    "z-index": 0
                })
            })
        }
        function E(a) {
            var b = $("#" + c.controlId).find(".reserve"),
            d = $("#" + c.controlId).find(".enabled");
            b.stop();
            d.stop();
            b.removeClass("reserve").addClass("enabled");
            d.removeClass("enabled").addClass("reserve");
            $("#" + c.controlId).css({
                "z-index": 1
            });
            b.css({
                "z-index": -1
            });
            d.css({
                "z-index": -1
            });
            b.css({
                "margin-left": "0px",
                "margin-top": "-" + d.height() + "px"
            });
            b.empty().append(a);
            b.animate({
                "margin-top": "0px"
            },
            c.speed);
            d.animate({
                "margin-top": d.width() + "px"
            },
            c.speed,
            function() {
                d.empty();
                $("#" + c.controlId).css({
                    "z-index": 0
                });
                b.css({
                    "z-index": 0
                });
                d.css({
                    "z-index": 0
                })
            })
        }
        function w() {
            var re = /(\d\d\d\d)(\W)?(\d\d)(\W)?(\d\d)/g;
            var a = n.val();
            a = a.replace(re, "$1/$3/$5@").split("@")[0];
            return new Date(a)
        }
        function F(a) {
            var b = [];
            b.x = a.offsetLeft;
            for (b.y = a.offsetTop; a = a.offsetParent;) {
                b.x += a.offsetLeft;
                b.y += a.offsetTop
            }
            return b
        }
        c = jQuery.extend({
            controlId: $(this).attr("id") + "Calendar",
            speed: 200,
            complement: true,
            readonly: true,
            upperLimit: NaN,
            lowerLimit: NaN,
            callback: function() {}
        },
        c || {});
        var n = $(this);
        if (c.readonly) {
            n.attr("readonly", true);
            n.bind("keydown",
            function() {
                if (event.keyCode == 8) event.keyCode = 0
            })
        }
        var today = new Date();
        var e = today.getFullYear(),
        f = today.getMonth(),
        q = today.getDate(),
        k = "";
        k += "<div id='" + c.controlId + "'class='calendar'>";
        k += "  <div class='calMain'>";
        k += "    <div class='calTitle'>";
        k += "      <a class='prevMonth'></a><span class='t_date'><span class='currentYearText'><a class='currentYear'>" + e + "</a>\u5e74</span><span class='currentMonthText'><a class='currentMonth'>" + (f + 1) + "</a>\u6708</span></span><a class='nextMonth'></a>";
        k += "    </div>";
        k += "    <div class='calContent'>";
        k += "      <div class='reserve'>";
        k += "      </div>";
        k += "      <div class='enabled'>";
        k += s(e, f);
        k += "      </div>";
        k += "    </div>";
        k += "  </div>";
        k += "</div>";
        $(".zhy_wra").append(k);
        r();
        $("#" + c.controlId).find(".prevMonth").mouseup(function() {
            if ($("#" + c.controlId).find(".enabled > .tabD").length > 0) {
                var a = $("#" + c.controlId).find(".currentYear"),
                b = $("#" + c.controlId).find(".currentMonth"),
                d = s(Number(a.text()), Number(b.text()) - 2);
                C(d);
                if (Number(b.text()) != 1) b.text(Number(b.text()) - 1);
                else {
                    a.text(Number(a.text()) - 1);
                    b.text("12")
                }
                r()
            } else if ($("#" + c.controlId).find(".enabled > .tabM").length > 0) {
                d = z(Number($("#" + c.controlId).find(".currentYear").text()) - 1);
                C(d);
                u();
                $("#" + c.controlId).find(".currentYear").text(Number($("#" + c.controlId).find(".currentYear").text()) - 1)
            } else if ($("#" + c.controlId).find(".enabled > .tabY").length > 0) {
                d = A(Number($("#" + c.controlId).find(".currentYear").text()) - 10);
                C(d);
                v();
                $("#" + c.controlId).find(".currentYear").text(Number($("#" + c.controlId).find(".currentYear").text()) - 10)
            }
        });
        $("#" + c.controlId).find(".nextMonth").mouseup(function() {
            if ($("#" + c.controlId).find(".enabled > .tabD").length > 0) {
                var a = $("#" + c.controlId).find(".currentYear"),
                b = $("#" + c.controlId).find(".currentMonth"),
                d = s(Number(a.text()), Number(b.text()));
                B(d);
                if (Number(b.text()) != 12) b.text(Number(b.text()) + 1);
                else {
                    a.text(Number(a.text()) + 1);
                    b.text("1")
                }
                r()
            } else if ($("#" + c.controlId).find(".enabled > .tabM").length > 0) {
                d = z(Number($("#" + c.controlId).find(".currentYear").text()) + 1);
                B(d);
                u();
                $("#" + c.controlId).find(".currentYear").text(Number($("#" + c.controlId).find(".currentYear").text()) + 1)
            } else if ($("#" + c.controlId).find(".enabled > .tabY").length > 0) {
                d = A(Number($("#" + c.controlId).find(".currentYear").text()) + 10);
                B(d);
                v();
                $("#" + c.controlId).find(".currentYear").text(Number($("#" + c.controlId).find(".currentYear").text()) + 10)
            }
        });
        $("#" + c.controlId).find(".currentMonthText").mouseup(function() {
            if (! ($("#" + c.controlId).find(".enabled > .tabM").length > 0)) {
                var a = z(Number($("#" + c.controlId).find(".currentYear").text()));
                E(a);
                u()
            }
        });
        $("#" + c.controlId).find(".currentYearText").mouseup(function() {
            if (! ($("#" + c.controlId).find(".enabled > .tabY").length > 0)) {
                var a = A(Number($("#" + c.controlId).find(".currentYear").text()));
                E(a);
                v()
            }
        });
        n.bind("click focus",
        function() {
            if ($("#" + c.controlId + ":hidden").length != 0) {
                $(".calendar").hide();
                var a = $("#" + c.controlId),
                b = F(n[0]),
                d = b.x + Number(n.attr("clientLeft"))-1;
                b = b.y + Number(n.attr("clientTop")) + Number(n.attr("clientHeight"))-1;
                a.css({
                    top: b + "px",
                    left: d + "px"
                });
                d = $("#" + c.controlId).width();
                b = $("#" + c.controlId).height();
                a.width(0);
                a.height(0);
                a.show().animate({
                    width: "188px",
                    height: "178px"
                },
                c.speed);
                a.bind("selectstart",
                function() {
                    return false
                }).bind("mousedown",
                function() {
                    return false
                })
            }
        });
        $(document).mouseup(function(a) {
            if ($(a.target).attr("id") != n.attr("id") && ($(a.target).parentsUntil("#" + c.controlId).parent().length == 0 || $(a.target).parentsUntil("#" + c.controlId).parent()[0].id != c.controlId)) $("#" + c.controlId).hide()
        })
    }
});
  	
  	
  	
  	
  	
  	//直接打url地址跳转登录页面
  	if(!sessionStorage.username){
		$state.go('login')
	}
  	
  	
  	//请求领导层的
  	$http({
  		url:"http://"+ip+"users/?level=1",
  		method:'get'
  		
  	}).then(function(e){
		$scope.zhylist = e.data;
//		console.log($scope.zhylist)
	})
  	//请求BOSS的
	$http({
		url:"http://"+ip+"users/?level=0",
		method:'get'
		
	}).then(function(e){
		$scope.zhylist1 = e.data;
//		console.log($scope.zhylist1)
	})
	
	
	$scope.zhy_hihi = false;
	$scope.zhy_mm = false;
	
	//判断是谁进入页面
	if(sessionStorage.level==1){
		$scope.zhy_hihi = !$scope.zhy_hihi;
	}else if(sessionStorage.level==0){
		$scope.zhy_mm = !$scope.zhy_mm;
	}
	
	//boss点击蒙版按钮
	$scope.zhy_href = function(){
		$location.url('/firstPage');
	}
	
	
//	function GetDateStr(AddDayCount) { 
//	    var dd = new Date(); 
//	        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
//	        var y = dd.getFullYear(); 
//	        var m = dd.getMonth()+1;//获取当前月份的日期 
//	        var d = dd.getDate(); 
//	        return y+"-"+m+"-"+d; 
//	} 
//	console.log("前天："+GetDateStr(-2)); 
//	console.log("昨天："+GetDateStr(-1)); 
//	console.log("今天："+GetDateStr(0)); 
//	console.log("明天："+GetDateStr(1)); 
//	console.log("后天："+GetDateStr(2)); 
//	console.log(GetDateStr(3));
	
  	
  	$scope.zhy_sqr = sessionStorage.username;
	$scope.zhy_sjr = '';
	$scope.zhy_yy = '';
	$scope.zhy_isShow = false;
	
  	
    $scope.zhy_time1 = new Date();
    $scope.zhy_time2 = new Date();
    //发送请求信息的时间
	$scope.zhy_time = $filter("date")($scope.zhy_time1 , "yyyy/MM/dd HH:mm:ss");
	
	
//	var now = new Date();
//	var end = new Date();
//	console.log(end.setDate(now.getDate()+3))
	
	
	$scope.zhytime = Number($scope.zhy_time2.setDate($scope.zhy_time1.getDate()+3));
	$scope.zhytimer = ($filter("date")($scope.zhytime,"yyyy-MM-dd HH:mm:ss"));
//	console.log($scope.zhytimer)
	//转化之后当前日期加3天
	$scope.zhy_nnn = new Date($scope.zhytimer);
	$scope.zhy_nnn1 = new Date($scope.zhytimer);
//	console.log($scope.zhy_nnn)
	
//	$scope.zhy_t1 = GetDateStr(3);
	//将三天后的日期转化格式yyyy-MM-dd
	$scope.zhyt1 = ($filter("date")($scope.zhy_nnn,"yyyy-MM-dd"));
	$scope.zhyt3 = ($filter("date")($scope.zhy_nnn1,"yyyy-MM-dd"));
	
	
	
	//再将日期赋给min值
	$scope.zhybig=$scope.zhyt1;
	$scope.zhybig1=$scope.zhyt3;
	
//	console.log($scope.zhy_time)
//	console.log($scope.zhyt3)

	$("#txtBeginDate").calendar({

            controlId: "divDate",                                 // 弹出的日期控件ID，默认: $(this).attr("id") + "Calendar"

            speed: 200,                                           // 三种预定速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认：200
            complement: true,                                     // 是否显示日期或年空白处的前后月的补充,默认：true
            readonly: true,                                       // 目标对象是否设为只读，默认：true
//          upperLimit: new Date(),                               // 日期上限，默认：NaN(不限制)
            lowerLimit: new Date($scope.zhybig),                   // 日期下限，默认：NaN(不限制)
            callback: function () {                               // 点击选择日期后的回调函数
//              alert("您选择的日期是：" + $("#txtBeginDate").val());
            }

        });
        $("#txtEndDate").calendar({

            controlId: "divDate1",                                 // 弹出的日期控件ID，默认: $(this).attr("id") + "Calendar"

            speed: 200,                                           // 三种预定速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认：200
            complement: true,                                     // 是否显示日期或年空白处的前后月的补充,默认：true
            readonly: true,                                       // 目标对象是否设为只读，默认：true
//          upperLimit: new Date(),                               // 日期上限，默认：NaN(不限制)
            lowerLimit: new Date($scope.zhybig1),                   // 日期下限，默认：NaN(不限制)
            callback: function () {                               // 点击选择日期后的回调函数
//              alert("您选择的日期是：" + $("#txtBeginDate").val());
            }

        });
	









//var start = document.getElementById("txtBeginDate").value;
//		var end = document.getElementById("txtEndDate").value;

//	$scope.juge = function ($scope){
//		var start = document.getElementById("txtBeginDate").value;
//		var end = document.getElementById("txtEndDate").value;
//		
//		if(start > end){
//			alert("开始日期不能大于结束日期");
//		}
//	}


  	
  	//内容蒙版按钮
  	$scope.zhy_none = function(){
  		$scope.zhy_isShow = !$scope.zhy_isShow;
  	}
  	
  	
  	$scope.zhy_tt = false;
  	
  	//日期蒙版按钮
  	$scope.zhy_xiao = function(){
  		$scope.zhy_tt = false;
  	}
  	
  	//提交按钮
  	$scope.zhy_sub = function(){
  		
  		$scope.zhy_off = false;
		$('.zhy_sussesss').animate({bottom:'1rem',opacity:1},0);
  		
  		
  		//判断是否为空
  		if($scope.zhy_sqr ==''||$scope.zhy_sjr==''||$scope.zhy_yy==''){
			$scope.zhy_isShow = !$scope.zhy_isShow;
			
		}else if($('#txtBeginDate').val()>=$('#txtEndDate').val()){
			$scope.zhy_tt = true;
		}else{
//			console.log('成功');
			$scope.zhyt2 = ($filter("date")($scope.zhy_nnn1,"yyyy-MM-dd"));
			$http({
				url:"http://"+ip+"shoujianxiang",
				method:'post',
				data:{
						fusername:$scope.zhy_sqr,
						title:"请假申请",
						date:$scope.zhy_time,
						content:"从"+$scope.zhyt1+"到"+$scope.zhyt2+$scope.zhy_yy,
						uid:$scope.zhy_sjr,
						read:'false'
					}
			}).then(function(e){
//				console.log(e)
				$scope.zhy_sqr = sessionStorage.username;
				$scope.zhy_sjr = '';
				$scope.zhy_yy = '';
				$scope.zhy_off = !$scope.zhy_off;
				$('.zhy_sussesss').animate({bottom:'2.5rem',opacity:'0'},2000);
				
				
			})
			
		}
  		
  		
  	}
  	
  	
  	
  	
  }]);
  
//
//'use strict';
//
///**
// * @ngdoc function
// * @name trainingProjectsApp.controller:MainCtrl
// * @description
// * # MainCtrl
// * Controller of the trainingProjectsApp
// */
//angular.module('trainingProjectsApp')
//.controller('vacateCtrl', ['$scope','$http','$filter',"$location","$state",function ($scope,$http,$filter,$location,$state) {
//	
//	//直接打url地址跳转登录页面
//	if(!sessionStorage.username){
//		$state.go('login')
//	}
//	
//	
//	//请求领导层的
//	$http({
//		url:"http://"+ip+"users/?level=1",
//		method:'get'
//		
//	}).then(function(e){
//		$scope.zhylist = e.data;
//		console.log($scope.zhylist)
//	})
//	//请求BOSS的
//	$http({
//		url:"http://"+ip+"users/?level=0",
//		method:'get'
//		
//	}).then(function(e){
//		$scope.zhylist1 = e.data;
//		console.log($scope.zhylist1)
//	})
//	
//	
//	$scope.zhy_hihi = false;
//	$scope.zhy_mm = false;
//	
//	//判断是谁进入页面
//	if(sessionStorage.level==1){
//		$scope.zhy_hihi = !$scope.zhy_hihi;
//	}else if(sessionStorage.level==0){
//		$scope.zhy_mm = !$scope.zhy_mm;
//	}
//	
//	//boss点击蒙版按钮
//	$scope.zhy_href = function(){
//		$location.url('/firstPage');
//	}
//	
//	
////	function GetDateStr(AddDayCount) { 
////	    var dd = new Date(); 
////	        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
////	        var y = dd.getFullYear(); 
////	        var m = dd.getMonth()+1;//获取当前月份的日期 
////	        var d = dd.getDate(); 
////	        return y+"-"+m+"-"+d; 
////	} 
////	console.log("前天："+GetDateStr(-2)); 
////	console.log("昨天："+GetDateStr(-1)); 
////	console.log("今天："+GetDateStr(0)); 
////	console.log("明天："+GetDateStr(1)); 
////	console.log("后天："+GetDateStr(2)); 
////	console.log(GetDateStr(3));
//	
//	
//	$scope.zhy_sqr = sessionStorage.username;
//	$scope.zhy_sjr = '';
//	$scope.zhy_yy = '';
//	$scope.zhy_isShow = false;
//	$scope.zhy_tt = false;
//	
//  $scope.zhy_time1 = new Date();
//  $scope.zhy_time2 = new Date();
//  //发送请求信息的时间
//	$scope.zhy_time = $filter("date")($scope.zhy_time1 , "yyyy/MM/dd HH:mm:ss");
//	
//	
////	var now = new Date();
////	var end = new Date();
////	console.log(end.setDate(now.getDate()+3))
//	
//	
//	$scope.zhytime = Number($scope.zhy_time2.setDate($scope.zhy_time1.getDate()+3));
//	$scope.zhytimer = ($filter("date")($scope.zhytime,"yyyy-MM-dd HH:mm:ss"));
////	console.log($scope.zhytimer)
//	//转化之后当前日期加3天
//	$scope.zhy_nnn = new Date($scope.zhytimer);
//	$scope.zhy_nnn1 = new Date($scope.zhytimer);
//	
////	$scope.zhy_t1 = GetDateStr(3);
//	//将三天后的日期转化格式yyyy-MM-dd
//	$scope.zhyt1 = ($filter("date")($scope.zhy_nnn,"yyyy-MM-dd"));
//	
//	//再将日期赋给min值
//	$scope.zhybig=$scope.zhyt1;
//	
//	
////	console.log($scope.zhy_time)
////	console.log($scope.zhy_t1)
//	
//	//内容蒙版按钮
//	$scope.zhy_none = function(){
//		$scope.zhy_isShow = !$scope.zhy_isShow;
//	}
//	
//	//日期蒙版按钮
//	$scope.zhy_xiao = function(){
//		$scope.zhy_tt = !$scope.zhy_tt;
//	}
//	
//	//提交按钮
//	$scope.zhy_sub = function(){
//		
//		$scope.zhy_off = false;
//		$('.zhy_sussesss').animate({bottom:'1rem',opacity:1},0);
//		
//		
//		//判断是否为空
//		if($scope.zhy_sqr ==''||$scope.zhy_sjr==''||$scope.zhy_yy==''||$scope.zhy_t2==''){
//			$scope.zhy_isShow = !$scope.zhy_isShow;
//			
//		}else if($scope.zhy_nnn>=$scope.zhy_nnn1){
//			$scope.zhy_tt = !$scope.zhy_tt;
//			
//		}else{
//			console.log('成功');
//			$scope.zhyt2 = ($filter("date")($scope.zhy_nnn1,"yyyy-MM-dd"));
//			$http({
//				url:"http://"+ip+"shoujianxiang",
//				method:'post',
//				data:{
//						fusername:$scope.zhy_sqr,
//						title:"请假申请",
//						date:$scope.zhy_time,
//						content:"从"+$scope.zhyt1+"到"+$scope.zhyt2+$scope.zhy_yy,
//						uid:$scope.zhy_sjr,
//						read:'false'
//					}
//			}).then(function(e){
////				console.log(e)
//				$scope.zhy_sqr = sessionStorage.username;
//				$scope.zhy_sjr = '';
//				$scope.zhy_yy = '';
//				$scope.zhy_off = !$scope.zhy_off;
//				$('.zhy_sussesss').animate({bottom:'2.5rem',opacity:'0'},2000);
//				
//				
//			})
//			
//		}
//		
//		
//	}
//	
//	
//	
//	
//}]);
  
