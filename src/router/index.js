import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/MainPage.vue'
import Newcard from '../components/NewCard.vue'

import newshop_1 from '../components/newshop_1.vue';
import newshop_2 from '../components/newshop_2.vue';
import newshop_3 from '../components/newshop_3.vue';
import newshop_4 from '../components/newshop_4.vue';
import newshop_5 from '../components/newshop_5.vue';
import newshop_6 from '../components/newshop_6.vue';
import newshop_7 from '../components/newshop_7.vue';
import newshop_8 from '../components/newshop_8.vue';


const shopRoutes = [
  { name: 'news_1', component: newshop_1, shop: 'ร้านThaKham Café' },
  { name: 'news_2', component: newshop_2, shop: 'ร้าน Tham ma da  (ไม่) ธรรมดา' },
  { name: 'news_3', component: newshop_3, shop: 'ร้านHazel’s Ice Cream Parlor and Fine Drinks'},
  { name: 'news_4', component: newshop_4, shop: 'ร้านFlock Dessert Bar & Bistro'},
  { name: 'news_5', component: newshop_5, shop: 'ร้านTAAN Organic Café'},
  { name: 'news_6', component: newshop_6, shop: 'ร้านSeven'},
  { name: 'news_7', component: newshop_7, shop: 'ร้านMoon cafe and entery'},
  { name: 'news_8', component: newshop_8, shop: 'ร้านMao Coffee'},
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
