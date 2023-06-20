<template>
    <div class="graph-con">
      <canvas id="month-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name : 'MonthChart',

   mounted(){
    // this.getChart()
    this.get_month_chart();
  },

  methods:{

    async get_month_chart(){
      let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
      await this.$axios.$get("v1/reports/mpesa_statistics/month")
      .then((resp) =>{
        let tot_data = resp.length;
        if(tot_data >= 1){
          var newArray = resp.map(function(singleElement){
              return singleElement.total;
          })
          var new_days = resp.map(function(singleElement){
              return singleElement.date;
          })
          // GRAPH START
         let   planetChartData = {
          type: "line",
          data: {
            labels: new_days,
            datasets: [
              {
              label: "Totals in KES (Line)",
              type: "line",
              data: newArray,
              backgroundColor: "rgba(143, 50, 168, 0.5)",
              borderColor: "blue",
              borderWidth: 1,
            },
             {
              label: "Totals in KES (Bar)",
              type: "bar",
              data: newArray,
              backgroundColor: "rgba(113, 148, 218, 0.3)",
              borderColor: "#7194da",
              borderWidth: 0,
            },
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            lineTension: 1,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    padding: 25
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Totals in KES'
                  }
                }
              ],

              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Days of the month'
                  }
                }
              ]
            }
          }
        };

        const ctx = document.getElementById('month-chart');
        new Chart(ctx, planetChartData);
         // GRAPH END

        } else{}
      });

    },

 
  }

};

</script>


<style scoped>
.graph-con{
  background: white;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 300px;
}
</style>