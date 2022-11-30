import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '../plugins/font-awesome'

//import './assets/main.css'
// import router from './router';


// Vue.config.productionTip = false;


createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");