<template>
    <div class="pag-box">
      <ul>
        <li v-for="item in 6" @click="getMyData(item)">{{item}}</li>
      </ul>
    </div>
</template>

<script>
  import {getPagingData} from "../../../network/home";

  export default {
        name: "PagingBut",
    data(){
          return{}
    },
    props:{
          pagename:{
            type:String,
            default:"pop"
          }
    },
      methods:{
          getMyData(index){
            let pagData=[]
            getPagingData(this.pagename,index).then(res=>{
              for (let i=0;i<res.data.list.length;i++){
                let obj={}
                obj.img=res.data.list[i].show.img
                obj.title=res.data.list[i].title
                obj.shopId=res.data.list[i].shopId
                pagData.push(obj)
              }
              // console.log(pagData)
              this.$emit('itme-click',pagData,index)
            })

          }
      }
    }
</script>

<style scoped>
.pag-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.pag-box>ul{
  display: inline-block;
  list-style-type: none;
}
.pag-box>ul:after{
  content: "";
  display: block;
  clear: both;
}
.pag-box>ul>li{
  width: 5vw;
  height: 4vh;
  float: left;
  background-color: gainsboro;
  text-align: center;
  line-height: 4vh;
  margin: 0 2px 0 2px;
}
</style>
