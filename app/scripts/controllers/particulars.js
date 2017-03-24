'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var xq_app = angular.module('trainingProjectsApp')
  xq_app.controller('particularsCtrl',['$scope','$http','$state','$filter','$location',function ($scope,$http,$state,$filter,$location){
    	$scope.lhqisShow = false;
    	$scope.lhqShow = false;
    	$scope.Sender='';
    	$scope.addressee = '';
    	$scope.contentLhq = '';
    	
    	
    	if(!sessionStorage.username){
			$state.go('login')
		}
		
    	$scope.hui=function(){
    		$scope.lhqisShow = true;
    		$scope.lhqnow = new Date();
    		$scope.timeLhq = $filter("date")($scope.lhqnow,"yyyy/MM/dd HH:mm:ss")
    		$scope.Sender=sessionStorage.username;
    		$scope.addressee = sessionStorage.fusername;	
    	}
    	$scope.fa=function(){
    		if($scope.Sender == '' || $scope.addressee == '' || $scope.contentLhq == '' ||$scope.timeLhq == ''||$scope.titleLhq == ''){
    			$scope.lhqisShow = true;
    			$scope.lhqShow = true;
    			$scope.lhq_xiaoxi = '输入内容为空！'
    			$scope.lhq_span = '请输入完整信息！'
    			
    			$scope.xxx = function(){
    				$scope.lhqShow = false;
    			}
    		}else{	
    			$http({
    				url:'http://'+ip+':401/shoujianxiang',
					method:'POST',
    				data:{
    					fusername:$scope.Sender,
    					title:$scope.titleLhq,
    					content:$scope.contentLhq,
    					uid:$scope.addressee,
    					date:$scope.timeLhq,
    					read:'false'
    				}
//  				}
    			}).then(function(e){
    				console.log(e.data)
    				if(e.data !==''){
					$location.path('firstPage/officebox')
    				}
    			})
    			$scope.lhqisShow = false;
    			$scope.Sender = '';
    			$scope.titleLhq ='';
    			$scope.contentLhq= '';
    			$scope.addressee ='';
    			$scope.timeLhq = '';
    		}
    		
    	}
    	$scope.qv=function(){
    		$scope.lhqisShow = false;
    	}
    	$scope.fanhui=function(){
				$location.path('firstPage/officebox')
    	}
    	$scope.fusername = sessionStorage.fusername;
    	$scope.date = sessionStorage.date;
    	$scope.title = sessionStorage.title;
    	$scope.content = sessionStorage.content;
  }]);