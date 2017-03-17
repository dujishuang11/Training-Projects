'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
 .controller('telCtrl',function() {

})
.directive("wyhNew",function(){
	return function(s,e,a){
		var hml="<ul class='wyh_ul1'><li></li><li></li><li></li><li><button class='btn btn-danger wyh_abtn'>删除</button><button class='btn btn-primary wyh_bbtn'>编辑</button></li></ul>";
		e.find('.wyhadd').on("touchstart",function(){
			e.find(".wyh_allul").append(hml)
		})
	}
})
.directive("wyhDel",function(){
	return function(s,e,a){
		var fid = e.find('.wyh_ul1');
		for(var i=0; i<e.find(".wyh_abtn").length; i++){
			e.find(".wyh_abtn")[i].index = i;
			e.find(".wyh_abtn")[i].addEventListener("touchstart",function(){
				fid[this.index].remove()
			})
		}
	}
})
.directive("wyhChange",function(){
	return function(s,e,a){
		var fidd = e.find('.wyh_ul1');
//		console.log(fidd)
		for(var i=0; i<e.find(".wyh_bbtn").length; i++){
			e.find(".wyh_bbtn")[i].index = i;
			var off=true;
			e.find(".wyh_bbtn")[i].addEventListener("touchstart",function(){
				var Inp = this.parentNode.parentNode.getElementsByTagName("input")
				if(off){
					for(var i = 0; i < Inp.length; i++ ){
						Inp[i].removeAttribute('disabled');
					}
					e.find(".wyh_bbtn")[this.index].innerHTML="完成";
					off=false;
				}
				else{
					for(var i = 0; i < Inp.length; i++ ){
						Inp[i].setAttribute("disabled", "false");
					}
					e.find(".wyh_bbtn")[this.index].innerHTML="编辑";
					off=true;
				}
			})
		}
		
		
	}
})
