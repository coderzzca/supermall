<template>
  <div class="CategoryRightTop">
    <category-right-top-item v-for="(item,index) in topItemInfo" 
    :key="index" 
    :itemInfo='item'
   />
  </div>
</template>

<script>
import CategoryRightTopItem from './CategoryRightTopItem'

export default {
  name: 'CategoryRightTop',
  props: {
    topItemInfo: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    CategoryRightTopItem
  },
  methods:{
    // categoryImageLoad(){
    //   this.$emit('categoryImageLoad')
    // }
  }
}
</script>

<style scoped>
  .CategoryRightTop{
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
    
  }
</style>
