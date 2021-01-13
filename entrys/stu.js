import Vue from 'vue'
import Stu from '@/root/Stu.vue'
import router from '@/router/stu'
import store from '@/store/stu'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/less/index.less'
Vue.use(AntDesign);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Stu)
}).$mount('#app')
