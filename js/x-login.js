var form=document.querySelector('form');
var ipts=document.querySelectorAll('form input')
var user=document.querySelector('.user');
var pass=document.querySelector('.pass');
var erroalert=document.querySelector('.x-erro-alert-write');

//点击from提交时判断
form.onsubmit=function(){
    //账号和密码都提交为空时
    if (!user.value || !pass.value) {
        pass.style.border='1px solid #ff6700';
        user.style.border='1px solid #ff6700';
        erroalert.style.display='block';
        erroalert.innerText = '账号或密码错误';
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
        user.style.border='none';
    } else {
        result.push(0);  //账号错了push0
        user.style.border='1px solid #ff6700';
    }

    //判断密码框
    if (reg3.test(passval)) {
        result.push(1);  //账号对了push1
        pass.style.border='none';
    } else {
        result.push(0);  //账号错了push0
        pass.style.border='1px solid #ff6700';
    }

    // 验证每一个输入框是否合法
    for (var i=0; i<result.length; i++){
        if(result[i] == 0){
            erroalert.style.display='block';
            erroalert.innerText = '账号或密码错误';
            return false;
        }
    }

    setCookie('username',user.value,7);
    setCookie('userpass',pass.value,7);
}

$(function() { 
    if (getCookie('username')) {
        user.value = getCookie('username');
        
        $('.x_login1').text('');
        $('.x_login1').text('user.value');
        pass.value = getCookie('userpass');
    }　
});
