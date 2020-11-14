<template>
  <div class="voteArea">
<!--    大标题->食堂名   食堂精选描述：-->
    <vote-title/>
<!--    投票表格，提交和清除按钮，提示信息 -->
    <vote-table/>
<!--    投票的提示信息-->
    <vote-tip/>
  </div>
</template>

<script>

import VoteTitle from "@/components/content/home/voteArea/VoteTitle";
import VoteTable from "@/components/content/home/voteArea/VoteTable";
import VoteTip from "@/components/content/home/voteArea/VoteTip";


export default {
  name: "VoteArea",
  components: {VoteTip, VoteTable, VoteTitle}
}
</script>

<style scoped>
.voteArea {
  position: relative;
  float: left;
  width: 300px;
  height: 500px;
  margin-left: 40px;
  margin-top: 100px;
  /*background-color: #E8E8E8;*/
}
</style>