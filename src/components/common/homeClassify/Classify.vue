<template>
    <div class="ify-box">
      <div class="ify-box2">
        <router-link to="/home/popular">流行</router-link>
        <router-link to="/home/newpattern">新款</router-link>
        <router-link to="/home/selected">精选</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import ClassifyItem from './Classify-item'

    export default {
        name: "Classify",
      components:{
        ClassifyItem
      }
    }
</script>

<style scoped>
.ify-box{
  width: 100%;
  margin-top: 3vh;
}
.ify-box2{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/*.ify-box>div{*/
/*  width: 30vh;*/
/*  text-align: center;*/
/*}*/
</style>
