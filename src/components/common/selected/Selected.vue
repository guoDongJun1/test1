<template>
  <div class="selected-box">
    <HomeGoods :goods-arr="selectedArr"></HomeGoods>
    <PagingBut @itme-click="selectedclick" :pagename="selectedname"></PagingBut>
  </div>
</template>

<script>
  import {getPagingData} from "../../../network/home";
  import HomeGoods from "../homeGoods/HomeGoods";
  import PagingBut from "@/components/common/pagingBut/PagingBut";

    export default {
        name: "Selected",
      data(){
          return{
            selectedArr:[],
            selectedname:'sell'
          }
      },
      components:{
        HomeGoods,
        PagingBut
      },
      created() {
        getPagingData('sell',1).then(res=>{
          for (let i=0;i<res.data.list.length;i++){
            let myArr={}
            myArr.img=res.data.list[i].show.img
            myArr.title=res.data.list[i].title
            this.selectedArr.push(myArr)
          }
        })
      },
      methods:{
        selectedclick(item){
          this.selectedArr.splice(0,this.selectedArr.length,...item)
          document.body.scrollTop=0
          document.documentElement.scrollTop=0
        }
      }
    }
</script>

<style scoped>
  .selected-box{
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 10vh;
  }
</style>
