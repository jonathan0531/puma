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
      <b-table
        striped
        hover
        :items="resultset"
        :fields="fields"
        bordered
        head-variant="dark"
        small
        responsive
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/config/resultset/${data.item.Result_ID}`"
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
          key: "Result_ID",
          label: "Result ID",
          sortable: true,
        },
        {
          key: "Result_Set",
          label: "Result Set",
        },
        {
          key: "Result",
          label: "Result",
          sortable: true,
        },
        {
          key: "Result_Value",
          label: "Result Value",
        },
        {
          key: "Value_Desc",
          label: "Value Description",
          sortable: true,
        },
        {
          key: "Nat_Result",
          label: "Nat Result",
        },
        {
          key: "Nat_Count",
          label: "Nat Count",
        },
        {
          key: "Conf_Result",
          label: "Config Results",
        },
        {
          key: "Conf_Count",
          label: "Config Count",
        },
        {
          key: "Repeat_Result",
          label: "Repeat Result",
        },
        {
          key: "Repeat_Count",
          label: "Repeat Count",
        },
        {
          key: "actions",
          label: "Edit",
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

