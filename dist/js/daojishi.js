"use strict";var c_count_down1=document.querySelector(".c_count_down1"),c_count_down2=document.querySelector(".c_count_down2"),c_count_down3=document.querySelector(".c_count_down3");setInterval(function(){var e=new Date("2019/12/27 18:00:00"),n=new Date,t=e.getTime(),c=n.getTime(),o=(parseInt((t-c)/864e5),16-n.getHours()),u=59-n.getMinutes(),_=59-n.getSeconds();function r(e){return e<10?"0"+e:e}c_count_down1.innerText=r(o),c_count_down2.innerText=r(u),c_count_down3.innerText=r(_)},1e3);