import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./plugins/eventsHandler.js')

Vue.config.productionTip = false

const mixins = {
  methods: {
    asset(src){
      var result =  process.env.NODE_ENV === 'production'
      ? '/tract/' + src
      : src
      return result
    }
  }
}

global.jQuery = require('jquery')

Vue.mixin(mixins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
