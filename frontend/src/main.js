import { createApp } from 'vue'
import VueAwesomePaginate from "vue-awesome-paginate";
import {
	createI18n
} from 'vue-i18n';
import App from './App.vue'
import router from './router'
import store from './store'
import messages from './message';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
	locale: 'en',
    fallbackLocale: 'en',
	messages,
    // allowComposition: true,
    // legacy: true,
});

createApp(App).use(VueAwesomePaginate).use(store).use(router).use(i18n).mount('#app');
