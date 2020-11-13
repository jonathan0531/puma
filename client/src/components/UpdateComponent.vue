<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <h2>Update Result Set</h2>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit"
            >Edit</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'ComponentConfig' }"
            >Back</v-btn
          >
          <v-btn
            class="button"
            v-show="visible"
            color="primary"
            @click="updateComp"
            >Update</v-btn
          >
        </div>
        <v-row justify="left">
          <v-col cols="10" sm="10">
            <v-text-field
              v-bind:disabled="disableID"
              label="Disease_ID"
              placeholder="Disease_ID"
              v-model="Disease_ID"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RBCIN"
              placeholder="RBCIN"
              v-model="RBCIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLTIN"
              placeholder="PLTIN"
              v-model="PLTIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLAIN"
              placeholder="PLAIN"
              v-model="PLAIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SLEUKIN"
              placeholder="SLEUKIN"
              v-model="SLEUKIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RPIN"
              placeholder="RPIN"
              v-model="RPIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SPLAIN"
              placeholder="SPLAIN"
              v-model="SPLAIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="FPLTIN"
              placeholder="FPLTIN"
              v-model="FPLTIN"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RBCINV"
              placeholder="RBCINV"
              v-model="RBCINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLTINV"
              placeholder="PLTINV"
              v-model="PLTINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLAINV"
              placeholder="PLAINV"
              v-model="PLAINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SLEUKINV"
              placeholder="SLEUKINV"
              v-model="SLEUKINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RPINV"
              placeholder="RPINV"
              v-model="RPINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SPLAINV"
              placeholder="SPLAINV"
              v-model="SPLAINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="FPLTINV"
              placeholder="FPLTINV"
              v-model="FPLTINV"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RBCOUT"
              placeholder="RBCOUT"
              v-model="RBCOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLTOUT"
              placeholder="PLTOUT"
              v-model="PLTOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="PLAOUT"
              placeholder="PLAOUT"
              v-model="PLAOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SLEUKOUT"
              placeholder="SLEUKOUT"
              v-model="SLEUKOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="RPOUT"
              placeholder="RPOUT"
              v-model="RPOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="SPLAOUT"
              placeholder="SPLAOUT"
              v-model="SPLAOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="FPLTOUT"
              placeholder="FPLTOUT"
              v-model="FPLTOUT"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Do_Init"
              placeholder="Do_Init"
              v-model="Do_Init"
              required
            ></v-text-field>
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Do_Look"
              placeholder="Do_Look"
              v-model="Do_Look"
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
import ComponentService from "@/services/ComponentService";

export default {
  name: "Component",
  data() {
    return {
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
      valid: true,
      isBeingEdit: true,
      disableID: true,
      visible: false,
      hide: true,
    };
  },
  mounted() {
    this.getOneComp();
  },

  methods: {
    async getOneComp() {
      const response = await ComponentService.getOneComp({
        id: this.$route.params.id,
      });
      this.Disease_ID = response.data.Disease_ID;
      this.RBCIN = response.data.RBCIN;
      this.PLTIN = response.data.PLTIN;
      this.PLAIN = response.data.PLAIN;
      this.SLEUKIN = response.data.SLEUKIN;
      this.RPIN = response.data.RPIN;
      this.SPLAIN = response.data.SPLAIN;
      this.FPLTIN = response.data.FPLTIN;
      this.RBCINV = response.data.RBCINV;
      this.PLTINV = response.data.PLTINV;
      this.PLAINV = response.data.PLAINV;
      this.SLEUKINV = response.data.SLEUKINV;
      this.RPINV = response.data.RPINV;
      this.SPLAINV = response.data.SPLAINV;
      this.FPLTINV = response.data.FPLTINV;
      this.RBCOUT = response.data.RBCOUT;
      this.PLTOUT = response.data.PLTOUT;
      this.PLAOUT = response.data.PLAOUT;
      this.SLEUKOUT = response.data.SLEUKOUT;
      this.RPOUT = response.data.RPOUT;
      this.SPLAOUT = response.data.SPLAOUT;
      this.FPLTOUT = response.data.FPLTOUT;
      this.Do_Init = response.data.Do_Init;
      this.Do_Look = response.data.Do_Look;
      console.log(this.Disease_ID);
    },
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    async updateComp() {
      await ComponentService.updateComp({
        id: this.$route.params.id,
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
      });
      swal("Success!", `Component Updated!`, "success");
      this.$router.push({ name: "ComponentConfig" });
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