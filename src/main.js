import Vue from 'vue'
import App from './App.vue'
import router from './AppRouter'
import VueMasonry from 'vue-masonry-css'
import './Styles/global.scss'

Vue.config.productionTip = false
Vue.use(VueMasonry)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
