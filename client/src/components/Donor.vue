<template>
  <div>
    <h1 id="margin">Donor Information</h1>
    <div>
      <b-form-fieldset horizontal label="Filter" class="col-5">
        <b-form-input
          v-model="filter"
          placeholder="Type to Search"
        ></b-form-input>
      </b-form-fieldset>
    </div>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddDonor' }"
      >New Donor</v-btn
    >
    <div>
      <b-table striped hover :items="donor" :fields="fields" :filter="filter">
        <template v-slot:cell(actions)="data">
          <v-btn icon class="mx-0" v-bind:to="`/donor/${data.item.Donor_ID}`">
            <v-icon color="teal">edit</v-icon></v-btn
          >
          <v-btn icon class="mx-0" @click="deleteDonor(data.item.Donor_ID)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import * as M from "materialize-css";

export default {
  name: "Donors",
  data() {
    return {
      fields: [
        {
          key: "Donor_ID",
          label: "ID",
          sortable: true,
        },
        {
          key: "Blood_Type",
          label: "Blood Type",
          sortable: true,
        },
        {
          key: "Donor_FName",
          label: "First Name",
          sortable: true,
        },
        {
          key: "Donor_LName",
          sortable: true,
        },
        {
          key: "Birth_Date",
          sortable: true,
        },
        {
          key: "Donor_St_Addr",
          sortable: true,
        },
        {
          key: "Donor_City",
          sortable: true,
        },
        {
          key: "Donor_State",
          sortable: true,
        },
        {
          key: "Donor_Country",
          sortable: true,
        },
        {
          key: "Donor_Postal",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      filter: "",
      donor: [],
      Donor_ID: "",
      Blood_Type: "",
      Donor_FName: "",
      Donor_LName: "",
      Birth_Date: "",
      Donor_St_Addr: "",
      Donor_City: "",
      Donor_State: "",
      Donor_Country: "",
      Donor_Postal: "",
    };
  },
  mounted() {
    this.getDonor();
  },
  methods: {
    formatDate(d) {
      return d ? moment.utc(d).format("MMM D, YYYY") : "";
    },
    formatDonor(donor) {
      return donor.map((donors) => ({
        Donor_ID: donors.Donor_ID,
        Blood_Type: donors.Blood_Type,
        Donor_FName: donors.Donor_FName,
        Donor_LName: donors.Donor_LName,
        Birth_Date: this.formatDate(donors.Birth_Date),
        Donor_St_Addr: donors.Donor_St_Addr,
        Donor_City: donors.Donor_City,
        Donor_State: donors.Donor_State,
        Donor_Country: donors.Donor_Country,
        Donor_Postal: donors.Donor_Postal,
      }));
    },
    async getDonor() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/donor",
      })
        .then((response) => {
          this.donor = this.formatDonor(response.data);
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
    async deleteDonor(donor_id) {
      return axios({
        method: "delete",
        url: `http://localhost:5000/api/donor/${donor_id}`,
      })
        .then((response) => {
          this.$router.go(5);
          swal("Success!", "Donor Deleted!", "success");
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
}
h1 {
  text-align: center;
}
</style>

