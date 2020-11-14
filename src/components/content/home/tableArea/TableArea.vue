<template>
  <div class="TableArea">
    <div class="tableTitle">
      <h1>食堂各项数据</h1>
    </div>
    <table class="resultTable" id="resultTable">
<!--      <tr v-for="(item, index) in this.$store.state.canteens">-->
<!--        <th>{{ item }}</th>-->
<!--      </tr>-->
      <tr>
        <td></td>
        <th>东苑</th><th>西苑</th><th>南苑</th><th>北苑</th><th>象山</th><th>亚青</th><th>浦江</th>
      </tr>
      <tr>
        <td class="td_options">{{ $store.state.vote_option[0] }}</td>
        <td>{{ $store.state.voteData[0].voteData_items[0] }} / {{ $store.state.voteData[0].voteData_sum }}</td>
        <td>{{ $store.state.voteData[1].voteData_items[0] }} / {{ $store.state.voteData[1].voteData_sum }}</td>
        <td>{{ $store.state.voteData[2].voteData_items[0] }} / {{ $store.state.voteData[2].voteData_sum }}</td>
        <td>{{ $store.state.voteData[3].voteData_items[0] }} / {{ $store.state.voteData[3].voteData_sum }}</td>
        <td>{{ $store.state.voteData[4].voteData_items[0] }} / {{ $store.state.voteData[4].voteData_sum }}</td>
        <td>{{ $store.state.voteData[5].voteData_items[0] }} / {{ $store.state.voteData[5].voteData_sum }}</td>
        <td>{{ $store.state.voteData[6].voteData_items[0] }} / {{ $store.state.voteData[6].voteData_sum }}</td>
      </tr>
      <tr>
        <td class="td_options">{{ $store.state.vote_option[1] }}</td>
        <td>{{ $store.state.voteData[0].voteData_items[1] }} / {{ $store.state.voteData[0].voteData_sum }}</td>
        <td>{{ $store.state.voteData[1].voteData_items[1] }} / {{ $store.state.voteData[1].voteData_sum }}</td>
        <td>{{ $store.state.voteData[2].voteData_items[1] }} / {{ $store.state.voteData[2].voteData_sum }}</td>
        <td>{{ $store.state.voteData[3].voteData_items[1] }} / {{ $store.state.voteData[3].voteData_sum }}</td>
        <td>{{ $store.state.voteData[4].voteData_items[1] }} / {{ $store.state.voteData[4].voteData_sum }}</td>
        <td>{{ $store.state.voteData[5].voteData_items[1] }} / {{ $store.state.voteData[5].voteData_sum }}</td>
        <td>{{ $store.state.voteData[6].voteData_items[1] }} / {{ $store.state.voteData[6].voteData_sum }}</td>
      </tr>
      <tr>
        <td class="td_options">{{ $store.state.vote_option[2] }}</td>
        <td>{{ $store.state.voteData[0].voteData_items[2] }} / {{ $store.state.voteData[0].voteData_sum }}</td>
        <td>{{ $store.state.voteData[1].voteData_items[2] }} / {{ $store.state.voteData[1].voteData_sum }}</td>
        <td>{{ $store.state.voteData[2].voteData_items[2] }} / {{ $store.state.voteData[2].voteData_sum }}</td>
        <td>{{ $store.state.voteData[3].voteData_items[2] }} / {{ $store.state.voteData[3].voteData_sum }}</td>
        <td>{{ $store.state.voteData[4].voteData_items[2] }} / {{ $store.state.voteData[4].voteData_sum }}</td>
        <td>{{ $store.state.voteData[5].voteData_items[2] }} / {{ $store.state.voteData[5].voteData_sum }}</td>
        <td>{{ $store.state.voteData[6].voteData_items[2] }} / {{ $store.state.voteData[6].voteData_sum }}</td>
      </tr>
      <tr>
        <td class="td_options">{{ $store.state.vote_option[1] }}</td>
        <td>{{ $store.state.voteData[0].voteData_items[3] }} / {{ $store.state.voteData[0].voteData_sum }}</td>
        <td>{{ $store.state.voteData[1].voteData_items[3] }} / {{ $store.state.voteData[1].voteData_sum }}</td>
        <td>{{ $store.state.voteData[2].voteData_items[3] }} / {{ $store.state.voteData[2].voteData_sum }}</td>
        <td>{{ $store.state.voteData[3].voteData_items[3] }} / {{ $store.state.voteData[3].voteData_sum }}</td>
        <td>{{ $store.state.voteData[4].voteData_items[3] }} / {{ $store.state.voteData[4].voteData_sum }}</td>
        <td>{{ $store.state.voteData[5].voteData_items[3] }} / {{ $store.state.voteData[5].voteData_sum }}</td>
        <td>{{ $store.state.voteData[6].voteData_items[3] }} / {{ $store.state.voteData[6].voteData_sum }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
name: "FormArea"
}
</script>

<style scoped>
  .TableArea {
    position: absolute;
    width: 800px;
    height: 300px;
    top: 610px;
    left: 355px;
    background-color: aqua;
  }
  .tableTitle {
    text-align: center;
    height: 40px;
  }

  /*表格边框和单元格样式*/
  table.resultTable {
    position: absolute;
    left: 40px;
    top: 60px;
    font-size:20px;
    color:#333333;
    border-collapse: collapse;
  }
  /*食堂名的样式*/
  table.resultTable th {
    padding: 8px;
    color: #FA6700;
    border: 1px solid black;
  }
  /*票数的样式*/
  table.resultTable td {
    padding: 8px;
    border: 1px solid black;
  }
  /*投票选项的样式*/
  table.resultTable td:nth-child(1) {
    color: #0fa400;
  }
  .oddrowcolor{
    background-color:#d4e3e5;
  }
  .evenrowcolor{
    background-color:#c3dde0;
  }
</style>