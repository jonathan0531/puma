<template>
  <div>
    <h1 style="margin-top: 20px">Disease Configuration</h1>
    <hr />
    <br />
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddDiseaseConfig' }"
      >Add New Disease</v-btn
    >
    <div style="overflow: scroll">
      <b-table
        striped
        hover
        :items="disease_config"
        :fields="fields"
        small
        bordered
        head-variant="dark"
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/disease_config/${data.item.Disease_ID}`"
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
          key: "Disease_ID",
          label: "Disease ID",
          sortable: true,
        },
        {
          key: "Disease_Desc",
          label: "Disease Desc",
        },
        {
          key: "Lookback_Min",
          label: "Lookback Min",
        },
        {
          key: "Lookback_Max",
          label: "Lookback Max",
        },
        {
          key: "Confirm_Needed",
          label: "Confirm Needed",
        },
        {
          key: "Recip_Tracing",
          label: "Recip Tracing",
        },
        {
          key: "Follow_Up_Days",
          label: "Follow Up Days",
        },
        {
          key: "Rt_Let",
          label: "Rt Let",
        },
        {
          key: "Rt_on_Ind_Res",
          label: "Rt_on Ind_Res",
        },
        {
          key: "Exception_Comments",
          label: "Exception Comments",
        },
        {
          key: "actions",
          label: "Edit",
        },
      ],
      disease_config: [],
    };
  },
  mounted() {
    this.getDisease();
  },
  methods: {
    async getDisease() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/disease_config",
      })
        .then((response) => {
          this.disease_config = response.data;
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
}
#margin {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>

