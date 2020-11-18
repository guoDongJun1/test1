<template>
    <div class="me-box">
      <div class="me-box1">
        <ul v-for="item in mytitle">
          <li>{{item}}</li>
        </ul>
      </div>

    </div>
</template>

<script>
  import {getCategoryMenu} from "../../../network/home";

  export default {
        name: "CategoryMenu",
    data(){
      return{
        mytitle:[]
      }
    },
    created() {
          getCategoryMenu().then(res=>{
            for (let i=0;i<res.data.category.list.length;i++){
              this.mytitle.push(res.data.category.list[i].title)
            }
            // console.log(res.data.category.list[0].title)
          })
    }
  }
</script>

<style scoped>
.me-box{
  width: 100%;
}
.me-box1{
  width: 20vw;
  text-align: center;
}
.me-box1>ul{
  list-style-type: none;
}
  .me-box1>ul>li{
    background-color: gainsboro;
    color: grey;
    border-bottom: 1px solid ghostwhite;
  }
</style>
