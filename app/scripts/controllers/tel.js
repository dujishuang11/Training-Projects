'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
	.controller('telCtrl', ["$scope", "$http", "$state","$location", function($scope, $http, $state,$location) {
		$scope.djsShow = false;
		$http({
			url: "http://" + ip + ":401/users",
			method: "get"
		}).then(function(e) {
			$scope.data = e.data;
		})

		//	点击每条数据跳转到此数据的详情页
		$scope.xiangqing = function(data) {
			sessionStorage.setItem("personinfo", data.name)
			
			$location.path('/firstPage/personinfoa');
		}

		//	关键字搜索
		$scope.sousuo = function() {
			$http({
				url: "http://" + ip + ":401/users/?name=" + $scope.mainkey,
				method: "get"
			}).then(function(e) {
				$scope.data = e.data;
			})
		}

		//	所点击数据删除
		$scope.del = function(idd,index) {
			console.log(sessionStorage.level)
			if(sessionStorage.level == '2') {
				$scope.djsShow = true;
			}else{
				$http({
					url: "http://" + ip + ":401/users/"+idd,
					method: "delete"
				}).then(function(e) {
					$scope.data.splice(index,1)
				})
			}
		}
		
//		点击新增
		$scope.telAdd = function() {
			if(sessionStorage.level != '2') {
				$state.go("enroll")
			}else{
				$scope.djsHtml = "您没有访问权限";
				$scope.djsShow = true;
			}
		}
		
//		点击编辑
		$scope.bianji = function(id){
			if(sessionStorage.level != '2') {
				sessionStorage.userid = id
				$location.path('/firstPage/personinfo');
			}else{
				$scope.djsShow = true;
			}
		}
		
		$scope.djsGuan = function(){
			$scope.djsShow = false;
		}

	}])