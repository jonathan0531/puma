<template>
  <div id="app">
    <h2>Add Component</h2>
    <v-flex xs12>
      <v-form ref="form" lazy-validation>
        <v-row justify="left">
          <v-col cols="10" sm="10">
            <v-text-field
              label="Disease_ID"
              placeholder="Disease_ID"
              v-model="Disease_ID"
              required
            ></v-text-field>
            <v-text-field
              label="RBCIN"
              placeholder="RBCIN"
              v-model="RBCIN"
              required
            ></v-text-field>
            <v-text-field
              label="PLTIN"
              placeholder="PLTIN"
              v-model="PLTIN"
              required
            ></v-text-field>
            <v-text-field
              label="PLAIN"
              placeholder="PLAIN"
              v-model="PLAIN"
              required
            ></v-text-field>
            <v-text-field
              label="SLEUKIN"
              placeholder="SLEUKIN"
              v-model="SLEUKIN"
              required
            ></v-text-field>
            <v-text-field
              label="RPIN"
              placeholder="RPIN"
              v-model="RPIN"
              required
            ></v-text-field>
            <v-text-field
              label="SPLAIN"
              placeholder="SPLAIN"
              v-model="SPLAIN"
              required
            ></v-text-field>
            <v-text-field
              label="FPLTIN"
              placeholder="FPLTIN"
              v-model="FPLTIN"
              required
            ></v-text-field>
            <v-text-field
              label="RBCINV"
              placeholder="RBCINV"
              v-model="RBCINV"
              required
            ></v-text-field>
            <v-text-field
              label="PLTINV"
              placeholder="PLTINV"
              v-model="PLTINV"
              required
            ></v-text-field>
            <v-text-field
              label="PLAINV"
              placeholder="PLAINV"
              v-model="PLAINV"
              required
            ></v-text-field>
            <v-text-field
              label="SLEUKINV"
              placeholder="SLEUKINV"
              v-model="SLEUKINV"
              required
            ></v-text-field>
            <v-text-field
              label="RPINV"
              placeholder="RPINV"
              v-model="RPINV"
              required
            ></v-text-field>
            <v-text-field
              label="SPLAINV"
              placeholder="SPLAINV"
              v-model="SPLAINV"
              required
            ></v-text-field>
            <v-text-field
              label="FPLTINV"
              placeholder="FPLTINV"
              v-model="FPLTINV"
              required
            ></v-text-field>
            <v-text-field
              label="RBCOUT"
              placeholder="RBCOUT"
              v-model="RBCOUT"
              required
            ></v-text-field>
            <v-text-field
              label="PLTOUT"
              placeholder="PLTOUT"
              v-model="PLTOUT"
              required
            ></v-text-field>
            <v-text-field
              label="PLAOUT"
              placeholder="PLAOUT"
              v-model="PLAOUT"
              required
            ></v-text-field>
            <v-text-field
              label="SLEUKOUT"
              placeholder="SLEUKOUT"
              v-model="SLEUKOUT"
              required
            ></v-text-field>
            <v-text-field
              label="RPOUT"
              placeholder="RPOUT"
              v-model="RPOUT"
              required
            ></v-text-field>
            <v-text-field
              label="SPLAOUT"
              placeholder="SPLAOUT"
              v-model="SPLAOUT"
              required
            ></v-text-field>
            <v-text-field
              label="FPLTOUT"
              placeholder="FPLTOUT"
              v-model="FPLTOUT"
              required
            ></v-text-field>
            <v-text-field
              label="Do_Init"
              placeholder="Do_Init"
              v-model="Do_Init"
              required
            ></v-text-field>
            <v-text-field
              label="Do_Look"
              placeholder="Do_Look"
              v-model="Do_Look"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          class="button"
          color="disabled"
          v-bind:to="{ name: 'ComponentConfig' }"
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
    RBCIN: "",
    PLTIN: "",
    PLAIN: "",
    SLEUKIN: "",
    RPIN: "",
    SPLAIN: "",
    FPLTIN: "",
    RBCINV: "",
    PLTINV: "",
    PLAINV: "",
    SLEUKINV: "",
    RPINV: "",
    SPLAINV: "",
    FPLTINV: "",
    RBCOUT: "",
    PLTOUT: "",
    PLAOUT: "",
    SLEUKOUT: "",
    RPOUT: "",
    SPLAOUT: "",
    FPLTOUT: "",
    Do_Init: "",
    Do_Look: "",
  }),
  methods: {
    async submit() {
      return axios({
        method: "POST",
        data: {
          Disease_ID: this.Disease_ID,
          RBCIN: this.RBCIN,
          PLTIN: this.PLTIN,
          PLAIN: this.PLAIN,
          SLEUKIN: this.SLEUKIN,
          RPIN: this.RPIN,
          SPLAIN: this.SPLAIN,
          FPLTIN: this.FPLTIN,
          RBCINV: this.RBCINV,
          PLTINV: this.PLTINV,
          PLAINV: this.PLAINV,
          SLEUKINV: this.SLEUKINV,
          RPINV: this.RPINV,
          SPLAINV: this.SPLAINV,
          FPLTINV: this.FPLTINV,
          RBCOUT: this.RBCOUT,
          PLTOUT: this.PLTOUT,
          PLAOUT: this.PLAOUT,
          SLEUKOUT: this.SLEUKOUT,
          RPOUT: this.RPOUT,
          SPLAOUT: this.SPLAOUT,
          FPLTOUT: this.FPLTOUT,
          Do_Init: this.Do_Init,
          Do_Look: this.Do_Look,
        },
        url: "http://localhost:5000/api/component",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          swal("Success!", "Component Added!", "success");
          this.$router.push({ name: "ComponentConfig" });
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