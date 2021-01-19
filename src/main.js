import { createApp } from 'vue'
import App from './App.vue'

import './components/WebComponents/test.js'

const app = createApp(App)

app.config.globalProperties = {
  mainColor: '#0000ee'
}


import { display } from './directive'

app.directive('display', display)

app.mount('#app')