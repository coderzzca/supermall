<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item"
    :goodsItem='item'>

    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding: 0 2px;
    background-color: #fff;
  }

</style>