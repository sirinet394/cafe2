<template>

    <div class="row mb-2">
            <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary-emphasis">ร้านที่ {{ i+1 }} </strong>
                  <h3 class="mb-0">{{n.name}}</h3>
                  <div class="mb-1 text-body-secondary">ราคาต่อโต๊ะ {{n.price}} บาท</div>
                  <p class="card-text mb-auto">{{n.text_box}}</p>
                  
                  <div style="margin-bottom: 30px;">
                  <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
                   กดดูรายละเอียดเพิ่มเติม
                    <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
                 </RouterLink>
                </div>     
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
                  style="margin: 15px;" >
                    <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
                  </svg>
                </div>
              </div>
            </div>
    
          
        </div>
    
    </template>
    
    <script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue';
    
    
    
   const travelList=ref([
       {name: 'ร้านThaKham Café  ',  price:200, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Qtle-01UUe_gsI-0VKVi4KaXqXM_FotcQ&usqp=CAU", quantity: 0 ,
        text_box:'ร้านเปิดทุกวัน08.00 – 20.00 น. '
        }, 
    
      {name:'ร้าน Tham ma da  (ไม่) ธรรมดา',  price:200, img:"https://www.lookbook.in.th/wp-content/uploads/2017/06/IMG_3578-copy-1050x700.jpg", quantity: 0 ,
        text_box:'ร้านเปิดบริการทุกวัน (เว้นวันจันทร์) วันอังคาร และ วันอาทิตย์ เวลา 11.00 น. -17.00 น. วันพุธ – เสาร์ เวลา11.00 น. -19.00'
        },
      
      {name:'ร้านHazel’s Ice Cream Parlor and Fine Drinks',      price:200, img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-Z-s72uZLcl7b3Xba1u1-gdMiooKQubZRMZhNK3HrPXK7oVbH", quantity: 0 ,
        text_box:'ร้านเปิด9.00น.-16.00น.'
        },
    
      {name:'ร้านFlock Dessert Bar & Bistro',     price:200, img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWF3PP9LCPfcR3LEDV8h4We-Y66zv1B-69Mx7uMYzbMQS-C2RK", quantity: 0 ,
        text_box:'ร้านเปิด8.00น.-18.00น.'
        },
    
      {name:'ร้านTAAN Organic Café',    price:200, img:"https://readthecloud.co/wp-content/uploads/2017/06/living-cafe-taan-4.jpg", quantity: 0 ,
        text_box:'ร้านเปิด8.00น.-18.00น.'
        },
    
      {name:'ร้านSeven',  price:200,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxsnJ_2bepqgEFfMTNGF6TDypoXNg4b-W65anSpun8SkyIDvF", quantity: 0 ,
        text_box:'ร้านเปิดบริการทุกวัน (เว้นวันอังคาร) เวลา 10.00 น. – 18.00 น.'
        },
    
      {name:'ร้านMoon cafe and entery',      price:200, img:"https://img.wongnai.com/p/400x0/2020/03/09/8c777aa77ef6497aade2cf90853d8b7a.jpg", quantity: 0 ,
        text_box:'ร้านเปิด07:00 - 16:00 น.'
        },
    
      {name:'ร้านMao Coffee',     price:200, img:"https://travelalotthailand.files.wordpress.com/2017/11/cover9.jpg", quantity: 0 ,
        text_box:'ร้านเปิด07.00น.-18.00น.'
        },
    ])
    
    </script>
