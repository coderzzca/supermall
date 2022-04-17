<template>
<div class="profile">
  <nav-bar class="profile-navbar">
    <template v-slot:center>
      <div>我的档案</div>
    </template>
  </nav-bar>

  <div class="login-registration">
    <div class="profile-picture">
      <img src="~assets/img/profile/iu.webp" alt="">
    </div>
    <div class="login-regist">
      <div class="login-regist-one">IU,欢迎回来~</div>
    </div>
  </div>

  <div class="count-info">
    <div>
      <div class="count-info-span"><span>0.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div>
      <div class="count-info-span"><span>0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div>
      <div class="count-info-span"><span>0</span>分</div>
      <div>我的积分</div>
    </div>
  </div>

  <div class="mess-mall-vip-cart-app">
      <div>
        <img src="~/assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div>
        <img src="~/assets/img/profile/pointer.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="vip">
        <img src="~/assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
      <div>
        <img src="~/assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~/assets/img/profile/shopping.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
  
  
</div>


  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .profile-navbar{
    font-size: 18px;
    text-align: center;
    color: rgb(240, 234, 234);
    background-color: rgb(255,141,150);
    border-bottom: 1px solid rgb(223, 168, 168);
  } 

  .login-registration{
    width: 100%;
    height: 100px;
    background-color: rgb(255,141,150);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: rgb(240, 234, 234);
  }

  .profile-picture img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }

  .login-regist{
    margin-right: 20px;
  }

  .count-info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 100px;
    font-size: 16px;
    border-bottom: rgb(248, 247, 247) solid 8px;
  }

  .count-info span{
    font-size: 20px;
    color: red;
  }

  .count-info-span{
    margin-bottom: 5px;
  }

  .mess-mall-vip-cart-app div{
    height: 40px;
    width: 100%;
    line-height: 40px;
    padding-left: 10px;
    border-top: rgb(241, 234, 234) solid 1px;
  }
  .mess-mall-vip-cart-app img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .mess-mall-vip-cart-app .vip{
    height: 48px;
    border-bottom: rgb(248, 247, 247) solid 8px;
  }
</style>
