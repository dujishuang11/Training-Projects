'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
//位置
//		$(".doger-my-map").html('正在定位...');
		function getLocation(){   
//			alert(1)
		    if (navigator.geolocation){   
		        navigator.geolocation.getCurrentPosition(showPosition,showError);   
		    }else{   
		        alert("浏览器不支持地理定位。");   
		    }   
		}
		function showPosition(position){
//			$(".doger-my-map").html("纬度:"+position.coords.latitude +'，经度:'+ position.coords.longitude);
			var latlon = position.coords.latitude+','+position.coords.longitude;
			//baidu
			var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0";
			$.ajax({ 
				type: "GET", 
				dataType: "jsonp", 
				url: url,
				beforeSend: function(){
//					$(".doger_my_map").html('正在定位...');
				},
				success: function (json) { 
					if(json.status==0){
						$(".doger_my_map").html(json.result.formatted_address);
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) { 
					$(".doger_my_map").html(latlon+"地址位置获取失败"); 
				}
			});
		}

		function showError(error){
			switch(error.code) {
				case error.PERMISSION_DENIED:
					console.log("定位失败,用户拒绝请求地理定位");
					break;
				case error.POSITION_UNAVAILABLE:
					console.log("定位失败,位置信息是不可用");
					break;
				case error.TIMEOUT:
					console.log("定位失败,请求获取用户位置超时");
					break;
				case error.UNKNOWN_ERROR:
					console.log("定位失败,定位系统失效");
					break;
		    }
		}

		getLocation();
		
		
		
var doger_app = angular.module('trainingProjectsApp')
	var doger_url = 'http://'+ip+':401/kaoqin';
	doger_app.controller('firstPage',["$scope","$http",function($scope,$http) {
		var doger_data = new Date();
//		alert(sss)
		var doger_my_data = doger_data.getFullYear()+"-"+(doger_data.getMonth()+1)+"-"+doger_data.getDate();
//		var doger_my_data = '2017-3-26'
//		console.log(doger_my_data1)
		
//		localStorage.my_day = doger_my_data;
//		var my_map = document.getElementsByClassName('doger_my_map');
//		console.log(my_map[])
//		if(my_map.innerHTML != ''){
//				alert(1)
//				$scope.isShow = false;
//		}	
//		var myTime = new Date();
//		var iHour = myTime.getHours();
//		var iMin = myTime.getMinutes();
//		var str = doub(iHour) + ':' + doub(iMin);
		console.log(sessionStorage.username)
		$scope.myShow = false;
		$scope.isShow = true;
		var my_on = false;
		var my_id = '';
		if(localStorage.my_map){
			my_id = localStorage.my_map
		}
//		var my_big_id = '';
//		wtf("","","","");
//		whthfu()
		whthfu()
//		$http({
//			url:doger_url,
//			method:'get'
//		}).then(function(data){
//			if(data.data.length > 0){
//				for(var i = 0; i < data.data.length; i++){
////					console.log(1111111111)
////					if(doger_my_data != data.data[0].date){
////						localStorage.removeItem('my_map')
////						wtf("","","","");
////						whthfu()
////					}
//					if(sessionStorage.username == data.data[i].uid){
//						my_on = true
////						alert('请勿重复签到')
////	//					break;
//						whthfu()
//					}else{
//						wtf("","","","");
//						whthfu()
//					}
//				}
//			}
//			else{
//				wtf("","","","");
//				whthfu()
//			}
//		})
//		var my_map = document.getElementsByClassName('doger_my_map');
//		$scope.aa = my_map;
//		console.log($scope.aa[0].innerHTML)
//		if($('.doger_my_map').text() == ''){
//			console.log(1)
////			$scope.isShow = true;
//		}else{
//			console.log(2)
////			$scope.isShow = false;
//		}
//		setTimeout(function(){
//		console.log(my_big_id)
//			
//		},1000)

		function wtf(amou,amon,aafu,aafn,bmou,bmon,bafu,bafn){
			$http({
				url:doger_url,
				method:'get'
			}).then(function(data){
				for(var i = 0; i < data.data.length; i++){
//					console.log(data.data[i].date)
//					console.log(data.data)
					if(sessionStorage.username == data.data[i].uid){
						if(doger_my_data == data.data[i].date){
	//						console.log()
							my_id = data.data[data.data.length-1].id
							my_on = true;
	//						break;
	//						console.log(my_id)
						}
					}else{
						my_on = false
					}
				}
				if(my_on == true){
					$http({
						url:'http://'+ip+':401/kaoqin/'+my_id+'',
						method:'PUT',
						data:{
							date:doger_my_data,
							time1:bmou,
							time2:bmon,
							time3:bafu,
							time4:bafn,
							summary:"",
							uid:sessionStorage.username
						}
					}).then(function(data){
						my_id = data.data.id
//						my_big_id = my_id
						
					})
				}else{
					$http({
						url:doger_url,
						method:'POST',
						data:{
							date:doger_my_data,
							time1:amou,
							time2:amon,
							time3:aafn,
							time4:aafu,
							summary:"",
							uid:sessionStorage.username
						}
					}).then(function(data){
//						my_big_id = my_id
//						console.log(data.data.id)
						my_id = data.data.id
						localStorage.my_map = my_id;
						console.log(localStorage.my_map)
//						console.log($scope.my_id)
					})
				}
			})
		}
		
		

//		$scope.i = -1;

			
		
		
		function whthfu(){
			var my_aa = document.getElementsByClassName('doger_succ')[0];
			$scope.lxmtipOne = function(e) {
			getLocation();
			var myTime = new Date();
			var iHour = myTime.getHours();
			var iMin = myTime.getMinutes();
			var iSec = myTime.getSeconds();
			var my_map = document.getElementsByClassName('doger_my_map')[0];
			var my_map_erro = document.getElementsByClassName('doger_erro')[0];
			var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
			var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map.innerHTML;
			if(my_map.innerHTML != ''){
				$http({
//				url:'http://'+ip+':401/kaoqin/'+$scope.my_id+'',
					url:'http://'+ip+':401/kaoqin/',
					method:'get'
				}).then(function(data){
					$http({
						url:'http://'+ip+':401/kaoqin/'+my_id+'',
						method:'get'
					}).then(function(data1){
						setTimeout(function(){
							
							$http({
								url:'http://'+ip+':401/kaoqin/'+my_id+'',
								method:'get',
							}).then(function(data){
								console.log(data)
								if(data.data.time1 != ''){
									my_aa.innerHTML = '今天已经签到'
									$scope.myShow = !$scope.myShow;
								}else{
									my_aa.innerHTML = '签到成功'
									$scope.myShow = !$scope.myShow;
									wtf(str,"","","",str,data.data.time2,data.data.time3,data.data.time4)	
								}
							})
						},600)
					})
				})
			}else{
				my_aa.innerHTML = '签到失败'
				my_map_erro.style.display = 'block'
				my_map_erro.innerHTML = '无法获取当前地理位置'
				$scope.myShow = !$scope.myShow;
			}
		}
		$scope.lxmtipTwo = function(e) {
//			getLocation();
			var myTime = new Date();
			var iHour = myTime.getHours();
			var iMin = myTime.getMinutes();
			var iSec = myTime.getSeconds();
			var my_map = document.getElementsByClassName('doger_my_map')[0];
			var my_map_erro = document.getElementsByClassName('doger_erro')[0];
			var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
			var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map.innerHTML;
			if(my_map.innerHTML != ''){
				$http({
					url:'http://'+ip+':401/kaoqin/'+$scope.my_id+'',
					url:'http://'+ip+':401/kaoqin/',
					method:'get'
				}).then(function(data){
					$http({
						url:'http://'+ip+':401/kaoqin/'+my_id+'',
						method:'get'
					}).then(function(data1){
						setTimeout(function(){
							$http({
								url:'http://'+ip+':401/kaoqin/'+my_id+'',
								method:'get',
							}).then(function(data){
								if(data.data.time2 != ''){
									my_aa.innerHTML = '今天已经签到'
									$scope.myShow = !$scope.myShow;
								}else{
									my_aa.innerHTML = '签到成功'
									$scope.myShow = !$scope.myShow;
									wtf("",str,"","",data.data.time1,str,data.data.time3,data.data.time4)	
								}
							})
						},600)
					})
				})
			}else{
				my_aa.innerHTML = '签到失败'
				my_map_erro.style.display = 'block'
				my_map_erro.innerHTML = '无法获取当前地理位置'
				$scope.myShow = !$scope.myShow;
			}	
		}
		
		$scope.lxmtipThree = function(e) {
//			getLocation();
			var myTime = new Date();
			var iHour = myTime.getHours();
			var iMin = myTime.getMinutes();
			var iSec = myTime.getSeconds();
			var my_map = document.getElementsByClassName('doger_my_map')[0];
			var my_map_erro = document.getElementsByClassName('doger_erro')[0];
			var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
			var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map.innerHTML;
			if(my_map.innerHTML != ''){
				$http({
					url:'http://'+ip+':401/kaoqin/'+my_id+'',
					method:'get'
				}).then(function(data){
					$http({
						url:'http://'+ip+':401/kaoqin/'+my_id+'',
						method:'get'
					}).then(function(data1){
						setTimeout(function(){
							$http({
								url:'http://'+ip+':401/kaoqin/'+my_id+'',
								method:'get',
							}).then(function(data){
								if(data.data.time3 != ''){
									my_aa.innerHTML = '今天已经签到'
									$scope.myShow = !$scope.myShow;
								}else{
									my_aa.innerHTML = '签到成功'
									$scope.myShow = !$scope.myShow;
									wtf("","",str,"",data.data.time1,data.data.time2,str,data.data.time4)	
								}
							})
						},600)
					})
				})
			}else{
				my_aa.innerHTML = '签到失败'
				my_map_erro.style.display = 'block'
				my_map_erro.innerHTML = '无法获取当前地理位置'
				$scope.myShow = !$scope.myShow;
			}	
		}
		
		$scope.lxmtipFour = function(e) {
//			getLocation();
			var myTime = new Date();
			var iHour = myTime.getHours();
			var iMin = myTime.getMinutes();
			var iSec = myTime.getSeconds();
			var my_map = document.getElementsByClassName('doger_my_map')[0];
			var my_map_erro = document.getElementsByClassName('doger_erro')[0];
			var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
			var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map.innerHTML;
			if(my_map.innerHTML != ''){
				$http({
					url:'http://'+ip+':401/kaoqin/'+$scope.my_id+'',
					url:'http://'+ip+':401/kaoqin/',
					method:'get'
				}).then(function(data){
					$http({
						url:'http://'+ip+':401/kaoqin/'+my_id+'',
						method:'get'
					}).then(function(data1){
						setTimeout(function(){
							$http({
								url:'http://'+ip+':401/kaoqin/'+my_id+'',
								method:'get',
							}).then(function(data){
								if(data.data.time4 != ''){
									my_aa.innerHTML = '今天已经签到'
									$scope.myShow = !$scope.myShow;
								}else{
									my_aa.innerHTML = '签到成功'
									$scope.myShow = !$scope.myShow;
									wtf("","","",str,data.data.time1,data.data.time2,data.data.time3,str)	
								}
							})
						},600)
					})
				})
			}else{
				my_aa.innerHTML = '签到失败'
				my_map_erro.style.display = 'block'
				my_map_erro.innerHTML = '无法获取当前地理位置'
				$scope.myShow = !$scope.myShow;
			}	
		}
		}
		
		$scope.lxmclo = function(e) {
			$scope.myShow = !$scope.myShow
		}
		
		
	}])
	.directive("lxmfrg",function($http){
		return{
			restrict:"ECMA",
//			templateUrl:"index.html",
			link:function($scope,element,attr){
//				console.log(1)
//				element.find('p').css("color","red");
//				element.find('.laaaaa')[0].addEventListener('touchstart',function(){
//					location.href = '/#!/salary'
//				})
//				var my_map = document.getElementsByClassName('doger_my_map')[0];
//				if(my_map.innerHTML != ''){
//					$scope.isShow = false;
//				}else{
//					$scope.isShow = true;
//				}

				var on = false;
				var myList = element.find('.doger-list li');
				var myBtn = element.find('.doger-work button');
				element.find('.doger-title').bind('touchstart',function(){
					if(!on){
//						$http({
//							url:doger_url,
//							method:'GET'
//						}).then(function(data){
//							console.log(data.data)
//						})
						element.find('.doger-wrapper').css('transform','translateX(0)')
						element.find('.doger-list-opac').css('width','0%')
						element.find('.doger-list-opac-right').css('width','0%')
						element.find('.doger-list span').css('color','white')
						on = true
					}else{
						element.find('.doger-wrapper').css('transform','translateX(-8rem)')
						on = false
					}
				})
				for(var i = 0; i < myList.length; i++) {
					myList[i].index = i;
					myList[i].addEventListener('touchstart',function(){
						this.childNodes[0].style.color = '#FECC02';
						this.childNodes[1].style.width = '0';
						this.childNodes[2].style.width = '0';
//						console.log(this.childNodes)
						setTimeout(function(){
							element.find('.doger-wrapper').css('transform','translateX(-8rem)')
							on = false
						},500)
					})
					myList[i].addEventListener('touchend',function(){
						this.childNodes[1].style.width = '50%';
						this.childNodes[2].style.width = '50%';
//						console.log(this.childNodes)
					})
//					console.log(element.find('.doger-list li').length)
				}
//				for(var i = 0; i < myBtn.length; i++){
//					myBtn[i].addEventListener('touchstart',function(){
//						element.find('.doger_tip')[0].style.opacity = '1'
//						element.find('.doger_tip')[0].style.zIndex = '999'
//						setTimeout(function(){
//							element.find('.doger_tip_content')[0].style.height = '6rem'
//						},400)
//					})
//				}
//				element.find('.icon-guanbi')[0].addEventListener('touchstart',function(){
//					element.find('.doger_tip')[0].style.display = 'none'
//					element.find('.doger_tip_content')[0].style.height = '0'
//					setTimeout(function(){
//						element.find('.doger_tip')[0].style.opacity = '0'
//						element.find('.doger_tip')[0].style.zIndex = '-999'
//					},400)
//				})
			}
		}
	})
	.directive("lxmlow",function(){
		return{
			restrict:"ECMA",
			link:function($scope,element,attr){
				var my_map = document.getElementsByClassName('doger_my_map')[0];
				if(my_map.innerHTML != ''){
					$scope.isShow = false;
				}else{
					$scope.isShow = true;
				}
			}
		}	
		
	}).directive("setColor",function(){
			return function(scope,element,attrs){
				element.css("background",localStorage.Sbackground).css("color",localStorage.Scolor);
			}
	})
