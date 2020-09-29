import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import './components/WebComponents/test.js'

import antd from 'ant-design-vue';
import '/node_modules/ant-design-vue/dist/antd.css'

createApp(App).use(antd).mount('#app')
