'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var doger_app = angular.module('trainingProjectsApp')
	doger_app.controller('firstPage',["$scope",function($scope) {
//  	$scope.kan=function($scope){
//  		alert(1)
//  	}
	}])
	doger_app.directive("lxm",function(){
		return{
			restrict:"ECMA",
//			templateUrl:"index.html",
			link:function(scope,element,attr){
//				element.find('p').css("color","red");
				var on = false;
				element.find('.doger-title').bind('touchstart',function(){
					if(!on){
						element.find('.doger-wrapper').css('transform','translateX(0)')
						on = true
					}else{
						element.find('.doger-wrapper').css('transform','translateX(-8rem)')
						on = false
					}
				})
			}
		}
	});