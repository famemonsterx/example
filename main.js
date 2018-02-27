import Vue from 'vue'


import App from './App.vue'
import Log from './Log.vue'
import Main from './Main.vue'
import Reg from './Reg.vue'
import About from './About.vue'

import Vuetify from 'vuetify'

import VueRouter from 'vue-router'

import 'vuetify/dist/vuetify.min.css'




Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.component('app-reg', Reg)
Vue.component('app-log', Log)

var router = new VueRouter({
	routes: [
		{ path: '/about', component: About },
		{ path: '/main', component: Main }
	]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
	