import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import FullCalendar from 'vue-full-calendar';

// import "fullcalendar-scheduler";
import 'fullcalendar/dist/fullcalendar.css';
// import "fullcalendar-scheduler/dist/scheduler.min.css";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;
Vue.use(FullCalendar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
