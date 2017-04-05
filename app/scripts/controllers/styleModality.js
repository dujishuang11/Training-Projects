'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('styleModalityCtrl', ["$scope","$state","$http",function ($scope,$state,$http) {
  	 	  	//判断是否登录
	  	if(!sessionStorage.username){
				$state.go('login')
		}
	  	
		$scope.pingguolv=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#7fff00","color":"black"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.fanxinglan=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#00FFFF","color":"black"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.zhuguangcheng=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#ff7f00","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.wenshahong=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#bc1717","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.bingchuanlan=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#4d4dff","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.dianyalv=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#32cd32","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.mingehuang=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"yellow","color":"black"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.shiliuhong=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#ff2400","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.husnxinghui=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#d9d9f3","color":"black"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.mihongfen=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#FF6EC7","color":"black"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.zangqingse=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#2F2F4F","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.lanhuazi=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"#9370DB","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
		$scope.wyh_backColor=function(){
			$http({
				url:"http://"+ip+"users/?id="+sessionStorage.userid,
				method:"put",
				data:{"bgcolor":"","color":"white"}
			}).then(function(e){
				location.reload()
			})
		}
		
  }])
