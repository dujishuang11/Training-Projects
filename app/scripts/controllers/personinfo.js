'use strict';

/**
 * @ngdoc function
 * @name trainingProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingProjectsApp
 */
var lhq_app = angular.module('trainingProjectsApp')
lhq_app.controller('personinfoCtrl', ["$scope", "$http","$location","$state", function($scope, $http,$location,$state) {
	//   从其它页面跳转  	
//	console.log($.base64.btoa('images/icon.9a2255a3.png'))
	if(!sessionStorage.username){
	  	  $state.go('login');
	  }
	$scope.djsShowtel = false;
	$scope.djsSex = '';
	$scope.djsName = '';
	$scope.djsTel = '';
	$scope.djsEmail = '';
	$scope.djsAdd = '';
	$scope.djsQQ = '';
	$scope.djsTeltwo = '';
	$scope.djsImg= '';
	
	$http({
		url: "http://" + ip + "users/?id=" + sessionStorage.userid,
		method: "get"
	}).then(function(e) {
//		console.log(e.data)
		if(e.data.sex == '女'){
			$scope.djsSex = '女';
		}else{
			$scope.djsSex = '男';
		}
		$scope.djsName = e.data.name;
		$scope.djsTel = e.data.tel;
		$scope.djsEmail = e.data.email;
		$scope.djsAdd = e.data.address;
		$scope.djsQQ = e.data.qq;
		$scope.djsTeltwo = e.data.others;
		
		$scope.djsImg = localStorage.doger_pic;
//		console.log($scope.djsImg)
	})
	var telExp = /^1[3'/4578]\d{9}$/;
	$scope.djsTell = function(){
		if($scope.djsTel == ''){
			$scope.djsTishi = "请输入手机号";
			$scope.djsShowtel = true
		}else if(!(telExp.test($scope.djsTel)==true)){
			$scope.djsTishi = "请输入正确手机号";
			$scope.djsShowtel = true
		}
	}
	$scope.djsTelltwo = function(){
		if($scope.djsTel == ''){
			$scope.djsTishi = "请输入手机号";
			$scope.djsShowtel = true
		}else if(!(telExp.test($scope.djsTel)==true)){
			$scope.djsTishi = "请输入正确手机号";
			$scope.djsShowtel = true
		}
	}
	
	var emailExp = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	$scope.emailDjs = function(){
		if($scope.djsEmail == ''){
			$scope.djsTishi = "请输入邮箱地址";
			$scope.djsShowtel = true
		}else if(!(emailExp.test($scope.djsEmail)==true)){
			$scope.djsTishi = "请输入正确邮箱地址";
			$scope.djsShowtel = true
		}
	}
	
	var qqExp=/^\d{5,10}$/;
	$scope.qqDjs = function(){
		if($scope.djsQQ == ''){
			$scope.djsTishi = "请输入QQ号";
			$scope.djsShowtel = true
		}else if(!(qqExp.test($scope.djsQQ)==true)){
			$scope.djsTishi = "请输入正确QQ号码";
			$scope.djsShowtel = true
		}
	}
//	function aaa(){
//								$http({
//									url:'http://'+ip+'users/?id='+sessionStorage.userid+'',
//									method:'get'
//								}).then(function(e){
//				//					console.log(e.data.pic)
//									element.find('.doger_myPhoto')[0].src = $.base64.atob(e.data.pic);
//									
//								})
//							}
	$scope.djsGuan = function(){
		$scope.djsShowtel = false;
	}
	$scope.djsBtn = function() {
//		console.log($scope.djsSex)
		$http({
			url: "http://" + ip + "users/?id=" + sessionStorage.userid,
			method: "put",
			data: {
				sex: $scope.djsSex,
				username: $scope.djsName,
				name: $scope.djsName,
				tel: $scope.djsTel,
				email: $scope.djsEmail,
				address: $scope.djsAdd,
				qq: $scope.djsQQ,
				others: $scope.djsTeltwo
			}
		}).then(function(e) {
			$http({
				url: "http://" + ip + "users/?username=" + sessionStorage.username,
				method: "get",
			}).then(function(data){
				sessionStorage.userid = data.data[0].id
				$location.path('/firstPage/tel');
			})
		})
	}
}]);
lhq_app.directive("lhq", function($http) {
	return {
		restrict: "ECMA",
		link: function(scope, element, attr,$scope) {
			$('.djsImg')[0].src = localStorage.doger_pic;
			$('.doger_myPhoto')[0].src = localStorage.doger_pic;
			
//			$('input[type=file]').each(function()     {
//			                    var max_size=102400;
//			                     $(this).change(function(evt)   
//			                        {   
//			                            var finput = $(this);   
//			                            var files = evt.target.files; // 获得文件对象   
//			                            var output = [];   
//			                            for (var i = 0, f; f = files[i]; i++)   
//			                                    {  //检查文件大小   
//			                                     if(f.size > max_size)   
//			                                        {   
//			                                            alert("上传的图片不能超过100KB!");   
//			                                            $(this).val('');   
//			                                        }   
//			                                    }   
//			            });   
//			        }); 
			element.find(".xx-button").bind("touchstart", function() {
				element.find(".imginput").click();
				element.find(".imginput").change(function() {
                    var	_file = this.files[0],  
                   		fileType = _file.type;  
                    console.log(_file.size);  
	                if(/image\/\w+/.test(fileType)){
	                    var fileReader = new FileReader();  
	                    fileReader.readAsDataURL(_file);  
	                    fileReader.onload = function(event){  
	                        var result = event.target.result;   //返回的dataURL  
	                        var image = new Image();  
	                        image.src = result;  
	                        image.onload = function(){  //创建一个image对象，给canvas绘制使用  
	                            var cvs = document.createElement('canvas');  
	                            var scale = 1;    
	                            if(this.width > 300 || this.height > 300){  //1000只是示例，可以根据具体的要求去设定    
	                                if(this.width > this.height){    
	                                    scale = 300 / this.width;  
	                                }else{    
	                                    scale = 300 / this.height;    
	                                }    
	                            }  
	                            cvs.width = this.width*scale;    
	                            cvs.height = this.height*scale;     //计算等比缩小后图片宽高  
	                            var ctx = cvs.getContext('2d');    
	                            ctx.drawImage(this, 0, 0, cvs.width, cvs.height);     
	                            var newImageData = cvs.toDataURL(fileType, 0.8);   //重新生成图片，<span style="font-family: Arial, Helvetica, sans-serif;">fileType为用户选择的图片类型</span>  
	                            var sendData = newImageData.replace("data:"+fileType+";base64,",'');  
//	                            console.log($.base64.btoa(newImageData))
	                            $http({
									url:'http://'+ ip +'users/?id='+sessionStorage.userid,
									method:'put',
									data:{
										pic:$.base64.btoa(newImageData)
									}
								}).then(function(e){
									localStorage.doger_pic = newImageData;
									$('.djsImg')[0].src = newImageData;
									$('.doger_myPhoto')[0].src = newImageData;
								})
//	                            $.post('/user/personalchange',{type:'photo',value:sendData},function(data){  
//	                                if(data.code == '200'){  
//	                                    $('.modify_img').attr('src',newImageData);  
//	                                    $.notify.close();  
//	                                }else{  
//	                                    $.notify.show(data.message, {placement: 'center'});  
//	                                }  
//	                            });
	                       }
	                    }  
	                }
				})
			})
		}
	}
})



