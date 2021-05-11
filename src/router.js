import Vue from 'vue'
import Router from 'vue-router'
import schedule from './components/schedule.vue'
Vue.use(Router)

export const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: home
        // },
        {
            path: '/schedule',
            name: 'schedule',
            component: schedule
        },
        // {
        //     path: '/gig/edit/:gigId?',
        //     name: 'gigEdit',
        //     component: gigEdit
        // },
        // {
        //     path: '/gig/:gigId/details',
        //     name: 'gigDetails',
        //     component: gigDetails
        // },
        // {
        //     path: '/gig/:gigId/checkout',
        //     name: 'checkout',
        //     component: checkout
        // },
        // {
        //     path: '/login',
        //     name: 'login-signup',
        //     component: loginSignup
        // },
        // {
        //     path: '/user/:userId/Profile',
        //     name: 'user-profile',
        //     component: userProfile
        // }

    ]
})
