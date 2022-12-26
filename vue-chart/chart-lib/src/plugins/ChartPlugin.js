import Chart from 'chart.js/auto';

export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
    }
    // BarChart.vue
    // this.$_Chart

    // LineChart.vue
    // this.$_Chart
}    