import { createApp } from 'vue'
import VueAwesomePaginate from "vue-awesome-paginate";
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(VueAwesomePaginate).use(store).use(router).mount('#app');
