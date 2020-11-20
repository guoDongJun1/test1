<template>
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    display: flex;
    line-height: 44px;
    /*background: lightblue;*/
    position: fixed;
    top:0px;
    z-index: 2;
  }
  .left,
  .right{
    width: 60px;
    /*background: lightcoral;*/
  }
  .center{
    flex: 1;
    /*background: red;*/
    color: #fff;
    text-align: center;
  }
</style>
