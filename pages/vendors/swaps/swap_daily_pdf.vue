<template>
    <div>
         <b-form @submit.prevent="get_swaps_daily_pdf()">
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
import jsPDF from 'jspdf'
import 'jspdf-autotable';

export default {
    name:'SwapDailyPdf',
    data(){
        return{
            pdfData:[],
            btn_loading:false,
            swap_filter:{fromdate:'', todate:''}
        }
    },

    methods:{
       async get_swaps_daily_pdf(){	
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
                    let d1 = this.swap_filter.fromdate
                    let d2 = this.swap_filter.todate
                    let d3 = `battery_reports-pdf-${d1} - ${d2}.pdf`

                    if( resp_count >= 1){
                        this.$bvModal.hide('pdf-daily-swaps-record')
                        this.pdfData = resp;
                        let set_msg = 'Pdf downloaded successfully';
                        let set_theme = 'success'

                        // PDF GENERATE
                        var result = this.pdfData;
                        let info = []
                            result.forEach((element, index, array) => {
                                info.push(
                                    [ index + 1, element.Date, element.Swaps, element.Power_units, element.Revenue,
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "Date", "Total Swaps", "Power Units(Kw)", "Revenue (KES)"]],
                            body: info,
                            });
                            // OTHER OPTIONS
                            // theme: 'grid',

                            // PDF PG COUNT
                            var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
                            var i = 0
                            for(i = 0; i < pageCount; i++) { 
                            doc.setPage(i); 
                            let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
                            doc.setFontSize(12);
                            doc.text('page: ' + pageCurrent + '/' + pageCount, 10, doc.internal.pageSize.height - 10);}

                            //WATERMARK
                            // var imgData = new Image()
                            // const imgWidth = 60;
                            // const imgHeight = 60;
                            // imgData.src = 'https://i.postimg.cc/Dwr8sVrh/logo.png'
                            // pdf.addImage(img, 'png', 10, 78, 12, 15)
                            var date = Date();
                            var totalPages = pageCount; //Total Page Number;
                            for (i = 1; i <= totalPages; i++) {
                                doc.setPage(i);
                                // doc.addImage(imgData, 'png', 40, 40, 75, 75, imgWidth, imgHeight);
                                doc.setTextColor(150);
                                doc.setFontSize(7);
                                doc.text(50, doc.internal.pageSize.height - 10, `GECSS INVESTMENTS   -    CONFIDENTIAL      ${date}`);
                            }
                            // other options
                            //{angle: 45, }

                            // pdf save

                            doc.save(d3);

                            // Success message
                            Swal.fire({
                                icon: set_theme,
                                title: set_msg,
                            })
                        this.create_record={}

                    } else{
                        this.$bvModal.hide('pdf-record')
                        let set_msg = 'Oops.!!! No record found, please enter dates again.';
                        let set_theme = 'error'
                        Swal.fire({
                            icon: set_theme,
                            title: set_msg,
                        })
                    this.create_record={}
                    }
                });
                this.btn_loading = false
        },



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