<template>
  <div>
    <h1 id="margin">Completed Lookbacks</h1>
    <div style="overflow: scroll">
      <b-table
        striped
        hover
        :items="completed"
        :fields="fields"
        bordered
        head-variant="dark"
        small
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/form/notification/${data.item.Lookback_ID}`"
          >
            <v-icon color="teal">edit</v-icon></v-btn
          >
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      fields: [
        {
          key: "actions",
          label: "Initial Notification Form",
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
        },
        {
          key: "Disease_ID",
          label: "Disease_ID",
        },
        {
          key: "Org_ID",
          label: "Org_ID",
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
      completed: [],
    };
  },
  mounted() {
    this.getCompleted();
  },
  methods: {
    async getCompleted() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/completed",
      })
        .then((response) => {
          this.completed = response.data;
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

