<template>
  <div id="app">
    <v-flex xs12>
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
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import LookbackService from "@/services/LookbackService";

export default {
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
.button {
  margin: 10px 10px;
}
#form {
  margin: 0;
  padding: 0;
}
table {
  border: 1px solid black;
  margin-top: 30px;
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
</style>