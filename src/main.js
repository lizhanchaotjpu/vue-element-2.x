import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/index.scss'
import router from './router'
import store from './store'
import * as filters from '@/lib/filters.js'
import '@/lib/element_ui'
// 插入全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
