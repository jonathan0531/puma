<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h2>Update Disease Configuration</h2>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'DiseaseConfig' }"
            >Back</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateDisease"
            >Update</v-btn
          >
        </div>
        <v-row justify="left">
          <v-col cols="10" sm="10">
            <v-text-field
              v-bind:disabled="disableID"
              label="Disease ID"
              v-model="Disease_ID"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Disease Description"
              v-model="Disease_Desc"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Lookback Minimum"
              v-model="Lookback_Min"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Lookback Maximum"
              v-model="Lookback_Max"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Confirmation Needed"
              v-model="Confirm_Needed"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing"
              v-model="Recip_Tracing"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Follow Up Days"
              v-model="Follow_Up_Days"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing Letter"
              v-model="Rt_Let"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Recipient Tracing Letter on Indecisive Result"
              v-model="Rt_on_Ind_Res"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Exception Comments"
              v-model="Exception_Comments"
              required
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
import DiseaseService from "@/services/DiseaseService";

export default {
  name: "app",
  data() {
    return {
      valid: true,
      disableID: true,
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
      Rt_Let: "",
      Rt_on_Ind_Res: "",
      Exception_Comments: "",
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
    async updateDisease() {
      await DiseaseService.updateDisease({
        id: this.$route.params.id,
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
      });
      swal("Success!", `Disease Updated!`, "success");
      this.$router.push({ name: "DiseaseConfig" });
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