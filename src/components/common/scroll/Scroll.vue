<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      observeDOM:true
    })

    // this.scroll = new BScroll(this.$refs.wrapper,{
    //   click:true,
    //   observeDOM:true
    // })
  },
  methods:{
    scrollTo(x,y,tiem=300){
      this.scroll.scrollTo(x,y,tiem)
    }
  }
}
</script>

<style>

</style>