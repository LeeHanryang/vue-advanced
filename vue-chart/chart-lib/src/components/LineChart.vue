<template>
  <div style="width: 800px;">
    <canvas ref="lineChart" id="lineChart"></canvas>
  </div>
</template>

<script>
import {months} from '@/utils/Utils';

export default {
    mounted() {
        // (async function() {
            new this.$_Chart(
                this.$refs.lineChart,
                {
                    type: 'line',
                    data: {
                        labels: months({count: 7}),
                        datasets: [{
                            label: 'My First Dataset',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    }
                }
            );
        // })();
    }
}
</script>

<style>

</style>