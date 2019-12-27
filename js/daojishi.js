var c_count_down1=document.querySelector('.c_count_down1');
var c_count_down2=document.querySelector('.c_count_down2');
var c_count_down3=document.querySelector('.c_count_down3');

setInterval(function (){
    var d1 = new Date('2019/12/27 18:00:00');//倒计时结束时间
    var d2 = new Date();//当前时间

    var time1 = d1.getTime();//1970到2020/1/1的毫秒数
    // console.log(time1);
    
    var time2 = d2.getTime();//1970到当前的毫秒数
    // console.log(time2 );
    
    var times = time1 - time2;//当前到2020.1.1的毫秒数
   
    
    var days = parseInt( times / (1000*60*60*24) );//剩余天数
 
 
    var hours = 16 - d2.getHours();
   
   
    var minutes = 59 - d2.getMinutes();

    var seconds = 59 - d2.getSeconds();

    // var millis = 999 - d2.getMilliseconds();

    function addo(n){
        if(n < 10) {
        return '0' + n;  
        }else{
        return n;
        }
    }

    c_count_down1.innerText =addo(hours);
    c_count_down2.innerText =addo(minutes);
    c_count_down3.innerText =addo(seconds);
},1000);