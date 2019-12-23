// import {c_headerShop} from './c_header_shop.js';
// import {c_headerApp} from './c_header_app.js';

// c_headerShop();
// c_headerApp();

function loadData(){
    
      // 加载数据
      //  console.log(1);
      $.ajax({
            url: './data/c_header_app1.json',
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (jsonArr){
                  //  console.log(jsonArr.json2);
                  
                  // var results = '';
                  // $.each(jsonArr,function (index,item){
                  //       results += `<div class="goods" code="${item.code}"><img src="${item.imgurl}" alt=""><p>${item.price}</p><h3>${item.title}</h3><div>加入购物车</div></div>`;
                  // });
                  // $('.goodsList').html(results);

                  // function c_fn4() {
                  //       var c_arr2=jsonArr.json2;
                  //       var c_results1 = '';
                  //       $.each(c_arr2,function(index,item){
                  //             c_results1+=`<img src="${c_arr2.item}" alt="">`
                  //       })
                  //       $('.c_nav_cen div').html(c_results1);
                  // }
                  // c_fn4();

            }
      });
      
}
loadData();




function c_fn2(){
      $('.c_app1').mouseenter(function(){
           $('.c_app2').css('display','block')
      //     $('.c_app2').slideDown(10, 'swing' , function (){  } );
      })
      $('.c_app1').mouseleave(function(){
            $('.c_app2').css('display','none')
      })
} 
c_fn2();

function c_fn1(){
      $('.c_topbar_cart').mouseenter(function(){
            $('.c_topbar_cart a').css('background','white')
            $('.c_cart').css('display','block')
      })
      $('.c_topbar_cart').mouseleave(function(){
            $('.c_cart').css('display','none')
            $('.c_topbar_cart a').css('background','')
      })
}
c_fn1();

function c_fn3(){
      $('.c_header_nav ul').on('mouseenter','li',function(){
            $('.c_nav_menu').slideDown( 500 , 'swing' , function (){ } );

      })
      
      $('.c_nav_menu').mouseenter(function(){
            $('.c_nav_menu').css('dispaly','block');
      })
      $('.c_nav_menu').mouseover(function(){
            $('.c_nav_menu').css('dispaly','block');
      })
      $('.c_nav_menu').mouseleave(function(){
            $('.c_nav_menu').slideUp( 200 , 'swing' , function (){ } );
      })
      // $('.c_header_nav').on('mouseleave','ul',function(){
      //       $('.c_nav_menu').slideUp( 200 , 'swing' , function (){ } );
      // })
}
c_fn3();


