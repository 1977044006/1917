//header头部
$('.x-spread').bind({
    mouseenter: function (){
        $(this).css('background','#000')
        $(this).siblings().css('display','block')
    }
})
$('.x-leave').bind({
    mouseleave: function (){
        $('.x-spread').css('background','#333')
        $('.x-active').css('display','none')
    }
})
$('.x-console').bind({
    mouseenter:function(){
        $(this).css('background','#000')
        $('.x-console-serve').css('display','block')
    },
    mouseleave: function (){
        $(this).css('background','#333')
        $('.x-console-serve').css('display','none')
     }
})

//点击按钮出现图片事件
$('.x-threebtn div').click(function(){
    $(this).addClass('x-activing').siblings('div').removeClass('x-activing');
    var index_temp=$(this).index();  //点击获取当前的index
    $('.x-banner-common').eq(index_temp).addClass('x-banner-show').siblings('.x-banner-common').removeClass('x-banner-show');
    index = index_temp;
})


//返回顶部效果
var backtop=document.querySelector('.x-backtop');
var scrollT=document.body.scrollTop||document.documentElement.scrollTop;
var timer;
var speed=0;

//scrollT>=300,按钮出现
window.onscroll=function(){
    var scrollT=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollT>=300){
        backtop.style.display='block';
    }else{
        backtop.style.display='none';
    }
};

//点击事件
backtop.onclick=function(){
    var scrollT=document.body.scrollTop||document.documentElement.scrollTop;
    timer=setInterval(() => {
    scrollT-=50;
    if(scrollT<=0){
        clearInterval(timer);
        scrollT=0;
    }
    document.body.scrollTop=scrollT;
    document.documentElement.scrollTop=scrollT;
}, 5);
}

//轮播定时器，鼠标移入移出事件
var index = 0;
var timer='';
var threebtn=$('.x-threebtn div');

//轮播图计时器效果
timer=setInterval(function(){
    threebtn.eq(index).click();
    index++;
    if(index==threebtn.length){
        index=0;
    }
},2000);


var bannercommons=$('.x-banner .x-banner-common');
bannercommons.mouseenter(function(){
    clearInterval(timer);
});
bannercommons.mouseleave(function(){
    timer=setInterval(function(){
        threebtn.eq(index).click();
        index++;
        if(index==threebtn.length){
            index=0;
        }
    },2000);
});

















