import { createApp } from 'vue'
import { createHead, VueHeadMixin } from '@unhead/vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router";
import  "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vue-material-design-icons/styles.css'
import AOS from "aos";
import "aos/dist/aos.css";
import '@/register-service-worker';
// import * as VueGoogleMaps from 'vue2-google-maps'



const head = createHead()

let app = createApp(App);
let Store = createPinia();
// app.use(VueGoogleMaps, {
//   load: {
//     key:'AIzaSyBMGqkclzUoRIof5DIWwPmjLDD3h963geU',
//     libraries: 'places'
//   }
// });
      app.use(router)
      app.use(AOS.init());
     app.use(head)
     app.mixin(VueHeadMixin)
     app.use(Store)
     app.mount('#app');




     