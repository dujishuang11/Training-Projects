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
<<<<<<< HEAD
		$stateProvider
//			.state("login", {
//				url: '/login',
//				templateUrl: 'views/login.html'
//			});
//			.state("business", {
//				url: '/business',
//				templateUrl: 'views/business.html'
//			});
//			.state("firstPage", {
//				url: '/firstPage',
//				templateUrl: 'views/firstPage.html'
//			});
			.state("officebox", {
				url: '/officebox',
				templateUrl: 'views/officebox.html'
			});
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
		$urlRouterProvider.otherwise('/officebox')
=======
		$stateProvider.state("login", {
			url: '/login',
			templateUrl: 'views/login.html'
		})
		$stateProvider.state("business", {
			url: '/business',
			templateUrl: 'views/business.html'
		})
		$stateProvider.state("firstPage", {
			url: '/firstPage',
			templateUrl: 'views/firstPage.html'
		})
		$stateProvider.state("officebox", {
			url: '/officebox',
			templateUrl: 'views/officebox.html'
		})
		$stateProvider.state("personinfo", {
			url: '/personinfo',
			templateUrl: 'views/personinfo.html'
		})
		$stateProvider.state("resource", {
			url: '/resource',
			templateUrl: 'views/resource.html'
		})
		$stateProvider.state("salary", {
			url: '/salary',
			templateUrl: 'views/salary.html'
		})
		$stateProvider.state("styleModality", {
			url: '/styleModality',
			templateUrl: 'views/styleModality.html'
		})
		$stateProvider.state("tel", {
			url: '/tel',
			templateUrl: 'views/tel.html'
		})
		$stateProvider.state("vacate", {
			url: '/vacate',
			templateUrl: 'views/vacate.html'
		})
		$urlRouterProvider.otherwise('/salary')
>>>>>>> origin/master
	}]);