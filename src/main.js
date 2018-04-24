// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import App from './App'
import router from './router'
import Todo from '@/components/Todo'
import store from './store'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(Todo)
  // components: { App },
  // template: '<App/>'
})
