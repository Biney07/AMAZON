import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import contactStore from './store/contactStore';
import dhomaStore from './store/dhomaStore';

const app = createApp(App);

app.use(contactStore);

app.use(dhomaStore);

app.use(router);

app.use(VueSweetalert2);

app.mount('#app');

