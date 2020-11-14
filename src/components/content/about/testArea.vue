<template>
  <div class="testarea">
    <div id="Echart">

    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "testArea",
  data() {
    return {
      option: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]},
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          }
        ]
      },
    }
  },
  methods: {
    drawPid(id) {
      //基于准备好的dom， 初始化echarts实例
      let myChart = echarts.init(document.getElementById("Echart"));
      //使用刚指定的配置项和数据显示图表
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.drawPid("Echart");
    })
  }
}
</script>

<style scoped>
  .testarea {
    background-color: #0fa400;
    width: 100%;
    height: 1000px;
  }
  #Echart {
    width: 600px;
    height: 400px;
  }
</style>