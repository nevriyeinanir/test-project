import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import "./assets/css/global.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App).use(router); 

app.config.globalProperties.axios=axios;

app.mount('#app');
