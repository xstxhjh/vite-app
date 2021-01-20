
const display = {
  mounted(element, binding, vnode) {
    const event = new CustomEvent('display', { detail: {} })

    const key = binding.value
    const wait = binding.arg.wait || 0
    const maxWait = binding.arg.maxWait || undefined

    event.detail.key = key


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

      event.detail.show = elementIsVisible
      element.dispatchEvent(event);
    }

    window.addEventListener("scroll", throttle(handleScroll, wait, maxWait));
  }
}

function throttle(fn, wait, maxWait) {
  let timeout = null,
    startTime = Date.parse(new Date);

  return function () {
    if (timeout !== null) clearTimeout(timeout);
    const curTime = Date.parse(new Date);
    if (curTime - startTime >= maxWait) {
      fn();
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, wait);
    }
  }
}


export default display;