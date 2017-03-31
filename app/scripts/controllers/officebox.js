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
 	
 	
 			if(!sessionStorage.username){
				$state.go('login')
			}
 			
 			var lhqnum = 0;		
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
			var urll = 'http://'+ip+'shoujianxiang';	
			$scope.lhq_zhc = true;
			$scope.nonono = false;
			$scope.lhq_aaabbb= true;
			$scope.aaa = function(){
//				console.log(lhqnum)
				$http({
					url:'http://'+ip+'shoujianxiang/?{"uid":"'+sessionStorage.username+'","$skip":'+lhqnum+',"$limit":10}',
					method:'GET'
				}).then(function(data){
					$scope.lhq_zhc = false;
					if(data.data==''){
						$scope.nonono = true;
						$scope.lhq_aaabbb= false;
					}else{
						$scope.nonono = false;
						$scope.lhq_aaabbb= true;
					}
					$scope.daat= data.data;
//					console.log($scope.daat)
				})
			}
			$scope.aaa();
  }])
