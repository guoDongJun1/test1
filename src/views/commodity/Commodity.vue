<template>
    <div class="com-box">
<!--      这是商品详情界面-->
      <div class="com-nav">
        <div class="text1">商品</div>
        <div>参数</div>
        <div>评论</div>
        <div>推荐</div>
      </div>
    </div>
</template>

<script>

    export default {
      name: "Commodity",
      created() {
        console.log(this.$route.params.shopId)
        console.log(this.$route.params.num)
      }
    }
</script>

<style scoped>
  .com-box{
    width: 100%;
    height: 100vh;
    /*background: yellow;*/
    /*position: fixed;*/
    /*z-index: 1;*/
  }
  .com-nav{
    width: 100%;
    line-height: 44px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
  }
  .com-nav>div{
    margin: 0 2vw 0 2vw;
  }
  .text1{
    color: #ff8198;
  }
</style>
