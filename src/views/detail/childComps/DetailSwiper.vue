<template>
    <div>
      <swiper class="de-swiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      },
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .de-swiper{
    height: 350px;
    overflow: hidden;
  }
</style>