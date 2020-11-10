<template>
  <div id="app">
    <h4>Add Result Set</h4>
    <v-flex xs12>
      <v-form ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="3">
            <v-text-field
              label="Result Set"
              placeholder="Result Set"
              v-model="Result_Set"
              required
            ></v-text-field>
            <v-text-field
              label="Result"
              placeholder="Result"
              v-model="Result"
              required
            ></v-text-field>
            <v-text-field
              label="Result Value"
              placeholder="Result Value"
              v-model="Result_Value"
              required
            ></v-text-field>
            <v-text-field
              label="Value Description"
              placeholder="Value Description"
              v-model="Value_Desc"
              required
            ></v-text-field>
            <v-text-field
              label="Nat Result"
              placeholder="Nat Result"
              v-model="Nat_Result"
              required
            ></v-text-field>
            <v-text-field
              label="Nat Count"
              placeholder="Nat Count"
              v-model="Nat_Count"
              required
            ></v-text-field>
            <v-text-field
              label="Config Result"
              placeholder="Config_Result"
              v-model="Conf_Result"
              required
            ></v-text-field>
            <v-text-field
              label="Config Count"
              placeholder="Config Count"
              v-model="Conf_Count"
              required
            ></v-text-field>
            <v-text-field
              label="Repeat Result"
              placeholder="Repeat Result"
              v-model="Repeat_Result"
              required
            ></v-text-field>
            <v-text-field
              label="Repeat Count"
              placeholder="Repeat Count"
              v-model="Repeat_Count"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="button" color="disabled" v-bind:to="{ name: 'ResultSet' }"
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
  }),
  methods: {
    async submit() {
      return axios({
        method: "POST",
        data: {
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
        },
        url: "http://localhost:5000/api/resultset",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // window.localStorage.setItem("auth", response.data.token);
          swal("Success!", "Result Set Added!", "success");
          this.$router.push({ name: "ResultSet" });
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