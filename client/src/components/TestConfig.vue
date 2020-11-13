<template>
  <div>
    <h1 id="margin">Test Configuration</h1>
    <div></div>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddTestConfig' }"
      >Add Test</v-btn
    >
    <div>
      <b-table
        striped
        hover
        :items="test"
        :fields="fields"
        bordered
        head-variant="dark"
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/config/test/${data.item.Test_ID}`"
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
          key: "Test_ID",
          label: "Test ID",
          sortable: true,
        },
        {
          key: "Result_Set",
          label: "Result Set",
          sortable: true,
        },
        {
          key: "Test_Count",
          label: "Test Count",
          sortable: true,
        },
        {
          key: "Disease_ID",
          label: "Disease ID",
          sortable: true,
        },
        {
          key: "Supplemental",
          label: "Supplemental",
          sortable: true,
        },
        {
          key: "actions",
          label: "Edit",
        },
      ],
      test: [],
    };
  },
  mounted() {
    this.getTest();
  },
  methods: {
    async getTest() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/test",
      })
        .then((response) => {
          this.test = response.data;
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

