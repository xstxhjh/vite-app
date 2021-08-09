import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties = {
  mainColor: '#0000ee'
}

import square from './components/WebComponents/square.js'
customElements.define('custom-square', square)

// 元素受否显示触发指令
import { display } from './directive'
app.directive('display', display)

import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

import router from "./router"
import store from "./store"
app.use(router).use(store)

app.mount('#app')