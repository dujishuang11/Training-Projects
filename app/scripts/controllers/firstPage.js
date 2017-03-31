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
function getLocation() {
	//			alert(1)
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert("浏览器不支持地理定位。");
	}
}

function showPosition(position) {
	//			$(".doger-my-map").html("纬度:"+position.coords.latitude +'，经度:'+ position.coords.longitude);
	var latlon = position.coords.latitude + ',' + position.coords.longitude;
	//baidu
	var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latlon + "&output=json&pois=0";
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		url: url,
		beforeSend: function() {
			//					$(".doger_my_map").html('正在定位...');
		},
		success: function(json) {
			if(json.status == 0) {
				$(".doger_my_map").html(json.result.formatted_address);
				$(".doger_my_map_nan").css('display', 'none');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$(".doger_my_map").html(latlon + "地址位置获取失败");
		}
	});
}

function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			$('.doger_my_map_nan').text("定位失败,用户拒绝请求地理定位,请刷新重试")
			console.log("定位失败,用户拒绝请求地理定位");
			break;
		case error.POSITION_UNAVAILABLE:
			$('.doger_my_map_nan').text("定位失败,位置信息是不可用,请刷新重试")
			console.log("定位失败,位置信息是不可用");
			break;
		case error.TIMEOUT:
			$('.doger_my_map_nan').text("定位失败,请求获取用户位置超时,请刷新重试")
			console.log("定位失败,请求获取用户位置超时");
			break;
		case error.UNKNOWN_ERROR:
			$('.doger_my_map_nan').text("定位失败,定位系统失效,请刷新重试")
			console.log("定位失败,定位系统失效");
			break;
	}
}

getLocation();

//		setTimeout(function(){

//		},100)

