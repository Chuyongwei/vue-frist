import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewsPage from './views/homePages/NewsPage'
import HotPage from './views/homePages/HotPage'

import About from './views/About'


Vue.use(Router)

export default new Router({
    linkActiveClass:"active",
    linkExactActiveClass:"exact-active",
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path:"",
                    redirect:"news"
                },
                {
                    // path:"/news",
                    path:"news",
                    component:NewsPage
                },
                {
                    path:"/hot",
                    component:HotPage
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component:About
        }
    ]
})
