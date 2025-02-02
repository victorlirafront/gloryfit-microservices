// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Crie o app Vue e registre o Pinia como gerenciador de estado
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
