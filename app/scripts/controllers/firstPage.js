'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var app = angular.module('trainingProjectsApp')
	app.controller('firstPage',["$scope",function($scope) {
//  	$scope.kan=function($scope){
//  		alert(1)
//  	}
	}])
	app.directive("lxm",function(){
		return{
			restrict:"ECMA",
//			templateUrl:"http://localhost:9000/#!/firstPage",
			link:function(s,e,a){
				e.css("color","red")
			}
		}
	});