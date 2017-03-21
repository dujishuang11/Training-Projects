'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var xq_app = angular.module('trainingProjectsApp')
  xq_app.controller('particularsCtrl',['$scope','$http','$state','$filter',function ($scope,$http,$state,$filter){
    	$scope.isShow = false;
    	
    	$scope.Sender='';
    	$scope.addressee = '';
    	$scope.contentLhq = '';

    	$scope.hui=function(){
    		$scope.isShow = true;
    		$scope.now = new Date();
    		$scope.timeLhq = $filter("date")($scope.now,"yyyy/MM/dd HH:mm:ss")
    	}
    	$scope.fa=function(){
    		if($scope.Sender == '' || $scope.addressee == '' || $scope.contentLhq == '' ||$scope.timeLhq == ''||$scope.titleLhq == ''){
    			$scope.isShow = true;
    			alert("请输入完整的信息")
    		}else{	
    			$http({
    				url:'http://'+ip+':401/shoujianxiang',
					method:'POST',
    				data:{
    					fusername:$scope.Sender,
    					title:$scope.titleLhq,
    					content:$scope.contentLhq,
    					uid:$scope.addressee,
    					date:$scope.timeLhq
    				}
    			}).then(function(e){
    				console.log(e.data)
    				if(e.data !==''){
    					alert('发送成功！')
    				}
    			})
    			$scope.isShow = false;
    			$scope.Sender = '';
    			$scope.titleLhq ='';
    			$scope.contentLhq= '';
    			$scope.addressee ='';
    			$scope.timeLhq = '';
    		}
    		
    	}
    	$scope.qv=function(){
    		$scope.isShow = false;
    	}
    	$scope.fanhui=function(){
    		$state.go('officebox')
    	}
    	$scope.fusername = sessionStorage.fusername;
    	$scope.date = sessionStorage.date;
    	$scope.title = sessionStorage.title;
    	$scope.content = sessionStorage.content;
  }]);