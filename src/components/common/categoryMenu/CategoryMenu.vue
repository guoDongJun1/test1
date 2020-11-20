<template>
    <div class="me-box">
      <div class="me-box1">
        <ul v-for="(item,index) in mytitle">
          <li @click="menuClick(index)">{{item.title}}</li>
        </ul>
      </div>
      <GoodsClass :goods-mes="maitKey"></GoodsClass>
    </div>
</template>

<script>
  import {getCategoryMenu,getGoodsClass} from "../../../network/home";
  import GoodsClass from "../goodsClass/GoodsClass";

  export default {
        name: "CategoryMenu",
    data(){
      return{
        mytitle:[],
        maitKey:[]
      }
    },
    components:{
      GoodsClass
    },
    created() {
      getCategoryMenu().then(res=>{
        for (let i=0;i<res.data.category.list.length;i++){
          let myArr={}
          myArr.maitKey=res.data.category.list[i].maitKey
          myArr.title=res.data.category.list[i].title
          this.mytitle.push(myArr)
        }
      })
      getGoodsClass(3627).then(res=>{
        for (let i=0;i<res.data.list.length;i++){
          let myArr={}
          myArr.image=res.data.list[i].image
          myArr.title=res.data.list[i].title
          this.maitKey.push(myArr)
        }
      })
    },
    methods:{
      // 点击获取商品分类图
      menuClick(index){
        this.maitKey.splice(0,this.maitKey.length)
        getGoodsClass(this.mytitle[index].maitKey).then(res=>{
          for (let i=0;i<res.data.list.length;i++){
            let myArr={}
            myArr.image=res.data.list[i].image
            myArr.title=res.data.list[i].title
            this.maitKey.push(myArr)
          }
        })

      }
    }
  }
</script>

<style scoped>
.me-box{
  width: 100%;
  margin-top: 44px;
  margin-bottom: 10vh;
  display: flex;
  justify-content: flex-start;
}
.me-box1{
  width: 30vw;
  text-align: center;
}
.me-box1>ul{
  list-style-type: none;
}
  .me-box1>ul>li{
    width: 30vw;
    height: 6vh;
    background-color: gainsboro;
    color: grey;
    line-height: 6vh;
    border-bottom: 1px solid ghostwhite;
  }
</style>
