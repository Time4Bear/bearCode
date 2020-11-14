<template>
  <div class="votetip">
    <b>可投票时间：</b>
      <br/>
    <b>7::00--9:00,11:00--14:00,17:00-20:00</b>
  </div>
</template>

<script>
export default {
  name: "VoteTip"
}
</script>

<style scoped>
  .votetip {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    background-color: #ff9913;
  }
  .votetip b:nth-child(1){
    color: red;
  }
</style>