import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store.js'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import Routes from './routes'
import Translate from 'vue-i18n'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Translate)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
});
