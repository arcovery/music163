import Vue from 'vue'

import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'

import musicCell from '@/components/musicCell.vue'
Vue.component('musicCell', musicCell)
Vue.use(Vant)
// import './assets/main.css'

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
