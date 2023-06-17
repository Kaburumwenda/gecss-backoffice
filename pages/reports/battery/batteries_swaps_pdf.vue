<template>
    <div>
        <br>
         <b-form @submit.prevent="get_battery_swaps_pdf()">
            <div>
                <h4>Do you want to download pdf???</h4>
            </div>
            <SbButton title="YES" />
            <br>

        </b-form>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
import 'jspdf-autotable';

export default {
    name:'BatterySwapsPdf',
    data(){
        return{
            pdfData:[],
            btn_loading:false,
            btn_loading_today:false,
        }
    },

    methods:{
       async get_battery_swaps_pdf(){	
            let token = localStorage.getItem('token')
		    this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.btn_loading_today = true;
            await this.$axios.$get('v1/reports/battery_reports', {headers: {'Authorization': `Token ${token}`}})
                .then((resp) =>{
                    let resp_count = resp.length
                    if( resp_count >= 1){
                        this.$bvModal.hide('pdf-record')
                        this.pdfData = resp;
                        let set_msg = 'Pdf downloaded successfully';
                        let set_theme = 'success'

                        // PDF GENERATE
                        var result = this.pdfData;
                        let info = []
                            result.forEach((element, index, array) => {
                                info.push(
                                    [ index + 1, element.battery_code1, element.swap, element.units, element.amount,
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "Battery Code", "No. Swap", "units(Kw)", "Revenue (KES)"]],
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

                            doc.save("batteries_total_swaps.pdf");

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
                this.btn_loading_today = false
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