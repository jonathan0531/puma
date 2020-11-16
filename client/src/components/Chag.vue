<template>
    <div id="app">
        <v-container>
          <img class="img" src="../assets/chag_header_1.jpg" alt="" />
          {{today}}
          <br><br><br><br><br>
          <p class="letter">Dear <br>
          The blood component(s) identified on the enclosed <span class = "bold letter" style="text-decoration: underline">Recipient Status Report</span> 
          was from a prior donation of a donor who has tested reactive for Chagas on a subsequent donation. Below is the Chagas result for the more recent donation.</p>

          <v-container>
            <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="8" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">TEST NAME</span> 
                </v-card>
              </v-col>
              <v-col class="v-col" cols="6" md="4" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black; border-right: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter" >RESULT</span> 
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="8" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card tile>
                  <span style="padding-left: 4px">TEST NAME</span>
                </v-card>
              </v-col>
              <v-col class="v-col" cols="6" md="4" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile>
                  <span style="padding-left: 4px">RESULT</span>
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="8" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card  tile>
                  <span>TEST NAME</span>
                </v-card>
              </v-col>
              <v-col class="v-col" cols="6" md="4" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile>
                  <span style="padding-left: 4px">RESULT</span>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <p class="letter">If the component (s) indicated on the enclosed report was transfused at your facility, Gulf Coast Regional Blood Center
          will provide testing at no charge to the recipient.</p>

          <v-container>
            <v-row no-gutters justify="center">
                <v-col  class="v-col" cols="12" sm="6" md="4" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black;">
                  <v-card class="text-center" tile>
                    <span class = "bold letter">UNIT NUMBER</span> 
                  </v-card>
                </v-col>
                <v-col class="v-col" cols="6" md="8" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black; border-right: 4px solid black;">
                  <v-card class="text-center" tile>
                    <span class = "bold letter" >COMPONENT CODE/TYPE</span> 
                  </v-card>
                </v-col>
              </v-row>
              <v-row no-gutters justify="center">
                <v-col  class="v-col" cols="12" sm="6" md="4" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                  <v-card tile>
                    <span style="padding-left: 4px">Unit Name</span>
                  </v-card>
                </v-col>
                <v-col class="v-col" cols="6" md="8" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                  <v-card tile>
                    <span style="padding-left: 4px">(Component Code)/(Type) </span>
                  </v-card>
                </v-col>
              </v-row>
          </v-container>
          
          <p class="letter">
            If such testing is desired, blood samples collected in two 7ml EDTA anticoagulant tubes will be needed. The samples
            should be labeled with the patient's unique ID number (not the patient's name), the name of the recipient's physician,
            and the date of collection of the sample. The coded blood sample along with the enclosed Recipient Status Report
            should be sent to Gulf Coast Regional Blood Center Processing Laboratory, Attention: Risk Management. Please note,
            samples submitted without the completed Recipient Status Report form, 
            <span class="bold letter" style="text-decoration: underline; text-decoration-thickness: 2px">can not be tested!</span> Testing results will be
            mailed directly to the recipient's attending physician and to the Medical Director or designee of your institution.

            Additional information regarding Chagas is attached for the recipient. <br><br>

            If you have questions or concerns regarding the information in this letter, I can be contacted at 713-791-6656. <br><br>

            Sincerely,<br><br><br><br>
            Beth A. Hartwell, MD<br>
            Medical Director
          </p>

          <v-container class="d-inline-flex justify-end mb-8">
            <v-card  flat>
              <v-row id="initialCheckBox">
                <v-col cols="12" sm="8" md="6" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black;padding: 4px">
                  <v-card>
                    <div style="border: 1px solid black">
                      <span style="font-weight: bold; font-size: 18px; padding: 0px, 4px;">A copy of this document was previously faxed.</span><br><br>
                      <span style="font-weight: bold; font-size: 18px; text-decoration: underline; font-style: italic; padding: 0px, 4px;">Date Faxed and/ or <br>Mailed: (Info)</span><br>
                      <span style="font-weight: bold; font-size: 18px; text-decoration: underline; font-style: italic; padding: 0px, 4px;">Completed By: (Info) </span>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" md="2" style="border: 4px solid black; padding: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">Yes</label><br>

                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">No</label>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
          <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
        </v-container>

        <v-container>
          <img class="img" src="../assets/chag_header_2.jpg" alt="" /><br><br>
          <div style="text-align: center;">
            <span class="bold">Chagas Lookback Notification</span><br>
            <span class="bold">Recipient Status Report</span><br>
            <span class="bold">"Test Ordered: <span style="text-decoration: underline;">Chagas"</span></span><br>
          </div><br><br><br><br>
        <v-container>
          <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="12" style="border-left: 4px solid black; border-bottom: 4px solid black; border-top: 4px solid black; border-right: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">TRANSFUSING FACILITY</span> 
                </v-card>
              </v-col>
          </v-row>

          <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">Unit Number</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="3" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">Component Code/Type</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">Blood Type</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">Shipment Date</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="3" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card class="text-center" color="grey lighten-2" tile>
                  <span class = "bold letter">Shipment Number</span> 
                </v-card>
              </v-col>
          </v-row>

          <v-row no-gutters justify="center">
              <v-col  class="v-col" cols="12" sm="6" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" tile>
                  <span class = "letter">TEST</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="3" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" tile>
                  <span class = "letter">(Component Code)/(Type)</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" tile>
                  <span class = "letter">Blood Type</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card class="text-center" tile>
                  <span class = "letter">Shipment Date</span> 
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" md="3" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card class="text-center" tile>
                  <span class = "letter">Shipment Number</span> 
                </v-card>
              </v-col>
          </v-row>

          <v-row no-gutters>
              <v-col  class="v-col" cols="12" sm="6" md="12" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile>
                  <span class = "bold letter" style="padding-left: 6px">Please Check The Applicable Response</span> 
                </v-card>
              </v-col>
          </v-row>

          <v-row no-gutters>
              <v-col  class="v-col" cols="12" sm="6" md="3" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">Unit Discarded</label>
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" sm="6" md="2" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">Unit Expired</label>
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" sm="6" md="7" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px;">Unit Used for Manufacturing</label>
                </v-card>
              </v-col>
          </v-row>
        
          <v-row no-gutters>
              <v-col  class="v-col" cols="12" sm="6" md="7" style="border-left: 4px solid black; border-bottom: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">Unit Returned to Gulf Coast Regional Blood Center</label>
                </v-card>
              </v-col>
              <v-col  class="v-col" cols="12" sm="6" md="5" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox" style="font-size: 18px">Date: </label>
                </v-card>
              </v-col>
          </v-row>

          <v-row no-gutters>
              <v-col  class="v-col" cols="12" sm="6" md="12" style="border-left: 4px solid black; border-bottom: 4px solid black; border-right: 4px solid black;">
                <v-card tile style="padding-left: 4px">
                  <input type="checkbox" id="checkbox" class="dark">
                  <label for="checkbox" style="font-size: 18px">Unit Transfused <span class="bold">(Please Complete Recipient Information)</span></label>
                </v-card>
              </v-col>
          </v-row>

        </v-container>
          <img class="img" src="../assets/chag_footer_1.jpg" alt="" />
        </v-container>        
    </div>
