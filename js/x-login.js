var form=document.querySelector('form');
var ipts=document.querySelectorAll('form input')
var user=document.querySelector('.user');
var pass=document.querySelector('.pass');
var erroalert=document.querySelector('.x-erro-alert-write');
var errouser=document.querySelector('.x-erro-alert-user');
var erropass=document.querySelector('.x-erro-alert-pass');
var errouser2=document.querySelector('.x-erro-alert-user2');
var erropass2=document.querySelector('.x-erro-alert-pass2');


//点击from提交时判断
form.onsubmit=function(){
    //账号和密码都提交为空时
    if (!user.value && !pass.value) {
        erroalert.style.display='block';
        pass.style.border='1px solid #ff6700';
        user.style.border='1px solid #ff6700';
        return false;
    }
    //账号提交为空时
    if (!user.value) {
        errouser.style.display='block';
        user.style.border='1px solid #ff6700';
        return false;
    }
    //密码提交为空时
    if (!pass.value) {
        erropass.style.display='block';
        pass.style.border='1px solid #ff6700';
        return false;
    }
    //账号框正则
    var userval = user.value.replace(/\s+/g,'');//去掉空格
    var reg = /^1[3-9]\d{9}$/g;  //手机号
    var reg2=/^\w{4,22}@[a-z0-9]{1,12}(\.[a-z]{2,3}){1,2}$/g;   //邮箱

    //密码框正则
    var passval = pass.value.replace(/\s+/g,''); //去掉空格
    var reg3=/^[0-9a-zA-Z_]{6,12}$/g;  //6到12个字符，可以是数字、字母(区分大小写),下划线

    //判断账号框
    //分别验证两个输入框为错，出现的情况
    //用一个变量保存两个分别为对和错的情况
    //判断变量最后两个是否为对

    var result=[]; //保存一个空数组
    //判断账号
    if (reg.test(userval)||reg2.test(userval)) {
        result.push(1);  //账号对了push1
    } else {
        errouser2.style.display='block';
        user.style.border='1px solid #ff6700';
        result.push(0);  //账号错了pish0
        return false;
    }

    //判断密码框
    if (reg3.test(passval)) {
        result.push(1);  //账号对了push1
    } else {
        erropass2.style.display='block';
        result.push(0);  //账号错了push0
        return false;
    }

    // 验证每一个输入框是否合法
    for (var index in result){
        if (result[index] == 0) {
            alert('请正确输入账号密码！');
            return false;
        }
    }

    setCookie('username',user.value,7);
    setCookie('userpass',pass.value,7);
}

$(function() { 
    if (getCookie('username')) {
        user.value = getCookie('username');
        pass.value = getCookie('userpass');
    }　
});