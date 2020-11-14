<template>
  <div id="app">
    <nav-area/>
    <!--   keep-live也是vue内置的一个组件，使被包含的组件保留状态，或避免重新渲染-->
    <!--   keep-live里的router-view组件里所有路径匹配的视图组件都被缓存 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import NavArea from "@/views/NavArea";

export default {
  name: "App",
  components: {NavArea},
  data() {
    return{

    }
  },
  methods: {

  },
}
</script>
<style lang="scss">
  @import "assets/css/base.css";
</style>
