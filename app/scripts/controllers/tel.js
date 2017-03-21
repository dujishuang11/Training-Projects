'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
angular.module('trainingProjectsApp')
	.controller('telCtrl', ["$scope", "$http", "$state", function($scope, $http, $state) {
		$scope.djsShow = false;
		$http({
			url: "http://" + ip + ":401/users",
			method: "get"
		}).then(function(e) {
			$scope.data = e.data;
//			console.log($scope.data)
		})

		//	点击每条数据跳转到此数据的详情页
		$scope.xiangqing = function(data) {
//			console.log(data)
			sessionStorage.setItem("personinfo", data.name)
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
			if(sessionStorage.level != '2') {
				$http({
					url: "http://" + ip + ":401/users/"+idd,
					method: "delete"
				}).then(function(e) {
					$scope.data.splice(index,1)
				})
			}else{
				$scope.djsShow = true;
			}

		}
		
//		点击新增
		$scope.telAdd = function() {
			if(sessionStorage.level != '2') {
				$state.go("enroll")
			}
		}
		
//		点击编辑
		$scope.bianji = function(id){
			sessionStorage.id = id
		}

	}])