<template>
  <div>
    <h1 id="margin">Search Donations</h1>
    <div>
      <b-form-fieldset horizontal label="Filter:" class="col-5">
        <b-form-input
          v-model="filter"
          placeholder="Search Blood Donations"
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
        bordered
        head-variant="dark"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "app",
  data() {
    return {
      fields: [
        {
          key: "TRACK_ID",
          label: "TRACK_ID",
          sortable: true,
        },
        {
          key: "VISIT_DATE",
          label: "VISIT_DATE",
          sortable: true,
        },
        {
          key: "DONOR_FNAME",
          label: "DONOR_FNAME",
          sortable: true,
        },
        {
          key: "DONOR_LNAME",
          label: "DONOR_LNAME",
          sortable: true,
        },
        {
          key: "DISEASE_ID",
          label: "DISEASE_ID",
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
    formatDate(d) {
      return d ? moment.utc(d).format("MMM D, YYYY") : "";
    },
    formatTracking(tracking) {
      return tracking.map((tracking) => ({
        TRACK_ID: tracking.TRACK_ID,
        VISIT_DATE: this.formatDate(tracking.VISIT_DATE),
        DONOR_FNAME: tracking.DONOR_FNAME,
        DONOR_LNAME: tracking.DONOR_LNAME,
        DISEASE_ID: tracking.DISEASE_ID,
      }));
    },
    async getTracking() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/tracking",
      })
        .then((response) => {
          //this.tracking = response.data;
          this.tracking = this.formatTracking(response.data);
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

