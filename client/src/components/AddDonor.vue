<template>
  <div id="app">
    <h4>Add Donor</h4>
    <v-flex xs12>
      <v-form ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="5">
            <v-text-field
              label="Donor ID"
              placeholder="DONOR ID"
              v-model="Donor_ID"
              :rules="idRules"
              required
            ></v-text-field>
            <v-text-field
              label="Blood Type"
              placeholder="BLOOD TYPE"
              v-model="Blood_Type"
              :rules="bloodTypeRules"
              required
            ></v-text-field>
            <v-text-field
              label="First Name"
              placeholder="FIRST NAME"
              v-model="Donor_FName"
              :rules="fNameRules"
              required
            ></v-text-field>
            <v-text-field
              label="Last Name"
              placeholder="LAST NAME"
              v-model="Donor_LName"
              :rules="lNameRules"
              required
            ></v-text-field>
            <v-text-field
              label="Date of Birth"
              placeholder="BIRTH DATE"
              v-model="Birth_Date"
              :rules="birthDateRules"
              required
            ></v-text-field>
            <v-text-field
              label="Address"
              placeholder="DONOR ADDRESS"
              v-model="Donor_St_Addr"
              :rules="addressRules"
              required
            ></v-text-field>
            <v-text-field
              label="City"
              placeholder="DONOR CITY"
              v-model="Donor_City"
              :rules="cityRules"
              required
            ></v-text-field>
            <v-text-field
              label="State"
              placeholder="DONOR STATE"
              v-model="Donor_State"
              :rules="stateRules"
              required
            ></v-text-field>
            <v-text-field
              label="Country"
              placeholder="DONOR COUNTRY"
              v-model="Donor_Country"
              :rules="countryRules"
              required
            ></v-text-field>
            <v-text-field
              label="Zip Code"
              placeholder="DONOR POSTAL"
              v-model="Donor_Postal"
              :rules="postalRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="button" color="disabled" v-bind:to="{ name: 'Donor' }"
          >Back</v-btn
        >
        <v-btn class="button" color="success" @click="submit">Submit</v-btn>
        <v-btn class="button" @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data: () => ({
    valid: true,
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
  }),
  methods: {
    // async submit() {
    //   if (this.$refs.form.validate()) {
    //     axios
    //       .post("http://localhost:5000/api/donor", {
    //         Donor_ID: this.Donor_ID,
    //         Blood_Type: this.Blood_Type,
    //         Donor_FName: this.Donor_FName,
    //         Donor_LName: this.Donor_LName,
    //         Birth_Date: this.Birth_Date,
    //         Donor_St_Addr: this.Donor_St_Addr,
    //         Donor_City: this.Donor_City,
    //         Donor_State: this.Donor_State,
    //         Donor_Country: this.Donor_Country,
    //         Donor_Postal: this.Donor_Postal,
    //       })
    //       .then(
    //         (response) => {
    //           swal("Success!", "Donor Successfully Added!", "success");
    //         },
    //         (error) => {
    //           const message = error.response.data.message;
    //           swal("Something went wrong..", `${message}`, "error");
    //         }
    //       );
    //   }
    //   return true;
    // },

    async submit() {
      return axios({
        method: "POST",
        data: {
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
        },
        url: "http://localhost:5000/api/donor",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // window.localStorage.setItem("auth", response.data.token);
          swal("Success!", "Donor Added!", "success");
          this.$router.push({ name: "Donor" });
        })
        .catch((error) => {
          const message = error.response.data.message;
          swal("Login Denied", `${message}`, "error");
        });
    },

    clear() {
      this.$refs.form.reset();
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