<template>
  <div>
    <h1 id="margin">Result Set</h1>
    <div></div>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddResultSet' }"
      >Add Result Set</v-btn
    >
    <div>
      <b-table striped hover :items="resultset" :fields="fields">
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/config/resultset/${data.item.Result_Set}`"
          >
            <v-icon color="teal">edit</v-icon></v-btn
          >
          <!-- <v-btn icon class="mx-0" @click="deleteDonor(data.item.Donor_ID)">
            <v-icon color="pink">delete</v-icon>
          </v-btn> -->
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
          key: "Result_Set",
          label: "Result Set",
          sortable: true,
        },
        {
          key: "Result",
          label: "Result",
          sortable: true,
        },
        {
          key: "Result_Value",
          label: "Result Value",
          sortable: true,
        },
        {
          key: "Value_Desc",
          label: "Value Description",
          sortable: true,
        },
        {
          key: "Nat_Result",
          label: "Nat Result",
          sortable: true,
        },
        {
          key: "Nat_Count",
          label: "Nat Count",
          sortable: true,
        },
        {
          key: "Conf_Result",
          label: "Config Results",
          sortable: true,
        },
        {
          key: "Conf_Count",
          label: "Config Count",
          sortable: true,
        },
        {
          key: "Repeat_Result",
          label: "Repeat Result",
          sortable: true,
        },
        {
          key: "Repeat_Count",
          label: "Repeat Count",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      resultset: [],
    };
  },
  mounted() {
    this.getRS();
  },
  methods: {
    async getRS() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/resultset",
      })
        .then((response) => {
          this.resultset = response.data;
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
    // async deleteDonor(donor_id) {
    //   return axios({
    //     method: "delete",
    //     url: `http://localhost:5000/api/donor/${donor_id}`,
    //   })
    //     .then((response) => {
    //       this.$router.go(5);
    //       swal("Success!", "Donor Deleted!", "success");
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

