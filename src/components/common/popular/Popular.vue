<template>
    <div class="pop-box">
      <div class="pop-box1">
        <div v-for="item in popImg">
          <div class="imaDiv">
            <img :src="item.ima" alt="">
          </div>
          <a href="javascript:;">{{item.texts}}</a>
        </div>
      </div>
      <PagingBut></PagingBut>
    </div>
</template>

<script>
  import {getHomeBigdata} from "../../../network/home";
  import PagingBut from "@/components/common/pagingBut/PagingBut"

  export default {
        name: "Popular",
    data(){
          return{
            popImg:[]
          }
    },
    components:{
      PagingBut
    },
    created() {
      getHomeBigdata().then(res=>{
        for (let i=0;i<res.data.list.length;i++){
          let myArr={}
          myArr.ima=res.data.list[i].show.img
          myArr.texts=res.data.list[i].title
          this.popImg.push(myArr)
        }
        // console.log(this.popImg[0])
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
  .pop-box1{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .pop-box1>div{
    width: 40vw;
  }
  .pop-box1 img{
    width: 100%;
  }
  .imaDiv{
    overflow: hidden;
    border-radius: 8px;
  }
  .pop-box1 a{
    display: inline-block;
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
