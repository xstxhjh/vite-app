import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import './components/WebComponents/test.js'

app.config.globalProperties = {
  mainColor: '#0000ee'
}

import { display } from './directive'

app.directive('display', display)

app.mount('#app')