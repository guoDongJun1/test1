<template>
    <div class="item-box">
      <a href="javascript:;" :style="colorChange">
        <slot name="itemText"></slot>
      </a>
    </div>
</template>

<script>
    export default {
      name: "Classify-item",
      props:{
        itemColor: {
          type:String,
          default: 'false'
        }
      },
      computed:{
        colorChange(){
          if(this.itemColor=='true'){
            return {color:'#ff8198',borderBottom:'1px solid #ff8198'}
          }else {
            return {color:'#666'}
          }
        }
      }
    }
</script>

<style scoped>
.item-box>a{
  display: inline-block;
}
</style>
