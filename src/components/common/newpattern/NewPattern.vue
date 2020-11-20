<template>
  <div class="new-box">
    <HomeGoods :goods-arr="newArr" :goodsnum="newindex"></HomeGoods>
    <PagingBut @itme-click="newclick" :pagename="newname"></PagingBut>
  </div>
</template>

<script>
  import {getPagingData} from "../../../network/home";
  import HomeGoods from "../homeGoods/HomeGoods";
  import PagingBut from "@/components/common/pagingBut/PagingBut";

    export default {
        name: "NewPattern",
      data(){
          return{
            newArr:[],
            newname:'new',
            newindex:1
          }
      },
      components:{
        HomeGoods,
        PagingBut
      },
      created() {
        getPagingData('new',1).then(res=>{
          for (let i=0;i<res.data.list.length;i++){
            let myArr={}
            myArr.img=res.data.list[i].show.img
            myArr.title=res.data.list[i].title
            myArr.shopId=res.data.list[i].shopId
            this.newArr.push(myArr)
          }
        })
      },
      methods:{
        newclick(item,index){
          this.newArr.splice(0,this.newArr.length,...item)
          this.newindex=index
          document.body.scrollTop=0
          document.documentElement.scrollTop=0
          // console.log(item)
        }
      }
    }
</script>

<style scoped>
.new-box{
  width: 100%;
  margin-top: 1vh;
  margin-bottom: 10vh;
}
</style>
