<template>
  <div>
    <h1 id="margin">Disease Configuration</h1>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddDiseaseConfig' }"
      >Add New Disease</v-btn
    >
    <!-- <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Disease_ID</th>
          <th scope="col">Disease_Desc</th>
          <th scope="col">Lookback_Min</th>
          <th scope="col">Lookback_Max</th>
          <th scope="col">Confirm_Needed</th>
          <th scope="col">Recip_Tracing</th>
          <th scope="col">Follow_Up_Days</th>
          <th scope="col">Rt_Let</th>
          <th scope="col">Rt_on_Ind_Res</th>
          <th scope="col">Exception_Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="disease_config in disease_config" :key="disease_config.Disease_ID">
          <td>{{ disease_config.Disease_ID }}</td>
          <td>{{ disease_config.Disease_Desc }}</td>
          <td>{{ disease_config.Lookback_Min }}</td>
          <td>{{ disease_config.Lookback_Max }}</td>
          <td>{{ disease_config.confirm_Needed }}</td>
          <td>{{ disease_config.Recip_Tracing }}</td>
          <td>{{ disease_config.Follow_Up_Days }}</td>
          <td>{{ disease_config.Rt_Let }}</td>
          <td>{{ disease_config.Rt_on_Ind_Res }}</td>
          <td>{{ disease_config.Exception_Comments }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" v-bind:to="`/disease_config/${disease_config.Disease_ID}`">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteDisease(disease_config.Disease_ID)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table> -->
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
    // async deleteDisease(disease_id) {
    //   return axios({
    //     method: "delete",
    //     url: `http://localhost:5000/api/disease_config/${disease_id}`,
    //   })
    //     .then((response) => {
    //       this.$router.go(5);
    //       swal("Success!", "Disease Deleted!", "success");
    //     })
    //     .catch((err) => {
    //       const message = error.response.data.message;
    //       swal("Not Deleted!", `${message}`, "error");
    //     });
    // },
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

