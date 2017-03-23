'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoCtrl', ["$scope", "$http", function($scope, $http) {
	$http({
		url: "http://" + ip + ":401/users/?username=" + sessionStorage.username,
		method: "get"
	}).then(function(e) {
		console.log(e.data)
		$scope.djsName = e.data[0].name;
		$scope.djsTel = e.data[0].tel;
		$scope.djsEmail = e.data[0].email;
		$scope.djsAdd = e.data[0].address;
		$scope.djsQQ = e.data[0].qq;
		$scope.djsTeltwo = e.data[0].others;
	})
	$scope.djsBtn = function() {
		console.log($scope.djsName)
		console.log($scope.djsTel)
		console.log($scope.djsEmail)
		console.log($scope.djsAdd)
		console.log($scope.djsQQ)
		console.log($scope.djsTeltwo)
		$http({
			url: "http://" + ip + ":401/users/?id=" + sessionStorage.id,
			method: "put",
			data:{
				username:$scope.djsName,
				name:$scope.djsName,
				tel:$scope.djsTel,
				email:$scope.djsEmail,
				address:$scope.djsAdd,
				qq:$scope.djsQQ,
				others:$scope.djsTeltwo
			}
		}).then(function(e) {
			console.log(e)
		})
	}
}]);
lhq_app.directive("lhq", function() {
	return {
		restrict: "ECMA",
		link: function(scope, element, attr) {
			element.find(".xx-button").bind("touchstart", function() {
				element.find(".imginput").click();
				element.find(".imginput").change(function() {
					var files = this.files[0],
						read = new FileReader();
					read.readAsDataURL(files);
					read.onload = function() {
						element.find(".img").html("<img class = 'img-thumbnail' src='" + this.result + "'/>");
					}
				})
			})
		}
	}
})