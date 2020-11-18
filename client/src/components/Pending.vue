<template>
  <div>
    <h1 id="margin">Pending Lookbacks</h1>
    <div style="overflow: scroll">
      <b-table
        striped
        hover
        :items="pending"
        :fields="fields"
        bordered
        head-variant="dark"
        small
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/lookback/${data.item.Lookback_ID}`"
          >
            <v-icon color="teal">edit</v-icon></v-btn
          >
        </template>
        <template v-slot:cell(initial)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/form/notification/${data.item.Lookback_ID}`"
          >
            <v-icon color="teal">present_to_all</v-icon></v-btn
          >
        </template>

        <template v-slot:cell(chag)="data">
          <v-btn icon class="mx-0" v-bind:to="`/chag/${data.item.Lookback_ID}`">
            <v-icon color="teal">present_to_all</v-icon></v-btn
          >
        </template>

        <template v-slot:cell(nat)="data">
          <v-btn icon class="mx-0" v-bind:to="`/nat/${data.item.Lookback_ID}`">
            <v-icon color="teal">present_to_all</v-icon></v-btn
          >
        </template>
      </b-table>
    </div>
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
      fields: [
        {
          key: "actions",
          label: "Edit",
        },
        {
          key: "initial",
          label: "Initial Form",
        },
        {
          key: "chag",
          label: "Chag Form",
        },
        {
          key: "nat",
          label: "NAT Form",
        },
        {
          key: "Lookback_ID",
          label: "Lookback_ID",
          sortable: true,
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
      pending: [],
    };
  },
  mounted() {
    this.getPending();
  },
  methods: {
    async getPending() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/pending",
      })
        .then((response) => {
          this.pending = response.data;
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
  },
  async updateLookback() {
    await LookbackService.updateLookback({
      id: this.$route.params.id,
      Lookback_ID: this.Lookback_ID,
    });
    swal("Success!", `Lookback Marked as complete!`, "success");
    this.$router.push({ name: "SearchLookback" });
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

