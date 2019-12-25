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
                  
                  //tou bu 切换
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
                                                ${item.price}元起
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
                        $('.c_nav_cen ul li ').eq(index).css('backgroundColor','greenyellow');
                        function fn(){
                              clearInterval(c_timer1);
                              c_timer1=setInterval(function(){
                                    $('.c_nav_cen div img').css('z-index',0);
                                    $('.c_nav_cen ul li').css('backgroundColor','');
                                    index++;
                                    if(index>=$('.c_nav_cen div img').length){
                                          index=0;
                                    }
                                    $('.c_nav_cen div img').eq(index).css('z-index',3);
                                    $('.c_nav_cen ul li').eq(index).css('backgroundColor','greenyellow');
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

                  //小米闪购 轮播图
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

                        
                        // var warp=document.querySelector('.warp');
                        // var inner=document.querySelector('.inner');
                        // con2.innerHTML=con1.innerHTML;
                        // var max = con1.clientWidth;
                        var img1w =($('.c_row1_right ul li').width() + 14)*4;
                        var c_row1_right=document.querySelector('.c_row1_right');
                        // console.log(img1w);
                        var timer;
                        var x=0;
                        function move(){
                              timer = setInterval(function (){
                                    x+=2;
                                    if(x%img1w==0){
                                         clearInterval(timer);
                                         setTimeout(function(){
                                               move();
                                         },3000)
                                    }
                                    if (x>=img1w*2) {
                                          x = 0;
                                          c_row1_right.scrollLeft=0;
                                    }
                                    else{
                                          c_row1_right.scrollLeft=x;
                                          // console.log(c_row1_right.scrollLeft);
                                    }
                              },1);
                              $('c_controls1_a').click(function(){
                                    clearInterval(timer);
                              });
                        }
                        move();
                        

                  }
                  c_fn5();
                 
                  
               



                  function c_fn7(){
                        var c_arr7=jsonArr.json7;
                        var c_results7='';
                        $.each(c_arr7,function(index,item){
                              c_results7+=`<li><a href=""><img src="${item.imgurl}" alt=""></a></li>`
                        })
                        $('.c_but_right ul').html(c_results7)
                  }
                  c_fn7();

                  //da lunbotu zuo
                  function c_fn8(){
                        $('.c_nav_left').mouseenter(function(){
                              $('.c_nav_leftb').css('display','block');
                        })
                        $('.c_nav_left').mouseleave(function(){
                              $('.c_nav_leftb').css('display','none');
                        })
                        
                        $('.c_nav_lefta ul').on('mouseenter','li',function(){
                              if($(this).index()==0||$(this).index()==3){
                                    var c_arr8=jsonArr.json8;
                                    var c_results8='';
                                    $.each(c_arr8,function(index,item){
                                          c_results8+=`<li>
                                          <a href="">
                                                <img src="${item.imgurl}" alt="">
                                                <span>${item.title}</span>
                                          </a>
                                    </li>`;
                                    })
                                    $('.c_nav_leftb ul').html='';
                                    $('.c_nav_leftb ul').html(c_results8);
                              }
                              if($(this).index()==1||$(this).index()==4){
                                    var c_arr9=jsonArr.json9;
                                    var c_results9='';
                                    $.each(c_arr9,function(index,item){
                                          c_results9+=`<li>
                                          <a href="">
                                                <img src="${item.imgurl}" alt="">
                                                <span>${item.title}</span>
                                          </a>
                                    </li>`;
                                    })
                                    $('.c_nav_leftb ul').html='';
                                    $('.c_nav_leftb ul').html(c_results9);
                              }
                              if($(this).index()==2||$(this).index()==5){
                                    var c_arr10=jsonArr.json10;
                                    var c_results10='';
                                    $.each(c_arr10,function(index,item){
                                          c_results10+=`<li>
                                          <a href="">
                                                <img src="${item.imgurl}" alt="">
                                                <span>${item.title}</span>
                                          </a>
                                    </li>`;
                                    })
                                    $('.c_nav_leftb ul').html='';
                                    $('.c_nav_leftb ul').html(c_results10);
                              }
                        
                              
                        })
                        
                        
                  }
                  c_fn8();

                  //shou ji 查看全部
                  function c_fn11(){
                        var c_arr11=jsonArr.json11;
                        var c_results11=''
                              $.each(c_arr11,function(index,item){
                             c_results11+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                           
                        });
                        $('.c_box_right .c_box_right_ul').html(c_results11);  
                  }
                  c_fn11();
                  
                  //热门 电视影音
                  function c_fn12(){
                        var c_arr12=jsonArr.json12;
                        var c_results12='';
                              $.each(c_arr12,function(index,item){
                             c_results12+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_box_right .c_ul_b').html='';  
                        $('.c_box_right .c_ul_b').html(c_results12);
                        $('.c_controls3_dianshi a').css({
                                    'border-bottom':'',
                                    'color': '',
                        });
                        $('.c_controls3_remne a').css({
                              'border-bottom':'2px solid #ff6700',
                              'color': '#ff6700',
                        });
                        
                  }
                  c_fn12();

                  function c_fn13(){
                        var c_arr13=jsonArr.json13;
                        var c_results13='';
                              $.each(c_arr13,function(index,item){
                             c_results13+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_box_right .c_ul_b').html='';  
                        $('.c_box_right .c_ul_b').html(c_results13);
                        $('.c_controls3_remne a').css({
                              'border-bottom':'',
                              'color': '',
                        });
                        $('.c_controls3_dianshi a').css({
                              'border-bottom':'2px solid #ff6700',
                              'color': '#ff6700',
                        });
                  }
                  
                  $('.c_controls3_remne').mouseenter(function(){
                        c_fn12();
                  });
                  $('.c_controls3_dianshi').mouseenter(function(){
                        c_fn13();
                  })


                  //热门 安防 出行
                  function c_fn14(){
                        var c_arr14=jsonArr.json14;
                        var c_results14='';
                              $.each(c_arr14,function(index,item){
                             c_results14+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul_4').html='';  
                        $('.c_ul_4').html(c_results14);
                  }
                  c_fn14();

                  function c_fn15(){
                        var c_arr15=jsonArr.json12;
                        var c_results15='';
                              $.each(c_arr15,function(index,item){
                             c_results15+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul_4').html='';  
                        $('.c_ul_4').html(c_results15);
                  }
                  function c_fn16(){
                        var c_arr16=jsonArr.json13;
                        var c_results16='';
                              $.each(c_arr16,function(index,item){
                             c_results16+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul_4').html='';  
                        $('.c_ul_4').html(c_results16);
                  }
                  $('.c_controls4_a').mouseenter(function(){
                        c_fn14();
                  });

                  $('.c_controls4_b').mouseenter(function(){
                        c_fn16();
                  })
                  $('.c_controls4_c').mouseenter(function(){
                        c_fn15();
                  })
                  
                  //热门 耳机音箱
                  function c_fn17(){
                        var c_arr17=jsonArr.json12;
                        var c_results17='';
                              $.each(c_arr17,function(index,item){
                             c_results17+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul5').html='';  
                        $('.c_ul5').html(c_results17);
                        $('.c_controls5_b a').css({
                                    'border-bottom':'',
                                    'color': '',
                        });
                        $('.c_controls5_a a').css({
                              'border-bottom':'2px solid #ff6700',
                              'color': '#ff6700',
                        });
                        
                  }
                  c_fn17();

                  function c_fn18(){
                        var c_arr18=jsonArr.json13;
                        var c_results18='';
                              $.each(c_arr18,function(index,item){
                             c_results18+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul5').html='';  
                        $('.c_ul5').html(c_results18);
                        $('.c_controls5_a a').css({
                              'border-bottom':'',
                              'color': '',
                        });
                        $('.c_controls5_b a').css({
                              'border-bottom':'2px solid #ff6700',
                              'color': '#ff6700',
                        });
                  }
                  $('.c_controls5_a').mouseenter(function(){
                        c_fn17();
                  });
                  $('.c_controls5_b').mouseenter(function(){
                        c_fn18();
                  })
                  
                  //热门 保护套 充电器
                  function c_fn19(){
                        var c_arr19=jsonArr.json14;
                        var c_results19='';
                              $.each(c_arr19,function(index,item){
                             c_results19+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul6').html='';  
                        $('.c_ul6').html(c_results19);
                  }
                  c_fn19();
                  function c_fn20(){
                        var c_arr20=jsonArr.json12;
                        var c_results20='';
                              $.each(c_arr20,function(index,item){
                             c_results20+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul6').html='';  
                        $('.c_ul6').html(c_results20);
                  }
                  function c_fn21(){
                        var c_arr21=jsonArr.json13;
                        var c_results21='';
                              $.each(c_arr21,function(index,item){
                             c_results21+=`<li>
                             <a href="">
                                   <div><img src="${item.imgurl}" alt=""></div>
                                   <p>${item.title}</p>
                                   <h4>${item.price}元</h4>
                             </a>
                       </li>`
                        });
                        $('.c_ul6').html='';  
                        $('.c_ul6').html(c_results21);
                  }
                  $('.c_controls6_a').mouseenter(function(){
                        c_fn19();
                  });
                  $('.c_controls6_b').mouseenter(function(){
                        c_fn20();
                  })
                  $('.c_controls6_c').mouseenter(function(){
                        c_fn21();
                  })
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



