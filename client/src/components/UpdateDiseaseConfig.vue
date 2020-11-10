<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h4>Update Diseaese Configuration</h4>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Disease ID"
              v-model="Disease_ID"
              :rules="dIdRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Disease Description"
              v-model="Disease_Desc"
              :rules="dDescRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Lookback Minimum"
              v-model="Lookback_Min"
              :rules="lMinRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Lookback Maximum"
              v-model="Lookback_Max"
              :rules="lMaxRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Confirmation Needed"
              v-model="Confirm_Needed"
              :rules="confNeededRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing"
              v-model="Recip_Tracing"
              :rules="rtRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Follow Up Days"
              v-model="Follow_Up_Days"
              :rules="followUpRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Exception Comments"
              v-model="Exception_Comments"
              :rules="exceptionRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing Letter"
              v-model="Rt_Let"
              :rules="rtLetterRules"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing Letter on Indecisive Result"
              v-model="Rt_on_Ind_Res"
              :rules="rtlIndecisiveRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Begin Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateDisease"
            >Update</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'DiseaseConfig' }"
            >Back</v-btn
          >
        </div>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import DiseaseService from "@/services/DiseaseService";

export default {
  name: "disease_config",
  data() {
    return {
      valid: true,
      isBeingEdit: true,
      visible: false,
      hide: true,
      Disease_ID: null,
      Disease_Desc: "",
      Lookback_Min: "",
      Lookback_Max: "",
      Confirm_Needed: "",
      Recip_Tracing: "",
      Follow_Up_Days: "",
      Exception_Comments: "",
      RT_Let: "",
      Rt_on_Ind_Res: "",
      dIdRules: [(v) => !!v || "Disease ID is required"],
      dDescRules: [(v) => !!v || "Disease Description is required"],
      lMinRules: [(v) => !!v || "Lookback Minimum is required"],
      lMaxRules: [(v) => !!v || "Lookback Maximum is required"],
      confNeededRules: [(v) => !!v || "Confirmation Needed is required"],
      rtRules: [(v) => !!v || "Recipient Tracing is required"],
      followUpRules: [(v) => !!v || "Follow Up Days is required"],
      exceptionRules: [(v) => !!v || "Exception Comments is required"],
      rtLetterRules: [(v) => !!v || "Recipient Tracing Letter is required"],
      rtlIndecisiveRules: [(v) => !!v || "Recipient Tracing Letter with Indecisive Results is required"],
    };
  },
  mounted() {
    this.getOneDisease();
  },

  methods: {
    async getOneDisease() {
      const response = await DiseaseService.getOneDisease({
        id: this.$route.params.id,
      });
      this.Disease_ID = response.data.Disease_ID;
      this.Disease_Desc = response.data.Disease_Desc;
      this.Lookback_Min = response.data.Lookback_Min;
      this.Lookback_Max = response.data.Lookback_Max;
      this.Confirm_Needed = response.data.Confirm_Needed;
      this.Recip_Tracing = response.data.Recip_Tracing;
      this.Follow_Up_Days = response.data.Follow_Up_Days;
      this.Rt_Let = response.data.Rt_Let;
      this.Rt_on_Ind_Res = response.data.Rt_on_Ind_Res;
      this.Exception_Comments = response.data.Exception_Comments;
      console.log(this.Disease_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    // async updateDonor() {
    //   await DonorService.updateDonor({
    //     id: this.$route.params.id,
    //     Donor_ID: this.Donor_ID,
    //     Blood_Type: this.Blood_Type,
    //     Donor_FName: this.Donor_FName,
    //     Donor_LName: this.Donor_LName,
    //     Birth_Date: this.Birth_Date,
    //     Donor_St_Addr: this.Donor_St_Addr,
    //     Donor_City: this.Donor_City,
    //     Donor_State: this.Donor_State,
    //     Donor_Country: this.Donor_Country,
    //     Donor_Postal: this.Donor_Postal,
    //   });
    //   swal("Success!", `Donor Updated!`, "success");
    //   this.$router.push({ name: "Donor" });
    // },
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