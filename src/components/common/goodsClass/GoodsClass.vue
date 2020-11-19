<template>
    <div class="goods-box">
<!--      商品分类图组件-->
      <div v-for="item in goodsMes">
        <div>
          <img :src="item.image" alt="">
        </div>
        <div>
          <a href="javascript:;">{{item.title}}</a>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: "GoodsClass",
    data(){
      return{
        goodsArr:[]
      }
    },
    props:{
      goodsMes:{
        type:Array,
        default:()=>[]
      }
    }
    }
</script>

<style scoped>
  .goods-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .goods-box>div{
    width: 20vw;
    margin: 2vh 5vw 0 5vw;
  }
  .goods-box img{
    width: 100%;
  }
  .goods-box a{
    display: inline-block;
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
