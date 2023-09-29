<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 25rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาโต๊ะ : {{n.price}}</p>
          <h6>***จำกัด 5 คนต่อ 1 โต๊ะ***</h6>

          <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> จองโต๊ะ </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
{name:'ร้าน Tham ma da  (ไม่) ธรรมดา',  price:200, img:"https://www.lookbook.in.th/wp-content/uploads/2017/06/IMG_3578-copy-1050x700.jpg", quantity: 0 ,
        text_box:'ร้านเปิดบริการทุกวัน (เว้นวันจันทร์) วันอังคาร และ วันอาทิตย์ เวลา 11.00 น. -17.00 น. วันพุธ – เสาร์ เวลา11.00 น. -19.00'
        }])

</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>
