import {
  ADD_COUNTER,
  ADD_TO_CATR
} from './mutations-types'

export default {
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
      //payload 新添加的商品

      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前的商品数量加一')
      }else{
        payload.count = 1
        context.commit(ADD_TO_CATR,payload)
        resolve('添加了新的商品')
      }
      })
    }
}