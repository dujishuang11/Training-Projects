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

  .module('trainingProjectsApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$stateProvider.state("login",{
  		url: '/login',
  		templateUrl: 'views/login.html'
  	})
  	$stateProvider.state("firstPage",{
  		url: '/firstPage',
  		templateUrl: 'views/firstPage.html'
  	})
  	$stateProvider.state("enroll",{
  		url: '/enroll',
  		templateUrl: 'views/enroll.html'
  	})
  	$stateProvider.state("firstPage.business",{
  		url: '/business',
  		views:{
  			content:{
  				templateUrl: 'views/business.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.officebox",{
  		url: '/officebox',
  		views:{
  			content:{
  				templateUrl: 'views/officebox.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.personinfo",{
  		url: '/personinfo',
		views:{
  			content:{
  				templateUrl: 'views/personinfo.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.resource",{
  		url: '/resource',
  		views:{
  			content:{
  				templateUrl: 'views/resource.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.salary",{
  		url: '/salary',
  		views:{
  			content:{
  				templateUrl: 'views/salary.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.styleModality",{
  		url: '/styleModality',
  		views:{
  			content:{
  				templateUrl: 'views/styleModality.html'
  			}
  		}
  	})
  	$stateProvider.state("firstPage.tel",{
  		url: '/tel',
		views:{
			content:{
  				templateUrl: 'views/tel.html'
			}
		}
  	})
  	$stateProvider.state("firstPage.vacate",{
  		url: '/vacate',
  		views:{
			content:{
  				templateUrl: 'views/vacate.html'
			}
		}
  	})
  	$stateProvider.state("firstPage.particulars",{
  		url: '/particulars',
  		views:{
			content:{
  				templateUrl: 'views/particulars.html'
			}
		}
  	})
  	$urlRouterProvider.otherwise('/tel')
  }])
