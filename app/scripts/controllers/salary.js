'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var salary_app = angular.module('trainingProjectsApp')
salary_app.controller('salaryCtrl', ["$scope","$http",function($scope,$http) {
//	$scope.btn = ['1','2'];
	var doger_url = 'http://'+ip+':401/kaoqin';
	$http({
		url:doger_url,
		method:'GET'
	}).then(function(data){
		$scope.btn = data.data
		console.log(data.data)
	})
}])
.directive('zhjSetDiv',function(){
	return{
		restrict:"ECMA",
		link:function(s,e,a){
			var off=true;
			var doger_data = new Date();
			var zhj_doger_mon = doger_data.getMonth()+1;
			var zhj_doger_year = String(doger_data.getFullYear());//str.slice(-2)
			var doger_my_data = doger_data.getFullYear()+"-"+(doger_data.getMonth()+1)+"-"+doger_data.getDate();
//			console.log(zhj_doger_mon)
			var zhj_num = 0

//			if(zhj_doger_mon == 1 || zhj_doger_mon == 3 || zhj_doger_mon == 5 || zhj_doger_mon == 7 || zhj_doger_mon == 8 || zhj_doger_mon == 10 || zhj_doger_mon == 12){
//				btn = 31;
//				for(var i = 0; i < 31; i++){
//					zhj_num++
//					var zhj_html = '<ol><li>日期</li><li>上午上班</li><li>上午下班</li><li>下午上班</li><li>下午下班</li></ol><ul><li><p>'+zhj_doger_year.slice(-2)+'-'+zhj_doger_mon+'-'+zhj_num+'</p></li><li><span></span><br><span></span></li><li></li><li></li><li></li><div class="zhj_doger_ipt"><div>备注<br>内容</div><textarea class="zhj_doger_why" readonly placeholder="此处填写备注内容"></textarea><div class="zhj_doger_tip">编辑</div></div></ul>'
//					e.find('.zhj_secondLi').append(zhj_html)
//				}
//			}else if(zhj_doger_mon == 4 || zhj_doger_mon == 6 || zhj_doger_mon == 9 || zhj_doger_mon == 11){
//				for(var i = 0; i < 30; i++){
//					zhj_num++
//					var zhj_html = '<ol><li>日期</li><li>上午上班</li><li>上午下班</li><li>下午上班</li><li>下午下班</li></ol><ul><li><p>'+zhj_doger_year.slice(-2)+'-'+zhj_doger_mon+'-'+zhj_num+'</p></li><li><span></span><br><span></span></li><li></li><li></li><li></li><div class="zhj_doger_ipt"><div>备注<br>内容</div><textarea class="zhj_doger_why" readonly placeholder="此处填写备注内容"></textarea><div class="zhj_doger_tip">编辑</div></div></ul>'
//					e.find('.zhj_secondLi').append(zhj_html)
//				}
//				btn = 30;
//			}else{
//				for(var i = 0; i < 28; i++){
//					zhj_num++
//					var zhj_html = '<ol><li>日期</li><li>上午上班</li><li>上午下班</li><li>下午上班</li><li>下午下班</li></ol><ul><li><p>'+zhj_doger_year.slice(-2)+'-'+zhj_doger_mon+'-'+zhj_num+'</p></li><li><span></span><br><span></span></li><li></li><li></li><li></li><div class="zhj_doger_ipt"><div>备注<br>内容</div><textarea class="zhj_doger_why" readonly placeholder="此处填写备注内容"></textarea><div class="zhj_doger_tip">编辑</div></div></ul>'
//					e.find('.zhj_secondLi').append(zhj_html)
//				}
//				btn = 28;
//			}
			
//			e.find(".zhj_doger_tip").bind('touchstart',function(){						 
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
  