<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h4>Update Test Configuration</h4>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Begin Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateTest"
            >Update</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'TestConfig' }"
            >Back</v-btn
          >
        </div>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Test_ID"
              v-model="Test_ID"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Result_Set"
              v-model="Result_Set"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Test_Count"
              v-model="Test_Count"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Disease_ID"
              v-model="Disease_ID"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Supplemental"
              v-model="Supplemental"
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
import TestService from "@/services/TestService";

export default {
  name: "app",
  data() {
    return {
      Test_ID: "",
      Result_Set: "",
      Test_Count: "",
      Disease_ID: "",
      Supplemental: "",
      valid: true,
      isBeingEdit: true,
      disableID: true,
      visible: false,
      hide: true,
    };
  },
  mounted() {
    this.getOneTest();
  },

  methods: {
    async getOneTest() {
      const response = await TestService.getOneTest({
        id: this.$route.params.id,
      });
      this.Test_ID = response.data.Test_ID;
      this.Result_Set = response.data.Result_Set;
      this.Test_Count = response.data.Test_Count;
      this.Disease_ID = response.data.Disease_ID;
      this.Supplemental = response.data.Supplemental;
      console.log(this.Test_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    async updateTest() {
      await TestService.updateTest({
        id: this.$route.params.id,
        Test_ID: this.Test_ID,
        Result_Set: this.Result_Set,
        Test_Count: this.Test_Count,
        Disease_ID: this.Disease_ID,
        Supplemental: this.Supplemental,
      });
      swal("Success!", `Test Config Updated!`, "success");
      this.$router.push({ name: "TestConfig" });
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