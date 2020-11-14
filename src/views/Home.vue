<template>
  <div class="home">
    <VoteArea/>
    <MapArea/>
    <ForumArea/>
    <TableArea/>
  </div>
</template>

<script>

import MapArea from "@/components/content/home/mapArea/MapArea";
import ForumArea from "@/components/content/home/forumArea/ForumArea";
import TableArea from "@/components/content/home/tableArea/TableArea";
import VoteArea from "@/components/content/home/voteArea/VoteArea";


export default {
  name: "home",
  components: {VoteArea,MapArea, ForumArea, TableArea}
}
</script>

<style scoped>
  .home {
    position: relative;
    min-width: 1500px;
    width: 100%;
    height: 1000px;
    margin-top: 60px;
    background-color: #444444;
  }

</style>