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
		var ddnum = 0;
		if(!sessionStorage.username){
				$state.go('login')
			}
		$scope.djsShow = false;
		$scope.djssShow = false;
		$scope.zhc_zhy = true;
		$scope.ddShow = false;
		$scope.topShow = false;
		$scope.bottomShow = true;
		$scope.abcdef = function(){
			$http({
				url: 'http://'+ ip +'users/?{"$skip":"'+ddnum+'","$limit":10}',
				method: "get"
			}).then(function(e) {
				$scope.zhc_zhy = false;
				$scope.ddShow = true;
				if(e.data.length < 10){
					$scope.bottomShow = false;
				}else {
					$scope.bottomShow = true;
				}
				if(ddnum == 0){
					$scope.topShow = false
				}else {
					$scope.topShow = true
				}
				$scope.data = e.data;
			})
		}
		
		$scope.abcdef();
		
		//点击下一页
		$scope.DX=function(){
			if($scope.data.length <10){
					return
			}
				ddnum+=10;
				$scope.abcdef();
		}
		//点击上一页
		$scope.DS=function(){
			ddnum-=10;
			if(ddnum<0){
				return ddnum = 0
			}
			$scope.abcdef();
		}

		//	点击每条数据跳转到此数据的详情页
		$scope.xiangqing = function(data) {
			sessionStorage.setItem("personinfo", data.name)
			
			$location.path('/firstPage/personinfoa');
		}

		//	关键字搜索
		$scope.sousuo = function() {
			$http({
				url: "http://" + ip + "users/?name=" + $scope.mainkey,
				method: "get"
			}).then(function(e) {
				$scope.data = e.data;
			})
		}

		//	所点击数据删除
		$scope.del = function(idd,index) {
			if(sessionStorage.level == '2') {
				$scope.djsShow = true;
				$scope.djsText = "您没有访问权限";
			}else{
				$scope.djssShow = true;
				sessionStorage.delId = idd;
				sessionStorage.delIndex = index;
			}
		}
		
		$scope.djsQd = function(){
			$scope.djssShow = false;
			$http({
				url: "http://" + ip + "users/"+sessionStorage.delId,
				method: "delete"
			}).then(function(e) {
				$scope.data.splice(sessionStorage.delIndex,1)
			})
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
				$scope.djsHtml = "您没有访问权限";
				$scope.djsShow = true;
			}
		}
		
		$scope.djsGuanbi = function(){
			$scope.djsShow = false;
		}

	}])