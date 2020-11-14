<template>
  <div class="navarea">
<!--    左侧logo-->
    <nav_logo :title="logo.logo_title" :href="logo.logo_href" :src="logo.logo_src"/>
<!--    右侧登录状态-->
    <nav_login_state/>
<!--    右侧列表导航-->
    <nav_tabbar/>
  </div>
</template>

<script>
import nav_logo from "@/components/common/navArea/nav_logo";
import nav_tabbar from "@/components/common/navArea/nav_tabbar";
import nav_login_state from "@/components/common/navArea/nav_login_state";

export default {
  name: "navArea",
  components: {nav_logo, nav_tabbar, nav_login_state},
  data() {
    return {
      logo: {
        logo_title: "Just For Better Food",
        logo_href: "home",
        logo_src: "@/assets/img/webLogo.png"
      },
    }
  }
}
</script>

<style scoped>
  .navarea {
    min-width: 1000px;
    position: fixed !important;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100%;
    height: 49px;
    background-color: #0fa400;
    box-shadow: 0 1px 1px rgba(100,100,100,0.8);    /*  往右下为正   */
  }
</style>