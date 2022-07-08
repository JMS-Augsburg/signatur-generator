import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import Signature from './components/Signature.vue';

window.customElements.define('signature-preview', defineCustomElement(Signature));

async function loadProfile() {
    if (!import.meta.env.VITE_MSAL_CLIENT_ID) {
        return
    }

    const { MsalClient } = await import('./lib/msal');
    const client = new MsalClient()
    await client.ready()

    return client.fetchProfile()
}


loadProfile().then(profile => {
    createApp(App)
        .provide('profile', profile)
        .mount('#app')
})
