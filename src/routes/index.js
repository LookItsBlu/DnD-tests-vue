import Vue from 'vue';
import Router from 'vue-router';
import SmoothDnD from '../components/SmoothDnD';
import Dragula from '../components/Dragula';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/smoothdnd',
      name: 'SmoothDnD',
      component: SmoothDnD,
    },
    {
      path: '/dragula',
      name: 'Dragula',
      component: Dragula,
    },
  ],
});
