<template>
    <div>
      <NavBar class="home-nav">
        <template v-slot:center>
          购物街
        </template>
      </NavBar>
      <Swiper :myimg="result"></Swiper>
      <Icons :ic-img="myarr"></Icons>
      <Icons :ic-img="myarr"></Icons>
      <Classify></Classify>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import Swiper from "components/common/Swiper";
  import Icons from "../../components/common/Icons";
  import Classify from "../../components/common/homeClassify/Classify";

  export default {
        name: "Home",
      components:{
        NavBar,
        Swiper,
        Icons,
        Classify
      },
    data(){
          return{
            result:[],
            myarr:[]
          }
    },
    created() {
      getHomeMultidata().then(res=> {
        // console.log(res)
        for (let i=0;i<res.data.banner.list.length;i++){
          this.result.push(res.data.banner.list[i].image)
          // console.log(this.result[i])
        }

        for (let i=0;i<res.data.recommend.list.length;i++){
          let icArr={}
          icArr.ima=res.data.recommend.list[i].image
          icArr.texts=res.data.recommend.list[i].title
          this.myarr.push(icArr)
          // console.log(icArr)
        }
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: #fff;
}
</style>
