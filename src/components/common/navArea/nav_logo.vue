<!--导航栏中左侧放置logo-->
<template>
  <div class="nav_logo">
    <a :href="href">
      <img :title="title" src="@/assets/img/webLogo.png">
    </a>
  </div>
</template>

<script>
export default {
  name: "nav_logo",
  data() {
    return {
    }
  },
  props: {
    href: String,
    title: String,
    src: String,
  }
}
</script>

<style scoped>
  .nav_logo {
    float: left;
    width: 314px;
    height: 100%;
    margin-left:60px ;
    background-color: #b3d4fc;
  }
  .nav_logo a {
    border-bottom: none;
  }
  .nav_logo img{
    height: 100%;
    background-image: url("../../../assets/img/webLogo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 100%;
  }
</style>