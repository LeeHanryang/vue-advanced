<template>
  <div>
    <h1>Chart.js</h1>
    <div style="width: 800px;"><canvas id="acquisitions"></canvas></div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
  mounted() {

    (async function() {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
    })();
  }
}
</script>

<style>

</style>