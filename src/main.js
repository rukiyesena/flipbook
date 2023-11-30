/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductZoomer from 'vue-product-zoomer'
import VueImg from 'v-img';
import VueZoomer from 'vue-zoomer'
import VueCarousel from 'vue-carousel';
import vuescroll from 'vue-scroll'
import VueAutosuggest from "vue-autosuggest";


Vue.use(VueAutosuggest);
Vue.use(vuescroll)
Vue.use(VueCarousel);
Vue.use(VueZoomer)
Vue.use(VueImg);
Vue.use(Vuesax)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueGoodTablePlugin);
Vue.use(ProductZoomer)
// axios
import axios from "./axios.js"
Vue.prototype.$http = axios


// Theme Configurations
import '../themeConfig.js'

 



// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


import VueHtmlToPaper from 'vue-html-to-paper';
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}


Vue.use(VueHtmlToPaper, options);




// Feather font icon
require('./assets/css/iconfont.css')
require('iyzipay');

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)


import customers from "./layouts/components/servicecomp/customers"
Vue.component("customer-component", customers)
import products from "./layouts/components/servicecomp/products"
Vue.component("product-component", products)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
