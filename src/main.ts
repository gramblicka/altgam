import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

// Register component globally
// import OneTimePassword from "@altgr4m/vue3-one-time-password";
// import "@altgr4m/vue3-one-time-password/style.css"
// app.component('OneTimePassword', OneTimePassword)

app.mount('#app')
