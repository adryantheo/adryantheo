import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// import VueHtmlToPaper from 'vue-html-to-paper';
// Vue.use(VueHtmlToPaper, {
//   name: '_blank',
//   specs: [
//     'fullscreen=no',
//     'titlebar=no',
//     'scrollbars=yes'
//   ],
//   styles: [
//     '/css/print.css',
//     '/css/app/css',
//   ]
// });
