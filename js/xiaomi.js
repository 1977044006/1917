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

