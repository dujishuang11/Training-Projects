'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */

angular.module('trainingProjectsApp')
 .controller('officeboxCtrl', ['$scope','$http','$state',function ($scope,$http,$state){
 			var lhq_xun = '';
 			var num = 0;
 			var num1 = 0;
 			var dat = [];
			var urll = 'http://'+ip+':401/shoujianxiang';  	  
			$http({
				url:urll,
				method:'GET'
			}).then(function(data){
				$scope.daat= data.data;
				$scope.aaa()
			})
			
			$scope.clicking = function(e){
				sessionStorage.setItem('fusername',e.fusername);
				sessionStorage.setItem('date',e.date);
				sessionStorage.setItem('title',e.title);
				sessionStorage.setItem('content',e.content);
				$state.go('particulars')
			}
			
			
			$scope.bottom_lhq=function(){
				if(num>$scope.daat.length){
    				return num-=10;
    			}
				num +=10;
    			if(num>$scope.daat.length){
    				return num-=10;
    			}else{
    				$scope.aaa()
    			}
    		}
			$scope.top_lhq=function(){
    			num -=10;
  
    			if(num<0){
					return num=0
				}else{
					$scope.aaa()
				}
    		}
			
			$scope.aaa = function(){
				num1 = 0;
				dat = []
				for(var i=num; i<$scope.daat.length; i++){
					num1++;
					if(num1>10){
						break;
					}else{
						dat.push($scope.daat[i])
					}
				}
				$scope.lhq = dat;
			}
  }])
