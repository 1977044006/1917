"use strict";function loadData(){$.ajax({url:"./data/c_header_app1.json",type:"get",dataType:"json",cache:!1,success:function(e){function n(){var n=e.json1,t="";$.each(n,function(n,c){t+='<li>\n                                    <a href="">\n                                          <div class="c_container3_img"><img src="'.concat(c.imgurl,'" alt=""></div>\n                                          <div>\n                                                <div class="c_title">').concat(c.title,"</div>\n                                                <p>\n                                                      ").concat(c.price,"元起\n                                                </p>\n                                          </div>\n                                    </a>\n                              </li>")}),$(".c_nav_menu .c_container3 ul").html(""),$(".c_nav_menu .c_container3 ul").html(t)}function c(){var n=e.json15,t="";$.each(n,function(n,c){t+='<li>\n                                    <a href="">\n                                          <div class="c_container3_img"><img src="'.concat(c.imgurl,'" alt=""></div>\n                                          <div>\n                                                <div class="c_title">').concat(c.title,"</div>\n                                                <p>\n                                                      ").concat(c.price,"元起\n                                                </p>\n                                          </div>\n                                    </a>\n                              </li>")}),$(".c_nav_menu .c_container3 ul").html(""),$(".c_nav_menu .c_container3 ul").html(t)}var t,o,i,a,l,r,s,_,u,h;function m(){clearInterval(i),i=setInterval(function(){$(".c_nav_cen div img").css("z-index",0),$(".c_nav_cen ul li").css("backgroundColor",""),++a>=$(".c_nav_cen div img").length&&(a=0),$(".c_nav_cen div img").eq(a).css("z-index",3),$(".c_nav_cen ul li").eq(a).css("backgroundColor","greenyellow")},2e3)}function f(){$(".c_nav_cen div img").css("z-index",1),$(".c_nav_cen div img").eq(a).css("z-index",3),$(".c_nav_cen ul li").css("backgroundColor",""),$(".c_nav_cen ul li").eq(a).css("backgroundColor","greenyellow"),m()}function v(){var n=e.json12,t="";$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_box_right .c_ul_b").html="",$(".c_box_right .c_ul_b").html(t),$(".c_controls3_dianshi a").css({"border-bottom":"",color:""}),$(".c_controls3_remne a").css({"border-bottom":"2px solid #ff6700",color:"#ff6700"})}function d(){var n=e.json14,t="";$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul_4").html="",$(".c_ul_4").html(t)}function g(){var n=e.json12,t="";$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul5").html="",$(".c_ul5").html(t),$(".c_controls5_b a").css({"border-bottom":"",color:""}),$(".c_controls5_a a").css({"border-bottom":"2px solid #ff6700",color:"#ff6700"})}function p(){var n=e.json14,t="";$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul6").html="",$(".c_ul6").html(t)}n(),c(),$(".c_header_nav").on("mouseenter",".c_ula",function(){$(".c_nav_menu").stop().slideDown(300,"swing",function(){})}),$(".c_header_nav ").on("mouseenter",".c_ula li",function(){"小米手机"!=$(this).text()&&"电视"!=$(this).text()&&"智能硬件"!=$(this).text()&&"家电"!=$(this).text()||n(),"笔记本"!=$(this).text()&&"路由器"!=$(this).text()&&"Redmi红米"!=$(this).text()||c()}),$(".c_header_nav").on("mouseleave",".c_ula",function(){$(".c_nav_menu").stop().slideUp(200,"swing",function(){})}),t=e.json2,o="",$.each(t,function(n,c){o+='<img src="'.concat(c.imgurl,'" alt="">')}),$(".c_nav_cen div").html(o),a=0,$(".c_nav_cen div img").eq(a).css("z-index",3),$(".c_nav_cen ul li ").eq(a).css("backgroundColor","greenyellow"),m(),$(".c_nav_cen ul li").click(function(){clearInterval(i),a=$(this).index(),$(".c_nav_cen div img").css("z-index",1),$(".c_nav_cen div img").eq(a).css("z-index",3),$(".c_nav_cen ul li").css("backgroundColor",""),$(this).css("backgroundColor","greenyellow"),a=$(this).index(),m()}),$(".c_em_left").click(function(){clearInterval(i),--a<0&&(a=4),f()}),$(".c_em_right").click(function(){clearInterval(i),4<(a+=1)&&(a=0),f()}),function(){var n=e.json3,t="";$.each(n,function(n,c){t+='<li>\n                              <a href="">\n                                    <div>\n                                          <img src="'.concat(c.imgurl,'" alt="">\n                                    </div>\n                                    <p>').concat(c.title,"</p>\n                                    <h4>").concat(c.price,"元</h4>\n                              </a>\n                        </li>")}),$(".c_row1_right ul").html(t);var c,o=4*($(".c_row1_right ul li").width()+14),i=document.querySelector(".c_row1_right"),a=0;!function n(){clearInterval(c),c=setInterval(function(){2*o<=(a+=o)?(a=0,i.scrollLeft=0):i.scrollLeft=a,$(".c_controls1_a").click(function(){clearInterval(c),i.scrollLeft=a-o,setTimeout(function(){clearInterval(c),n()},1e3)}),$(".c_controls1_b").click(function(){clearInterval(c),i.scrollLeft=2*o<a?0:a+o,setTimeout(function(){clearInterval(c),n()},1e3)})},1e3)}()}(),l=e.json7,r="",$.each(l,function(n,c){r+='<li><a href=""><img src="'.concat(c.imgurl,'" alt=""></a></li>')}),$(".c_but_right ul").html(r),$(".c_nav_left").mouseenter(function(){$(".c_nav_leftb").css("display","block")}),$(".c_nav_left").mouseleave(function(){$(".c_nav_leftb").css("display","none")}),$(".c_nav_lefta ul").on("mouseenter","li",function(){if(0==$(this).index()||3==$(this).index()){var n=e.json8,t="";$.each(n,function(n,c){t+='<li>\n                                          <a href="">\n                                                <img src="'.concat(c.imgurl,'" alt="">\n                                                <span>').concat(c.title,"</span>\n                                          </a>\n                                    </li>")}),$(".c_nav_leftb ul").html="",$(".c_nav_leftb ul").html(t)}if(1==$(this).index()||4==$(this).index()){var c=e.json9,o="";$.each(c,function(n,c){o+='<li>\n                                          <a href="">\n                                                <img src="'.concat(c.imgurl,'" alt="">\n                                                <span>').concat(c.title,"</span>\n                                          </a>\n                                    </li>")}),$(".c_nav_leftb ul").html="",$(".c_nav_leftb ul").html(o)}if(2==$(this).index()||5==$(this).index()){var i=e.json10,a="";$.each(i,function(n,c){a+='<li>\n                                          <a href="">\n                                                <img src="'.concat(c.imgurl,'" alt="">\n                                                <span>').concat(c.title,"</span>\n                                          </a>\n                                    </li>")}),$(".c_nav_leftb ul").html="",$(".c_nav_leftb ul").html(a)}}),s=e.json11,_="",$.each(s,function(n,c){_+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_box_right .c_box_right_ul").html(_),v(),$(".c_controls3_remne").mouseenter(function(){v()}),$(".c_controls3_dianshi").mouseenter(function(){var n,t;n=e.json13,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_box_right .c_ul_b").html="",$(".c_box_right .c_ul_b").html(t),$(".c_controls3_remne a").css({"border-bottom":"",color:""}),$(".c_controls3_dianshi a").css({"border-bottom":"2px solid #ff6700",color:"#ff6700"})}),d(),$(".c_controls4_a").mouseenter(function(){d()}),$(".c_controls4_b").mouseenter(function(){var n,t;n=e.json13,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul_4").html="",$(".c_ul_4").html(t)}),$(".c_controls4_c").mouseenter(function(){var n,t;n=e.json12,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul_4").html="",$(".c_ul_4").html(t)}),g(),$(".c_controls5_a").mouseenter(function(){g()}),$(".c_controls5_b").mouseenter(function(){var n,t;n=e.json13,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul5").html="",$(".c_ul5").html(t),$(".c_controls5_a a").css({"border-bottom":"",color:""}),$(".c_controls5_b a").css({"border-bottom":"2px solid #ff6700",color:"#ff6700"})}),p(),$(".c_controls6_a").mouseenter(function(){p()}),$(".c_controls6_b").mouseenter(function(){var n,t;n=e.json12,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul6").html="",$(".c_ul6").html(t)}),$(".c_controls6_c").mouseenter(function(){var n,t;n=e.json13,t="",$.each(n,function(n,c){t+='<li>\n                             <a href="">\n                                   <div><img src="'.concat(c.imgurl,'" alt=""></div>\n                                   <p>').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                             </a>\n                       </li>")}),$(".c_ul6").html="",$(".c_ul6").html(t)}),u=e.json16,h="",$.each(u,function(n,c){h+='<li code="'.concat(c.code,'">\n                             <a href="JavaScript:void(0)">\n                                   <div class="c_container7">\n                                         <img src="').concat(c.imgurl,'" alt="">\n                                   \n                                   <p class="c_container7p">').concat(c.title,"</p>\n                                   <h4>").concat(c.price,"元</h4>\n                                   <h5>\n                                         加入购物车 \n                                   </h5>\n                             </div> \n                             </a>\n                       </li>")}),$(".c_ul7").html(h),$(".c_spana"),$(".c_ema"),$(".c_ul7").on("click","li a h5",function(){var n,c,t,o,i,a=$(this).parent().parent().parent().attr("code");if(localStorage.getItem("goods")){var e=JSON.parse(localStorage.getItem("goods")).code;n=JSON.parse(localStorage.getItem("goods")).code,c=JSON.stringify({code:n}),t=$(".c_spana"),o=$(".c_ema"),i=JSON.parse(c).code.length,t.text(i+1),o.text(i+1)}else e=[];e.push(a);var l=JSON.stringify({code:e});localStorage.setItem("goods",l),alert("成功加入购物车！")})}})}function c_fn2(){$(".c_app1").mouseenter(function(){$(".c_app2").css("display","block")}),$(".c_app1").mouseleave(function(){$(".c_app2").css("display","none")})}function c_fn1(){$(".c_topbar_cart").mouseenter(function(){$(".c_topbar_cart a").css("background","white"),$(".c_cart").css("display","block")}),$(".c_topbar_cart").mouseleave(function(){$(".c_cart").css("display","none"),$(".c_topbar_cart a").css("background","")})}loadData(),c_fn2(),c_fn1();