</template>

<script>
import axios from "axios";
import jsPDF from "jspdf";
import jquery from "jquery";

export default {
    name: "app",
    data() {
      return {
        today: ""
      };
    },
    mounted() {
    this.todayDate();
    },
    methods: {
        genPDF() {


        /*var doc = new jsPDF;
        
        var img1 = new Image();
        img1.src = "../assets/chag_1.png"

        var img2 = new Image();
        img2.src = "../assets/chag_2.png"

        var img3 = new Image();
        img3.src = "../assets/chag_3.png"*/

        doc.save("CHAG.pdf");
        },
        async todayDate(){
          var today = new Date();
          var dd = today.getDate();

          var mm = today.getMonth()+1; 
          var yyyy = today.getFullYear();

          if(dd<10) {dd =' 0' + dd;} 

          if(mm<10) {mm = '0' + mm;}

          today = mm + '/'+dd + '/' + yyyy;
          this.today = today;
        }
    }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.button {
  margin: 10px 10px;
}
#form {
  margin: 0;
  padding: 0;
}
@page{
  size: A4;
}
label {
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 5px;
}
h2,
h3 {
  font-weight: bold;
}
.img {
  width: 100%;
}
span.bold{
  font-weight: 900;
}
.letter{
  font-size: 18px;
}
label{
  margin: 5px;
}
</style>