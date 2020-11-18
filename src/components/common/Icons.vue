<template>
    <div class="ic-box">
      <a href="javascript:;" v-for="item in icImg">
        <img :src="item.ima" alt="">
        <span>{{item.texts}}</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "Icons",
      props:{
          icImg:{
            type:Array,
            default:()=>[]
          }
      }
    }
</script>

<style scoped>
  .ic-box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .ic-box>a{
    display: inline-block;
    width: 10vh;
  }
  .ic-box>a>img{
    width: 100%;
  }
  .ic-box>a>span{
    font-size: 14px;
  }
</style>
