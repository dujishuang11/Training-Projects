'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('styleModalityCtrl',"$state", ["$scope",function ($scope,$state) {
  	 	  	//判断是否登录
  	if(!sessionStorage.username){
			$state.go('login')
		}
		$scope.pingguolv=function(){
			location.reload()
			localStorage.setItem("Sbackground","#7fff00");
			localStorage.setItem("Scolor","black");
		}
		$scope.fanxinglan=function(){
			location.reload()
			localStorage.setItem("Sbackground","#00FFFF");
			localStorage.setItem("Scolor","black");
		}
		$scope.zhuguangcheng=function(){
			location.reload()
			localStorage.setItem("Sbackground","#ff7f00");
			localStorage.setItem("Scolor","black");
		}
		$scope.wenshahong=function(){
			location.reload()
			localStorage.setItem("Sbackground","#bc1717");
			localStorage.setItem("Scolor","white");
		}
		$scope.bingchuanlan=function(){
			location.reload()
			localStorage.setItem("Sbackground","#4d4dff");
			localStorage.setItem("Scolor","black");
		}
		$scope.dianyalv=function(){
			location.reload()
			localStorage.setItem("Sbackground","#32cd32");
			localStorage.setItem("Scolor","black");
		}
		$scope.mingehuang=function(){
			location.reload()
			localStorage.setItem("Sbackground","yellow");
			localStorage.setItem("Scolor","black");
		}
		$scope.shiliuhong=function(){
			location.reload()
			localStorage.setItem("Sbackground","#ff2400");
			localStorage.setItem("Scolor","white");
		}
		$scope.husnxinghui=function(){
			location.reload()
			localStorage.setItem("Sbackground","#d9d9f3");
			localStorage.setItem("Scolor","black");
		}
		$scope.mihongfen=function(){
			location.reload()
			localStorage.setItem("Sbackground","#FF6EC7");
			localStorage.setItem("Scolor","black");
		}
		$scope.zangqingse=function(){
			location.reload()
			localStorage.setItem("Sbackground","#2F2F4F");
			localStorage.setItem("Scolor","white");
		}
		$scope.lanhuazi=function(){
			location.reload()
			localStorage.setItem("Sbackground","#9370DB");
			localStorage.setItem("Scolor","black");
		}
		$scope.wyh_backColor=function(){
			localStorage.setItem("Sbackground","");
			localStorage.setItem("Scolor","");
			location.reload()
		}
  }])
