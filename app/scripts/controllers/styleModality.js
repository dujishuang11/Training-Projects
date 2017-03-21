'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('styleModalityCtrl', function ($scope) {
  		
  })
  .directive("wyhStyle",function(){
  		return function(s,e,a){
//			console.log(e.find(".djs-bgcolor").children()[0].css("backgound","#7fff00"))
			
  			
  			
	    	for(var i=0;i<e.find(".djs-bgcolor").children().length;i++){
	    		e.find(".djs-bgcolor").children()[i].index = i;
//	    		console.log(e.find(".djs-bgcolor").children()[i])
				e.find(".djs-bgcolor").children()[i].addEventListener("touchstart",function(){
//					 var finalStyle = myDiv.currentStyle ? myDiv.currentStyle : document.defaultView.getComputedStyle(myDiv, null);
					console.log(e.find(".djs-bgcolor").children()[this.index].currentStyle)
//					e.find(".djs-border").css("background","red")
//					console.log(e.find(".djs-border"))
					
					
//					console.log(e.find(".djs-bgcolor").children()[this.index].style.background)
				})
	    	}
	    }
  })
