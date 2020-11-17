<template>
  <div>
    <h1 id="margin">Search Lookbacks</h1>
    <div>
      <b-form-fieldset horizontal label="Filter:" class="col-5">
        <b-form-input
          v-model="filter"
          placeholder="Search Lookbacks"
        ></b-form-input>
      </b-form-fieldset>
    </div>
    <v-btn id="btn" color="primary" dark class="mb-2" @click="genPDF"
      >Generate PDF</v-btn
    >

    <div style="overflow: scroll">
      <b-table
        striped
        hover
        :items="lookback"
        :fields="fields"
        :filter="filter"
        bordered
        head-variant="dark"
        small
      >
        <template v-slot:cell(initial)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/form/notification/${data.item.Lookback_ID}`"
          >
            <v-icon color="teal">edit</v-icon></v-btn
          >
        </template>

        <template v-slot:cell(chag)="data">
          <v-btn icon class="mx-0" v-bind:to="`/chag/${data.item.Lookback_ID}`">
            <v-icon color="teal">edit</v-icon></v-btn
          >
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  name: "app",
  data() {
    return {
      fields: [
        {
          key: "initial",
          label: "Initial Notification Form",
        },
        {
          key: "chag",
          label: "Chag Form",
        },
        {
          key: "Lookback_ID",
          label: "Lookback_ID",
          sortable: true,
        },
        {
          key: "Test_ID",
          label: "Test_ID",
        },
        {
          key: "BUI",
          label: "BUI",
        },
        {
          key: "Look_CMP_Code",
          label: "Look_CMP_Code",
          sortable: true,
        },
        {
          key: "Disease_ID",
          label: "Disease_ID",
        },
        {
          key: "Org_ID",
          label: "Org_ID",
          sortable: true,
        },
        {
          key: "Donor_ID",
          label: "Donor_ID",
        },
        {
          key: "Look_Visit_Date",
          label: "Look_Visit_Date",
        },
        {
          key: "Look_BUI",
          label: "Look_BUI",
        },
        {
          key: "Look_CMP_Desc",
          label: "Look_CMP_Desc",
        },
        {
          key: "Look_CMP_Group",
          label: "Look_CMP_Group",
        },
        {
          key: "Look_Loc_Code",
          label: "Look_Loc_Code",
        },
        {
          key: "Look_Sub_Loc",
          label: "Look_Sub_Loc",
        },
        {
          key: "Look_Stat_Code",
          label: "Look_Stat_Code",
        },
        {
          key: "Look_Pooled",
          label: "Look_Pooled",
        },
        {
          key: "Look_Ship_Date",
          label: "Look_Ship_Date",
        },
        {
          key: "Look_Ship_ID",
          label: "Look_Ship_ID",
        },
        {
          key: "Look_Ship_Box_No",
          label: "Look_Ship_Box_No",
        },
        {
          key: "Look_Salvage_Date",
          label: "Look_Salvage_Date",
        },
        {
          key: "Look_Salvage_ID",
          label: "Look_Salvage_ID",
        },
        {
          key: "Look_Sal_Carton_ID",
          label: "Look_Sal_Carton_ID",
        },
        {
          key: "Look_Inv",
          label: "Look_Inv",
        },
        {
          key: "Look_In_Date",
          label: "Look_In_Date",
        },
        {
          key: "Look_Out_Date",
          label: "Look_Out_Date",
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
    genPDF() {
      // Create a new jsPDF instance
      const doc = new jsPDF("p", "pt", "a4"); // default values

      // set font
      doc.setFont("calibri");

      // font size
      doc.setFontSize(20);

      // doc.text(text, x, y, flags, angle, align);
      doc.text("Lookback Report", 105 * 2.83, 20 * 2.83, null, null, "center");

      // Table
      const lookbackCol = ["Lookback_ID", "BUI", "Look_CMP_Code"];

      const lookbackRows = this.lookback.map((lookback) => {
        const row = [
          lookback.Lookback_ID,
          lookback.BUI,
          lookback.Look_CMP_Code,
        ];
        return row;
      });
      const startY = 25 * 2.83;
      doc.autoTable(lookbackCol, lookbackRows, {
        startY,
        theme: "striped",
        styles: {
          fontSize: 10,
        },
        // columnStyles: {
        //   0: { cellWidth: 80 },
        //   1: { cellWidth: 90 },
        //   2: { cellWidth: 95 },
        // },
      });

      doc.save("Lookback Report.pdf");
    },

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

