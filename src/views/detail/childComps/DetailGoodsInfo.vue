<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img 
      v-for="(item,index) in detailInfo.detailImage[0].list" 
      :key="index" 
      :src="item"
      @load="imageLoad" alt="">
    </div>
  </div>
</template>

<script>
 export default {
  name:'DetailGoodsInfo',
  props: {
    detailInfo:{
      type:Object
    }
  },
  data () {
    return {
      counter:0,
      imagesLength:0  
    }
  },
  methods: {
    imageLoad(){
      // if ( ++this.counter === this.imagesLength ){
      //   this.$emit("imageLoad")
      // }
      this.$emit("imageLoad")
    }
  },
  watch:{
    // detailInfo(){
    //   //获取图片的个数
    //   this.imagesLength = this.detailInfo.detailImage[0].list.length
    // }
  }
 }
</script>


<style scoped>
  
  .goods-info{
    padding: 20px 0;
    border-bottom: 5px soild #f2f5f8;
  }

  .info-desc{
    padding: 15px;
    font-size: 14px;
  }

  .info-key{
    padding: 15px;
    font-size: 18px;
    font-weight: 700;
  }

  .start{
    position: relative;
    left: -15px;
    width: 100px;
    height: 1px;
    background-color: black;
    margin-bottom:10px ;
  }

  .end{
    position: relative;
    right: -260px;
    width: 100px;
    height: 1px;
    background-color: black;
    margin-top:10px ;
  }





  .info-list{
    padding: 10px 5px ;
  }
  .info-list img{
    width: 100%;
    border-bottom: 5px solid #fff;
  }
</style>