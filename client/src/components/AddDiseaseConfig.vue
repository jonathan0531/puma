<template>
  <div id="app">
    <h2>Add Disease Configuration</h2>
    <v-flex xs12>
      <v-form ref="form" lazy-validation>
        <v-row justify="left">
          <v-col cols="10" sm="10">
            <v-text-field
              label="Disease ID"
              placeholder="DISEASE ID"
              v-model="Disease_ID"
              :rules="dIdRules"
              required
            ></v-text-field>
            <v-text-field
              label="Disease Description"
              placeholder="DISEASE DESCRIPTION"
              v-model="Disease_Desc"
              :rules="dDescRules"
              required
            ></v-text-field>
            <v-text-field
              label="Lookback Minimum"
              placeholder="LOOKBACK MINIMUM"
              v-model="Lookback_Min"
              :rules="lMinRules"
              required
            ></v-text-field>
            <v-text-field
              label="Lookback Maximum"
              placeholder="LOOKBACK MAXIMUM"
              v-model="Lookback_Max"
              :rules="lMaxRules"
              required
            ></v-text-field>
            <v-text-field
              label="Confirmation Needed"
              placeholder="CONFIRMATION NEEDED"
              v-model="Confirm_Needed"
              :rules="confNeededRules"
              required
            ></v-text-field>
            <v-text-field
              label="Recipient Tracing"
              placeholder="RECIPIENT TRACING"
              v-model="Recip_Tracing"
              :rules="rtRules"
              required
            ></v-text-field>
            <v-text-field
              label="Follow Up Days"
              placeholder="FOLLOW UP DAYS"
              v-model="Follow_Up_Days"
              :rules="followUpRules"
              required
            ></v-text-field>
            <v-text-field
              label="Recipient Tracing Letter"
              placeholder="RECIPIENT TRACING LETTER"
              v-model="Rt_Let"
              :rules="rtLetterRules"
              required
            ></v-text-field>
            <v-text-field
              label="Recipient Tracing Letter on Indecisive Result"
              placeholder="RECIPIENT TRACING LETTER ON INDECISIVE RESULT"
              v-model="Rt_on_Ind_Res"
              :rules="rtlIndecisiveRules"
              required
            ></v-text-field>
            <v-text-field
              label="Exception Comments"
              placeholder="EXCEPTION COMMENTS"
              v-model="Exception_Comments"
              :rules="exceptionRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          class="button"
          color="disabled"
          v-bind:to="{ name: 'DiseaseConfig' }"
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
    Disease_ID: "",
    Disease_Desc: "",
    Lookback_Min: "",
    Lookback_Max: "",
    Confirm_Needed: "",
    Recip_Tracing: "",
    Follow_Up_Days: "",
    Exception_Comments: "",
    Rt_Let: "",
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
    rtlIndecisiveRules: [
      (v) =>
        !!v || "Recipient Tracing Letter with Indecisive Results is required",
    ],
  }),
  methods: {
    async submit() {
      return axios({
        method: "POST",
        data: {
          Disease_ID: this.Disease_ID,
          Disease_Desc: this.Disease_Desc,
          Lookback_Min: this.Lookback_Min,
          Lookback_Max: this.Lookback_Max,
          Confirm_Needed: this.Confirm_Needed,
          Recip_Tracing: this.Recip_Tracing,
          Follow_Up_Days: this.Follow_Up_Days,
          Rt_Let: this.Rt_Let,
          Rt_on_Ind_Res: this.Rt_on_Ind_Res,
          Exception_Comments: this.Exception_Comments,
        },
        url: "http://localhost:5000/api/disease_config",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          swal("Success!", "Disease Configuration updated", "success");
          this.$router.push({ name: "DiseaseConfig" });
        })
        .catch((error) => {
          const message = error.response.data.message;
          swal("Error", `${message}`, "error");
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