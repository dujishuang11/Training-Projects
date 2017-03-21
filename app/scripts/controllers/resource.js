'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('resourceCtrl', ["$scope","$http","$filter",function ($scope,$http,$filter) {
  	//设置每个input的值为空
  	$scope.shenqingren = '';
	$scope.shoujianren = '';
	$scope.wuzi = '';
	$scope.yongtu = '';
	$scope.isShow = false;
	$scope.isHide = true;
	
	$scope.now = new Date();
	$scope.dt2 = $filter("date")($scope.now, "yyyy/MM/dd HH:mm:ss");
	console.log($scope.dt2);
	console.log($scope.now);
	$scope.bg1 = true;
	$scope.bg2 = false;
	
	
	$scope.toggle=function(){
		$scope.isHide = true;
		$scope.bg1 = true;
		$scope.bg2 = false;
	}
	$scope.toggle1=function(){
		$scope.isHide = false;
		$scope.bg1 = false;
		$scope.bg2 = true;
//		if(){}
		
		
	}
	
	//点击蒙版中的确定按钮
	$scope.zhy_dis = function(){
		$scope.isShow = !$scope.isShow
	}
	$scope.zhy_btn1 = function(){
		console.log($scope.shenqingren)
		console.log($scope.shoujianren)
		console.log($scope.wuzi)
		console.log($scope.yongtu)
		if($scope.shenqingren==''||$scope.shoujianren==''||$scope.wuzi==''||$scope.yongtu==''){
			$scope.isShow = !$scope.isShow
		}else{
//			$http({
//				url:"http://"+ip+":401/shoujianxiang",
//				method:'post',
//				data:{
//						fusername:$scope.shenqingren,
//						title:"办公用品",
//						content:$scope.wuzi,
//						date:$scope.dt2,
//						uid:$scope.shoujianren
//					}
//			}).then(function(e){
//				console.log(e)
////				$scope
//			})
			
			
		}
		
	}
	$scope.zhy_btn2 = function(){
		if($('.zhy_b1').val()==''||$('.zhy_b2').val()==''||$('.zhy_b3').val()==''||$('.zhy_b4').val()==''){
			$('.zhy_mb').css('display','block');
			$('.zhy_btn').bind('touchstart',function(){
				$('.zhy_mb').css('display','none');
			})
			
		}
		
	}
	
	
  	
 }]);