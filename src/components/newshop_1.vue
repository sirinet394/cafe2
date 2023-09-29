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
{name: 'ร้านThaKham Café  ',  price:200, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Qtle-01UUe_gsI-0VKVi4KaXqXM_FotcQ&usqp=CAU", quantity: 0 ,
        text_box:'ร้านเปิดทุกวัน08.00 – 20.00 น. '
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
