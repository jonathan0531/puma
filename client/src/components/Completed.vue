<template>
  <div>
    <h1 id="margin">Donor Information</h1>
    <v-btn id="btn" color="primary" dark class="mb-2">New Donor</v-btn>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Donor ID</th>
          <th scope="col">Blood Type</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Birthday</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Zip Code</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donors in donor" :key="donors.Donor_Id">
          <td>{{ donors.Donor_ID }}</td>
          <td>{{ donors.Blood_Type }}</td>
          <td>{{ donors.Donor_FName }}</td>
          <td>{{ donors.Donor_LName }}</td>
          <td>{{ donors.Birth_Date }}</td>
          <td>{{ donors.Donor_St_Addr }}</td>
          <td>{{ donors.Donor_City }}</td>
          <td>{{ donors.Donor_State }}</td>
          <td>{{ donors.Donor_Postal }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
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

export default {
  name: "Donors",
  data() {
    return {
      donor: [],
      Donor_ID: "",
      Blood_Type: "",
      Donor_FName: "",
      Donor_LName: "",
      Birth_Date: "",
      Donor_St_Addr: "",
      Donor_City: "",
      Donor_State: "",
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
      return donor.map((donors) => {
        return {
          Donor_ID: donors.Donor_ID,
          Blood_Type: donors.Blood_Type,
          Donor_FName: donors.Donor_FName,
          Donor_LName: donors.Donor_LName,
          Birth_Date: this.formatDate(donors.Birth_Date),
          Donor_St_Addr: donors.Donor_St_Addr,
          Donor_City: donors.Donor_City,
          Donor_State: donors.Donor_State,
          Donor_Postal: donors.Donor_Postal,
        };
      });
    },
    async getDonor() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/donor",
      })
        .then((response) => {
          this.donor = response.data;
          this.donor = this.formatDonor(response.data);
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
  text-align: center;
}
</style>

