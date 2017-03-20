'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var xq_app = angular.module('trainingProjectsApp')
  xq_app.controller('particularsCtrl', function () {
    
  });
  xq_app.directive("xqq",function(){
  	return{
  		restrict:"ECMA",
  		link:function(scope,element,attr){
  			element.find("#hf").bind("touchstart",function(){
  				element.find(".xq-bottom").css("display","block")
  		})
  			element.find(".xq-bottom-btn").bind("touchstart",function(){
  				element.find(".xq-bottom").css("display","none")
  		})
  	}
  	}
})