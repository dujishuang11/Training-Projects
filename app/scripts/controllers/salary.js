'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('salaryCtrl', function () {
  	
  	
  	
  	
  })
.directive('zhjSetDiv',function(){	  
				return function(s,e,a){
					var off=true;
					e.bind('touchstart',function(){						 
						 if(off){
						 	e.text('完成');
						 	off=false;
						 }else{
						 	e.text('编辑');
						 	off=true;
						 }
						 
					})
				}
			})
  