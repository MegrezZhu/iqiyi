import Vue from 'vue';
import Router from 'vue-router';
import channels from '@/components/channels';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'channels',
      component: channels
    }
  ]
});
