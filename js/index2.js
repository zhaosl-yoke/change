var bar = 0;
$(function() {
	var code;
	var flag;
	var flag2;
	var LocString=String(window.document.location.href);
	function GetQueryString(str){
		 var rs=new RegExp("(^|)"+str+"=([^&]*)(&|$)","gi").exec(LocString),tmp;
		 if(tmp=rs)return tmp[2];
		 return null;
	}
	var userId = getParametersOnUrl('userId');
	var position = getParametersOnUrl('position');
	var nickname2 = getParametersOnUrl('nickname');
	var ua = navigator.userAgent,
    isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua),
  	isIpad = /(iPad).*OS\s([\d_]+)/.test(ua),
  	isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua),
  	isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua),
  	isWechat = /micromessenger/i.test(ua);
	if(isAndroid) {
		var nickname = decodeURI(GetQueryString('nickname'));
	} else {
		var nickname = decodeURI(decodeURI(GetQueryString('nickname')));
	}
	if (position == 1) {
		$('.inviteText').attr("src","img/tea_stu_text.png");
		$('.inviteText').css({
			"width": "5.52rem",
			"position": "absolute",
			"top": "4.6rem",
			"left": "50%",
			"margin-left": "-2.76rem",
		})	
		$('.inviteNum1').text("艺术小天使"+nickname+"已努力帮助");
		$('.inviteNum2').text("个学生提升学习效率");
		document.title = "邀请学生";
	}
	if (position == 2) {
		$('.inviteText').attr("src",path1 + "/h5/register/img/invite_stu.png");
		$('.inviteText').css({
			"width": "5.36rem",
			"position": "absolute",
			"top": "4.6rem",
			"left": "50%",
			"margin-left": "-2.68rem",
		})	
		$('.inviteNum1').text("艺术小天使"+nickname+"已努力帮助");
		$('.inviteNum2').text("个学生提升学习效率");
		document.title = "邀请学生";
	}
	if (position == 3) {
		$('.inviteText').attr("src",path1 + "/h5/register/img/invite_tea.png");
		$('.inviteText').css({
			"width": "5.36rem",
			"position": "absolute",
			"top": "4.6rem",
			"left": "50%",
			"margin-left": "-2.68rem",
		})	
		$('.inviteNum1').text("艺术小天使"+nickname+"已努力帮助");
		$('.inviteNum2').text("个学生提升学习效率");
		document.title = "邀请老师";
	}
	if (position == 4) {
		$('.inviteText').attr("src",path1 + "/h5/register/img/invite_inst.png");
		$('.inviteText').css({
			"width": "5.2rem",
			"position": "absolute",
			"top": "3.6rem",
			"left": "50%",
			"margin-left": "-2.6rem",
		})	
		$('.top').css("width","7rem");
		$('.top .inviteNum2').css("top","7.56rem");
		$('.top .inviteNum1').css("top","6.4rem");
		$('.top .num').css("bottom","1.12rem");
		$('.topImg').attr("src",path1 + "/h5/register/img/top_inst.png");
		$('.inviteNum1').text("艺术小天使"+nickname+"已努力帮助");
		$('.inviteNum2').text("个学生提升学习效率");
		document.title = "邀请机构老板";
	}
	//获取数据
	/*sercice(sUrl.selectNumAndAmount,function(data) {
		//console.log(data);
		if (data.success) {
			var amount = data.body.amount;
			var num = data.body.num;
			$('.num').text(num);
			$('.reward span').text(amount+".00");
		}
	},{
		"userId":userId
	})*/
	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(document).scrollTop();
		//console.log(scrollTop);
	})
	/*$('.padding').click(function() {
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
		             } else if (data.msg == "手机号已被注册"){
		               $('.shadow').show();
		               $('.shadow').css("height",$('.container').outerHeight(true));
		               $('html,body').scrollTop(scrollTop);
		               $('.shadow').css("padding-top",scrollTop+200);
		               $('body').css({
		            	   "height":$(document).height(),
		            	   "overflow":"hidden",
		            	   'position': 'fixed',
		            	    'top': scrollTop*-1
		               });
		             } else {
		            	 alert(data.msg);
		             }
				},{
					"mobile":mobile,
					"type": 2
				})
			}
		} else {
			alert("请输入正确的手机号");
		}
	})*/
	/*$('.btn').click(function() {
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
					$('.shadow2').css("height",$('.container').outerHeight(true));
	                $('html,body').scrollTop(scrollTop);
	                $('.shadow2').css("padding-top",scrollTop);
	                $('.shadow2 .text_con').css({
	                	"top": scrollTop + 256
	                })
	                $('.shadow2 .close').css({
	                	"top": scrollTop + 200
	                })
	                $('.regImg').css({
	                	"margin-top": "200px"
	                })
	                $('body').css({
	            	   "height":$(document).height(),
	            	   "overflow":"hidden",
	            	   'position': 'fixed',
	            	    'top': scrollTop*-1
	                });
					bar = 1;
					$('.mobile input').val('');
					$('.password input').val('');
					$('.message input').val('');
					$('.spanSechduRadio').find('img').attr('src',path1 + '/h5/register/img/close.png');					
				} else {
					alert(data.msg);
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
	})*/
	$('.button').click(function() {
		location.href = "http://dwz.cn/2M5IJ4";
	})
	$('.close').click(function() {
		$('.shadow2').hide();
		$("body").css({
		    'overflow':'auto',
		    'position': 'static',
		    'top': 'auto',
		});
		var offsetTop = $('.register').offset().top
		//console.log(offsetTop)
		$('html,body').scrollTop(offsetTop -200);
	})
	//取消事件
	$('.cancel').click(function() {
		$(".shadow").hide();
		$("body").css({
		    'overflow':'auto',
		    'position': 'static',
		    'top': 'auto',
		});
		var offsetTop = $('.register').offset().top
		console.log(offsetTop)
		$('html,body').scrollTop(offsetTop -200);
	})
	var linkTitle2 = '期待每一次练习，遇见每一次进步';
	var linkUrl = location.href.split('#')[0];
	var poster = 'https://www.artapp.cn/ArtAppInst2/logo.jpg';
	var linkTitle = '期待每一次练习，遇见每一次进步';
	var linkDesc = '动动手指，注册artapp，立即体验最赞最高效的艺术学习';
	/*sercice(sUrl.getSign,function(data) {
		var appId = data.body.appId;
		var noncestr = data.body.noncestr;
		var signature = data.body.signature;
		var timestamp = data.body.timestamp;
		wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp, 
            nonceStr: noncestr, 
            signature: signature,
            jsApiList: [
                'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'
            ]
		});
	   wx.ready(function () {
		    wx.onMenuShareTimeline({
				title: linkTitle2,
				link: linkUrl,
				imgUrl: poster,
				success: function () { 
				
				},
				cancel: function () { 
				}
		    });	
		    wx.onMenuShareAppMessage({
			    title: linkTitle,
			    desc: linkDesc, 
			    link: linkUrl, 
			    imgUrl: poster, 
			    success: function () { 
			    },
			    cancel: function () { 
			    }
			});
			wx.onMenuShareQQ({
			    title: linkTitle,
			    desc: linkDesc, 
			    link: linkUrl, 
			    imgUrl: poster, 
			    success: function () { 
			    },
			    cancel: function () { 
			    }
			});
			wx.onMenuShareWeibo({
			    title: linkTitle,
			    desc: linkDesc, 
			    link: linkUrl, 
			    imgUrl: poster, 
			    success: function () { 
			    },
			    cancel: function () { 
			    }
			});
			wx.onMenuShareQZone({
			    title: linkTitle,
			    desc: linkDesc, 
			    link: linkUrl, 
			    imgUrl: poster, 
			    success: function () { 
			    },
			    cancel: function () { 
			    }
			});
	   })
	},{
		"url": location.href.split('#')[0]
	})*/
})

function changeNoticeType(span){
	$('.spanSechduRadio').find('input').removeProp('checked');
	$('.spanSechduRadio').find('input').attr('ischeck',false);
	$('.spanSechduRadio').find('img').attr('src',path1 + '/h5/register/img/close.png');
	
	$(span).find('img').attr('src',path1 + '/h5/register/img/open.png');
	$(span).find('input').prop('checked',true);
	$(span).find('input').attr('ischeck',true);
	
}
//倒计时
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
//确认事件
function conFirm(obj){
	location.href = "http://dwz.cn/2M5IJ4";
}