'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
 .controller('businessCtrl',["$scope","$http","$interval","$filter","$state",function($scope,$http,$interval,$filter,$state){
 	  	//判断是否登录
  	if(!sessionStorage.username){
		$state.go('login')
	}
  	
  		//获取当前日期
  	$scope.wyh_tima = new Date();
    $scope.wyh_timb = new Date();
	$scope.wyh_timmm = Number($scope.wyh_timb.setDate($scope.wyh_tima.getDate()+1));
	$scope.wyh_timss = ($filter("date")($scope.wyh_timmm,"yyyy-MM-dd"));
	console.log($scope.wyh_timss); //明天日期  2017-03-29
	//再将日期赋给min值
	$scope.wyh_zhi=$scope.wyh_timss;
	
	//获取执行人后台用户名
  	if(sessionStorage.level==1){
		$http({
			url:"http://"+ip+"users/?level=2",
			method:"get"
		}).then(function(e){
			$scope.arss=e.data;
		})	
	}
  	if(sessionStorage.level==0){
		$http({
			url:"http://"+ip+"users/?level=1",
			method:"get"
		}).then(function(e){
			$scope.arss=e.data;
		})
		$http({
			url:"http://"+ip+"users/?level=2",
			method:"get"
		}).then(function(e){
			$scope.arss2=e.data;
		})	
	}
	
	//昨天
	$scope.wyh_even = Number($scope.wyh_timb.setDate($scope.wyh_tima.getDate()-1));
	$scope.wyh_evenss = ($filter("date")($scope.wyh_even,"yyyy-MM-dd"));
	$http({
		url:'http://'+ip+'shiwu/?{"uid":"'+sessionStorage.username+'","date":"'+$scope.wyh_evenss+'"}',
		method:"get"
	}).then(function(e){
		$scope.itemeven=e.data;
	})
	//今天
	$scope.wyh_today = Number($scope.wyh_timb.setDate($scope.wyh_tima.getDate()));
	$scope.wyh_todayss = ($filter("date")($scope.wyh_today,"yyyy-MM-dd"));
	$http({
		url:'http://'+ip+'shiwu/?{"uid":"'+sessionStorage.username+'","date":"'+$scope.wyh_todayss+'"}',
		method:"get"
	}).then(function(e){
		$scope.itemtoday=e.data;
	})
	//明天
	$http({
		url:'http://'+ip+'shiwu/?{"uid":"'+sessionStorage.username+'","date":"'+$scope.wyh_timss+'"}',
		method:"get"
	}).then(function(e){
		$scope.items=e.data;
	})
	
	$scope.Paixu="date";  //排序
	$scope.wyh_isHide=true; //tab切换
	$scope.bool=true;  //颜色切换
	$scope.bools=false; //颜色切换
//判断内容是否为空
  	$scope.wyh_mode = ''; //日期
  	$scope.wyh_uid = ''; //执行人
  	$scope.wyh_cont = ''; //内容
  	$scope.wyh_isShow=false;
  	
  	//日程事务
  	$scope.togglea=function(Paixu){
  		$scope.wyh_isHide=true;
  		$scope.bool=true;
		$scope.bools=false;
		$http({
			url:"http://"+ip+"shiwu/?uid="+sessionStorage.username,
			method:"get"
		}).then(function(e){
			$scope.items=e.data;
		})
  	}
  	
  	$scope.wyh_toShow=false;
  	
  	//任务分配
  	$scope.toggleb=function(){
		if(sessionStorage.level=="2"){ //员工没权限访问
			console.log(sessionStorage.level)
			$scope.wyh_toShow = !$scope.wyh_toShow;
		}else{
		  	$scope.wyh_isHide=false;
	  		$scope.bools=true;
			$scope.bool=false;
			$scope.wyh_dates=$scope.nows; //文本框时间=获取当前时间
		}
		$scope.wyh_fw=function(){
		  	$scope.wyh_toShow = !$scope.wyh_toShow;
		}
  	}
  	$scope.wyh_none=function(){
  		$scope.wyh_isShow = !$scope.wyh_isShow;
  	}
  	//保存
  	$scope.wyhSave=function(){
  	//提示提交成功
  		$scope.wyh_tscg = false;
		$('.wyh_tscgcss').animate({bottom:'1rem',opacity:1},0);
  	//获取input框的value值
		$scope.wyh_mode = ($filter("date")($scope.wyh_mode,"yyyy-MM-dd"));
		if($scope.wyh_mode=='' || $scope.wyh_cont=="" || $scope.wyh_uid==""){
			$scope.wyh_isShow = !$scope.wyh_isShow;
		}else{
			$http({
				url:"http://"+ip+"shiwu",
				method:"post",
				data:{"date":$scope.wyh_mode,"content":$scope.wyh_cont,"uid":$scope.wyh_uid}
			}).then(function(e){
				//提示成功
				$scope.wyh_tscg = !$scope.wyh_tscg;
				$('.wyh_tscgcss').animate({bottom:'2.5rem',opacity:'0'},2000);
				console.log(e)
				$scope.wyh_mode=""; //清空
				$scope.wyh_cont="";
				$scope.wyh_uid="";
			})
		}
  	}
  	
  	
		
  		
  
}])




