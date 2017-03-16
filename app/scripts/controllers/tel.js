'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('telCtrl',function () {
 })
.directive("wyhNew",function(){
	return function(s,e,a){
			e.on("touchstart",function(){
				
				var hml="<ul class="wyh_ul1">111</ul>";
				var template=angular.element(hml);
				console.log(s.find(".wyh_center").append(template))
				console.log(hml)
			})
		}
})
  
  
//var hml="<ul class='wyh_ul1'><li></li><li></li><li></li><li><button class='btn btn-danger wyh_abtn'>删除</button><button class='btn btn-primary wyh_bbtn'>编辑</button></li></ul>";
//		var template=angular.element(hml);
//		var content=$compile(template)($scope);
//		angular.element(".wyh_center").append(content);
// .directive("wyhNew",function($compile){
//	return {
//		restrict:"A",
//		link:function(s,e,a){
//			e.on("click",function(){
//				s.$apply(function(){
//					var hml="<ul class='wyh_ul1'><li></li><li></li><li></li><li><button class='btn btn-danger wyh_abtn'>删除</button><button class='btn btn-primary wyh_bbtn'>编辑</button></li></ul>";
//					var template=angular.element(hml);
//					var content=$compile(template)($scope);
//					angular.element(".wyh_center").append(content);
//				})
//			})
//		}
//	}
		
//})