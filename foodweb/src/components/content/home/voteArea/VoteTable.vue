<template>
  <div class="votetable">
    <StarsTable/>
    <TextareaButton/>
  </div>
</template>

<script>
import StarsTable from "@/components/common/voteTable/StarsTable";
import TextareaButton from "@/components/common/voteTable/TextareaButton";
export default {
  name: "VoteTable",
  components: {TextareaButton, StarsTable}
}
</script>

<style scoped>
  .votetable {
    position: absolute;
    width: 300px;
    height: 360px;
    bottom: 50px;
    background-color: #737373;
  }

</style>