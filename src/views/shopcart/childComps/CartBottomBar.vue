<template>
  <div class="bottom-bar">

    <div class="check-content">
      <check-button 
      :is-checked='isSelectAll'  
      class="check-button"
      @click="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去计算({{checkedLength}})
    </div>

    <toast :message='message' :isShow=isShow></toast>
  </div>
  
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import Toast from 'components/common/toast/Toast'
import { mapGetters } from 'vuex'

export default {
  components:{
    CheckButton,
    Toast
  },
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0)
    },
    checkedLength(){
      return this.$store.state.cartList.filter( item => item.checked).length
    },
    isSelectAll(){
      // return !(this.cartList.filter(item => !item.checked).length)
      return !this.cartList.find(item => !item.checked) && Boolean(this.cartList.length)
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if(this.cartList.length===0){
        this.isShow = true
        this.message = '请选择购买的商品'
        console.log(this.show,this.message);

        setTimeout(()=>{
          this.isShow = false
          this.message = ''
        },2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    background-color: #eee;
    display: flex;

    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
  .check-content{
    margin-left: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 60px;
  }
  .check-button{
    width: 21px;
    height: 21px;
    line-height: 24px;
    text-align: center;
    margin-right: 5px;
  }

  .price{
    flex: 1;
    margin-left: 20px;
  }

  .calculate{
    width: 90px;
    background-color: rgb(250, 125, 52);
    color: #fff;
    text-align: center;
  }
</style>