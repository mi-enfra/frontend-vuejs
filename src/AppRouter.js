import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router(
    {
        mode: 'history',
        base: '/',
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import(
                    /* webpackChunkName: "home" */
                    './Pages/Home.vue'
                ),
                meta: {
                    title: 'Home'
                }
            }, {
                path: '/404',
                name: '404',
                component: () => import(
                    /* webpackChunkName: "404" */
                    './Pages/404.vue'
                ),
                meta: {
                    title: 'Page Not Found'
                }
            }, {
                path: '*',
                redirect: '/404'
            }
        ]
    }
)
