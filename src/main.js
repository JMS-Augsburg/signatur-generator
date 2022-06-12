import { createApp } from 'vue'
import App from './App.vue'
import { MsalClient } from './lib/msal';

const client = new MsalClient()

client.ready()
  .then(() => client.fetchProfile())
  .then(profile => {
    createApp(App)
      .provide('profile', profile)
      .mount('#app')
  });
