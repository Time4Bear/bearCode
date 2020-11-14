<template>
  <div class="about">
    <h1>我是关于我们,test</h1>
    <test-area/>
  </div>
</template>

<script>
import TestArea from "@/components/content/about/testArea";
export default {
  name: "About",
  components: {TestArea}
}
</script>

<style scoped>
  .about {
    width: 100%;
    height: 1000px;
    margin-top: 60px;
    /*background-color: #0000ff;*/
  }
</style>