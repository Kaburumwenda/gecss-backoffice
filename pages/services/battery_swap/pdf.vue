<template>
    <div>
         <b-form @submit.prevent="formSubmit">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Start Date.</label>
                <b-form-input v-model="create_record.fromdate" type="date" required></b-form-input>
                <div v-if="bike_err" style="color:red">
                  {{ bike_err }}
                </div>
              </div>
            </div>  
            <br>

            <div uk-grid>
               <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">End date.</label>
                <b-form-input type="date" v-model="create_record.todate" required ></b-form-input>
              </div>
            </div>  
            <br>

            <SbButton title="Download PDF" />
            <br>

        </b-form>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import dayjs from 'dayjs';

export default {
    name:'PdfRecord',
    data(){
        return{
            create_record:{fromdate:'', todate:'' },
            bike_err:'',
            pdfData:[],
        }
    },
    methods:{
        async formSubmit(){	
            const formData={
                'fromdate':this.create_record.fromdate,
                'todate':this.create_record.todate,
            }
            let token = localStorage.getItem('token')
		      	this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/battery/pdf', formData, {headers: {'Authorization': `Token ${token}`}})
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
                                    [ index + 1, element.mem_no, element.source, element.battery_code1, 
                                    element.amount, dayjs(element.createdAt).format('MMM, ddd D. YYYY h:mm A'), element.status
                                    ])
                            })

                            var doc = new jsPDF();
                                doc.autoTable({
                                head: [[ "No", "Agents", "Location", "Battery", "Amount", "Date", "Status"]],
                                body: info
                                });
                                // PDF PG COUNT
                                var pageCount = doc.internal.getNumberOfPages(); //Total Page Number
                                var i = 0
                                for(i = 0; i < pageCount; i++) { 
                                doc.setPage(i); 
                                let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
                                doc.setFontSize(12);
                                doc.text('page: ' + pageCurrent + '/' + pageCount, 10, doc.internal.pageSize.height - 10);}
                                // pdf save
                                doc.save("batteries.pdf");

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
                // if(resp.error == false){
                //     this.$bvModal.hide('pdf-record')
                //     let set_msg = 'Pdf downloaded successfully';
                //     let set_theme = 'success'
                //     Swal.fire({
                //         icon: set_theme,
                //         title: set_msg,
                //         })
                //     this.create_record={}
                //   }
                // if(resp.error == true){
                //   this.bike_err = 'Motorbike number plate not recognized. Please try again later'
                // }
                })
        },
    },

    props:{
        
    }
}
</script>