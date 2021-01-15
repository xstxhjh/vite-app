import { createApp } from 'vue'
import App from './App.vue'

import './components/WebComponents/test.js'

const app = createApp(App)

app.config.globalProperties = {
  mainColor: '#0000ee'
}

app.directive('showing', {
  mounted(element, binding, vnode) {

    const event = new Event('show')

    const handleScroll = () => {
      let elementIsVisible = false;

      const document = window.document;
      const rect = element.getBoundingClientRect();

      elementIsVisible =
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <=
        (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.right >= 0;

      event.show = elementIsVisible
      element.dispatchEvent(event);
    }

    window.addEventListener("scroll", handleScroll);
  }
})

app.mount('#app')