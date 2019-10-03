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
                )
            }, {
                path: '/math',
                name: 'math',
                component: () => import(
                    /* webpackChunkName: "math" */
                    './Pages/Math/Math.vue'
                ),
                meta: {
                    title: 'Math'
                }
            }, {
                path: '/ping',
                name: 'ping',
                component: () => import(
                    /* webpackChunkName: "ping" */
                    './Pages/Ping/Ping.vue'
                ),
                meta: {
                    title: 'Ping'
                }
            }, {
                path: '/404',
                name: '404',
                component: () => import(
                    /* webpackChunkName: "404" */
                    './Pages/404.vue'
                ),
                meta: {
                    title: 'Not Found'
                }
            }, {
                path: '*',
                redirect: '/404'
            }
        ]
    }
)
