
// 判断购物车是否有数据
// console.log(localStorage.getItem('goods'));
if (localStorage.getItem('goods')) {
      //本地数据  ["abc2","abc6","abc8","abc1"]
      var codeArr = JSON.parse(localStorage.getItem('goods')).code;
   
//     console.log(codeArr);
    
      // 加载数据
      function loadData1(){
            // 加载数据
            $.ajax({
                url: './data/c_header_app1.json',
                type: 'get',
                cache: false,
                dataType: 'json',
                success: function (jsonArr){
                    var results = '';
                    var c_price=0;
                    var item1;
                    var c_cart_bar_right1=document.querySelector('.c_cart_bar_right1');
                  //   console.log( c_cart_bar_right1.innerText);
                    var jsonArr=jsonArr.json16;
                    $.each(codeArr,function (i,code){// code = 'abc2'
                        $.each(jsonArr,function (index,item){// item = {...,code:'abc8'}
                            if (code == item.code) {// 判断是否为购物车的数据
                                results += `<div class="item_table" code="${item.code}">
                                <div class="col_check_box2">
                                    <input type="checkbox" class="select_all2">
                                </div>
                                <div class="col_img2">
                                      <img src="${item.imgurl}" alt="">
                                </div>
                                <div class="col_name2">
                                      ${item.title}
                                </div>
                                <div class="col_price2">
                                      ${item.price}元
                                </div>
                                <div class="col_mun2">
                                      1
                                </div>
                                <div class="col_total2">
                                      小计
                                </div>

                                <div class="col_action2">
                                      <span>x</span>
                                </div>
                          </div>`;
                        c_price=Number(c_price)
                        item1=Number(item.price)
                        c_price+=item1;
                        
                            }
                        });

                    });
                  $('.list_body').append(results);
                  
                  c_cart_bar_right1.innerText=c_price;
                }
            });
        }
        loadData1();
  
      // 删除购物车商品
      function removeGoods(){
            // 删除购物车商品
            $('.list_body').on('click','.item_table .col_action2 span',function (){
                // 获取要删除商品的编号
                var code = $(this).parent().parent().attr('code');
                  // console.log(code);
                  
                // 删除数组元素  pop  unshift  splice(index,1)
                  var c_cart_bar_right1=document.querySelector('.c_cart_bar_right1');

                  $.each(codeArr,function (index,item){
                        if (code == item) {
                              codeArr.splice(index,1);//删除指定下标的数组元
                              return false;
                        }
                  });
                  if (codeArr.length == 0) {
                        // c_cart_bar_right1.innerText=0;
                        c_cart_bar_right1.parentNode.parentNode.remove(c_cart_bar_right1.parentNode)
                        console.log(codeArr.length);
                        
                        $('.list_body').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
                        localStorage.removeItem('goods');

                 
                  } else {
                        // 更新本地存储数据
                        var jsonStr = JSON.stringify({"code":codeArr});
                        localStorage.setItem('goods',jsonStr);



                        $.ajax({
                              url: './data/c_header_app1.json',
                              type: 'get',
                              cache: false,
                              dataType: 'json',
                              success: function (jsonArr){
                                  var results = '';
                                  var c_price=0;
                                  var item1;
                                  var c_cart_bar_right1=document.querySelector('.c_cart_bar_right1');
                                //   console.log( c_cart_bar_right1.innerText);
                                  var jsonArr=jsonArr.json16;
                                  $.each(codeArr,function (i,code){// code = 'abc2'
                                      $.each(jsonArr,function (index,item){// item = {...,code:'abc8'}
                                          
                                    
                                      if (code == item.code) {// 判断是否为购物车的数据
                                                c_price=Number(c_price)
                                                item1=Number(item.price)
                                                c_price+=item1;  
                                                c_cart_bar_right1.innerText=c_price;
                                                
                                                console.log(code);
                                                   
                                          }
                                          // else{
                                          //       c_cart_bar_right1.innerText=0; 
                                          // }
                                      });
              
                                  });
                                $('.list_body').append(results);
                                
                               }
                         });
                        
                  }
                // 删除页面中的节点
                $(this).parent().parent().remove();
                  
                alert('商品成功移出购物车！');
                
            })
      }
      removeGoods()
  
  } else {
      // var c_cart_bar_right1=document.querySelector('.c_cart_bar_right1');
      $('.list_body').append('<li style="line-height: 80px; text-align: center; color: #999;">购物车暂无数据！</li>');
      // c_cart_bar_right1.innerText='0';  
  }
  