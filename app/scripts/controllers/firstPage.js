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
	doger_app.directive("lxmfrg",function(){
		return{
			restrict:"ECMA",
//			templateUrl:"index.html",
			link:function(scope,element,attr){
				console.log(1)
//				element.find('p').css("color","red");
				var on = false;
				var myList = element.find('.doger-list li');
				var myBtn = element.find('.doger-work button');
				element.find('.doger-title').bind('touchstart',function(){
					if(!on){
						element.find('.doger-wrapper').css('transform','translateX(0)')
						element.find('.doger-list-opac').css('width','0%')
						element.find('.doger-list-opac-right').css('width','0%')
						element.find('.doger-list span').css('color','white')
						on = true
					}else{
						element.find('.doger-wrapper').css('transform','translateX(-8rem)')
						on = false
					}
				})
				for(var i = 0; i < myList.length; i++){
					myList[i].index = i;
					myList[i].addEventListener('touchstart',function(){
						this.childNodes[0].style.color = '#FECC02';
						this.childNodes[1].style.width = '0';
						this.childNodes[2].style.width = '0';
//						console.log(this.childNodes)
						setTimeout(function(){
							element.find('.doger-wrapper').css('transform','translateX(-8rem)')
							on = false
						},500)
					})
					myList[i].addEventListener('touchend',function(){
						this.childNodes[1].style.width = '50%';
						this.childNodes[2].style.width = '50%';
//						console.log(this.childNodes)
					})
//					console.log(element.find('.doger-list li').length)
				}
				for(var i = 0; i < myBtn.length; i++){
					myBtn[i].addEventListener('touchstart',function(){
						element.find('.doger_tip')[0].style.opacity = '1'
						element.find('.doger_tip')[0].style.zIndex = '999'
						setTimeout(function(){
							element.find('.doger_tip_content')[0].style.height = '6rem'
						},400)
					})
				}
				element.find('.icon-guanbi')[0].addEventListener('touchstart',function(){
//					element.find('.doger_tip')[0].style.display = 'none'
					element.find('.doger_tip_content')[0].style.height = '0'
					setTimeout(function(){
						element.find('.doger_tip')[0].style.opacity = '0'
						element.find('.doger_tip')[0].style.zIndex = '-999'
					},400)
				})
			}
		}
	});