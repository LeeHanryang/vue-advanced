<template>
  <div style="width: 800px;">
    <canvas ref="barChart" id="barChart"></canvas>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    // (async function() {
      // const data = [
      //   { year: 2010, count: 10 },
      //   { year: 2011, count: 20 },
      //   { year: 2012, count: 15 },
      //   { year: 2013, count: 25 },
      //   { year: 2014, count: 22 },
      //   { year: 2015, count: 30 },
      //   { year: 2016, count: 28 },
      // ];

      new this.$_Chart(
        this.$refs.barChart,
        {
          type: 'bar',
          data: {
            labels: this.propsdata.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: this.propsdata.map(row => row.count)
              }
            ]
          }
        }
      );
    // })();
  }
}
</script>

<style>

</style>