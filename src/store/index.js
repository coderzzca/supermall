import { createStore} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//2.创建Store对象
const state = {
  cartList:[],
}

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  
})

//挂载到Vue实例上

export default store