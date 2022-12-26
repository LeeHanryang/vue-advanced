<template>
  <div>
      <h1>Chart.js</h1>
      <bar-chart :propsdata="chartDataSet"></bar-chart>
      <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  data() {
    return {
      chartDataSet: [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ],
    }
  },
  // 컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  methods: {
    
  },
  created() {
    // axios.get('chart/line/1')
    // .then(response => this.chartData = response.data)
    // .catch(error => console.log(error));
  }
}
</script>

<style>

</style>