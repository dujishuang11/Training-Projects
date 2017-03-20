'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('businessCtrl',function($scope){
  	$(".wyh_sw").css("background","#cccccc");
  	$scope.togglea=function(){
  		$(".wyh_sw").css("background","#cccccc");
  		$(".wyh_fp").css("background","none");
		$(".wyh_taskfp").css("display","none")
		$(".wyh_content").css("display","block")
  	}
  	$scope.toggleb=function(){
  		$(".wyh_fp").css("background","#cccccc");
  		$(".wyh_sw").css("background","none");
		$(".wyh_content").css("display","none")
		$(".wyh_taskfp").css("display","block")
  	}
  })
.directive("wyhNewb",function(){
	return function(s,e,a){
		var hml="<ul class='taskfp_cont'><li><input type='text' class='form-control' /></li><li><input type='text' class='form-control'  /></li><li><input type='text' class='form-control' /></li></ul>";
		e.find('.newadds').on("touchstart",function(){
			e.find(".allul2").append(hml)
		})
	}
}) 	

