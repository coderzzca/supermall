<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>

    <div class="info-price">
      <span class="N-price">{{goods.newPrice}}</span>
      <span class="O-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <div v-for="index in goods.columns.length" :key="index">{{goods.columns[index-1]}}</div>
    </div>

    <div class="info-service">
      <span v-for="index in goods.services.length" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props: {
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .info-title{
    margin-top: 10px;
    text-indent: 5px; 
    color: rgb(95,104,118);
    margin-left: 6px;
    padding-right: 5px;
  }
  .info-price{
    margin-top: 10px;
    padding-bottom:20px ;
  }
  .N-price{
    color: rgb(255,104,126);
    font-size: 22px;
    margin-left: 5px;
  }
  .O-price{
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 5px;
  }
  .discount{
    position: absolute;
    font-size: 12px;
    color: #fff;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: rgb(255,104,126);
    border-radius: 20px;
    margin-left: 5px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    margin: 10px 5px 0 5px;
    padding: 0 5px;
    font-size: 14px;
    color: rgb(180, 180, 179);
    padding-bottom: 10px;
    border-bottom:3px solid rgb(250, 244, 244) ;
  }
  .info-service{
    display: flex;
    flex-wrap:wrap ;
    align-content: center;
    justify-content: space-around;
    height: 40px;
    padding: 35px 0 35px 0;
    border-bottom: rgb(250, 244, 244) solid 6px;
  }
  .info-service img{
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
  .info-service span{
    font-size: 14px;
  }
</style>