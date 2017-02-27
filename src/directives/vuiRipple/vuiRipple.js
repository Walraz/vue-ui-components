// vuiRipple
import './vuiRipple.scss'
import debounce from '../../core/util/debounce'
export default {
  bind(el, binding) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    el.style.zIndex = 1
    const rippleTrigger = document.createElement('div')
    rippleTrigger.classList.add('ripple__trigger')
    rippleTrigger.addEventListener('mousedown', debounce(addRipple, 0))
    el.appendChild(rippleTrigger)

    function addRipple(e) {

      const rippleElement = this;
      const rippleElementClientReact = rippleElement.getBoundingClientRect()
      const size = rippleElement.offsetWidth
      const top = e.clientY - rippleElementClientReact.top
      const left = e.clientX - rippleElementClientReact.left
      const rippleCircle = document.createElement('div')
      rippleCircle.classList.add('ripple__circle')
      if (binding.modifiers.dark) rippleCircle.classList.add('ripple__circle--dark')
      if (binding.modifiers.color) {
        rippleCircle.style.background = getComputedStyle(el)
          .color
        rippleCircle.style.opacity = .12
      }
      rippleCircle.style.width = size + 'px'
      rippleCircle.style.height = size + 'px'
      rippleCircle.style.top = top - (size / 2) + 'px'
      rippleCircle.style.left = left - (size / 2) + 'px'
      if (binding.modifiers.circle) {
        rippleCircle.style.top = rippleElementClientReact.height - size + 'px'
        rippleCircle.style.left = rippleElementClientReact.width - size + 'px'
      }
      rippleElement.appendChild(rippleCircle)
      rippleElement.addEventListener('mouseout', removeRippleEffects)
      rippleElement.addEventListener('mouseup', removeRippleEffects)
    }

    function removeRippleEffects(e) {
      const rippleElement = this
      const rippleCircles = rippleElement.querySelectorAll('.ripple__circle');
      [].forEach.call(rippleCircles, (rippleCircle) => {
        rippleCircle.style.opacity = 0;
        const removeRippleElement = setTimeout(() => {
          rippleCircle.remove()
          clearTimeout(removeRippleElement)
        }, 750);
      })
    }
  }
}