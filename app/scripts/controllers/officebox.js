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
 			var lhqnum = 0;
 			var lhqnum1 = 0;
 			var dat = [];
			var urll = 'http://'+ip+':401/shoujianxiang';  	  
			$http({
				url:urll+"/?uid"+sessionStorage.username,
//				sessionStorage.username
				method:'GET'
			}).then(function(data){
				console.log(data.data)
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
				if(lhqnum>$scope.daat.length){
    				return lhqnum-=10;
    			}
				lhqnum +=10;
    			if(lhqnum>$scope.daat.length){
    				return lhqnum-=10;
    			}else{
    				$scope.aaa()
    			}
    		}
			$scope.top_lhq=function(){
    			lhqnum -=10;
  
    			if(lhqnum<0){
					return lhqnum=0
				}else{
					$scope.aaa()
				}
    		}
			
			$scope.aaa = function(){
				lhqnum1 = 0;
				dat = []
				for(var i=lhqnum; i<$scope.daat.length; i++){
					lhqnum1++;
					if(lhqnum1>10){
						break;
					}else{
						dat.push($scope.daat[i])
					}
				}
				$scope.lhq = dat;
			}
  }])
