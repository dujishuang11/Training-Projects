'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoCtrl', ["$scope", "$http","$location", function($scope, $http,$location) {
	$http({
		url: "http://" + ip + ":401/users/?id=" + sessionStorage.userid,
		method: "get"
	}).then(function(e) {
		console.log(e.data)
		$scope.djsName = e.data.name;
		$scope.djsTel = e.data.tel;
		$scope.djsEmail = e.data.email;
		$scope.djsAdd = e.data.address;
		$scope.djsQQ = e.data.qq;
		$scope.djsTeltwo = e.data.others;
	})
	$scope.djsBtn = function() {
		$http({
			url: "http://" + ip + ":401/users/?id=" + sessionStorage.userid,
			method: "put",
			data: {
				username: $scope.djsName,
				name: $scope.djsName,
				tel: $scope.djsTel,
				email: $scope.djsEmail,
				address: $scope.djsAdd,
				qq: $scope.djsQQ,
				others: $scope.djsTeltwo
			}
		}).then(function(e) {
			$http({
				url: "http://" + ip + ":401/users/?username=" + sessionStorage.username,
				method: "get",
			}).then(function(data){
				console.log(data.data[0].id)
				sessionStorage.userid = data.data[0].id
				$location.path('/firstPage/tel');
			})
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