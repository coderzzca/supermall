import {
  ADD_COUNTER,
  ADD_TO_CATR,
  INCREMENT,
  DECREMENT
} from './mutations-types'

export default {
    [ADD_COUNTER](state,payload){
      payload.count++
    },
    [ADD_TO_CATR](state,payload){
      payload.checked = true
      state.cartList.push(payload)
    },
    [INCREMENT](state,payload){
      payload.count++
    },
    [DECREMENT](state,payload){
      if(payload.count>1){
        payload.count--
      }
      
    },
}