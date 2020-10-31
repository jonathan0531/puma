<template>
  <div>
    <h1 id="margin">Donor Table</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Donor_ID</th>
          <th scope="col">Blood_Type</th>
          <th scope="col">Donor_FName</th>
          <th scope="col">Donor_LName</th>
          <th scope="col">Birth_Date</th>
          <th scope="col">Donor_St_Addr</th>
          <th scope="col">Donor_City</th>
          <th scope="col">Donor_State</th>
          <th scope="col">Donor_Postal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donors in donor" :key="donors.Donor_Id">
          <th scope="row">{{ donors.Donor_ID }}</th>
          <td>{{ donors.Blood_Type }}</td>
          <td>{{ donors.Donor_FName }}</td>
          <td>{{ donors.Donor_LName }}</td>
          <td>{{ donors.Birth_Date }}</td>
          <td>{{ donors.Donor_St_Addr }}</td>
          <td>{{ donors.Donor_City }}</td>
          <td>{{ donors.Donor_State }}</td>
          <td>{{ donors.Donor_Postal }}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Donors",
  data() {
    return {
      donor: [],
    };
  },
  mounted() {
    this.getDonor();
  },
  methods: {
    async getDonor() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/donor",
      })
        .then((response) => {
          this.donor = response.data;
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
#margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

