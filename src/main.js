import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import FullCalendar from 'vue-full-calendar';

// import "fullcalendar-scheduler";
import '../node_modules/fullcalendar/dist/fullcalendar.css';
// import "fullcalendar-scheduler/dist/scheduler.min.css";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;
Vue.use(FullCalendar);
Vue.use(require('vue-moment'));

new Vue({
  router,
  render: h => h(App),
  watch: {
    '$route': function() {
      window.location.reload();
    }
  }
}).$mount('#app');
