'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('vacateCtrl', ['$scope','$http','$filter',"$location",function ($scope,$http,$filter,$location) {
  	//请求领导层的
  	$http({
  		url:"http://"+ip+":401/users/?level=1",
  		method:'get'
  		
  	}).then(function(e){
		$scope.zhylist = e.data;
	})
  	//请求BOSS的
	$http({
		url:"http://"+ip+":401/users/?level=0",
		method:'get'
		
	}).then(function(e){
		$scope.zhylist1 = e.data;
	})
	
	
	$scope.zhy_hihi = false;
	$scope.zhy_mm = false;
	if(sessionStorage.level==1){
		$scope.zhy_hihi = !$scope.zhy_hihi;
	}else if(sessionStorage.level==0){
		$scope.zhy_mm = !$scope.zhy_mm;
	}
	
	$scope.zhy_href = function(){
		$location.url('/firstPage');
	}
	
	
  	
  	$scope.zhy_sqr = sessionStorage.username;
	$scope.zhy_sjr = '';
	$scope.zhy_yy = '';
	$scope.zhy_isShow = false;
  	
    $scope.zhy_t1 = new Date();
	$scope.zhy_time = $filter("date")($scope.zhy_t1, "yyyy/MM/dd HH:mm:ss");
	
	console.log($scope.zhy_time)
  	console.log($scope.zhy_t1)
  	
  	$scope.zhy_none = function(){
  		$scope.zhy_isShow = !$scope.zhy_isShow;
  	}
  	
  	var now = new Date();
  	var noe = now.getDate();
  	console.log(noe)
  	$scope.zhy_sub = function(){
  		if($scope.zhy_sqr ==''||$scope.zhy_sjr==''||$scope.zhy_yy==''||$scope.zhy_t2==''){
			$scope.zhy_isShow = !$scope.zhy_isShow;
		}else{
			console.log('成功');
			
		}
  		
  		
  	}
  	
  	
  	
  	
  }]);