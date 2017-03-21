'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('enrollCtrl', ['$scope','$http',function ($scope,$http) {
//    验证用户名
	 var userName= /[\u4e00-\u9fa5]/;
	 $scope.isShow = false;
  	 $scope.chang=function(){
  	 	if($scope.enusername==''){
  	 		$scope.isShow = true;
  	 	}else if(!(userName.test($scope.enusername)==true)){
  	 		$scope.isShow = true;
  	 	}else{
  	 		$scope.isShow = false;
  	 	}
  	 }

//   验证密码
    var pasExp = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;
    $scope.paShow = false;
  	 $scope.paschang=function(){
	 	if($scope.enpasswold ==''){
	 		$scope.paShow = true;
	 	}else if(!(pasExp.test($scope.enpasswold)==true)){
	 		$scope.paShow = true;
	 	}else if($scope.enpasswold < 6){
	 		$scope.paShow = true;
	 	}else if($scope.enpasswold > 12){
	 		$scope.paShow = true;
	 	}else{
	 		$scope.paShow = false;
	 	}
  	 }
  	 
//   邮箱
    var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/   	 
  	 $scope.emailShow = false;
  	 $scope.enmail=function(){
	 	if($scope.enemail ==''){
	 		$scope.emailShow = true;
	 	}else if(!(regEmail.test($scope.enemail)==true)){
	 		$scope.emailShow = true;
	 	}else{
	 		$scope.emailShow = false;
	 	}
  	 }
  	 
//   手机号  	
  	var regExp = /^1[3'/4578]\d{9}$/;
  	 $scope.enPhone = false;
  	 $scope.zhj_phone=function(){
	 	if($scope.regExp ==''){
	 		$scope.enPhone = true;
	 	}else if(!(regExp.test($scope.ennphone)==true)){
	 		$scope.enPhone = true;
	 	}else{
	 		$scope.enPhone = false;
	 	}
  	 }
  	
//   qq验证  	
  	var regqq=/^\d{5,10}$/;
  	$scope.enq=false;
  	$scope.enqq=function(){
  		if($scope.QQ == ''){
  			$scope.enq=true;
  		}else if(!(regqq.test($scope.QQ) == true)){
  			$scope.enq=true;
  		}else{
  			$scope.enq=false;
  		}
  	}
  	
//   验证其他手机号  	
	var othExp = /^1[3'/4578]\d{9}$/;
  	 $scope.otherShow = false;
  	 $scope.othPhone=function(){
	 	if($scope.othExp ==''){
	 		$scope.otherShow = true;
	 	}else if(!(othExp.test($scope.otherphone)==true)){
	 		$scope.otherShow = true;
	 	}else{
	 		$scope.otherShow = false;
	 	}
  	 }
  	
  	
// 点击注册的时候
  	$scope.register=function(){
		$http({
			url:"http://"+ip+":401/users",
			method:"post",
			data:{
				"username":$scope.enusername,
				"password":$scope.enpasswold,
				"level":$scope.enposition,
				"sex":$scope.sex,
				"email":$scope.enemail,
				"tel":$scope.ennphone,
				"qq":$scope.QQ,
				"others":$scope.otherphone,
				"address":$scope.enAddr,
				"name":$scope.enName
			}
		}).then(function(e){
			console.log(e)
		})
  	}
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }]);