<template>
  <div id="app">
    <h1 style="margin-top: 20px">Search Lookbacks</h1>
    <hr />
    <div>
      <b-form-fieldset horizontal label="Filter:" class="col-5">
        <b-form-input
          v-model="filter"
          placeholder="Search Lookbacks"
        ></b-form-input>
      </b-form-fieldset>
    </div>

    <div style="overflow: scroll">
      <b-table
        responsive
        striped
        hover
        :items="lookback"
        :fields="fields"
        :filter="filter"
        bordered
        head-variant="dark"
        small
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jsPDF from "jspdf";

export default {
  name: "app",
  data() {
    return {
      fields: [
        {
          key: "Lookback_ID",
          label: "Lookback ID",
          sortable: true,
        },
        {
          key: "BUI",
          label: "BUI",
        },
        {
          key: "Disease_ID",
          label: "Disease ID",
          sortable: true,
        },
        {
          key: "Org_ID",
          label: "Org_ID",
        },
        {
          key: "Donor_ID",
          label: "Donor ID",
        },
        {
          key: "Look_Visit_Date",
          label: "Visit Date",
        },
        {
          key: "Look_BUI",
          label: "Look BUI",
        },
        {
          key: "Look_CMP_Code",
          label: "CMP Code",
          sortable: true,
        },
        {
          key: "Look_CMP_Desc",
          label: "CMP Desc",
        },
        {
          key: "Look_CMP_Group",
          label: "CMP Group",
        },
        {
          key: "Look_Loc_Code",
          label: "Location",
        },
        {
          key: "Look_Sub_Loc",
          label: "Sub Loc",
        },
        {
          key: "Look_Stat_Code",
          label: "Stat Code",
        },
        {
          key: "Look_Pooled",
          label: "Pooled",
        },
        {
          key: "Look_Ship_Date",
          label: "Shipment Date",
        },
        {
          key: "Look_Ship_ID",
          label: "Shipment ID",
        },
        {
          key: "Look_Ship_Box_No",
          label: "Ship Box No",
        },
        {
          key: "Look_Salvage_Date",
          label: "Salvage Date",
        },
        {
          key: "Look_Salvage_ID",
          label: "SalvageID",
        },
        {
          key: "Look_Sal_Carton_ID",
          label: "Salvage Carton ID",
        },
        {
          key: "Look_Inv",
          label: "In Inventory",
        },
        {
          key: "Look_In_Date",
          label: "In Date",
        },
        {
          key: "Look_Out_Date",
          label: "Out Date",
        },
        {
          key: "Look_Processed",
          label: "Look_Processed",
        },
      ],
      filter: "",
      lookback: [],
    };
  },
  mounted() {
    this.getLookback();
  },
  methods: {
    async getLookback() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/lookback",
      })
        .then((response) => {
          this.lookback = response.data;
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#btn {
  margin-bottom: 50px;
}
#margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
h1 {
  text-align: center;
}
</style>

