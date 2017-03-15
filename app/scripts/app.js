'use strict';

/**
 * @ngdoc overview
 * @name trainingProjectsApp
 * @description
 * # trainingProjectsApp
 *
 * Main module of the application.
 */
angular
	.module('trainingProjectsApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
//			.state("login", {
//				url: '/login',
//				templateUrl: 'views/login.html'
//			});
//			.state("business", {
//				url: '/business',
//				templateUrl: 'views/business.html'
//			});
			.state("firstPage", {
				url: '/firstPage',
				templateUrl: 'views/firstPage.html'
			});
//			.state("officebox", {
//				url: '/officebox',
//				templateUrl: 'views/officebox.html'
//			});
//			.state("personinfo", {
//				url: '/personinfo',
//				templateUrl: 'views/personinfo.html'
//			});
//			.state("resource", {
//				url: '/resource',
//				templateUrl: 'views/resource.html'
//			});
//			.state("salary", {
//				url: '/salary',
//				templateUrl: 'views/salary.html'
//			});
//			.state("styleModality", {
//				url: '/styleModality',
//				templateUrl: 'views/styleModality.html'
//			});
//			.state("tel", {
//				url: '/tel',
//				templateUrl: 'views/tel.html'
//			});
//			.state("vacate", {
//				url: '/vacate',
//				templateUrl: 'views/vacate.html'
//			});
		$urlRouterProvider.otherwise('/firstPage')
	}]);