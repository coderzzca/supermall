<template>
  <div id="detail">
    <detail-nav-bar class="aaa" @titleClick='titleClick' ref="nav" />

    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type='3'>
      <detail-swiper :top-images='topImages'/>

      <detail-base-info :goods='goods'></detail-base-info>

      <detail-shop-info :shop="shop"></detail-shop-info>

      <detail-goods-info :detail-info="detailInfo" @imageLoad='imageLoad'></detail-goods-info>

      <detail-param-info ref="params" :param-info='paramInfo'></detail-param-info>

      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>

      <goods-list ref="recommend" :goods='recommend'></goods-list>
      
      
    </scroll>
      <back-top @click="backClick" v-show="isShowBackTop"></back-top>
      <detail-bottom-bar @addShoppingCart='addShoppingCart'></detail-bottom-bar>
      <toast :message="message" :is-show="isShow"></toast>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import Toast from 'components/common/toast/Toast'


import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'
import { mapActions } from 'vuex'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },
  mixins:[backTopMixin],
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false,
      message:'',
      isShow:false
    }
  },
  created(){
    //1.保存传入的iid
    this.iid = this.$route.query.iid

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      //1.获取顶部的图片轮播数据
      const data = res.result
      this.topImages = res.result.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      //4.保存商品的详情数据
      this.detailInfo = res.result.detailInfo

      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //6.获取评论得的信息
      if(data.rate.cRate !== 0 ){
        this.commentInfo = data.rate.list[0]
      }

      // this.$nextTick(()=>{
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      //   console.log(this.themeTopYs);
      // })
    })

    //3.请求推荐数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommend = res.data.list
    })

    //4.getThemeTopY 复制
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push( this.$refs.params && this.$refs.params.$el.offsetTop-44)
      this.themeTopYs.push( this.$refs.comment && this.$refs.comment.$el.offsetTop-44)
      this.themeTopYs.push( this.$refs.recommend && this.$refs.recommend.$el.offsetTop-44)
      this.themeTopYs.push( Number.MAX_VALUE)
      console.log(this.themeTopYs);
    },100)

  },
  methods:{
    ...mapActions(['addCart']),
    imageLoad(){
      this.$refs.scroll && this.$refs.scroll.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      //1.获取Y值
      const positionY = -position.y
      //2.position 和主题中值进行对比
      //{0: 0, 1: 8409, 2: 9545, 3: 9838}
      //
      let length = this.themeTopYs.length
      for(let i=0; i<length-1 ;i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav &&(this.$refs.nav.currentIndex = this.currentIndex)
        }

      //  if(this.currentIndex !== i && ((i < length-1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) ||
      //  (i===length-1 && positionY > this.themeTopYs[i]))){
      //    this.currentIndex = i
      //    this.$refs.nav.currentIndex = this.currentIndex
      //  }
      }
      //3是否显示回到顶部
      this.isShowBackTop = -(position.y) > 1000
    },
    addShoppingCart(){
      //1.获取购物车需要展示的商品信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //2将商品添加到购物车里面
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })

      this.addCart(product).then(res=>{
        this.isShow = true
        this.message = res
        console.log(this.isShow,this.message);

        setTimeout(()=>{
          this.isShow = false
          this.message = ''
        },2000)
      })
    }
  }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }

  .aaa{
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
</style>