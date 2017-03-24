'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var salary_app = angular.module('trainingProjectsApp')
salary_app.controller('salaryCtrl', ["$scope","$http","$state",function($scope,$http,$state) {
//	$scope.btn = ['1','2'];
	if(!sessionStorage.username){
		$state.go('login')
	}
	var doger_url = 'http://'+ip+':401/kaoqin/?uid='+sessionStorage.username+'';
	$http({
		url:doger_url,
		method:'GET'
	}).then(function(data){
		$scope.btn = data.data
	})
}])
.directive('zhjSetDiv',function($http){
	return{
		restrict:"ECMA",
		link:function($scope,e,a){
			var off=true;
			var doger_data = new Date();
			var zhj_doger_mon = doger_data.getMonth()+1;
			var zhj_doger_year = String(doger_data.getFullYear());//str.slice(-2)
			var doger_my_data = doger_data.getFullYear()+"-"+(doger_data.getMonth()+1)+"-"+doger_data.getDate();
			var doger_txt = document.getElementsByClassName('zhj_doger_tip');
//			console.log(zhj_doger_mon)
			var zhj_num = 0;
			$scope.lxmBn = '编辑'
			$scope.lxmBianji = function($index,id){
//				alert($index)
				if(off){
					
					e.find('.zhj_doger_why')[$index].removeAttribute('readonly')
//					$scope.aa = '完成'
					doger_txt[$index].innerHTML = '完成'
					console.log()
					off=false;
				}else{
					doger_txt[$index].innerHTML = '编辑'
					e.find('.zhj_doger_why')[$index].setAttribute('readonly','true')
					$http({
						url:'http://'+ip+':401/kaoqin/'+id+'',
						method:'PUT',
						data:{
							summary:e.find('.zhj_doger_why')[$index].value
						}
					}).then(function(data){
						console.log(data)
					})
					off=true;
				}
			}
//			console.log($('.zhj_doger_tip').text())
//			e.find(".zhj_doger_tip").bind('touchstart',function(){	
//				alert(1)
//				if(off){
////					e.find('.zhj_doger_why').attr('readonly','true')
//					e.find('.zhj_doger_why').removeAttr('readonly')
//					e.find(".zhj_doger_tip").text('完成');
//					off=false;
//				}else{
//					e.find(".zhj_doger_tip").text('编辑');
//					e.find('.zhj_doger_why').attr('readonly','true')
//					console.log(e.find('.zhj_doger_why').attr('readonly'))
//					off=true;
//				}				 
//			})
		}
	}
})
//angular.module('trainingProjectsApp')
//.controller('salaryCtrl', function () {
//	
//	
//	
//	
//})
//.directive('zhjSetDiv',function(){	  
//				return function(s,e,a){
//					var off=true;
//					e.bind('touchstart',function(){						 
//						 if(off){
//						 	e.text('完成');
//						 	off=false;
//						 }else{
//						 	e.text('编辑');
//						 	off=true;
//						 }
//						 
//					})
//				}
//			})
  