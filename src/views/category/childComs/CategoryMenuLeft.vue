<template>
  <div class="left-menu">
      <scroll class="content">
        <ul>
          <li 
          v-for="(item,index) in leftMenuItem" 
          :key="index" class="left-menu-item"
          :class="{menuactive:currentIndex === index}"
          @click="menuClick(index)">
            {{item.title}}
          </li>
        </ul>
      </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  components:{
    Scroll
  },
  props:{
    leftMenuItem:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    menuClick(index){
      this.currentIndex = index
      this.$emit('menuClick',index)
    }
  }
}
</script>

<style scoped>
  .content{
    height: calc(100% - 93px);
  }

  .left-menu{
    height: 100vh;
    width: 25vw;
    background-color: #fff;
  }

  .left-menu-item{
    height: 45px;
    line-height: 45px;
    padding: 0 6px;
    text-align: center;
    background-color: rgb(246,246,246);
  }

  .menuactive{
    background-color: #fff;
    border-left: 2px solid rgb(241, 82, 82);
  }
</style>