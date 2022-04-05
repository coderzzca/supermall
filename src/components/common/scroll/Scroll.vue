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
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return{
      scroll:Object
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      observeDOM:true,
      observeImage: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad 
    })

    //2.监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    //3.监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,tiem=300){
      this.scroll && this.scroll.scrollTo(x,y,tiem)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>