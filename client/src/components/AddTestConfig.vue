<template>
  <div id="app">
    <h2>Add Test Configuration</h2>
    <v-flex xs12>
      <v-form ref="form" lazy-validation>
        <v-row justify="left">
          <v-col cols="10" sm="10">
            <v-text-field
              label="Test_ID"
              placeholder="Test_ID"
              v-model="Test_ID"
              required
            ></v-text-field>
            <v-text-field
              label="Result_Set"
              placeholder="Result_Set"
              v-model="Result_Set"
              required
            ></v-text-field>
            <v-text-field
              label="Test_Count"
              placeholder="Test_Count"
              v-model="Test_Count"
              required
            ></v-text-field>
            <v-text-field
              label="Disease_ID"
              placeholder="Disease_ID"
              v-model="Disease_ID"
              required
            ></v-text-field>
            <v-text-field
              label="Supplemental"
              placeholder="Supplemental"
              v-model="Supplemental"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          class="button"
          color="disabled"
          v-bind:to="{ name: 'TestConfig' }"
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
    Test_ID: "",
    Result_Set: "",
    Test_Count: "",
    Disease_ID: "",
    Supplemental: "",
  }),
  methods: {
    async submit() {
      return axios({
        method: "POST",
        data: {
          Test_ID: this.Test_ID,
          Result_Set: this.Result_Set,
          Test_Count: this.Test_Count,
          Disease_ID: this.Disease_ID,
          Supplemental: this.Supplemental,
        },
        url: "http://localhost:5000/api/test",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // window.localStorage.setItem("auth", response.data.token);
          swal("Success!", "Test Configuration Added!", "success");
          this.$router.push({ name: "TestConfig" });
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