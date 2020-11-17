import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import './components/WebComponents/test.js'

import antd from 'ant-design-vue';
import '/node_modules/ant-design-vue/dist/antd.css'

const app = createApp(App)

app.config.globalProperties.color = '#0000EE'

app.use(antd).mount('#app')