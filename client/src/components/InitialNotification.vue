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
          <label>Consignee: Plasma Llc/Korean Green Cross</label>
          <!-- <input v-model="message" placeholder="placeholder" /> -->
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
            <input id="input" v-model="BUI" />
          </td>

          <td>
            <label>Date Drawn</label>
          </td>
          <td>
            <input id="input" placeholder="10/18/2020" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Component: </label>
          </td>
          <td>
            <input id="input" placeholder="E5622 - PLASMA >24" />
          </td>
          <td>
            <label>Box / Shipment</label>
          </td>
          <td>
            <input id="input" placeholder="G6011573" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Shipment Date:</label>
          </td>
          <td>
            <input id="input" placeholder="03/31/2020" />
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
            <input id="input" placeholder="IHCV - Negative" />
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
            <input id="input" placeholder="HXV2 - Negative" />
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

      <div>
        <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="2000"
          filename="Initial"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a3"
          pdf-orientation="portrait"
          pdf-content-width="90%"
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
                <label>Consignee: Plasma Llc/Korean Green Cross</label>
                <!-- <input v-model="message" placeholder="placeholder" /> -->
              </tr>
              <tr>
                <td>
                  <label>Date of Priliminary Notification: </label>
                  <input v-model="Lookback_ID" />
                </td>
                <td>
                  <label>Completed By: Robin Fuller</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date of Final Notification: </label>
                  <input v-model="BUI" placeholder="10/20/2020" />
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

                <th></th>
              </tr>

              <tr>
                <td>
                  <label>Unit Number:</label>
                </td>
                <td>
                  <input id="input" v-model="BUI" />
                </td>

                <td>
                  <label>Date Drawn</label>
                </td>
                <td>
                  <input id="input" placeholder="10/18/2020" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Component: </label>
                </td>
                <td>
                  <input id="input" placeholder="E5622 - PLASMA >24" />
                </td>
                <td>
                  <label>Box / Shipment</label>
                </td>
                <td>
                  <input id="input" placeholder="G6011573" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Shipment Date:</label>
                </td>
                <td>
                  <input id="input" placeholder="03/31/2020" />
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
                  <input id="input" placeholder="IHCV - Negative" />
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
                  <input id="input" placeholder="HXV2 - Negative" />
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
          </section>
        </vue-html2pdf>
      </div>
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
      Lookback_ID: "",
      BUI: "",
      Look_CMP_Code: "",
      Org_ID: "",
      Donor_ID: "",
      Look_Visit_Date: "",
      Look_BUI: "",
      Look_CMP_Desc: "",
      Look_CMP_Group: "",
      Look_Loc_Code: "",
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
      this.BUI = response.data.BUI;
      this.Look_CMP_Code = response.data.Look_CMP_Code;
      this.Org_ID = response.data.Org_ID;
      this.Donor_ID = response.data.Donor_ID;
      this.Look_Visit_Date = response.data.Look_Visit_Date;
      this.Look_BUI = response.data.Look_BUI;
      this.Look_CMP_Desc = response.data.Look_CMP_Desc;
      this.Look_CMP_Group = response.data.Look_CMP_Group;
      this.Look_Loc_Code = response.data.Look_Loc_Code;
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
  background: #CCC;
}
</style>