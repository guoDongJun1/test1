<template>
  <div class="goods-box">
    <div v-for="item in goodsArr">
      <router-link :to="'/commodity/'+item.shopId+'/'+goodsnum">
        <div class="imaDiv">
          <img :src="item.img" alt="">
        </div>
        <a href="javascript:;">{{item.title}}</a>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HomeGoods",
      props:{
        goodsArr:{
          type:Array,
          default: ()=>[]
        },
        goodsnum:{
          type: Number,
          default:1
        }
      }
    }
</script>

<style scoped>
  .goods-box{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .goods-box>div{
    width: 40vw;
  }
  .goods-box img{
    width: 100%;
  }
  .imaDiv{
    overflow: hidden;
    border-radius: 8px;
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
