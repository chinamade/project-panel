import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/pages/login';
import dashBoard from '@/components/pages/dashBoard';
import menuNav from '@/components/common/menuNav';
import noRight from '@/components/pages/noRight';
import page404 from '@/components/pages/page404';

Vue.use(Router);
const routers = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/',
            component: menuNav,
            children: [
                {
                    path: 'noRight',
                    name: 'noRight',
                    component: noRight,
                },
                {
                    path: '/',
                    name: 'index',
                    component: dashBoard,
                },
                {
                    path: 'dashBoard',
                    name: 'dashBoard',
                    component: dashBoard,

                },
                {path: '*', component: page404},
            ],
        }],
});

export default routers;
