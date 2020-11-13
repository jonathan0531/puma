<template>
  <div>
    <h1 id="margin">Search Blood Donations</h1>
    <div>
      <b-form-fieldset horizontal label="Filter" class="col-5">
        <b-form-input
          v-model="filter"
          placeholder="Type to Search"
        ></b-form-input>
      </b-form-fieldset>
    </div>

    <div>
      <b-table
        striped
        hover
        :items="tracking"
        :fields="fields"
        :filter="filter"
      >
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
          key: "Track_ID",
          label: "Track_ID",
          sortable: true,
        },
        {
          key: "BUI",
          label: "BUI",
          sortable: true,
        },
        {
          key: "Disease_ID",
          label: "Disease_ID",
          sortable: true,
        },
        {
          key: "Donor_ID",
          label: "Donor_ID",
          sortable: true,
        },
        {
          key: "Test_ID",
          label: "Test_ID",
          sortable: true,
        },
      ],
      filter: "",
      tracking: [],
    };
  },
  mounted() {
    this.getTracking();
  },
  methods: {
    async getTracking() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/tracking",
      })
        .then((response) => {
          this.tracking = response.data;
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

