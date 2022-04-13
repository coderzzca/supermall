import {createVNode,render} from 'vue'
import Toast from './Toast'

const obj = {}
  obj.install = function(Vue){
  // console.log('执行了obj的预备函数',Vue);
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div 
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = Toast
}

// const div = document.createElement('div')
// div.setAttribute('class','toast')
// document.body.appendChild(div)

// let time = null

// export const toast = (message,duration=1500)=>{
//   const NODE = createVNode(Toast,{message})
//   render(NODE,div)
//   clearTimeout(time)
//   time = setTimeout(()=>{
//     render(null,div)
//   },duration)
// }

