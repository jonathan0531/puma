<template>
  <div id="app">
    <v-flex xs12>
      <img class="img" src="../assets/bc.png" alt="" />
      <v-btn class="btn" color="primary" @click="generateReport"
        >Generate Report</v-btn
      >
      <h2>URGENT</h2>
      <h3>Consignee Notification - Inventory Lookback</h3>
      <table style="width: 100%">
        <tr>
          <input style="width: 195px; margin-left: 15px" v-model="Org_Name" />
          <label style="margin-left: 5px">/</label>
          <input v-model="Contact" />
        </tr>
        <tr>
          <td>
            <label>Date of Preliminary Notification: </label>
            <input placeholder="10/01/2020" />
          </td>
          <td>
            <label>Completed By: Robin Fuller</label>
          </td>
        </tr>
        <tr>
          <td>
            <label>Date of Final Notification: </label>
            <input placeholder="10/20/2020" />
          </td>
          <td>
            <label>Completed By: Robin Fuller</label>
          </td>
        </tr>
      </table>
      <p>
        Current federal regulations require us to inform you when the donor of a
        unit consigned to you tests reactive for a viral marker on a subsequent
        donation. The donor's subsequent, reactive donation date for the unit
        listed below is: 08/29/2020.
      </p>

      <table style="width: 100%">
        <tr id="header">
          <th colspan="4">
            <label> Cosigned Unit / Product Information</label>
          </th>
        </tr>

        <tr>
          <td>
            <label>Unit Number:</label>
          </td>
          <td>
            <input id="input" v-model="Look_BUI" />
          </td>

          <td>
            <label>Date Drawn</label>
          </td>
          <td>
            <input id="input" style="width: 82px" v-model="Donation_Date" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Component: </label>
          </td>
          <td>
            <input id="input" style="width: 50px" v-model="Look_CMP_Code" />
            /
            <input v-model="Look_CMP_Desc" />
          </td>
          <td>
            <label>Box / Shipment</label>
          </td>
          <td>
            <label>N/A </label>
            <input id="input" v-model="Look_Ship_Box_No" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Shipment Date:</label>
          </td>
          <td>
            <label>N/A </label>
            <input id="input" v-model="Look_Ship_Date" />
          </td>
        </tr>
      </table>

      <table style="width: 100%">
        <tr id="header">
          <th colspan="4">
            <label> Initial Test Results</label>
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <label>
              Donor screening test is reactive for the following: Anti-HCV
              (Antibody to Hepatitis C Virus)
            </label>
          </td>
        </tr>
        <tr>
          <th>
            <label> Recommended Action </label>
          </th>
          <td>
            <label>
              <input type="checkbox" />
              <!-- <span class="checkmark"></span> -->
              Quarantine until further notice
            </label>
          </td>
          <td>
            <label>
              <input type="checkbox" />
              Destroy
            </label>
          </td>
          <td>
            <label> Comment: Also Reactive For HBC </label>
          </td>
        </tr>
      </table>

      <table style="width: 100%">
        <tr id="header">
          <th colspan="4">
            <label> Confirmatory / Supplemental Test Results</label>
          </th>
        </tr>

        <tr>
          <td>
            <label>Confirmatory Test Result:</label>
          </td>
          <td colspan="4">
            <input id="input" style="width: 90px" v-model="Disease_ID" />
            <label>- Negative</label>
          </td>
        </tr>
        <tr>
          <td>
            <label>NAT Resoultion Result:</label>
          </td>
          <td colspan="3">
            <input id="input" placeholder="N/A" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Supplemental Test Result:</label>
          </td>
          <td colspan="3">
            <input id="input" style="width: 90px" v-model="Disease_ID" />
            <label>- Negative</label>
          </td>
        </tr>
        <tr>
          <th>
            <label>Recommended Action</label>
          </th>
          <td>
            <label>
              <input type="checkbox" />
              Release from quarantine
            </label>
          </td>
          <td>
            <label>
              <input type="checkbox" />
              Destroy</label
            >
          </td>
          <td>
            <label>Comment: Also Reactive for HBC</label>
          </td>
        </tr>
      </table>

      <table style="width: 100%">
        <tr id="header">
          <th colspan="4">
            <label>Consignee Response</label>
          </th>
        </tr>
        <tr>
          <td style="text-align: center" colspan="4">
            <label>
              Please complete the disposition information below and return this
              form to Donor Services
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" />
              Transfused Date:
            </label>
          </td>
          <td>
            <label>
              <input type="checkbox" />
              Pooled/Further Manufacturer
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" />
              Destroyed / Discarded Date:
            </label>
          </td>
          <td>
            <label>
              <input type="checkbox" />
              Other
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" />
              Transferred / Consigned to:
            </label>
          </td>
          <td>
            <label> Date: </label>
          </td>
        </tr>
      </table>

      <table id="pad" style="width: 100%">
        <tr>
          <td colspan="2">
            <label>
              <input type="checkbox" />
              Form Completed By:
            </label>
          </td>
          <td>
            <label> Date: </label>
          </td>
        </tr>
      </table>
      <footer>
        <div style="text-align: center">
          <p>
            Return by Fax to: <br />
            Technical Services <br />
            Phone Number (713) 791-6606 <br />
            Fax Number (713) 791-6651
          </p>
        </div>
        <img class="img" src="../assets/footer.png" alt="" />
      </footer>
      <!-- START OF PDF FILE -->
      <div>
        <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="2000"
          :htmlToPdfOptions="htmlToPdfOptions"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-content-width="90%"
          @beforeDownload="beforeDownload($event)"
          @progress="onProgress($event)"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf"
        >
          <section slot="pdf-content">
            <img class="img" src="../assets/bc.png" alt="" />
            <h2>URGENT</h2>
            <h3>Consignee Notification - Inventory Lookback</h3>
            <table style="width: 100%">
              <tr>
                <input
                  style="width: 195px; margin-left: 15px"
                  v-model="Org_Name"
                />
                <label style="margin-left: 5px">/</label>
                <input v-model="Contact" />
              </tr>
              <tr>
                <td>
                  <label>Date of Preliminary Notification: </label>
                  <input placeholder="10/01/2020" />
                </td>
                <td>
                  <label>Completed By: Robin Fuller</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date of Final Notification: </label>
                  <input placeholder="10/20/2020" />
                </td>
                <td>
                  <label>Completed By: Robin Fuller</label>
                </td>
              </tr>
            </table>
            <p>
              Current federal regulations require us to inform you when the
              donor of a unit consigned to you tests reactive for a viral marker
              on a subsequent donation. The donor's subsequent, reactive
              donation date for the unit listed below is: 08/29/2020.
            </p>

            <table style="width: 100%">
              <tr id="header">
                <th colspan="4">
                  <label> Cosigned Unit / Product Information</label>
                </th>
              </tr>

              <tr>
                <td>
                  <label>Unit Number:</label>
                </td>
                <td>
                  <input id="input" v-model="Look_BUI" />
                </td>

                <td>
                  <label>Date Drawn</label>
                </td>
                <td>
                  <input
                    id="input"
                    style="width: 82px"
                    v-model="Donation_Date"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Component: </label>
                </td>
                <td>
                  <input
                    id="input"
                    style="width: 50px"
                    v-model="Look_CMP_Code"
                  />
                  /
                  <input v-model="Look_CMP_Desc" />
                </td>
                <td>
                  <label>Box / Shipment</label>
                </td>
                <td>
                  <label>N/A </label>
                  <input id="input" v-model="Look_Ship_Box_No" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Shipment Date:</label>
                </td>
                <td>
                  <label>N/A </label>
                  <input id="input" v-model="Look_Ship_Date" />
                </td>
              </tr>
            </table>

            <table style="width: 100%">
              <tr id="header">
                <th colspan="4">
                  <label> Initial Test Results</label>
                </th>
              </tr>
              <tr>
                <td colspan="4">
                  <label>
                    Donor screening test is reactive for the following: Anti-HCV
                    (Antibody to Hepatitis C Virus)
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <label> Recommended Action </label>
                </th>
                <td>
                  <label>
                    <input type="checkbox" />
                    <!-- <span class="checkmark"></span> -->
                    Quarantine until further notice
                  </label>
                </td>
                <td>
                  <label>
                    <input type="checkbox" />
                    Destroy
                  </label>
                </td>
                <td>
                  <label> Comment: Also Reactive For HBC </label>
                </td>
              </tr>
            </table>

            <table style="width: 100%">
              <tr id="header">
                <th colspan="4">
                  <label> Confirmatory / Supplemental Test Results</label>
                </th>
              </tr>

              <tr>
                <td>
                  <label>Confirmatory Test Result:</label>
                </td>
                <td colspan="4">
                  <input id="input" style="width: 90px" v-model="Disease_ID" />
                  <label>- Negative</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>NAT Resoultion Result:</label>
                </td>
                <td colspan="3">
                  <input id="input" placeholder="N/A" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Supplemental Test Result:</label>
                </td>
                <td colspan="3">
                  <input id="input" style="width: 90px" v-model="Disease_ID" />
                  <label>- Negative</label>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Recommended Action</label>
                </th>
                <td>
                  <label>
                    <input type="checkbox" />
                    Release from quarantine
                  </label>
                </td>
                <td>
                  <label>
                    <input type="checkbox" />
                    Destroy</label
                  >
                </td>
                <td>
                  <label>Comment: Also Reactive for HBC</label>
                </td>
              </tr>
            </table>

            <table style="width: 100%">
              <tr id="header">
                <th colspan="4">
                  <label>Consignee Response</label>
                </th>
              </tr>
              <tr>
                <td style="text-align: center" colspan="4">
                  <label>
                    Please complete the disposition information below and return
                    this form to Donor Services
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    Transfused Date:
                  </label>
                </td>
                <td>
                  <label>
                    <input type="checkbox" />
                    Pooled/Further Manufacturer
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    Destroyed / Discarded Date:
                  </label>
                </td>
                <td>
                  <label>
                    <input type="checkbox" />
                    Other
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    Transferred / Consigned to:
                  </label>
                </td>
                <td>
                  <label> Date: </label>
                </td>
              </tr>
            </table>

            <table id="pad" style="width: 100%">
              <tr>
                <td colspan="2">
                  <label>
                    <input type="checkbox" />
                    Form Completed By:
                  </label>
                </td>
                <td>
                  <label> Date: </label>
                </td>
              </tr>
            </table>
            <footer>
              <div style="text-align: center">
                <p>
                  Return by Fax to: <br />
                  Technical Services <br />
                  Phone Number (713) 791-6606 <br />
                  Fax Number (713) 791-6651
                </p>
              </div>
              <img class="img" src="../assets/footer.png" alt="" />
            </footer>
          </section>
        </vue-html2pdf>
      </div>
      <!-- END OF PDF FILE -->
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import LookbackService from "@/services/LookbackService";
import VueHtml2pdf from "vue-html2pdf";

