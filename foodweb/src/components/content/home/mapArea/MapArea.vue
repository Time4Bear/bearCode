<template>
  <div class="MapArea">
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[0]" :toCanteen="$store.state.canteens[0]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[1]" :toCanteen="$store.state.canteens[1]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[2]" :toCanteen="$store.state.canteens[2]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[3]" :toCanteen="$store.state.canteens[3]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[4]" :toCanteen="$store.state.canteens[4]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[5]" :toCanteen="$store.state.canteens[5]"/>
    <point-div class="pointDiv" :to-canteen="$store.state.canteens[6]" :toCanteen="$store.state.canteens[6]"/>
  </div>
</template>

<script>
import PointDiv from "@/components/content/home/mapArea/PointDiv";
export default {
  name: "MapArea",
  components: {PointDiv},
}
</script>

<style scoped>
  .MapArea {
    position: relative;
    float: left;
    width: 750px;
    height: 550px;
    margin-left: 40px;
    margin-top: 50px;
    padding: 0;
    background-color: #E8E8E8;
  /* 背景图片的样式 */
    background-image: url(../../../../assets/img/njtechMap2.jpg);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 800px 550px;
  }
  /*各食堂在地图上的位置*/
  .pointDiv {
  }
  .pointDiv:nth-child(1) {
    margin-top: 20px;
    left: 40px;
  }
  .pointDiv:nth-child(2) {
    margin-top: 80px;
    left: 40px;
  }
  .pointDiv:nth-child(3) {
    margin-top: 120px;
    left: 40px;
  }
  .pointDiv:nth-child(4) {
    margin-top: 180px;
    left: 40px;
  }
  .pointDiv:nth-child(5) {
    margin-top: 240px;
    left: 40px;
  }
  .pointDiv:nth-child(6) {
    margin-top: 300px;
    left: 40px;
  }
  .pointDiv:nth-child(7) {
    margin-top: 360px;
    left: 40px;
  }
</style>