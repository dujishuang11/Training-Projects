'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoaCtrl', ["$scope", "$http","$location", function($scope, $http,$location) {
	$http({
		url: "http://" + ip + ":401/users/?name=" + sessionStorage.personinfo,
		method: "get"
	}).then(function(e) {
		$scope.djsData = e.data
		console.log($scope.djsData)
	})

	$scope.djsBnt = function() {
		$location.path('/firstPage/tel');
	}

}])