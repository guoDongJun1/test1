<template>
    <div  @click="itemClick">
      <slot name="ify-name"></slot>
    </div>
</template>

<script>
    export default {
        name: "Classify-item",
      props:{
          path:String,
          ifyColor:{
            type:String,
            default:'deesSkyblue'
          }
      },
      computed:{
          myfun(){
            return {color:this.ifyColor}
          }
      },
      methods:{
        itemClick(){
          console.log("这是path："+this.path)
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>

</style>
