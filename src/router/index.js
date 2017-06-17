import Vue from 'vue';
import Router from 'vue-router';
import videoList from '@/components/video-list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video-list',
      component: videoList
    }
  ]
});
