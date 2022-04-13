<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked='product.checked' @click="checkClick"></check-button>
    </div>

    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>

    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        
        <div class="item-price left">{{product.price}}</div>

        <div class="item-count right">        
          <div @click="decrement(product)"><button :disabled="product.count<=1">▼</button></div>
          {{product.count}}
          <div @click="increment(product)"><button >▲</button></div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {
  INCREMENT,
  DECREMENT
} from 'store/mutations-types.js'
export default {
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return{

        }
      }
    }
  },
  methods:{
    checkClick(){
      this.product.checked = !this.product.checked
    },
    decrement(product){
      this.$store.commit(DECREMENT,product)
    },
    increment(product){
      this.$store.commit(INCREMENT,product)
    }
  }
}
</script>

<style scoped>
  #shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title,
  .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img{
    padding: 5px;
  }

  .item-img img{
    width:80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-count{
    position: relative;
    left: -20px;
    display: flex;
    justify-content: space-around
  }
  .item-count div button{
    display:block ;
    height: 23px;
    width: 20px;
    text-align: center;
    line-height: 22px;
    margin:0 5px;
  }


  .info-bottom .item-price{
    color: orangered;
  }

</style>