var doger_app = angular.module('trainingProjectsApp')
var doger_url = 'http://' + ip + 'kaoqin';
doger_app.controller('firstPage', ["$scope", "$http", "$state", function($scope, $http, $state) {

		//	var a="123";
		//	var b=$.base64.btoa(a);
		//	var c=$.base64.atob(b);
		//	console.log(b,c);
		if(!sessionStorage.username) {
			$state.go('login')
		}

		//风格界面颜色变化
		$http({
			url: "http://" + ip + "users/?id=" + sessionStorage.userid,
			method: "get"
		}).then(function(e) {
			sessionStorage.textColor = e.data.color;
			$(".doger-top").css("background", e.data.bgcolor).css("color", e.data.color);
			$(".doger-list").css("background", e.data.bgcolor).css("color", e.data.color);
			$(".doger-title a").css("color", e.data.color);
		})

		var doger_data = new Date();
		var doger_my_data = doger_data.getFullYear() + "-" + (doger_data.getMonth() + 1) + "-" + doger_data.getDate();
		$('.exit')[0].addEventListener('touchstart', function() {
			sessionStorage.clear()
			localStorage.removeItem('my_map')
			localStorage.removeItem('doger_pic')
				//			if(localStorage.my_map){
				//				localStorage.removeItem(my_map)
				//			}	
		})
		console.log(sessionStorage.username)
		$scope.myShow = false;
		$scope.isShow = false;
		var my_on = false;
		var my_id = '';
		//		if(localStorage.my_map){
		//			my_id = localStorage.my_map
		//		}

		$http({
			url: 'http://' + ip + 'kaoqin/?{"uid":"' + sessionStorage.username + '","date":"' + doger_my_data + '"}',
			method: 'get'
		}).then(function(data) {
			console.log(data)
			if(data.data.length > 0) {
				localStorage.my_map = data.data[0].id
				whthfu()
				console.log(localStorage.my_map)
			} else {
				$http({
					url: doger_url,
					method: 'POST',
					data: {
						date: doger_my_data,
						time1: "",
						time2: "",
						time3: "",
						time4: "",
						summary: "",
						uid: sessionStorage.username
					}
				}).then(function(data) {
					console.log(data.data.id)
					localStorage.my_map = data.data.id
					whthfu()
				})
			}
		})

		function wtf(bmou, bmon, bafu, bafn) {
			$http({
					url: 'http://' + ip + 'kaoqin/' + localStorage.my_map + '',
					method: 'PUT',
					data: {
						date: doger_my_data,
						time1: bmou,
						time2: bmon,
						time3: bafu,
						time4: bafn,
						summary: "",
						uid: sessionStorage.username
					}
				}).then(function(data) {

				})
				//			$http({
				//				url:doger_url,
				//				method:'get'
				//			}).then(function(data){
				//				for(var i = 0; i < data.data.length; i++){
				//					console.log(data.data[i].date)
				//					console.log(data.data)
				//					if(sessionStorage.username == data.data[i].uid){
				//						if(doger_my_data == data.data[i].date){
				//							my_id = data.data[data.data.length-1].id
				//							my_on = true;
				//						}
				//					}else{
				//						my_on = false
				//					}
				//				}
				//				if(my_on == true){
				//					$http({
				//						url:'http://'+ip+'kaoqin/'+localStorage.my_map+'',
				////						url:'http://'+ip+'kaoqin/'+my_id+'?{"uid":"'+sessionStorage.username+'","date":"'+doger_my_data+'"}',
				//						method:'PUT',
				//						data:{
				//							date:doger_my_data,
				//							time1:bmou,
				//							time2:bmon,
				//							time3:bafu,
				//							time4:bafn,
				//							summary:"",
				//							uid:sessionStorage.username
				//						}
				//					}).then(function(data){
				////						my_id = data.data.id
				////						my_big_id = my_id
				//						
				//					})
				//				}else{
				//					$http({
				//						url:doger_url,
				//						method:'POST',
				//						data:{
				//							date:doger_my_data,
				//							time1:amou,
				//							time2:amon,
				//							time3:aafn,
				//							time4:aafu,
				//							summary:"",
				//							uid:sessionStorage.username
				//						}
				//					}).then(function(data){
				//						location.reload()
				//					})
				//				}
				//			})
		}

		//		$scope.i = -1;

		function whthfu() {
			var my_aa = document.getElementsByClassName('doger_succ')[0];
			$scope.lxmtipOne = function(e) {
				getLocation();
				var myTime = new Date();
				var iHour = myTime.getHours();
				var iMin = myTime.getMinutes();
				var iSec = myTime.getSeconds();
				var my_map_big = document.getElementsByClassName('doger_my_map')[0];
				var my_map_erro = document.getElementsByClassName('doger_erro')[0];
				var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
				var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map_big.innerHTML;
				if(my_map_big.innerHTML != '') {
					//				$http({
					////				url:'http://'+ip+'kaoqin/'+$scope.my_id+'',
					//					url:'http://'+ip+'kaoqin/',
					//					method:'get'
					//				}).then(function(data){
					//					$http({
					//						url:'http://'+ip+'kaoqin/'+my_id+'',
					//						method:'get'
					//					}).then(function(data1){
					//						setTimeout(function(){
					//							
					//							$http({
					//								url:'http://'+ip+'kaoqin/'+my_id+'',
					//								method:'get',
					//							}).then(function(data){
					//								console.log(my_id)
					//								console.log(data)
					//								if(data.data.time1 != ''){
					//									my_aa.innerHTML = '今天已经签到'
					//									$scope.myShow = !$scope.myShow;
					//								}else{
					//									my_aa.innerHTML = '签到成功'
					//									$scope.myShow = !$scope.myShow;
					//									wtf(str,"","","",str,data.data.time2,data.data.time3,data.data.time4)	
					//								}
					//							})
					//						},600)
					//					})
					//				})
					$http({
						url: 'http://' + ip + 'kaoqin/' + localStorage.my_map + '',
						method: 'get',
					}).then(function(data) {
						console.log(data)
						if(data.data.time1 != '') {
							my_aa.innerHTML = '今天已经签到'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
						} else {
							my_aa.innerHTML = '签到成功'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
							wtf(str, data.data.time2, data.data.time3, data.data.time4)
						}
					})
				} else {
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
				var my_map_big = document.getElementsByClassName('doger_my_map')[0];
				var my_map_erro = document.getElementsByClassName('doger_erro')[0];
				var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
				var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map_big.innerHTML;
				if(my_map_big.innerHTML != '') {
					//				$http({
					//					url:'http://'+ip+'kaoqin/'+my_id+'',
					//					method:'get'
					//				}).then(function(data){
					//					$http({
					//						url:'http://'+ip+'kaoqin/'+my_id+'',
					//						method:'get'
					//					}).then(function(data1){
					//						setTimeout(function(){
					//							$http({
					//								url:'http://'+ip+'kaoqin/'+my_id+'',
					//								method:'get',
					//							}).then(function(data){
					//								if(data.data.time2 != ''){
					//									my_aa.innerHTML = '今天已经签到'
					//									$scope.myShow = !$scope.myShow;
					//								}else{
					//									my_aa.innerHTML = '签到成功'
					//									$scope.myShow = !$scope.myShow;
					//									wtf("",str,"","",data.data.time1,str,data.data.time3,data.data.time4)	
					//								}
					//							})
					//						},600)
					//					})
					//				})
					$http({
						url: 'http://' + ip + 'kaoqin/' + localStorage.my_map + '',
						method: 'get',
					}).then(function(data) {
						if(data.data.time2 != '') {
							my_aa.innerHTML = '今天已经签到'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
						} else {
							my_aa.innerHTML = '签到成功'
							$scope.myShow = !$scope.myShow;
							my_map_erro.innerHTML = ''
							wtf(data.data.time1, str, data.data.time3, data.data.time4)
						}
					})
				} else {
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
				var my_map_big = document.getElementsByClassName('doger_my_map')[0];
				var my_map_erro = document.getElementsByClassName('doger_erro')[0];
				var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
				var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map_big.innerHTML;
				if(my_map_big.innerHTML != '') {
					//				$http({
					//					url:'http://'+ip+'kaoqin/'+my_id+'',
					//					method:'get'
					//				}).then(function(data){
					//					$http({
					//						url:'http://'+ip+'kaoqin/'+my_id+'',
					//						method:'get'
					//					}).then(function(data1){
					//						setTimeout(function(){
					//							$http({
					//								url:'http://'+ip+'kaoqin/'+my_id+'',
					//								method:'get',
					//							}).then(function(data){
					//								if(data.data.time3 != ''){
					//									my_aa.innerHTML = '今天已经签到'
					//									$scope.myShow = !$scope.myShow;
					//								}else{
					//									my_aa.innerHTML = '签到成功'
					//									$scope.myShow = !$scope.myShow;
					//									wtf("","",str,"",data.data.time1,data.data.time2,str,data.data.time4)	
					//								}
					//							})
					//						},600)
					//					})
					//				})
					$http({
						url: 'http://' + ip + 'kaoqin/' + localStorage.my_map + '',
						method: 'get',
					}).then(function(data) {
						if(data.data.time3 != '') {
							my_aa.innerHTML = '今天已经签到'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
						} else {
							my_aa.innerHTML = '签到成功'
							$scope.myShow = !$scope.myShow;
							my_map_erro.innerHTML = ''
							wtf(data.data.time1, data.data.time2, str, data.data.time4)
						}
					})
				} else {
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
				var my_map_big = document.getElementsByClassName('doger_my_map')[0];
				var my_map_erro = document.getElementsByClassName('doger_erro')[0];
				var my_map_tip = document.getElementsByClassName('doger_my_map_nan')[0];
				var str = doub(iHour) + ':' + doub(iMin) + ':' + doub(iSec) + '-' + my_map_big.innerHTML;

				if(my_map_big.innerHTML != '') {
					//				$http({
					//					url:'http://'+ip+'kaoqin/'+$scope.my_id+'',
					//					url:'http://'+ip+'kaoqin/',
					//					method:'get'
					//				}).then(function(data){
					//					$http({
					//						url:'http://'+ip+'kaoqin/'+my_id+'',
					//						method:'get'
					//					}).then(function(data1){
					//						setTimeout(function(){
					//							$http({
					//								url:'http://'+ip+'kaoqin/'+my_id+'',
					//								method:'get',
					//							}).then(function(data){
					//								if(data.data.time4 != ''){
					//									my_aa.innerHTML = '今天已经签到'
					//									$scope.myShow = !$scope.myShow;
					//								}else{
					//									my_aa.innerHTML = '签到成功'
					//									$scope.myShow = !$scope.myShow;
					//									wtf("","","",str,data.data.time1,data.data.time2,data.data.time3,str)	
					//								}
					//							})
					//						},600)
					//					})
					//				})

					$http({
						url: 'http://' + ip + 'kaoqin/' + localStorage.my_map + '',
						method: 'get',
					}).then(function(data) {
						if(data.data.time4 != '') {
							my_aa.innerHTML = '今天已经签到'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
						} else {
							my_aa.innerHTML = '签到成功'
							my_map_erro.innerHTML = ''
							$scope.myShow = !$scope.myShow;
							wtf(data.data.time1, data.data.time2, data.data.time3, str)
						}
					})
				} else {
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
	.directive("lxmfrg", function($http) {
		return {
			restrict: "ECMA",
			link: function($scope, element, attr) {
				//				var my_pict = document.getElementsByClassName('.doger_myPhoto');
				$('.doger_name').text(sessionStorage.username)

				function aaa() {
					$http({
						url: 'http://' + ip + 'users/?id=' + sessionStorage.userid + '',
						method: 'get'
					}).then(function(e) {
						//						console.log($.base64.atob(e.data.pic))
						localStorage.doger_pic = $.base64.atob(e.data.pic);
						element.find('.doger_myPhoto')[0].src = localStorage.doger_pic;

					})
				}
				aaa()

				var on = false;
				var myList = element.find('.doger-list li');
				var myBtn = element.find('.doger-work button');
				element.find('.doger-title').bind('touchstart', function() {
					if(!on) {
						//						$http({
						//							url:doger_url,
						//							method:'GET'
						//						}).then(function(data){
						//							console.log(data.data)
						//						})
						element.find('.doger-wrapper').css('transform', 'translateX(0)')
						element.find('.doger-list-opac').css('width', '0%')
						element.find('.doger-list-opac-right').css('width', '0%')
						element.find('.doger-list span').css('color', sessionStorage.textColor)
						on = true
					} else {
						element.find('.doger-wrapper').css('transform', 'translateX(-8rem)')
						on = false
					}
				})
				for(var i = 0; i < myList.length; i++) {
					myList[i].index = i;
					myList[i].addEventListener('touchstart', function() {
						this.childNodes[0].style.color = '#FECC02';
						this.childNodes[1].style.width = '0';
						this.childNodes[2].style.width = '0';
						//						console.log(this.childNodes)
						setTimeout(function() {
							element.find('.doger-wrapper').css('transform', 'translateX(-8rem)')
							on = false
						}, 500)
					})
					myList[i].addEventListener('touchend', function() {
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
	.directive("lxmlow", function() {
		return {
			link: function($scope, element, attr) {
				//				var my_map_txt = document.getElementsByClassName('doger_my_map')[0];
				//				if(my_map_txt.innerHTML != ''){
				//					$scope.isShow = false;
				//				}else{
				//					$scope.isShow = true;
				//				}
				//				console.log(element.find('.my_map_txt').text())
				if(element.find('.my_map_txt').text() != '') {
					scope.isShow = false;
				} else {
					$scope.isShow = true;
				}
			}
		}

	})