<template>
  <div class="swiper-container swi-box">
    <div class="swiper-wrapper box1">
      <div class="swiper-slide box1">
        <img :src="myimg[0]" alt="">
      </div>
      <div class="swiper-slide box1">
        <img :src="myimg[1]" alt="">
      </div>
      <div class="swiper-slide box1">
        <img :src="myimg[2]" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

    export default {
        name: "Swiper",
      updated() {
          let mySwiper=new Swiper('.swiper-container',{
                  autoplay:true,
                  speed:3000
          })
      },
      props:{
          myimg:{
            type: Array,
            dafault:()=>[]
          }
      }
    }
</script>

<style scoped>
  .swi-box{
    margin-top: 44px;
  }
  .swiper-container{
    width: 100%;
    height: 200px;
  }
  .box1>img{
    width: 100%;
  }
</style>
