import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import './firebase'; // Import Firebase

// Router
import router from './router';


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
