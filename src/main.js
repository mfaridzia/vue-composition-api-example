import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import router from './routes/router.js'
import store from './store/store.js'

Vue.use(VueCompositionApi);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
