<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h4>Update Donor</h4>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Begin Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateDonor"
            >Update</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'Donor' }"
            >Back</v-btn
          >
        </div>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              v-bind:disabled="disableID"
              label="Donor ID"
              v-model="Donor_ID"
              :rules="idRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Blood Type"
              v-model="Blood_Type"
              :rules="bloodTypeRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="First Name"
              v-model="Donor_FName"
              :rules="fNameRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Last Name"
              v-model="Donor_LName"
              :rules="lNameRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Date of Birth"
              v-model="Birth_Date"
              :rules="birthDateRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Address"
              v-model="Donor_St_Addr"
              :rules="addressRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="City"
              v-model="Donor_City"
              :rules="cityRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="State"
              v-model="Donor_State"
              :rules="stateRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Country"
              v-model="Donor_Country"
              :rules="countryRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Zip Code"
              v-model="Donor_Postal"
              :rules="postalRules"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import DonorService from "@/services/DonorService";

export default {
  name: "Donors",
  data() {
    return {
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
      valid: true,
      isBeingEdit: true,
      disableID: true,
      visible: false,
      hide: true,
      idRules: [(v) => !!v || "Donor ID is required"],
      bloodTypeRules: [(v) => !!v || "Donor Blood Type is required"],
      fNameRules: [(v) => !!v || "Donor First Name is required"],
      lNameRules: [(v) => !!v || "Donor Last Name is required"],
      birthDateRules: [(v) => !!v || "Donor Birth date is required"],
      addressRules: [(v) => !!v || "Donor Address is required"],
      cityRules: [(v) => !!v || "Donor City is required"],
      stateRules: [(v) => !!v || "Donor State is required"],
      countryRules: [(v) => !!v || "Donor Country is required"],
      postalRules: [(v) => !!v || "Donor Zip Code is required"],
    };
  },
  mounted() {
    this.getOneDonor();
  },

  methods: {
    async getOneDonor() {
      const response = await DonorService.getOneDonor({
        id: this.$route.params.id,
      });
      this.Donor_ID = response.data.Donor_ID;
      this.Blood_Type = response.data.Blood_Type;
      this.Donor_FName = response.data.Donor_FName;
      this.Donor_LName = response.data.Donor_LName;
      this.Birth_Date = response.data.Birth_Date;
      this.Donor_St_Addr = response.data.Donor_St_Addr;
      this.Donor_City = response.data.Donor_City;
      this.Donor_State = response.data.Donor_State;
      this.Donor_Country = response.data.Donor_Country;
      this.Donor_Postal = response.data.Donor_Postal;
      console.log(this.Donor_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    async updateDonor() {
      await DonorService.updateDonor({
        id: this.$route.params.id,
        Donor_ID: this.Donor_ID,
        Blood_Type: this.Blood_Type,
        Donor_FName: this.Donor_FName,
        Donor_LName: this.Donor_LName,
        Birth_Date: this.Birth_Date,
        Donor_St_Addr: this.Donor_St_Addr,
        Donor_City: this.Donor_City,
        Donor_State: this.Donor_State,
        Donor_Country: this.Donor_Country,
        Donor_Postal: this.Donor_Postal,
      });
      swal("Success!", `Donor Updated!`, "success");
      this.$router.push({ name: "Donor" });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.button {
  margin: 10px 10px;
}
#form {
  margin: 0;
  padding: 0;
}
v-text-field {
  margin: 0;
  padding: 0;
}
</style>