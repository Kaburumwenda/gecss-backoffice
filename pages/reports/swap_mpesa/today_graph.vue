<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name : 'TodayChart',
  mounted() {
    this.todayChart();
  },
  methods: {
    async todayChart(){
      await this.$axios.$get("v1/reports/swap_mpesa_pie/today")
      .then((resp) => {
        let mpesa = resp.mpesa
        let swap = resp.swap
        let array_data = [mpesa, swap]
        const chartCanvas = this.$refs.chartCanvas;
        const ctx = chartCanvas.getContext('2d');
        // Chart data
        const data = {
          labels: [ 'Mpesa', 'Swaps'],
          datasets: [
            {
              data: array_data,
              backgroundColor: [ '#36A2EB', '#FFCE56'],
            },
          ],
        };

        // Chart options
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };

      // Create the pie chart
      new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
      });


      })
    },

  },
};

</script>


<style scoped>
.graph-con{
  background: white;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 500px;
}
</style>