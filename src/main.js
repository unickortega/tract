import Vue from 'vue'
import App from './App.vue'
import router from './router'

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

global.resizeables = [];
global.scrollables = [];

// for events
// 
// 
global.onresize = ()=>{
  resizeables.forEach((el)=>{
    el()
  })
};

global.onscroll = ()=>{
    scrollables.forEach((el)=>{
        el()
    })
};

Vue.mixin(mixins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
