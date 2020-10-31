import Vue from 'vue';
import Router from 'vue-router';
import Completed from '@/components/Completed';
import UserGuide from '@/components/UserGuide';
import Pending from '@/components/Pending';
import Config from '@/components/Config';
import SearchRecords from '@/components/SearchRecords';
import Register from '@/components/Register';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Completed',
      component: Completed,
    },
    {
      path: '/user',
      name: 'UserGuide',
      component: UserGuide,
    },
    {
      path: '/pending',
      name: 'Pending',
      component: Pending,
    },
    {
      path: '/config',
      name: 'Config',
      component: Config,
    },
    {
      path: '/search',
      name: 'SearchRecords',
      component: SearchRecords,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
