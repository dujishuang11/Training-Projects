'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */

angular.module('trainingProjectsApp')
 .controller('officeboxCtrl', ['$scope','$http','$state','$location',function ($scope,$http,$state,$location){
 			var lhq_xun = '';
 			var lhqnum = 0;
 			var lhqnum1 = 10;
 			var dat = [];
			
			$scope.clicking = function(e){
				sessionStorage.setItem('fusername',e.fusername);
				sessionStorage.setItem('date',e.date);
				sessionStorage.setItem('title',e.title);
				sessionStorage.setItem('content',e.content);
				$http({
					url:urll+"/?id="+e.id,
					method:'put',
					data:{
						read:'true'
					}
				})
				$location.path('firstPage/particulars')
			}
			
			$scope.bottom_lhq=function(){
				
				if($scope.daat.length <10){
					return
				}
				lhqnum+=10;
				$scope.aaa();
    		}
			$scope.top_lhq=function(){
				lhqnum-=10;
				if(lhqnum<0){
					return lhqnum = 0
				}
				$scope.aaa();
    		}
			var urll = 'http://'+ip+':401/shoujianxiang';	
			$scope.aaa = function(){
				$http({
					url:'http://'+ip+':401/shoujianxiang/?{"uid":"'+sessionStorage.username+'","$skip":'+lhqnum+',"$limit":10}',
					method:'GET'
				}).then(function(data){
					$scope.daat= data.data;
				})
			}
				$scope.aaa()
  }])
