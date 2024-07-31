<template>
  <div class="echart" id="mychart" :style="myChartStyle">

  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MyEcharts",
  data() {
    return {
      myChart: {},
      seriesData: [[]],
      myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  methods: {
    initDate() {
      for (let i = 0; i < 10; i++) {
        this.seriesData[i] = [i, this.getY(i)];
      }
    },
    getY(x){
      console.log(Math.pow(x, 2));
      return 34.3 * Math.pow(x,3) + 12.5 * Math.pow(x,2) + 12 * x + 3;
    } ,
    initEcharts() {
      const optionFree = {
        xAxis: {
          name: "被分数",
          type: "value",
          interval:2, // 步长
          min:0, // 起始
        },
        yAxis: {},
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true
          }
        ],tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据  https://blog.csdn.net/weixin_45536484/article/details/120041612
          show: true
          /*trigger: 'axis',
          backgroundColor: 'rgba(32, 33, 36,.7)',
          borderColor: 'rgba(32, 33, 36,0.20)',
          borderWidth: 1,
          textStyle: { // 文字提示样式
            color: '#fff',
            fontSize: '12'
          },
          axisPointer: { // 坐标轴虚线
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }*/
        }

        };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(optionFree);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  }
};
</script>

<style scoped>

</style>
