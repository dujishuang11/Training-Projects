'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoCtrl', ["$scope", "$http","$location","$state", function($scope, $http,$location,$state) {
	//   从其它页面跳转  	
//	console.log($.base64.btoa('images/icon.9a2255a3.png'))
	if(!sessionStorage.username){
	  	  $state.go('login');
	  }
	$scope.djsShowtel = false;
	$scope.djsSex = '';
	$scope.djsName = '';
	$scope.djsTel = '';
	$scope.djsEmail = '';
	$scope.djsAdd = '';
	$scope.djsQQ = '';
	$scope.djsTeltwo = '';
	$scope.djsImg= '';
	
	$http({
		url: "http://" + ip + "users/?id=" + sessionStorage.userid,
		method: "get"
	}).then(function(e) {
		console.log(e.data)
		if(e.data.sex == '女'){
			$scope.djsSex = '女';
		}else{
			$scope.djsSex = '男';
		}
		$scope.djsName = e.data.name;
		$scope.djsTel = e.data.tel;
		$scope.djsEmail = e.data.email;
		$scope.djsAdd = e.data.address;
		$scope.djsQQ = e.data.qq;
		$scope.djsTeltwo = e.data.others;
		$scope.djsImg = $.base64.atob(e.data.pic);
	})
	var telExp = /^1[3'/4578]\d{9}$/;
	$scope.djsTell = function(){
		if($scope.djsTel == ''){
			$scope.djsTishi = "请输入手机号";
			$scope.djsShowtel = true
		}else if(!(telExp.test($scope.djsTel)==true)){
			$scope.djsTishi = "请输入正确手机号";
			$scope.djsShowtel = true
		}
	}
	$scope.djsTelltwo = function(){
		if($scope.djsTel == ''){
			$scope.djsTishi = "请输入手机号";
			$scope.djsShowtel = true
		}else if(!(telExp.test($scope.djsTel)==true)){
			$scope.djsTishi = "请输入正确手机号";
			$scope.djsShowtel = true
		}
	}
	
	var emailExp = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	$scope.emailDjs = function(){
		if($scope.djsEmail == ''){
			$scope.djsTishi = "请输入邮箱地址";
			$scope.djsShowtel = true
		}else if(!(emailExp.test($scope.djsEmail)==true)){
			$scope.djsTishi = "请输入正确邮箱地址";
			$scope.djsShowtel = true
		}
	}
	
	var qqExp=/^\d{5,10}$/;
	$scope.qqDjs = function(){
		if($scope.djsQQ == ''){
			$scope.djsTishi = "请输入QQ号";
			$scope.djsShowtel = true
		}else if(!(qqExp.test($scope.djsQQ)==true)){
			$scope.djsTishi = "请输入正确QQ号码";
			$scope.djsShowtel = true
		}
	}
	
	$scope.djsGuan = function(){
		$scope.djsShowtel = false;
	}
	$scope.djsBtn = function() {
		console.log($scope.djsSex)
		$http({
			url: "http://" + ip + "users/?id=" + sessionStorage.userid,
			method: "put",
			data: {
				sex: $scope.djsSex,
				username: $scope.djsName,
				name: $scope.djsName,
				tel: $scope.djsTel,
				email: $scope.djsEmail,
				address: $scope.djsAdd,
				qq: $scope.djsQQ,
				others: $scope.djsTeltwo
			}
		}).then(function(e) {
			$http({
				url: "http://" + ip + "users/?username=" + sessionStorage.username,
				method: "get",
			}).then(function(data){
				console.log(data.data[0].id)
				sessionStorage.userid = data.data[0].id
				$location.path('/firstPage/tel');
			})
		})
	}
}]);
lhq_app.directive("lhq", function($http) {
	return {
		restrict: "ECMA",
		link: function(scope, element, attr) {
			element.find(".xx-button").bind("touchstart", function() {
				//alert('111')
				element.find(".imginput").click();
				element.find(".imginput").change(function() {
					var files = this.files[0],
						read = new FileReader();
					read.readAsDataURL(files);
					read.onload = function() {
						
						element.find(".djsImg").src=this.result
						var src_b=$.base64.btoa(this.result);
//						console.log(this.result)
//						console.log(src_b)
						//	var a="123";
							
						//	var c=$.base64.atob(b);
						//	console.log(b,c);
						$http({
							url:'http://'+ ip +'users/?id='+sessionStorage.userid,
							method:'put',
							data:{
								pic:src_b
							}
						})
							
					}
				})
			})
		}
	}
})



