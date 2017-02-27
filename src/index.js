import './core/styles/core.scss'
import vuiButton from './components/vuiButton.vue'
import vuiHeader from './components/vuiHeader.vue'
import vuiHeaderButton from './components/vuiHeaderButton.vue'
import vuiSidebar from './components/vuiSidebar.vue'
import vuiSidebarButton from './components/vuiSidebarButton.vue'
import vuiContent from './components/vuiContent.vue'
import vuiSidebarPanel from './components/vuiSidebarPanel.vue'
import vuiToolbar from './components/vuiToolbar.vue'
import vuiInput from './components/vuiInput.vue'
import vuiBadge from './components/vuiBadge.vue'
import vuiCheckbox from './components/vuiCheckbox.vue'

import vuiRipple from './directives/vuiRipple/vuiRipple'

const components = {
  vuiButton,
  vuiHeader,
  vuiHeaderButton,
  vuiSidebar,
  vuiSidebarButton,
  vuiContent,
  vuiSidebarPanel,
  vuiToolbar,
  vuiInput,
  vuiBadge,
  vuiCheckbox,
}

const Vui = {
  install(Vue, options) {
    Vue.directive('ripple', vuiRipple)
    if (options && options.hasOwnProperty('components')) {
      options.components.forEach(componentName => {
        Vue.component(componentName, components[componentName])
      })
    } else {
      for (let componentName in components) {
        Vue.component(componentName, components[componentName])
      }
    }

  }
}

export default Vui