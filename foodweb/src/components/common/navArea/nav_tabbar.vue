<template>
  <div class="nav_tabbar">
    <div class="nav_tabbar_item">
      <router-link to="/login">登录</router-link>
    </div>
    <div class="nav_tabbar_item">
      <router-link to="/register">注册</router-link>
    </div>
    <div class="nav_tabbar_item">
      <router-link to="/about">关于我们</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav_tabbar"
}
</script>

<style scoped>
  .nav_tabbar {
    display: flex;
    float: right;
    padding-right: 29px;
    width: 250px;
    height: 49px;
    background-color: #f6f6f6;
  }
  .nav_tabbar_item {
    flex: 1;
    height: 49px;
    line-height: 49px;
    text-align: center;
  }
  .nav_tabbar_item a {
    display: block;
    width: 100%;
  }
  .nav_tabbar_item a:hover {
    background-color: orange
  }
</style>