import { createRouter, createWebHistory } from 'vue-router';

import EndPointList from './pages/EndPointList.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/api' },
      { path: '/api', component: EndPointList }
    ]
  });
  
  export default router;