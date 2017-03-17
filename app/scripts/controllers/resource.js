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

	$('.zhy_p1').css('background','#ccc')
	$scope.toggle=function(){
		$('.zhy_p1').css('background','#ccc')
		$('.zhy_p2').css('background','');
		$('.zhy_text').css('display','block');
		$('.zhy_txt').css('display','none');
	}
	$scope.toggle1=function(){
		$('.zhy_p1').css('background','');
		$('.zhy_p2').css('background','#ccc');
		$('.zhy_text').css('display','none');
		$('.zhy_txt').css('display','block');
	}
  	
 });