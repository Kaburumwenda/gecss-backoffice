<template>
  <div>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.2.3/jspdf.plugin.autotable.min.js"></script> -->
    <!-- Page Content -->
    <div class="content">
    <button id="generate" @click="pdfgenerator()">Generate PDF</button>
      <h4>PDF GENERATOR</h4>
     <button  @click="pdfgenerator()">Download</button>
     <br>
   
   <div id="canvas_div_pdf">
       <p>hello this is a paragraph</p>
 
<table class="table table-dark">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
   </div>



    </div>
    <!-- END Page Content -->
  </div>
</template>




<script>
import jsPDF from 'jspdf'
// import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
export default {
    data(){
        return{}
    },

    mounted(){
       
    },
    methods:{
        pdfgenerator(){
            // const doc = new jsPDF();
            // doc.text("Order details", 20, 10);
          var elem = document.getElementById("generate");
          var result = [
                {
                name: "Gautam Sharma",
                age: 32,
                country: "India",
                }, 
                {
                name: "John Williamson Latham",
                age: 31,
                country: "New Zealand",
                },
                {
                name: "Adam Nicholls",
                age: 31,
                country: "South Africa",
                },
          ];

           let info = []
            result.forEach((element, index, array) => {
                info.push([element.name, element.age, element.country])
            })
            elem.onclick = function () {
                var doc = new jsPDF();
                console.log(result);
                doc.autoTable({
                head: [["Name", "Age", "Country"]],
                body: info
                });
                doc.save("table.pdf");
            };

            
        /// END OF GENERATE PDF
        }
    }
}
</script>