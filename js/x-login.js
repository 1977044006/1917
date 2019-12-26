var form=document.querySelector('form');
var user=document.querySelector('.user');
var pass=document.querySelector('.pass');
var erroalert=document.querySelector('.x-erro-alert-write');
var errouser=document.querySelector('.x-erro-alert-user');
var erropass=document.querySelector('.x-erro-alert-pass');

//点击from提交时判断
var form = document.querySelector('form');
var ipts = document.querySelectorAll('.row input');
var tips = document.querySelectorAll('.row span');
var result = [];//保存没有一个输入框的验证结果

function verify(x,reg){
    ipts[x].onblur = function (){//失去焦点时验证
        var val = ipts[x].value.replace(/\s+/g,'');
        // var reg = /^.{2,24}$/g;
        if (reg.test(val)) {
            result[x] = 1;//标记验证成功
        } else {
            result[x] = 0;//标记验证失败
        }
    }
}

var reg1 = /^\w{8,16}$/g;
var reg2 = /^[0-9a-zA-Z]{8,16}$/g;
var reg3 = /^\w{4,22}@[a-z0-9]{1,12}(\.[a-z]{2,3}){1,2}$/g;
var reg4 = /^1[3-9]\d{9}$/g;
var reg5 = /^男|女$/g;
var reg6 = /^.{2,24}$/g;
var regArr = [reg1,reg2,reg3,reg4,reg5,reg6];

for (var i = 0; i < ipts.length; i++){
    verify(i,regArr[i]);
}

// [1,1,1,0,1,1]

form.onsubmit = function (){//表单提交的时候触发此事件
    // 空值判断
    if (!ipts[0].value || !ipts[1].value || !ipts[2].value || !ipts[3].value || !ipts[4].value || !ipts[5].value) {
        alert('输入不能为空');
        return false;
    }

    // 验证每一个输入框是否合法
    for (var index in result){
        if (result[index] == 0) {
            alert('请正确输入！');
            return false;
        }
    }

    // 允许提交
    alert('注册成功！');
}



form.onsubmit=function(){
    //账号和密码提交为空时
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
    if (reg.test(userval)||reg2.test(userval)) {
        alert('格式正确！');
    } else {
        return false;
    }

    //判断密码框
    if (reg3.test(passval)) {
        alert('格式正确！');
    } else {
        return false;
    }

}