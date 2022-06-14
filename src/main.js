import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import Signature from './components/Signature.vue';
import { MsalClient } from './lib/msal';

window.customElements.define('signature-preview', defineCustomElement(Signature));

const client = new MsalClient()

client.ready()
  .then(() => client.fetchProfile())
  .then(profile => {
    createApp(App)
      .provide('profile', profile)
      .mount('#app')
  });
