<template>
  <div class="toplinks">
    <span class="back"><a href="#" @click="toHome">{{leftTip}}</a></span>
    <span class="setIn"><a href="#" @click="toLogin">{{rightTip}}</a></span>
  </div>
</template>

<script>
export default {
  name: "TopLinks",
  props: {
    leftTip: String,
    rightTip: String,
  },
  methods: {
    toHome() {
      this.$router.push("/home")
    },
    toLogin() {
      if(this.rightTip == "注册")
        this.$router.push("/register")
      else
        this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
a{
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
}
a:hover{
  color: #105cb6;
  border-bottom: 2px solid #105cb6;
}

.toplinks{
  width: 500px;
  height: 30px;
  margin: 20px auto 0 auto;
  /*background-color: #105cb6;*/
  line-height: 30px;
}
.toplinks .back{
  float: left;
  display: block;
  height: 30px;
  font-weight: 100;
}
.toplinks .setIn{
  float: right;
  display: block;
  height: 30px;
  font-weight: 100;
}
</style>