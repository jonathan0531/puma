<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h4>Update Result Set</h4>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Begin Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateRS"
            >Update</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'ResultSet' }"
            >Back</v-btn
          >
        </div>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              v-bind:disabled="disableID"
              label="Result_ID"
              v-model="Result_ID"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Result_Set"
              v-model="Result_Set"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Result"
              v-model="Result"
              :rules="resultRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Result_Value"
              v-model="Result_Value"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Value_Desc"
              v-model="Value_Desc"
              :rules="valueDescRules"
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Nat_Result"
              v-model="Nat_Result"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Nat_Count"
              v-model="Nat_Count"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Conf_Result"
              v-model="Conf_Result"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Conf_Count"
              v-model="Conf_Count"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Repeat_Result"
              v-model="Repeat_Result"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Repeat_Count"
              v-model="Repeat_Count"
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
import ResultSetService from "@/services/ResultSetService";

export default {
  name: "Donors",
  data() {
    return {
      Result_ID: "",
      Result_Set: "",
      Result: "",
      Result_Value: "",
      Value_Desc: "",
      Nat_Result: "",
      Nat_Count: "",
      Conf_Result: "",
      Conf_Count: "",
      Repeat_Result: "",
      Repeat_Count: "",
      valid: true,
      isBeingEdit: true,
      disableID: true,
      visible: false,
      hide: true,
      resultRules: [(v) => !!v || "Result is required"],
      valueDescRules: [(v) => !!v || "Value Description is required"],
    };
  },
  mounted() {
    this.getOneRS();
  },

  methods: {
    async getOneRS() {
      const response = await ResultSetService.getOneRS({
        id: this.$route.params.id,
      });
      this.Result_ID = response.data.Result_ID;
      this.Result_Set = response.data.Result_Set;
      this.Result = response.data.Result;
      this.Result_Value = response.data.Result_Value;
      this.Value_Desc = response.data.Value_Desc;
      this.Nat_Result = response.data.Nat_Result;
      this.Nat_Count = response.data.Nat_Count;
      this.Conf_Result = response.data.Conf_Result;
      this.Conf_Count = response.data.Conf_Count;
      this.Repeat_Result = response.data.Repeat_Result;
      this.Repeat_Count = response.data.Repeat_Count;
      console.log(this.Result_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    async updateRS() {
      await ResultSetService.updateRS({
        id: this.$route.params.id,
        Result_Set: this.Result_Set,
        Result: this.Result,
        Result_Value: this.Result_Value,
        Value_Desc: this.Value_Desc,
        Nat_Result: this.Nat_Result,
        Nat_Count: this.Nat_Count,
        Conf_Result: this.Conf_Result,
        Conf_Count: this.Conf_Count,
        Repeat_Result: this.Repeat_Result,
        Repeat_Count: this.Repeat_Count,
      });
      swal("Success!", `Result Set Updated!`, "success");
      this.$router.push({ name: "ResultSet" });
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