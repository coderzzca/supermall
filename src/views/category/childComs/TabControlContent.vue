<template>
  <div class="TabControlContent">
    <!-- <ul>
      <li v-for="(item,index) in categoryGoods" :key="index">{{item}}</li>
    </ul> -->
    <goods-list-item 
      v-for="(item,index) in categoryGoods"
     :key="index"
     :goodsItem='item'>{{item}}</goods-list-item>
  </div>
</template>

<script>
import GoodsListItem  from 'components/content/goods/GoodsListItem'
export default {
  name: 'TabControlContent',
  props: {
    categoryGoods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  // watch:{
  //   categoryGoods:{
  //     handler(newVlaue){
  //       this.categoryGoods = newVlaue
  //       console.log('子组件1',newVlaue);
  //       console.log('子组件2',this.categoryGoods);
  //     },
  //     deep:true
  //   }
  // },
  components: {
    GoodsListItem
  },
}
</script>

<style scoped>
.TabControlContent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
}


</style>