<template>
    <div>
      <div v-if="chart_loading"> 
        <div style="margin-top:40px; margin-left:40px"><i class="si si-refresh fa-spin fa-3x"></i></div>
      </div>
      <div class="graph-con"><canvas id="week-chart"></canvas></div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name : 'WeekChart',
  data(){
    return{
      chart_loading:false,
    }
  },

   mounted(){
    // this.getChart()
    this.get_week_chart();
  },

  methods:{

    async get_week_chart(){
      this.chart_loading = true;
      let token = localStorage.getItem('token')
			this.$axios.defaults.headers.common["Authorization"] = "Token " + token
      await this.$axios.$get("v1/reports/battery_statistics/week")
      .then((resp) =>{
        let tot_data = resp.length;
        if(tot_data >= 1){
          var newArray = resp.map(function(singleElement){
              return singleElement.swaps;
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
              label: "No. Swaps (Line)",
              type: "line",
              data: newArray,
              backgroundColor: "rgba(143, 50, 168, 0.5)",
              borderColor: "blue",
              borderWidth: 1,
            },
             {
              label: "No. Swaps (Bar)",
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
                    labelString: 'Number of Swaps'
                  }
                }
              ],

              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Days of the week'
                  }
                }
              ]
            }
          }
        };

        const ctx = document.getElementById('week-chart');
        new Chart(ctx, planetChartData);
         // GRAPH END

        } else{}
      });
      this.chart_loading = false

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