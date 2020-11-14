<template>
  <div class="votetitle">
    <div class="head">
      <h1>{{$store.state.canteen}}食堂</h1>
    </div>
    <div class="des">
      精选描述:{{ $store.getters.getCanteenDesc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteTitle",
}
</script>

<style scoped>
.votetitle {
  width: 100%;
  height: 100px;
  background-color: #737373;
}
.head {
  width: 100%;
  height: 40%;
  text-align: center;
  background-color: #FA6777;
}
.des {
  width: 100%;
  height: 60%;
  margin-top: 0;
  background-color: #FA6700;
}
</style>