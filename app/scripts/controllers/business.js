'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
 .controller('businessCtrl',["$scope","$http","$interval",function($scope,$http,$interval){
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
  	//获取当前日期
  	var timer = $interval(function () {  
        $scope.nows = new Date;  
    }, 1000);
    
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
		if($scope.wyh_dates=='' || $scope.wyh_cont=="" || $scope.wyh_uid==""){
			$scope.wyh_isShow = !$scope.wyh_isShow;
		}else{
			$http({
				url:"http://"+ip+":401/shiwu",
				method:"post",
				data:{"date":$scope.wyh_dates,"content":$scope.wyh_cont,"uid":$scope.wyh_uid}
			}).then(function(e){
				console.log(e)
				$scope.wyh_dates=""; //清空
				$scope.wyh_cont="";
				$scope.wyh_uid="";
			})
		}
  	}
  	//警告需一天前布置任务
  	$scope.wyh_jingShi=false;
  	$scope.wyh_blur=function(){
//		console.log($scope.wyh_dates);
//		console.log($scope.nows)
//		console.log($scope.nows.valueOf()-1)
//		console.log($scope.wyh_dates)
		if($scope.wyh_dates!=$scope.nows.valueOf()-1){
			$scope.wyh_jingShi = !$scope.wyh_jingShi;
		}
		
  	}
  	
  	$scope.wyh_jingShi=false;
  	//获取执行人后台用户名
	$scope.wyh_names=function(){
		$http({
			url:"http://"+ip+":401/users",
			method:"get"
		}).then(function(e){
			$scope.arss=e.data;
		})
	}
  	
  	
  	
  	
  	
  
}])




