'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('vacateCtrl', ['$scope','$http','$filter',function ($scope,$http,$filter) {
  	$scope.init = new Date();
	$scope.zhy_time = $filter("date")($scope.init, "yyyy/MM/dd HH:mm:ss");
	
	console.log($scope.zhy_time)
  	console.log($scope.init)
//	if(){}
  	
  	
    
  }]);