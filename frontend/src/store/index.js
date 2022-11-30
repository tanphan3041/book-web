import App from '@/App.vue';
import { createApp } from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';

createApp(App).use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});