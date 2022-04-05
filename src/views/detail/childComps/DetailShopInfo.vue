<template>
  <div class="shopInfo">
      <div class="logoName">
        <img class="logoImage" :src="shop.logo" alt="">
        <div class="shopName">{{shop.name}}</div>
      </div>

      <div class="sales-data">
        <div class="left">
          <p>{{((shop.sells)/10000).toFixed(1)}} 万</p>
          <span>总销量</span>
        </div>

        <div class="center">
          <p>{{shop.goodsCount}}</p>
          <span>全部宝贝</span>
        </div>

        <div class="right">
          <div class="one-row" v-for="(item,index) in shop.score" :key="item+index">
            <span class="one">{{item.name}}</span>
            <span class="two">{{item.score.toFixed(2)}}</span>
            <span class="three">
              <span v-if="!item.isBetter" class="three-low"> 低 </span>
              <span v-else class="three-height"> 高 </span>
            </span>
          </div>
        </div>
        
      </div>
      <p class="welcome">进店逛逛</p>
      <div class="shopInfoBottom"></div>
  </div>

  
</template>

<script>
export default {
  name:'DetailShopInfo',
  props: {
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

  .logoName{
    display: flex;
    align-items: center;
    font-size: 17px;
    color: rgb(137, 138, 140);
    font-weight: 600;
    margin-top:20px ;
  }

  .logoImage{
    width: 60px;
    height: 60px;
    border: 2px solid rgb(241, 241, 241);
    border-radius: 50%;
    margin: 0 15px;
  }

  .sales-data{
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 80px;
  }

  .sales-data .left{
    flex: 1.5;
    padding-left:20px ;
    text-align: center;
  }

  .sales-data .left p{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
  }


  .sales-data .center{
    flex: 1.5;
    padding-right: 10px;
    border-right: rgb(228, 226, 226) solid 2px;
  }

  .sales-data .center p{
    margin-left: 16px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
    
  }
  .sales-data .right{
    margin-left: 50px;
    flex: 2.5;
  }

  .sales-data .right .one-row{
      margin-bottom: 8px;
  }

  .sales-data .right .one-row .one{
    margin-right: 10px;
  }

  .sales-data .right .one-row .three{
    font-size: 14px;
    position: relative;
    right: -8px;
    display: inline-block;
  }

  .sales-data .right .one-row .three .three-low{
    background-color: green;
    color: white;
    
  }

  .sales-data .right .one-row .three .three-height{
    background-color: red;
    color: white;
  }

  .welcome{
    height: 20px;
    width: 100px;
    background-color: rgb(236, 234, 234);
    text-align: center;
    border-radius: 5px;
    margin: 5px auto;
    color: rgb(212, 205, 205);
  }
  
  .shopInfoBottom{
    margin-top: 20px;
    height: 1px;
    width: 100%;
    border-bottom: rgb(239, 241, 241) 8px solid;
  }
  
</style>