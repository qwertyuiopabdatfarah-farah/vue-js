import Vue from 'vue'
import Index from './Index.vue'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  render: h => h(Index),
}).$mount('#app')
