<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
/**
 * 该组件为商品列表展示组件，在多个页面中会被使用，且与业务相关，故放在components/content组件中。
 */
import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap; /* flex + wrap，根据子元素的固定长度，来决定当前元素每行显示几个子元素*/
    justify-content: space-around; /* space-around，将每行的子元素均等分*/

    padding: 2px;
  }


</style>
