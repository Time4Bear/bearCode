<template>
  <div class="registerText">
    <div class="message">
      <input type="text" :placeholder="placeholder" v-model= "textValue"
             @focus="onfocus()" @blur="onblur()">
    </div>
    <div class="error" v-if=isShow>
      <img src="@/assets/img/register_img/warning.png" alt="">
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerDiv",
  data() {
    return {
      textValue: '',
    }
  },
  props:{
    placeholder: String,
    errorText: String,
    isShow: Boolean,
  },
  methods: {
    onfocus() {
      this.$emit("onfocus", this.textValue)
    },
    onblur() {
      this.$emit("onblur", this.textValue)
    }
  }
}
</script>

<style scoped>
.message{
  width: 500px;
  height: 67px;
  line-height: 67px;
  /*background-color: #ffff00;*/
}
.error{
  width: 500px;
  height: 14px;
  /*display: none;*/
  /*background-color: #b3d4fc;*/
}
.message input{
  width: 350px;
  height: 41px;
  margin-left: 60px;
  font-size: 15px;
  border: 2px solid #EBEBEB;
}
.error img{
  float: left;
  margin-left: 60px;
}
.error p{
  float: left;
  line-height: 14px;
  font-size: 14px;
  color: red;
}
</style>