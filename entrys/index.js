import Vue from 'vue'
import Shop from '@/root/Shop.vue'
import router from '@/router/shop'
import store from '@/store/shop'
import AntDesign from 'ant-design-vue'
import '@/assets/less/index.less'
Vue.use(AntDesign);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Shop)
}).$mount('#app')
