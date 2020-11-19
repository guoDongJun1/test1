<template>
    <div class="pop-box">
<!--      调用显示商品图的组件-->
      <HomeGoods :goods-arr="popImg"></HomeGoods>
      <PagingBut @itme-click="popclick" :pagename="popname"></PagingBut>
    </div>
</template>

<script>
  import {getPagingData} from "../../../network/home";
  import HomeGoods from "../homeGoods/HomeGoods";
  import PagingBut from "@/components/common/pagingBut/PagingBut";

  export default {
        name: "Popular",
    data(){
          return{
            popImg:[],
            popname:'pop'
          }
    },
    components:{
      HomeGoods,
      PagingBut
    },
    methods:{
      popclick(item){
        this.popImg.splice(0,this.popImg.length,...item)
        document.body.scrollTop=0
        document.documentElement.scrollTop=0
        // console.log(item)
      }
    },
    created() {

      getPagingData('pop',1).then(res=>{
        for (let i=0;i<res.data.list.length;i++){
          let myArr={}
          myArr.img=res.data.list[i].show.img
          myArr.title=res.data.list[i].title
          this.popImg.push(myArr)
        }
      })
    }
  }
</script>

<style scoped>
  .pop-box{
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 10vh;
  }
</style>
