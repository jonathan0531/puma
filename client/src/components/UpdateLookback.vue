<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h2>Mark Lookback as Complete</h2>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateLookback"
            >Update</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'Pending' }"
            >Back</v-btn
          >
        </div>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              v-bind:disabled="disableID"
              label="Lookback_ID"
              v-model="Lookback_ID"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Complete"
              v-model="Complete"
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
import LookbackService from "@/services/LookbackService";

export default {
  name: "app",
  data() {
    return {
      Lookback_ID: "",
      Complete: "",

      valid: true,
      isBeingEdit: true,
      disableID: true,
      visible: false,
      hide: true,
    };
  },
  mounted() {
    this.getSingleLookback();
  },

  methods: {
    async getSingleLookback() {
      const response = await LookbackService.getSingleLookback({
        id: this.$route.params.id,
      });
      this.Lookback_ID = response.data.Lookback_ID;
      this.Complete = response.data.Complete;
      console.log(this.Lookback_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    async updateLookback() {
      await LookbackService.updateLookback({
        id: this.$route.params.id,
        Lookback_ID: this.Lookback_ID,
        Complete: this.Complete,
      });
      swal("Success!", `Lookback Marked as Complete!`, "success");
      this.$router.push({ name: "Completed" });
    },
  },
};
</script>

<style>
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