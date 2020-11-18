<template>
  <div>
    <NavBar class="category-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <CategoryMenu></CategoryMenu>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import CategoryMenu from "@/components/common/categoryMenu/CategoryMenu";

    export default {
        name: "Category",
      components:{
        NavBar,
        CategoryMenu
      }
    }
</script>

<style scoped>
  .category-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
