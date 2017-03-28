'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('loginCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
  	//  验证密码
//	localStorage.removeItem('my_map')
  	sessionStorage.removeItem('level')
  	sessionStorage.removeItem('username')
  	 var pasExp = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;
	 var userName= /[\u4e00-\u9fa5]/;
  	  	
//    验证用户名
	var userName= /[\u4e00-\u9fa5]/;
	 $scope.loginShow = false;
  	 $scope.loginblur=function(){
  	 	if($scope.username==''){
  	 		$scope.loginShow = true;
  	 	}else if(!(userName.test($scope.username)==true)){
  	 		$scope.loginShow = true;
  	 	}else{
  	 		$scope.loginShow = false;
  	 	}
  	 }
  	 
  	 $scope.loginFocus=function(){
  	 	$scope.loginShow = false;
  	 }
  	 
  	 $scope.loginFocusPass=function(){
  	 	$scope.passShow = false;
  	 }
  	 
  	 
  	 
//   验证密码
    var pasExp = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;
    $scope.passShow = false;
  	 $scope.loginpass=function(){
	 	if($scope.passwold ==''){
	 		$scope.passShow = true;
	 	}else if(!(pasExp.test($scope.passwold)==true)){
	 		$scope.passShow = true;
	 	}else if($scope.passwold < 6){
	 		$scope.passShow = true;
	 	}else if($scope.passwold > 12){
	 		$scope.passShow = true;
	 	}else{
	 		$scope.passShow = false;
	 	}
  	}

//    点击登录   
     $scope.username='';
     $scope.passwold ='';
     $scope.logining = function() {
     	localStorage.setItem('Sbackground','');
   	 	localStorage.setItem('Scolor','');
     	$scope.loginshow = false;
		if($scope.username == '') {
			$scope.loginshow = true;
		}
		else if($scope.passwold == '') {
			$scope.loginshow = true;
		}else {
			$http({
				url: "http://" + ip + "users/login",
				method: "post",
				data: {
					'username': $scope.username,
					'password': $scope.passwold
				}
			}).then(function(e) {
				console.log(e)
				sessionStorage.username = $scope.username;
				sessionStorage.userid = e.data.uid;
				var a = e.data.uid;
				$http({
					url: "http://" + ip + "users/?id=" + a,
					method: "get"
				}).then(function(e) {
					
					sessionStorage.level = e.data.level;
					// console.log(sessionStorage.level);
					if(sessionStorage.level == '0') {
						console.log('大boss')
					} else if(sessionStorage.level == '1') {
						console.log('经理')
					} else {
						console.log('员工')
					}
	   	  	       $state.go('firstPage');
				})
			},function(){
				$scope.loginshow = true;
			})
		}
     }
     $scope.loginHide=function(){
     	$scope.loginshow = false;
     }
     
     
  }])
