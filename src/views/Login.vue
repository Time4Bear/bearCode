<template>
  <div class="login">
    <top-links left-tip="爪巴回首页" right-tip="注册"/>
    <login-main/>
  </div>
</template>

<script>
import TopLinks from "@/components/common/TopLinks";
import LoginMain from "@/components/content/login/loginMain";
export default {
  name: "Login",
  components: {LoginMain, TopLinks}
}
</script>

<style scoped>
  .login {
    position: absolute;
    width: 100%;
    height: 800px;
    margin-top: 60px;
    background-color: #ffff00;

    background-image: url("../assets/img/register_img/njtechNight.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
  }
</style>