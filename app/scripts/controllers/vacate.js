'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('vacateCtrl', function ($scope) {
  	
  	
  	var now = new  Date();
  	var init = new Date();

  	console.log(now)
  	
  	$scope.data = {
  		expiry:now.setDate(init.getDate()+3)
  	}
  	
//	$('.zhy_1').val($scope.data.expiry:"yyyy年MM月dd日")
    
  });