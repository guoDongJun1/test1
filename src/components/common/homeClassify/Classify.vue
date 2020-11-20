<template>
    <div class="ify-box">
      <div class="ify-box2">
        <router-link to="/home/popular">
          <ClassifyItem :item-color="popColor" @click="myfun(1)">
            <template v-slot:itemText>流行</template>
          </ClassifyItem>
        </router-link>
        <router-link to="/home/newpattern">
          <ClassifyItem :item-color="newColor" @click="myfun(2)">
            <template v-slot:itemText>新款</template>
          </ClassifyItem>
        </router-link>
        <router-link to="/home/selected">
          <ClassifyItem :item-color="sellColor" @click="myfun(3)">
            <template v-slot:itemText>精选</template>
          </ClassifyItem>
        </router-link>
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
      data(){
        return{
          popColor:'true',
          newColor:'false',
          sellColor:'false',
          textColor:'deesSkyblue'
        }
      },
      components:{
        ClassifyItem
      },
      methods:{
        myfun(num){
          if (num==1){
            this.popColor='true'
            this.newColor='false'
            this.sellColor='false'
          }else if (num==2){
            this.popColor='false'
            this.newColor='true'
            this.sellColor='false'
          }else {
            this.popColor='false'
            this.newColor='false'
            this.sellColor='true'
          }
          // console.log('执行了')
        }
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
