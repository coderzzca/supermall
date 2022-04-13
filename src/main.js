import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import lazyPlugin from 'vue3-lazy'

import FastClick from 'fastclick'


createApp(App)
  .use(router).use(store).use(lazyPlugin,{
    loading:require('./assets/img/common/placeholder.png')
  })
  .mount('#app')


//解决移动端的300ms延迟
FastClick.attach(document.body)