var bar = 0;
$(function() {
	var code;
	var flag;
	var flag2;
	var userId = getParametersOnUrl('userId');
	$('.padding').click(function() {
		var mobile = $('.mobile input').val();
		var regMobile = /^[1]+\d{10}$/;
		if(mobile==''){
	        alert('请输入手机号码');
	        return ;
	    }
		if (regMobile.test(mobile)) {
			if ($(".msg").text() == "获取验证码") {
				sercice(sUrl.SendMobileSMS,function(data) {
					if(data.success){
						disableButton(60);
						code = data.body.Code;
						console.log(code);
						//alert(code);
		             } else {
		               $('.shadow').show();
		             }
				},{
					"mobile":mobile,
					"type": 2
				})
			}
		} else {
			alert("请输入正确的手机号");
		}
	})
	$('.btn').click(function() {
		var mobile = $('.mobile input').val();
		var password = $('.password input').val();
		var msgCode = $('.message input').val();
		var noticeType = $("input[name='type']:checked").siblings('label').text();
		var regMobile = /^[1]+\d{10}$/;
		if(mobile==''){
	        alert('请输入手机号码');
	        return ;
	    }
		if(msgCode == ''){
	        alert('请输入验证码');
	        return ;
	    }
	    if(password==''){
	        alert('请输入密码');
	        return ;
	    }
	    if(msgCode != code){
	        alert('验证码错误!');
	        return ;
	    }
		if (noticeType == "老师") {
			flag = true;
			flag2 = false;
		} else if (noticeType == "学生") {
			flag2 = true;
			flag = false;
		}
		if(noticeType == '') {
			 alert('请选择身份');
		}
		if (regMobile.test(mobile)) {
			sercice(sUrl.webRegister,function(data) {
				if(data.success) {
					var mphone = mobile.substr(0, 3) + '****' + mobile.substr(7);   
					$('.text_con').text('artapp大师课免费体验券已放入'+ mphone +'账号中赶紧领取吧！~');
					$('.shadow2').show();
					bar = 1;
					$('.mobile input').val('');
					$('.password input').val('');
					$('.message input').val('');
					$('.spanSechduRadio').find('img').attr('src',path1 + '/h5/register/img/close.png');					
				} else {
					//alert(data.msg);
				}
			},{
				"mobile": mobile,
				"password": hex_md5(password),
				"recommenderId": userId,
				"isTeacher":flag,
				"isStudent": flag2
			})
		} else {
			alert("请输入正确的手机号");
		}
	})
	$('.button').click(function() {
		location.href = "http://dwz.cn/2M5IJ4";
	})
	$('.close').click(function() {
		$('.shadow2').hide();
	})
})
function changeNoticeType(span){
	$('.spanSechduRadio').find('input').removeProp('checked');
	$('.spanSechduRadio').find('input').attr('ischeck',false);
	$('.spanSechduRadio').find('img').attr('src',path1 + '/h5/register/img/close.png');
	
	$(span).find('img').attr('src',path1 + '/h5/register/img/open.png');
	$(span).find('input').prop('checked',true);
	$(span).find('input').attr('ischeck',true);
	
}
function disableButton(num) {
	if (num > 0) {
		$(".msg").text("请" + num + "秒后重试");
		num--;
		if (bar) {
			num = 0;
		}
		setTimeout("disableButton(" + num + ")", 1000);
	} else {
		$(".msg").text("获取验证码");
	}
}
function canCel(obj){
	$(".shadow").hide();
	$("body").css({height:"",overflow:"",paddingBottom:""});
	$("html").css({height:"",overflow:"",paddingBottom:""});
	$(".tabItem ul li").removeClass("active");
	$(".tabItem ul li:eq(0)").addClass("active");
}
function conFirm(obj){
	location.href = "http://dwz.cn/2M5IJ4";
}