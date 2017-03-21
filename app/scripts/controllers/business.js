'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
 .controller('businessCtrl',["$scope","$http",function($scope,$http){
	$http({
		url:"http://"+ip+":401/shiwu",
		method:"get"
	}).then(function(e){
		$scope.items=e.data;
	})
	
	$scope.Paixu="date";  //排序
	$scope.isHide=true; //tab切换
	$scope.bool=true;  //颜色切换
	$scope.bools=false;
//判断内容是否为空
  	$scope.wyh_dates = '';
  	$scope.wyh_uid = '';
  	$scope.wyh_cont = '';
  	$scope.isShow=false;
  	$scope.togglea=function(Paixu){
  		$scope.isHide=true;
  		$scope.bool=true;
		$scope.bools=false;
		$http({
			url:"http://"+ip+":401/shiwu",
			method:"get"
		}).then(function(e){
			$scope.items=e.data;
		})
  	}
  	$scope.toggleb=function(){
//		if(sessionStorage.level==3){
//			console.log(sessionStorage.level)
  			$scope.isHide=false;
	  		$scope.bool=false;
	  		$scope.bools=true;
//			alert(1)
//		}else{
  			
//		}
  		
  	}
  	$scope.wyh_none=function(){
  		$scope.isShow = !$scope.isShow;
  		
  	}
  	//保存
  	$scope.wyhSave=function(){
  		console.log($scope.wyh_dates)
  		console.log($scope.wyh_cont)
  		console.log($scope.wyh_uid)
		if($scope.wyh_dates=='' || $scope.wyh_cont=="" || $scope.wyh_uid==""){
			$scope.isShow = !$scope.isShow;
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
  
  		/*$http({
			url:"http://"+ip+":401/users/?uid",
			method:"get",
//			data:{"username":$scope.wyh_uid}
//			data:{"date":$scope.wyh_dates,"content":$scope.wyh_cont,"uid":$scope.wyh_uid}
		}).then(function(e){
			console.log(e)
		})*/
//		$scope.arr = [ { name : '水果', children : ['草莓','香蕉','葡萄'] }, { name : '蔬菜' children : ['西红柿','茄子','黄瓜'] } ]
  	
  }])




