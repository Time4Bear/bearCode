<template>
  <div class="stars">
    <div class="vote_name">
      {{option}}
    </div>
    <div class="vote_stars">
      <li v-for="(item, index) in list" @click="clickStars(index)" :class="{ turnRed: (index < starNum) }">
        &#9733;
      </li>
    </div>
    <div class="vote_desc">
      {{rateScoreText}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Stars",
  props: {
    option: String,
  },
  data () {
    return {
      rateScoreText: '',
      rateScoreDesc: ['非常不满意', '比较差', '勉强能吃', '针不撮', '无可挑剔'],
      list: [0,1,2,3,4],
      starNum: 0,
    }
  },
  methods: {
    clickStars(i) {
      this.rateScoreText = this.rateScoreDesc[i]
      this.starNum = i + 1
      // console.log('点击了' + this.starNum);
      this.$emit('getStartNum', i+1);

      // this.$emit('getStarNum', this.$store.getters.getOptionIndex(this.$props.option), i+1)
      // this.$emit('getStarNum', this.$props.option, i+1)
    },
  }
}
</script>

<style scoped>
  .stars {
    width: 300px;
    height: 50px;
    text-align: center;
  }
  .vote_name {
    float: left;
    width: 40px;
    height: 100%;
    line-height: 60px;
  }
  .vote_stars {
    float: left;
    width: 180px;
    height: 100%;
    line-height: 50px;
  }
  .vote_desc {
    float: left;
    width: 80px;
    height: 100%;
    text-align: center;
    line-height: 60px;
  }
  .stars li{
    list-style:none;
    float:left;
    font-size:30px;
    margin:5px;
    color:#ccc;
    cursor:pointer;
  }
  .vote_name p {
    font-size: 15px;
  }
  .vote_desc p {
    font-size: 8px;
  }
  .turnRed {
    color: #FA6700 !important;
  }
</style>