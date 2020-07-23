import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import router from '../src/assets/js/router.js'
Vue.use(VueRouter)

import Mint from 'mint-ui';
Vue.use(Mint);

import './assets/css/cssreset.css'
import '../node_modules/mint-ui/lib/style.css'


import axios from 'axios'
Vue.prototype.$http = axios


import VueAwesomeSwiper from 'vue-awesome-swiper'

import '../node_modules/swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
