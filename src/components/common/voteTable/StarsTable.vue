<template>
  <div class="StarsTable">
    <stars @getStartNum = "setStarNum0" :option="$store.state.vote_option[0]"/>
    <stars @getStartNum = "setStarNum1" :option="$store.state.vote_option[1]"/>
    <stars @getStartNum = "setStarNum2" :option="$store.state.vote_option[2]"/>
    <stars @getStartNum = "setStarNum3" :option="$store.state.vote_option[3]"/>
  </div>
</template>

<script>
import Stars from "@/components/common/voteTable/Stars";
export default {
  name: "StarsTable",
  components: {Stars},
  methods: {
    // setStarNum(option, starNum) {
    //   // let index = this.$store.getters.getOptionIndex(option);
    //   this.$store.state.vote_poll[option] = starNum;
    //   console.log("口味得分：" + this.$store.state.vote_poll[index]);
    // },

    setStarNum0(starNum) {
      this.$store.state.vote_poll[0] = starNum;
      console.log("口味得分：" + this.$store.state.vote_poll[0]);
    },
    setStarNum1(starNum) {
      this.$store.state.vote_poll[1] = starNum;
      console.log("卫生得分：" + this.$store.state.vote_poll[1]);
    },
    setStarNum2(starNum) {
      this.$store.state.vote_poll[2] = starNum;
      console.log("饭量得分：" + this.$store.state.vote_poll[2]);
    },
    setStarNum3(starNum) {
      this.$store.state.vote_poll[3] = starNum;
      console.log("态度得分：" + this.$store.state.vote_poll[3]);
    },
  },
}
</script>

<style scoped>
.StarsTable {
  position: relative;
  /*margin: 20px auto 0;*/
  width: 300px;
  height: 210px;
  border: 1px solid yellow;
}
</style>