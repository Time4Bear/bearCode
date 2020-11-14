<template>
  <div class="TextareaButton">
    <div class="postscript">
      <textarea :maxlength= "this.$store.state.referenceLength" placeholder="备注：" v-model="beizhu" />
      <span>{{beizhulen}}/{{ this.$store.state.referenceLength }}</span>
    </div>

    <div class="buttons">
      <input type="submit" @click="tijiao" value="提交">
      <input type="button" @click="qingchu" value="清除">
    </div>
  </div>
</template>

<script>
export default {
  name: "TextareaButton",
  data() {
    return {
      beizhu:"",
      beizhulen:0,
    }
  },
  methods: {
    tijiao() {
      this.beizhu = '';
    },
    qingchu() {
      this.beizhu = '';
    }
  },
  watch: {
    //实时监控用户输入的字数
    beizhu() {
      this.beizhulen = this.beizhu.length;
      this.$store.state.reference = this.beizhu;
    },
  }
}
</script>

<style scoped>
.TextareaButton {
  position: relative;
  width: 300px;
  height: 150px;
  background-color: yellow;
}
.postscript {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
}
.postscript textarea {
  width: 240px;
  height: 60px;
  resize: none;    /*放置拖拽文本域*/
  border-radius: 10px;
  border: none;
}

.buttons {
  position: absolute;
  width: 300px;
  bottom: 17px;
  text-align: center;
}
.buttons input { /* 按钮美化 */
  width: 70px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 8px; /* 边框半径 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
  background: #1E90FF; /* 背景颜色 */
  /*left: 30px;*/
}
.buttons input:hover { /* 鼠标移入按钮范围时改变颜色 */
  background: #5599FF;
}
.buttons input:nth-child(0) {
  left: 20px;
}
.buttons input:nth-child(1) {
  margin-right: 20px;
}
</style>