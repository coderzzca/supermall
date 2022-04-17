<template>
  <div class="login">
    <div class="top-div"></div>
    <div class="content">
      <div class="logo">
        <img src="~/assets/img/funny/mls.jpg" alt="">
      </div>

      <form>
        <span>账户</span><input class="username" type="text" v-model="loginInfo.username"><br>
        <span>密码</span><input class="password" type="password" v-model="loginInfo.password"><br>
        <input class="login-button" type="button" value="登录" @click="loginbutton">
      </form>
      <toast :message='message' :isShow='isShow'></toast>
      <div class="register-forget">
        <div class="register">注册美丽说</div>
        <div class="forget">忘记密码</div>
      </div>
      <div class="third-party">
        <div class="text-info">———— 第三方登录 ————</div>
        <div class="picture">
          <div class="picture-icon">
            <img src="~assets\img\funny\weixin.png" >
          </div>
          <div class="picture-icon">
            <img src="~assets/img/funny/qq.png" >
          </div>
          <div class="picture-icon">
            <img src="~assets/img/funny/weibo.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'components/common/toast/Toast'
export default {
  components:{
    Toast
  },
  data () {
    return {
      loginInfo:{
        username: '1370054696',
        password: '123456'
      },
      message:'',
      isShow:false  
    }
  },
  methods:{
    loginbutton(){
      if(this.loginInfo.username==='1370054696' && this.loginInfo.password==='123456'){
        this.$router.push('/profile')
      }else{
        this.isShow = true
        this.message = '登入失败,账户或密码错误,请重新输入'

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
  .login{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, rgb(250,96,127), rgb(253,166,133));
    opacity: 0.8;
  }
  .top-div{
    width: 100vw;
    height: 30%;
    background: url('../../../assets/img/funny/bgc.png');
    background-size: 64px;
  }

  .content{
    height: 80%;
    width: 90%;
    background-color: #fff;
    position: absolute;
    bottom: 80px;
    left: 5%;
    border-radius: 4%;
    padding: 0 5%;
  }

  .logo img{
    width: 250px;
    height: 100px;
  }

  form{
    margin-top:20px ;
  }
  form input{
    width: 80%;
    height: 30px;
    border: 1px solid #c8cccf;
    padding-left: 20px;
    border-radius: 30px;
    margin-bottom: 20px;
    margin-left: 6px;
    font-size: 18px;
    outline: none;
  }

  .username:focus,.password:focus{
    outline: rgb(250,96,127) solid 0.5px;
  }

  .login-button{
    width: 96%;
    background-color: rgb(250,96,127);
    color: #fff;
    font-size: 16px;
    padding-right: 20px;
  }

  .register-forget{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .register{
    color: var(--color-tint);
  }

  .third-party{
    margin-top: 10%;
    text-align: center;
    color: gray;
  }
  
  .picture{
    display: flex;
    justify-content: space-around;

    margin-top: 15%;
  }

  .picture img{
    height: 36px;
    width: 36px;
  }

  
</style>