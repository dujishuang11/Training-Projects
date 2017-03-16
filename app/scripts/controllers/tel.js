'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
  .controller('telCtrl', ["$scope",'$http',function ($scope) {
   
    $http({
    	url:"http//47.88.16.225:1604/test",
    	method:'get'
    }).then(function(e){
    	 $scope.data=1;
    })
  }]);