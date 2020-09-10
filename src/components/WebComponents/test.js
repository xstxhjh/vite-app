export default
    class Square extends HTMLElement {
    static get observedAttributes() {
        return ['c', 'l']
    }

    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        const div = document.createElement('div')
        const style = document.createElement('style')
        shadow.appendChild(style)
        shadow.appendChild(div)
    }

    connectedCallback() {
        console.log('自定义组件添加到页面.')
        updateStyle(this)
    }

    disconnectedCallback() {
        console.log('已从页面移除自定义组件.')
    }

    adoptedCallback() {
        console.log('自定义组件移动到新页面.')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('自定义组件属性更改.')
        console.log(name, oldValue, newValue)
        updateStyle(this)
    }
}

customElements.define('custom-square', Square)

function updateStyle(elem) {
    const shadow = elem.shadowRoot
    shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `
}