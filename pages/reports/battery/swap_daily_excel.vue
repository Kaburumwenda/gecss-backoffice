<template>
    <div>
         <b-form @submit.prevent="generateExcel()">
           <div>
            <div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">Start Date.</label>
					<b-form-input v-model="swap_filter.fromdate" type="date" required></b-form-input>
				</div>
			</div> 

            <div uk-grid>
				<div class="uk-width-expand@m">
					<label style="color:#1a1a1a;">End date.</label>
					<b-form-input type="date" v-model="swap_filter.todate" required ></b-form-input>
				</div>
			</div> 
            <br>

            <div>
                <div v-if="btn_loading"><center>  <i class="fa fa-2x fa-sun fa-spin"></i> <br><br> </center> </div>
                <div v-else><SbButton title="Download Pdf" /></div>
            </div>
            <br>

           </div>

        </b-form>
    </div>
</template>
<script>

export default {
    name:'SwapDailyExcel',
    data(){
        return{
            pdfData:[],
            btn_loading:false,
            swap_filter:{fromdate:'', todate:''}
        }
    },

    methods:{

    generateExcel() {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Create a worksheet
      const ws = XLSX.utils.aoa_to_sheet([
        // Your dynamic data goes here
        ['Name', 'Age'],
        ['John Doe', 30],
        ['Jane Smith', 25],
      ]);

      // Apply styles to the cells
      ws['A1'].s = { font: { bold: true } };
      ws['B1'].s = { font: { bold: true } };

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

      // Generate the Excel file
      XLSX.writeFile(wb, 'dynamic_excel.xlsx');
    }
    

    },

    props:{
        
    }
}
</script>

<style scoped>
.pdf-filter-btn{
    display: flex;
    justify-content: space-around;
}
</style>