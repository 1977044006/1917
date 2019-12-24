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
                  // console.log(jsonArr.json2);
                  
                  // var results = '';
                  // $.each(jsonArr,function (index,item){
                  //       results += `<div class="goods" code="${item.code}"><img src="${item.imgurl}" alt=""><p>${item.price}</p><h3>${item.title}</h3><div>加入购物车</div></div>`;
                  // });
                  // $('.goodsList').html(results);
                  
                  function c_fn6(){
                        var c_arr1=jsonArr.json1;
                        var c_results1=''
                              $.each(c_arr1,function(index,item){
                             c_results1+=`<li>
                              <a href="">
                                    <div class="c_container3_img"><img src="${item.imgurl}" alt=""></div>
                                    <div>
                                          <div class="c_title">${item.title}</div>
                                          <p>
                                                ${item.price元}
                                          </p>
                                    </div>
                              </a>
                        </li>`
                        });
                        $('.c_nav_menu .c_container3 ul').html(c_results1);  
                  }
                  c_fn6();

                  function c_fn4() {//dalunbotu
                        var c_arr2=jsonArr.json2;
                        var c_results2 = '';
                        $.each(c_arr2,function(index,item){
                              c_results2+=`<img src="${item.imgurl}" alt="">`
                        });
                        $('.c_nav_cen div').html(c_results2);  

                  }
                  c_fn4();

                  function c_fn4a(){//自动轮播
                        var c_timer1;
                        var index=0;
                        $('.c_nav_cen div img').eq(index).css('z-index',3);
                        $('.ulin li').eq(index).css('backgroundColor','greenyellow');
                        function fn(){
                              clearInterval(c_timer1);
                              c_timer1=setInterval(function(){
                                    $('.c_nav_cen div img').css('z-index',0);
                                    $('.ulin li').css('backgroundColor','');
                                    index++;
                                    if(index>=$('.c_nav_cen div img').length){
                                          index=0;
                                    }
                                    $('.c_nav_cen div img').eq(index).css('z-index',3);
                                    $('.ulin li').eq(index).css('backgroundColor','greenyellow');
                              },2000)
                        }
                        fn();

                        $('.c_nav_cen ul li').click(function(){
                              clearInterval(c_timer1);
                              index=$(this).index();
                              $('.c_nav_cen div img').css('z-index',1);
                              $('.c_nav_cen div img').eq(index).css('z-index',3);
                              $('.c_nav_cen ul li').css('backgroundColor','');
                              $(this).css('backgroundColor','greenyellow');
                              index=$(this).index();
                              fn();
                        })

                        $('.c_em_left').click(function(){
                              clearInterval(c_timer1);
                              index=index-1;
                              if(index<0){
                                    index=4;
                              }
                        fn1();
                        })
                        $('.c_em_right').click(function(){
                              clearInterval(c_timer1);
                              index=index+1;
                              if(index>4){
                                    index=0;
                              }
                        fn1();
                        })

                        function fn1(){
                              $('.c_nav_cen div img').css('z-index',1);
                              $('.c_nav_cen div img').eq(index).css('z-index',3);
                              $('.c_nav_cen ul li').css('backgroundColor','');
                              $('.c_nav_cen ul li').eq(index).css('backgroundColor','greenyellow');
                              fn();
                        }
                  }

                  c_fn4a();

                  function c_fn5(){
                        var c_arr3=jsonArr.json3;
                        var c_results3 = '';
                        $.each(c_arr3,function(index,item){
                              // console.log(item.imgurl);
                              c_results3+=`<li>
                              <a href="">
                                    <div>
                                          <img src="${item.imgurl}" alt="">
                                    </div>
                                    <p>${item.title}</p>
                                    <h4>${item.price}元</h4>
                              </a>
                        </li>`
                        });
                        $('.c_row1_right ul').html(c_results3);  
                  }
                  c_fn5();

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
      $('.c_header_nav').mouseenter(function(){
            $('.c_nav_menu').slideDown( 500 , 'swing' , function (){ } );
      })
      $('.c_header_nav').on('mouseleave','.c_ula',function(){
            $('.c_nav_menu').slideUp( 200 , 'swing' , function (){ } );
      })
}
c_fn3();


