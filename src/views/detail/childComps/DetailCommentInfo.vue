<template>
  <div v-if="Object.keys(commentInfo).length  !== 0" class="detail-evaluate">
      <div class="menu">
        <span class="left">用户评价</span>
        <span class="right">更多</span>
      </div>
      <div class="menu-content">
        <img :src="commentInfo.user.avatar">
        <span>{{commentInfo.user.uname}}</span>
        <div class="evacontent">{{commentInfo.content}}</div>
        <span class="time">{{showDate(commentInfo.created)}} </span>
        <span class="style-cloth">{{commentInfo.style}}</span>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
        </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  props:{
    commentInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    showDate(value){
      //1.将时间戳转化为Date对象
      const date = new Date(value * 1000)
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
  .detail-evaluate{
    padding: 10px;
    font-size: 14px;
  }
  .menu{
    width: 100%;
    height: 40px;
    border-bottom: rgb(248, 244, 244) 3px solid;
  }
  .menu span{
    height: 30px;
    line-height: 30px;
  }
  .menu-content img{
    width: 26px;
    height: 26px;
    vertical-align: middle;
    margin: 0 20px 0 10px;
  }
  .menu-content span{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: rgb(172, 171, 171);
  }
  .menu-content .style-cloth{
    margin-left: 20px;
  }
  .info-imgs {
    padding-top: 10px;
    padding-bottom: 50px;
    border-bottom:5px  solid rgb(213, 210, 210);
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>