<template>
  <div class="registerMain">
    <div class="logo">
      <img src="@/assets/img/webLogo.png" alt="">
    </div>
    <!--注册输入框-->
    <register-div id="username" placeholder="用户名" :error-text="username_errorText"
                  :is-show=usernameError @onfocus="username_onfocus" @onblur="username_onblur"/>
    <register-div id="password" placeholder="设置密码" :error-text="password_errorText"
                  :is-show=passwordError @onfocus="password_onfocus" @onblur="password_onblur"/>
    <register-div id="password2" placeholder="确认密码" :error-text="password2_errorText"
                  :is-show=password2Error @onfocus="password2_onfocus" @onblur="password2_onblur"/>
    <register-div id="email" placeholder="邮箱地址" :error-text="email_errorText"
                  :is-show=emailError @onfocus="email_onfocus" @onblur="email_onblur" />
    <!--“同意用户协议”-->
    <div class="deal">
      注册即同意
      <a href="#" @click="toAbout">《abababa》协议</a>
    </div>
    <!--“注册”-->
    <input type="submit" class="ensure" value="确定" @click.prevent="">
  </div>
</template>

<script>
import RegisterDiv from "@/components/common/registerDiv";
export default {
  name: "registerMain",
  components: {RegisterDiv},
  data() {
    return {
      usernameError: false,
      passwordError: false,
      password2Error: false,
      emailError: false,

      username_errorText: '用户名不能为空啊喂',
      password_errorText: '密码不合格',
      password2_errorText: '重输一遍也能错?',
      email_errorText: '邮箱格式不对啊喂',

      password: String,
    }
  },
  methods: {
    //用户名 一栏的合法性检测
    username_onblur(value) {
      let name = value;
      //去除前后空白 name=name.trim();  但js本身未提供trim这个方法
      function trim(str){ //删除左右两端的空格  (^\s*)删左边 (\s*$)删右边
        return str.replace(/(^\s*)|(\s*$)/g, "");
      }
      name=trim(name);
      if(name === "")
        this.usernameError = true;
      else {
        if(name.length<6||name.length>18) {
          this.username_errorText = "用户名长度不合法"
          this.usernameError = true;
        }
        else {
          //用户名长度合法，继续判断是否含有特殊字符
          let regExp=/^[a-zA-Z0-9_-]{4,16}$/;
          let ok=regExp.test(name);
          if(!ok)
           this.username_errorText="用户名不允许出现非法字符";
        }
      }
    },
    username_onfocus() {
      this.usernameError = false;
    },

    //密码 一栏的合法性检测
    password_onfocus() {
      this.passwordError = false;
    },
    password_onblur(value) {
      let word=value;
      if(!word){
        this.password_errorText = "密码不可以为空哦";
        this.passwordError = true;
      }
      else{
        let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(!reg.test(word)){
          this.password_errorText = "密码至少包含数字和英文，长度6-20!!";
          this.passwordError = true;
        }
      }
      this.password = value;
    },

    //密码复查 一栏的合法性检测
    password2_onfocus() {
      this.password2Error = false;
    },
    password2_onblur(value) {
      if(this.password === "") {
        this.password2Error = false;
      }
      else {
        if(value === "") {
          this.email_errorText = "不能为空";
          this.password2Error = true;
        }
        else {
          let password2 = value;
          if(this.password !== password2){
            this.email_errorText = "重输一遍也能错?";
            this.password2Error = true;
          }
          else
            this.password2Error = false;
        }
      }
    },

    //邮箱 一栏的合法性检测
    email_onfocus() {
      this.emailError = false;
    },
    email_onblur(value) {
      let email = value
      if(email === ""){
        this.emailError = true;
        this.email_errorText = "邮箱不能为空";
      }
      let reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(!reg.test(email))
        this.emailError = true;
    },

    toAbout() {
      this.$router.push("/about")
    }
  }
}
</script>

<style scoped>
  .registerMain {
    width: 500px;
    margin:0 auto;
    padding-bottom: 30px;
    background-color: white;
  }
  .registerMain .logo{
    line-height:180px;
    width: 440px;
    height: 100px;
    padding-left:60px ;
    /*background-color: #b3d4fc;*/
  }
  /*剩余 协议部分 和 确认按钮 */
  .deal{
    height: 18px;
    margin: 20px auto;
    line-height: 18px;
    padding-left: 130px;
    /*background-color:#105cb6;*/
  }
  .deal a{
    color: #ff552e;
    font-size: 15px;
    border-bottom: #ff552e;
  }
  .ensure {
    display: block;
    width: 355px;
    height: 42px;
    margin-left:60px;
    font-size: 14px;
    line-height: 42px;
    color: white;
    background-color: #ff552e;
  }
</style>