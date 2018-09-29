import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Edit from '@/components/Edit'
import VuxDemo from '@/components/VuxDemo'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/edit',
            name: 'edit',
            component: Edit
        },
        {
            path: '/vuxDemo',
            name: 'vuxDemo',
            component: VuxDemo
        }
    ]
})
