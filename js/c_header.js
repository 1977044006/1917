$(function(){
      $('.c_app1').mouseenter(function(){
           $('.c_app2').css('display','block')
      //     $('.c_app2').slideDown(10, 'swing' , function (){  } );


      })
      $('.c_app1').mouseleave(function(){
            $('.c_app2').css('display','none')
      })
})

$(function(){
      $('.c_topbar_cart').mouseenter(function(){
            $('.c_topbar_cart a').css('background','white')
            $('.c_cart').css('display','block')
      })
      $('.c_topbar_cart').mouseleave(function(){
            $('.c_cart').css('display','none')
            $('.c_topbar_cart a').css('background','')
      })
})