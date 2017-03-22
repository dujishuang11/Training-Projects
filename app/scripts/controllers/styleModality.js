'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('styleModalityCtrl', ["$scope","$state",function ($scope,$state) {
  		$scope.pingguolv=function(){
			$scope.isPgl=true;
		}
  		$scope.fanxinglan=function(){
			$scope.isFxh=true;
  		}
  		$scope.zhuguangcheng=function(){
			$scope.isZgc=true;
  		}
  		$scope.wenshahong=function(){
			$scope.isWsh=true;
  		}
  		$scope.bingchuanlan=function(){
			$scope.isBcl=true;
  		}
  		$scope.dianyalv=function(){
			$scope.isDyl=true;
  		}
  		$scope.mingehuang=function(){
			$scope.isMeh=true;
  		}
  		$scope.shiliuhong=function(){
			$scope.isSlh=true;
  		}
  		$scope.husnxinghui=function(){
			$scope.isHyh=true;
  		}
  		$scope.mihongfen=function(){
			$scope.isMhf=true;
  		}
  		$scope.zangqingse=function(){
			$scope.isZqs=true;
  		}
  		$scope.lanhuazi=function(){
			$scope.isLhz=true;
  		}
  }])
