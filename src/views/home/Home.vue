<template>
  <div id="home" >
    <nav-bar class="home-nav"><template v-slot:center>
        <div>购物街</div>
    </template></nav-bar>

    <scroll class="content" ref="scroll">
    <home-swiper :banners="banners">
    </home-swiper>

    <recommend-view :recommends="recommends">
    </recommend-view>

    <feature-view></feature-view>
    
    <tab-control class="tab-control" 
    :titles="['流行','新款','精选']"
    @tabClick='tabClick'
    ></tab-control>

    <goods-list :goods ='showGoods'></goods-list>

    </scroll>



    <back-top @click="backClick"></back-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childrenComps/HomeSwiper.vue'
import RecommendView from './childrenComps/HomeRecommendView.vue'
import FeatureView from './childrenComps/FeatureView.vue'


import {getHomeMultildata,getHomeGoods} from 'network/home'


export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop'
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultildata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //事件监听相关方法
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    //2.网络请求相关方法
    getHomeMultildata(){
      getHomeMultildata().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>



.home-nav{
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

#home{
  padding-top: 44px;
  position: relative;
  height: 100vh;
}

.tab-control{
  position: sticky;
  top: 44px;
}

.content{
  /* height:calc(100% - 54px) ; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}


</style>