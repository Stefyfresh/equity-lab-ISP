// jshint esversion:11
import { createApp } from 'vue';
import './style.css';
// import './css/bulma.css';
import App from './App.vue';
import router from '@/router';
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
    .use(router)
    .use(
        createAuth0({
          domain: import.meta.env.VITE_AUTH0_DOMAIN,
          clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
          authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
          },
        })
      )
    .mount('#app');
