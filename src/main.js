import { createApp } from 'vue'
import App from './App.vue'
//import VueCompositionApi from '@vue/composition-api';
import router from './routes/router.js'
import store from './store/store.js'

// Vue.use(VueCompositionApi);
// Vue.config.productionTip = false

const app = createApp(App)
app.use(router) 
app.use(store)
app.mount('#app')

// createApp({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
