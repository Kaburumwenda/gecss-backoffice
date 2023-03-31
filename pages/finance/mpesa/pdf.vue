<template>
    <div>
        <div class="pdf-filter-btn" >
            <div>
                <b-button v-if="btn_loading" variant="outline-primary" disabled squared >
                <b-spinner small type="grow"></b-spinner> Loading... </b-button>
                <b-button v-else @click="getPdfToday()" variant="outline-primary" squared >Today</b-button>
            </div>
            <div>
                <b-button v-if="btn_loading_month" variant="outline-primary" disabled squared >
                <b-spinner small type="grow"></b-spinner> Loading... </b-button>
                <b-button v-else @click="getPdfMonth()" variant="outline-primary" squared >This month</b-button></div>
            <div>
                <b-button v-if="btn_loading_year" variant="outline-primary" disabled squared >
                <b-spinner small type="grow"></b-spinner> Loading... </b-button>
                <b-button v-else @click="getPdfYear()" variant="outline-primary" squared >This year</b-button></div>
        </div>
        <hr>
         <b-form @submit.prevent="pdfGenerate">
            <div uk-grid>
              <div class="uk-width-expand@m">
                <label style="color:#1a1a1a;">Start Date.</label>
                <b-form-input v-model="create_record.fromdate" type="date" required></b-form-input>
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
            btn_loading:false,
            btn_loading_month:false,
            btn_loading_year:false
        }
    },

    methods:{
       async pdfGenerate(){	
            const formData = {
                'todate': this.create_record.todate,
                'fromdate':this.create_record.fromdate
            }
            let token = localStorage.getItem('token')
		    this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            await this.$axios.$post('v1/mpesa/office/stat/range', formData, {headers: {'Authorization': `Token ${token}`}})
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
                                    [ index + 1, element.transID, element.firstName, element.billRefNumber, 
                                    element.transAmount, dayjs(element.created).format('MMM, ddd D. YYYY h:mm A')
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "ID", "Name", "Ref", "Amount", "Date"]],
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

                            doc.save("mpesa.pdf");

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
        },


       async getPdfToday(){	
            let token = localStorage.getItem('token')
		    this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.btn_loading = true;
            await this.$axios.$get('v1/mpesa/office/stat/today', {headers: {'Authorization': `Token ${token}`}})
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
                                    [ index + 1, element.transID, element.firstName, element.billRefNumber, 
                                    element.transAmount, dayjs(element.created).format('MMM, ddd D. YYYY h:mm A')
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "ID", "Name", "Ref", "Amount", "Date"]],
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

                            doc.save("mpesa.pdf");

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


        async getPdfMonth(){	
            let token = localStorage.getItem('token')
		    this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.btn_loading_month = true
            await this.$axios.$get('v1/mpesa/office/stat/month', {headers: {'Authorization': `Token ${token}`}})
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
                                    [ index + 1, element.transID, element.firstName, element.billRefNumber, 
                                    element.transAmount, dayjs(element.created).format('MMM, ddd D. YYYY h:mm A')
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "ID", "Name", "Ref", "Amount", "Date"]],
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

                            doc.save("mpesa.pdf");

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
                this.btn_loading_month = false;
        },


        async getPdfYear(){	
            let token = localStorage.getItem('token')
		    this.$axios.defaults.headers.common["Authorization"] = "Token " + token
            this.btn_loading_year = true;
            await this.$axios.$get('v1/mpesa/office/stat/year', {headers: {'Authorization': `Token ${token}`}})
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
                                    [ index + 1, element.transID, element.firstName, element.billRefNumber, 
                                    element.transAmount, dayjs(element.created).format('MMM, ddd D. YYYY h:mm A')
                                    ])
                            })

                            var doc = new jsPDF();
                           
                            doc.autoTable({
                            head: [[ "No", "ID", "Name", "Ref", "Amount", "Date"]],
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

                            doc.save("mpesa.pdf");

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
                this.btn_loading_year=false;
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