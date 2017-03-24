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
	$http({
		url:"http://"+ip+":401/shiwu/?uid="+sessionStorage.username,
		method:"get"
	}).then(function(e){
		$scope.items=e.data;
	})
	
	$scope.Paixu="date";  //排序
	$scope.wyh_isHide=true; //tab切换
	$scope.bool=true;  //颜色切换
	$scope.bools=false; //颜色切换
//判断内容是否为空
  	$scope.wyh_dates = '';
  	$scope.wyh_uid = '';
  	$scope.wyh_cont = '';
  	$scope.wyh_isShow=false;
  	$scope.togglea=function(Paixu){
  		$scope.wyh_isHide=true;
  		$scope.bool=true;
		$scope.bools=false;
		
		$http({
			url:"http://"+ip+":401/shiwu/?uid="+sessionStorage.username,
			method:"get"
		}).then(function(e){
			$scope.items=e.data;
		})
  	}
  	
  	
  	
  	$scope.wyh_toShow=false;
  	
  	$scope.toggleb=function(){
		if(sessionStorage.level==2){ //员工没权限访问
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
		if($scope.wyh_ww=='' || $scope.wyh_cont=="" || $scope.wyh_uid==""){
			$scope.wyh_isShow = !$scope.wyh_isShow;
		}else{
			$http({
				url:"http://"+ip+":401/shiwu",
				method:"post",
				data:{"date":$scope.wyh_ww,"content":$scope.wyh_cont,"uid":$scope.wyh_uid}
			}).then(function(e){
				console.log(e)
				$scope.wyh_dates=""; //清空
				$scope.wyh_cont="";
				$scope.wyh_uid="";
			})
		}
  	}
  	//获取当前日期
  	$scope.wyh_tima = new Date();
    $scope.wyh_timb = new Date();
	$scope.wyh_timmm = Number($scope.wyh_timb.setDate($scope.wyh_tima.getDate()+1));
	$scope.wyh_timss = ($filter("date")($scope.wyh_timmm,"yyyy-MM-dd"));
	$scope.wyh_nn = new Date($scope.wyh_timss)
  	$scope.wyh_ww = ($filter("date")($scope.wyh_nn,"yyyy-MM-dd"));
  	
  	
  	
  	
  	//获取执行人后台用户名
		$http({
			url:"http://"+ip+":401/users",
			method:"get"
		}).then(function(e){
			$scope.arss=e.data;
		})
  	
  	//判断是否登录
  	if(!sessionStorage.username){
			$state.go('login')
		}
  	
  	
  
}])




