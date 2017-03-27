'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoaCtrl', ["$scope", "$http","$location","$state", function($scope, $http,$location,$state) {
	//   从其它页面跳转  	
	if(!sessionStorage.username){
	  	  $state.go('login');
	  }
	
	$http({
		url: "http://" + ip + ":401/users/?name=" + sessionStorage.personinfo,
		method: "get"
	}).then(function(e) {
//		console.log(e.data[0].pic)
		$scope.djsImg = e.data[0].pic
		$scope.djsData = e.data
	})

	$scope.djsBnt = function() {
		$location.path('/firstPage/tel');
	}

}])