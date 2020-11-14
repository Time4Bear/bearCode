<template>
  <div class="loginMain">
    <div class="logo">
      <img src="@/assets/img/webLogo.png" alt="">
    </div>
    <register-div id="loginname" placeholder="用户名" :error-text="loginname_errorText"
                  :is-show=loginnameError @onfocus="loginname_onfocus" @onblur="loginname_onblur"/>
    <register-div id="loginword" placeholder="密码" :error-text="loginword_errorText"
                  :is-show=loginwordError @onfocus="loginword_onfocus" @onblur="loginword_onblur"/>

    <input type="submit" class="ensure" value="确定" @click.prevent="">
  </div>
</template>

<script>
import registerDiv from "@/components/common/registerDiv";
export default {
  name: "loginMain",
  components: {registerDiv},
  data() {
    return {
      loginnameError: false,
      loginwordError: false,

      loginname_errorText: '用户名不能为空啊喂',
      loginword_errorText: '密码不合格',
    }
  },
  methods: {
    //用户名 一栏的合法性检测
    loginname_onblur(value) {
      let name = value;
      //去除前后空白 name=name.trim();  但js本身未提供trim这个方法
      function trim(str){ //删除左右两端的空格  (^\s*)删左边 (\s*$)删右边
        return str.replace(/(^\s*)|(\s*$)/g, "");
      }
      name=trim(name);
      if(name === "")
        this.loginnameError = true;
      else {
        if(name.length<6||name.length>18) {
          this.loginname_errorText = "用户名长度不合法"
          this.loginnameError = true;
        }
        else {
          //用户名长度合法，继续判断是否含有特殊字符
          let regExp=/^[a-zA-Z0-9_-]{4,16}$/;
          let ok=regExp.test(name);
          if(!ok)
            this.loginname_errorText="用户名不允许出现非法字符";
        }
      }
    },
    loginname_onfocus() {
      this.loginnameError = false;
    },

    //密码 一栏的合法性检测
    loginword_onfocus() {
      this.loginwordError = false;
    },
    loginword_onblur(value) {
      let word=value;
      if(!word){
        this.loginword_errorText = "密码不可以为空哦";
        this.loginwordError = true;
      }
      else{
        let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(!reg.test(word)){
          this.loginword_errorText = "密码至少包含数字和英文，长度6-20!!";
          this.loginwordError = true;
        }
      }
      this.password = value;
    },
  },
}
</script>

<style scoped>
  .loginMain {
    width: 500px;
    margin: 0 auto;
    padding-bottom: 30px;
    background-color: white;
  }
  .loginMain .logo{
    line-height:180px;
    width: 440px;
    height: 100px;
    padding-left:60px ;
    /*background-color: #b3d4fc;*/
  }
  .ensure {
    display: block;
    width: 355px;
    height: 42px;
    margin-left:60px;
    margin-top: 30px;
    font-size: 14px;
    line-height: 42px;
    color: white;
    background-color: #ff552e;
  }
</style>