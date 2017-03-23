'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
  lhq_app.controller('personinfoaCtrl',["$scope","$http",function ($scope,$http) {
  	$http({
  		url: "http://" + ip + ":401/users/?name="+sessionStorage.personinfo,
		method: "get"
	}).then(function(e) {
		$scope.djsData = e.data
		console.log($scope.djsData)
	})
  }])
//lhq_app.directive("lhq",function(){
//	return{
//		restrict:"ECMA",
//		link:function(scope,element,attr){
//			element.find(".xx-button").bind("touchstart",function(){
//				element.find(".imginput").click();
//				element.find(".imginput").change(function() {
//					var files = this.files[0],
//					read = new FileReader();
//					read.readAsDataURL(files);
//					read.onload = function() {
//						element.find(".img").html( "<img class = 'img-thumbnail' src='" + this.result + "'/>");
//					}
//			})
//		})
//	}
//	}
// })