export default {
  components: {
    VueHtml2pdf,
  },
  name: "app",
  data() {
    return {
      htmlToPdfOptions: {
        margin: [0, 20, 20, 0],
        filename: `Initial Notification.pdf`,
        image: {
          type: "jpeg",
          quality: 2,
        },

        jsPDF: {
          format: "a3",
          orientation: "portrait",
        },
      },
      Lookback_ID: "",
      Look_Ship_date: "",
      Look_CMP_Code: "",
      Org_ID: "",
      Org_Name: "",
      Contact: "",
      Look_BUI: "",
      Look_CMP_Desc: "",
      Look_Ship_ID: "",
      Look_Ship_Box_No: "",
      Disease_ID: "",
      Disease_Desc: "",
      Donation_Date: "",
    };
  },

  mounted() {
    this.getOneLookback();
  },

  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    async getOneLookback() {
      const response = await LookbackService.getOneLookback({
        id: this.$route.params.id,
      });
      this.Lookback_ID = response.data.Lookback_ID;
      this.Look_Ship_date = response.data.Look_Ship_date;
      this.Look_CMP_Code = response.data.Look_CMP_Code;
      this.Org_ID = response.data.Org_ID;
      this.Org_Name = response.data.Org_Name;
      this.Contact = response.data.Contact;
      this.Look_BUI = response.data.Look_BUI;
      this.Look_CMP_Desc = response.data.Look_CMP_Desc;
      this.Look_Ship_ID = response.data.Look_Ship_ID;
      this.Look_Ship_Box_No = response.data.Look_Ship_Box_No;
      this.Disease_ID = response.data.Disease_ID;
      this.Disease_Desc = response.data.Disease_Desc;
      this.Look_Loc_Code = response.data.Look_Loc_Code;
      this.Donation_Date = response.data.Donation_Date;
      this.Look_Ship_Box_No = response.data.Look_Ship_Box_No;
      console.log(this.Lookback_ID);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.btn {
  margin-top: 10px;
  margin-bottom: 15px;
}
#form {
  margin: 0;
  padding: 0;
}
table {
  border: 1px solid black;
  margin-top: 15px;
  margin-bottom: 15px;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
}
tr {
  border: 1px solid black;
}
label {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 5px;
}
h2,
h3 {
  font-weight: bold;
}
.img {
  width: 100%;
}
#input {
  margin-left: 15px;
}
#header {
  text-align: center;
  vertical-align: middle;
  background: #ccc;
}
/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
#pad {
  margin-bottom: 220px;
}
</style>