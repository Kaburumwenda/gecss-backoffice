<template>
    <div>
         <div class="graph-con">
             <canvas id="planet-chart"></canvas>
         </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
    name:'DashGraph',

    data(){
        return{
            graphloading : true,
        }
    },


 mounted(){
    // this.getChart()
    this.getChartData();
  },

  methods:{

    async getChartData(){
      await this.$axios.$get("v1/statistics/graph")
      .then((resp) =>{
        let tot_data = resp.length;
        if(tot_data >= 1){
          var newArray = resp.map(function(singleElement){
              return singleElement.totals;
          })
          var new_days = resp.map(function(singleElement){
              return singleElement.day;
          })
          // GRAPH START
         let   planetChartData = {
          type: "line",
          data: {
            labels: new_days,
            datasets: [
              {
              label: "Total Earnings (This Month)",
              type: "line",
              data: newArray,
              backgroundColor: "rgba(143, 50, 168, 0.5)",
              borderColor: "blue",
              borderWidth: 1,
            },
             {
              label: "Total Earnings (This Month)",
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
                    labelString: 'Earnings in (KES)'
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

        const ctx = document.getElementById('planet-chart');
        new Chart(ctx, planetChartData);
         // GRAPH END

        } else{}
      });

    },

 
  }
}
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