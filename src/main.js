import { createApp } from 'vue'
import App from './App.vue'

import './components/WebComponents/test.js'

const app = createApp(App)

app.config.globalProperties = {
  mainColor: '#0000ee'
}

let dragstartKey = undefined
let dragenterKey = undefined
app.directive('drag', {
  mounted(el, binding, vnode) {
    let arr = binding.arg
    let key = vnode.key
    el.draggable = true
    const dragstart = (e) => {
      dragstartKey = key
      const event = new Event('dragchange')
      event.key = key
      el.dispatchEvent(event);
    };

    const dragenter = (e) => {
      dragenterKey = key
    };

    const dragleave = (e) => {
    };

    const dragend = (e) => {
      // let data = arr[dragstartKey]
      // arr.splice(dragstartKey, 1)
      // arr.splice(dragenterKey, 0, data)
      // console.log(data)
    };

    el.addEventListener('dragstart', dragstart);
    el.addEventListener('dragenter', dragenter);
    el.addEventListener('dragleave', dragleave);
    el.addEventListener('dragend', dragend);

  }
})

app.mount('#app')