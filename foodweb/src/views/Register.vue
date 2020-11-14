<template>
  <div class="register">
    <top-links left-tip="爪巴回首页" right-tip="已经注册了？去登录啊"/>
    <register-main/>
  </div>
</template>

<script>
import TopLinks from "@/components/common/TopLinks";
import RegisterMain from "@/components/content/register/registerMain";
export default {
name: "Register",
  components: {RegisterMain, TopLinks}
}
</script>

<style scoped>
.register {
  position: absolute;
  width: 100%;
  height: 800px;
  margin-top: 60px;

  background-image: url("../assets/img/register_img/njtechNight.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  /*background-color: #b3d4fc;*/
}

</style>