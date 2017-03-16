'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('resourceCtrl', function ($scope) {
  	
//	$('.zhy_p1').bind('touchstart',function(){
//		$('.zhy_text').css('display','block');
//		$('.txt').css('display','none')
//	})
//	$('.zhy_p2').bind('touchstart',function(){
//		$('.zhy_text').css('display','none');
//		$('.txt').css('display','block')
//	})
//	$scope.isHide=true;
//	$scope.toggle=function(){
//		$scope.isHide=!$scope.isHide;
//		$scope.find('.zhy_tmext').css('display','block');
//		$scope.find('.txt').css('display','none');
//	}
  	
  })
.directive('zhyCtrl',function(){
	return function(s,e,a){
		e.find('.zhy_text').on('touchstart',function(){
			alert(1)
		})
	}
	
	
});