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
                <div v-else><SbButton title="Download Excel" /></div>
            </div>
            <br>

           </div>

        </b-form>
    </div>
</template>
<script>

import * as XLSX from 'xlsx'
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

    async generateExcel() {
        let token = localStorage.getItem('token')
        this.$axios.defaults.headers.common["Authorization"] = "Token " + token
        this.btn_loading = true;
        const formData = {
            'fromdate': this.swap_filter.fromdate,
            'todate':this.swap_filter.todate,
            }
        await this.$axios.$post('v1/reports/battery_statistics/pdf_excel', formData)
        .then((resp) =>{
            let resp_count = resp.length
            if(resp_count >= 1){
                let d1 = this.swap_filter.fromdate
                let d2 = this.swap_filter.todate
                let d3 = `mpesa_reports-pdf-${d1} - ${d2}.xlsx`

                const data = XLSX.utils.json_to_sheet(resp)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, data, 'data')
                XLSX.writeFile(wb, d3)

                this.$bvModal.hide('excel-daily-swaps-record')
                let set_msg = 'Excel downloaded successfully';
                let set_theme = 'success'

                Swal.fire({
                    icon: set_theme,
                    title: set_msg,
                })

            } else{
                this.$bvModal.hide('excel-daily-swaps-record')
                let set_msg = 'Oops.!!! No record found, please enter dates again.';
                let set_theme = 'error'
                Swal.fire({
                    icon: set_theme,
                    title: set_msg,
                })
            }
        })

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