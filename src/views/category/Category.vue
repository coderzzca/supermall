<template>
  <div class="category">
    <nav-bar class="category-navbar">
      <template v-slot:center> 
        <div>商品分类</div>
      </template>
    </nav-bar>

    <div class="big-wrapper">
      <div class="left-wrapper">
        <category-menu-left :leftMenuItem='LeftMenuItem' @menuClick='menuClick'></category-menu-left>
      </div>

      <div class="right-wrapper">
        <scroll class="content" ref="scroll">
          <category-right-top :topItemInfo='topItemInfo'></category-right-top>
          <tab-control :titles='tabControlTitles' @tabClick='tabClick'></tab-control>
           <tab-control-content :categoryGoods ='getCategoryGoods'></tab-control-content>
        </scroll>
      </div>
    </div>

  </div>
  
</template>



<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'


import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
// import {tabControlMixin} from "@/common/mixin";

import CategoryMenuLeft from './childComs/CategoryMenuLeft.vue'
import CategoryRightTop from './childComs/CategoryRightTop.vue'
import TabControlContent from './childComs/TabControlContent.vue'


export default {
  components:{
    NavBar,
    Scroll,
    TabControl,
    TabControlContent,
    CategoryMenuLeft,
    CategoryRightTop
  },
  data(){
    return{
      LeftMenuItem:[],
      CurrentPageData:{},
      currentIndex:-1,
      topItemInfo:[],
      tabControlTitles:['综合','新品','销量'],
      currentType:'pop'
    }
  },
  // mixins: [tabControlMixin],
  created(){
    this._getCategory()
    // getCategoryDetail(50003,'pop').then(res=>{
    //   console.log(res);
    // })
  },
  methods:{
    //1.网络请求相关方法
    _getCategory(){
      getCategory().then(res=>{
        this.LeftMenuItem = res.data.category.list
        for(let i =0; i<this.LeftMenuItem.length; i++){
          this.CurrentPageData[i] = {
            categoryGoods:{
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 第一次加载页面 获取的最初显示数据
        this._getSubcategory(0)
      })
    },
    _getSubcategory(index){
      this.currentIndex = index
      let maiKey = this.LeftMenuItem[index].maitKey
      let miniWallkey = this.LeftMenuItem[index].miniWallkey
      getSubcategory(maiKey).then( res => {
      // 获取TopItemInfo的数据
        this.topItemInfo = res.data.list
      })
      this._getCategoryDetail(miniWallkey,'pop',index)
      this._getCategoryDetail(miniWallkey,'new',index)
      this._getCategoryDetail(miniWallkey,'sell',index)
    },
    // 获取 BottomItemInfo 的数据
    _getCategoryDetail(miniWallkey,type,index){
      getCategoryDetail(miniWallkey,type).then( res => {
        this.CurrentPageData[index].categoryGoods[type] = res
        // 对象拓展运算符  用于将该对象中的可遍历属性全部拷贝 过去
        // console.log(this.CurrentPageData[index].categoryGoods[this.currentType]);
      })
    },
    //2.事件监听相关方法
    tabClick(index){
      // console.log(index);
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
      this._getSubcategory(this.currentIndex)
      console.log(this.getCategoryGoods);
    },
    menuClick(index){
      this._getSubcategory(index)
    },
  },
  computed:{
    getCategoryGoods(){
      if(this.currentIndex < 0) return []
      // console.log('computed',this.CurrentPageData[this.currentIndex].categoryGoods[this.currentType]);
      return this.CurrentPageData[this.currentIndex].categoryGoods[this.currentType]
    }
  }

}

</script>

<style scoped>
  .category-navbar{
    color: #fff;
    background-color: rgb(255,141,150);
    font-size: 16px;
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100% - 93px);
  }
  .big-wrapper{
    display: flex;
  }

  .bigwrapper .left-wrapper {
    width: 25vw;
  } 
  .right-wrapper{
    height: 100vh;
  }
</style>