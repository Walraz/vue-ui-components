import Vue from 'vue'
import Vui from '../dist'

Vue.use(Vui)

const app = new Vue({
  el: '#app',
  data() {
    return {
      selected: 'Milk',
      selected2: '',
      options: ['Tee', 'Coffe', 'Milk', 'Bread']
    }
  },
  methods: {
    test() {
      console.log('click')
    }
  }
})
