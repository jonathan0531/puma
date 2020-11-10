<template>
  <div>
    <h1 id="margin">Disease Configuration</h1>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddDiseaseConfig' }"
      >Disease Configuration</v-btn
    >
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Disease_ID</th>
          <th scope="col">Disease_Desc</th>
          <th scope="col">Lookback_Min</th>
          <th scope="col">Lookback_Max</th>
          <th scope="col">Confirm_Needed</th>
          <th scope="col">Recip_Tracing</th>
          <th scope="col">Follow_Up_Days</th>
          <th scope="col">Exception_Comments</th>
          <th scope="col">RT_LETTER</th>
          <th scope="col">RT_ON_IND_RESULT</th>
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
          <td>{{ disease_config.Exception_Comments }}</td>
          <td>{{ disease_config.RT_LETTER }}</td>
          <td>{{ disease_config.RT_ON_IND_RESULT }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" v-bind:to="`/DiseaseConfig/${disease_config.Disease_ID}`">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteDisease(disease_config.Disease_ID)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import * as M from "materialize-css";

export default {
  name: "disease_config",
  data() {
    return {
      disease_config: [],
      Disease_ID: "",
      Disease_Desc: "",
      Lookback_Min: "",
      Lookback_Max: "",
      Confirm_Needed: "",
      Recip_Tracing: "",
      Follow_Up_Days: "",
      Exception_Comments: "",
      RT_LETTER: "",
      RT_ON_IND_RESULT: "",
    };
  },
  mounted() {
    this.getDisease();
  },
  methods: {
    formatDate(d) {
      return d ? moment.utc(d).format("MMM D, YYYY") : "";
    },
    formatDisease(disease_config) {
      return disease_config.map((disease_config) => ({
        Disease_ID: disease_config.Disease_ID,
        Disease_Desc: disease_config.Disease_Desc,
        Lookback_Min: disease_config.Lookback_Min,
        Lookback_Max: disease_config.Lookback_Max,
        Confirm_Needed: disease_config.Confirm_Needed,
        Recip_Tracing: disease_config.Recip_Tracing,
        Follow_Up_Days: disease_config.Follow_Up_Days,
        Exception_Comments: disease_config.Exception_Comments,
        RT_LETTER: disease_config.RT_LETTER,
        RT_ON_IND_RESULT: disease_config.RT_ON_IND_RESULT,
      }));
    },
    async getDisease() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/disease_config",
      })
        .then((response) => {
          this.disease_config = response.data;
          this.disease_config = this.formatDisease(response.data);
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
    async deleteDisease(disease_id) {
      return axios({
        method: "delete",
        url: `http://localhost:5000/api/disease_config/${disease_id}`,
      })
        .then((response) => {
          this.$router.go(5);
          swal("Success!", "Disease Deleted!", "success");
        })
        .catch((err) => {
          const message = error.response.data.message;
          swal("Not Deleted!", `${message}`, "error");
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
  text-align: center;
}
</style>

