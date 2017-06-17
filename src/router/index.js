import Vue from 'vue';
import Router from 'vue-router';
import navigation from '@/components/navigation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navigation',
      component: navigation
    }
  ]
});
