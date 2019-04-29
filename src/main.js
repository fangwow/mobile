// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 顶部导航
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 表单
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios;
// 导入mui
import '@/assets/dist/css/mui.min.css'
import '@/assets/dist/css/icons-extra.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
