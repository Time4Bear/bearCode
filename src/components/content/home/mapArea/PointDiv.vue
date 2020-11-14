<template>
  <div class="pointdiv" @click="switchto(toCanteen)">
<!--    <div class="sanjiao"></div>-->
    {{toCanteen}}
  </div>
</template>

<script>
export default {
  name: "PointDiv",
  props: {
    toCanteen: String,
  },
  methods: {
    switchto(name) {
      this.$store.commit('switchCanteen', name)
    }
  }
}
</script>

<style scoped>
  .pointdiv {
    position: absolute;
    width: 40px;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: yellow;
  }
  .pointdiv::before {
    /*width: 5px;*/
    /*height: 5px;*/
    /*content: none;*/
    /*border: 30px solid transparent;*/
    /*background-color: #0fa400;*/
  }
</style>