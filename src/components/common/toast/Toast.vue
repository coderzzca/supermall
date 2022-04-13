<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String,
      default:''
    },
    isShow:{
      type:Boolean,
      default:false
    }
  },
  // data(){
  //   return {
  //     isShow:false,
  //     message:''
  //   }
  // },
  methods:{
    show(message,duration){
      this.isShow = true
      this.message = message

      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
    
  }
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;

    color: #fff;
    background-color:rgba(0, 0, 0, .5);
  }
</style>