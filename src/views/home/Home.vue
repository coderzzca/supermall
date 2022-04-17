<template>
  <div id="home" >
    <nav-bar class="home-nav"><template v-slot:center>
        <div>购物街</div>
    </template></nav-bar>
    <div class="my-home-img" v-show="showFunny">
      <img src="~assets/img/home/my-home.gif" alt="">
    </div>

    <tab-control 
    :titles="['流行','新款','精选']"
    @tabClick='tabClick'
    ref="tabControl1"
    class="tab-control"
    v-show="isTabFixed"></tab-control>

    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pullUpLoad='true'
            @pullingUp='loadMore'>
            
    <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad'>
    </home-swiper>

    <recommend-view :recommends="recommends">
    </recommend-view>

    <feature-view></feature-view>
    
    <tab-control 
    :titles="['流行','新款','精选']"
    @tabClick='tabClick'
    ref="tabControl2"
    ></tab-control>

    <goods-list :goods ='showGoods'></goods-list>

    </scroll>



    <back-top @click="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childrenComps/HomeSwiper.vue'
import RecommendView from './childrenComps/HomeRecommendView.vue'
import FeatureView from './childrenComps/FeatureView.vue'


import {getHomeMultildata,getHomeGoods} from 'network/home'
import {backTopMixin} from 'common/mixin'


export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins:[backTopMixin],
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
      showFunny:true
    }
  },
  activated(){
   
    this.$refs.scroll.scrollTo(0,this.saveY,100)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created(){

    //1.请求多个数据
    this.getHomeMultildata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    
 
    //1.获取tabControl的offsetTop
    //所有的组件都有一个属性$el :用于获取组件中的元素
    // setTimeout(()=>{
    //   console.log(this.$refs.tabControl.$el.offsetTop);
    // },2000)
  },
   destroyed(){
    console.log('home-destroyed');
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position){
      //1.判断backTop 是否显示
      this.isShowBackTop = -(position.y) > 1000

      //2.决定tabCountrol 是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop

      //设置滑稽滚动后就不显示
      this.showFunny = !((-position.y) > 50)
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      if(this.$refs.scroll){
        this.$refs.scroll.scroll.refresh()
      }
    },
    swiperImageLoad(){
      setTimeout(()=>{
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },500)
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

        if(this.$refs.scroll){
          this.$refs.scroll.finishPullUp()
        }
        
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

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

#home{
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

/* .tab-control{
  position: sticky;
  top: 44px;
} */

.content{
  /* height:calc(100% - 54px) ; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control{
  position: relative;
  z-index: 9;
}

.my-home-img img{
  position: fixed;
  z-index: 0;
  width: 100px;
  height: 100px;
  left: 36%;
}



</style>