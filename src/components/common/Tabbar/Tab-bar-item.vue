<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        <img src="../../assets/img/2.png" alt="">-->
<!--        <div>首页</div>-->
        <slot v-if="!isActived" name="slot-img"></slot>
        <slot v-else name="slot-active-img"></slot>
        <div :style="activeStyle">
            <slot name="slot-text" ></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Tab-bar-item",
        data(){
            return{
                //isActived:true
            }
        },
        computed:{
          isActived(){
              return this.$route.path.indexOf(this.path)!==-1
          },
            activeStyle(){
              return this.isActived?{color:this.activeColor}:{}
            }
        },
        props:{
            path:String,
            activeColor: {
                type:String,
                default:'deesSkyblue'
            }
        },
        methods:{
            itemClick(){
                // console.log('klk')
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    /*@import "../../assets/css/base.css";*/
    .tab-bar-item{
        text-align: center;
        height: 49px;
    }
</style>
