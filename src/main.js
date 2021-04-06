import { createApp } from 'vue'
import App from './App.vue'
import 'vite-plugin-svg-icons/register';

const app = createApp(App)

app.config.globalProperties = {
  mainColor: '#0000ee'
}

import './components/WebComponents/test.js'

// 元素受否显示触发指令
import { display } from './directive'
app.directive('display', display)

import SvgIcon from './components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')