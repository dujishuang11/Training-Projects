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
		console.log($scope.zhylist)
	})
  	//请求BOSS的
	$http({
		url:"http://"+ip+"users/?level=0",
		method:'get'
		
	}).then(function(e){
		$scope.zhylist1 = e.data;
		console.log($scope.zhylist1)
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
	$scope.zhy_tt = false;
  	
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
	console.log($scope.zhy_nnn)
	
//	$scope.zhy_t1 = GetDateStr(3);
	//将三天后的日期转化格式yyyy-MM-dd
	$scope.zhyt1 = ($filter("date")($scope.zhy_nnn,"yyyy-MM-dd"));
	$scope.zhyt3 = ($filter("date")($scope.zhy_nnn1,"yyyy-MM-dd"));
	
	
	
	//再将日期赋给min值
	$scope.zhybig=$scope.zhyt1;
	$scope.zhybig1=$scope.zhyt3;
	
//	console.log($scope.zhy_time)
	console.log($scope.zhyt3)

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
	









var start = document.getElementById("txtBeginDate").value;
		var end = document.getElementById("txtEndDate").value;

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
  	
  	//日期蒙版按钮
  	$scope.zhy_xiao = function(){
  		$scope.zhy_tt = !$scope.zhy_tt;
  	}
  	
  	//提交按钮
  	$scope.zhy_sub = function(){
  		
  		$scope.zhy_off = false;
		$('.zhy_sussesss').animate({bottom:'1rem',opacity:1},0);
  		
  		
  		//判断是否为空
  		if($scope.zhy_sqr ==''||$scope.zhy_sjr==''||$scope.zhy_yy==''){
			$scope.zhy_isShow = !$scope.zhy_isShow;
			
		}else if($('#txtBeginDate').val()>=$('#txtEndDate').val()){
			$scope.zhy_tt = !$scope.zhy_tt;
		}else{
			console.log('成功');
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
  
