<template>
  <div>
    <h1 style="margin-top: 20px">Component Configuration</h1>
    <hr />
    <br />
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddComponent' }"
      >Add Component</v-btn
    >
    <div style="overflow: scroll">
      <b-table
        striped
        hover
        :items="component_config"
        :fields="fields"
        small
        bordered
        head-variant="dark"
      >
        <template v-slot:cell(actions)="data">
          <v-btn
            icon
            class="mx-0"
            v-bind:to="`/config/component/${data.item.Disease_ID}`"
          >
            <v-icon color="teal">edit</v-icon></v-btn
          >
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      fields: [
        {
          key: "Disease_ID",
          label: "Disease_ID",
          sortable: true,
        },
        {
          key: "RBCIN",
          label: "RBCIN",
        },
        {
          key: "PLTIN",
          label: "PLTIN",
        },
        {
          key: "PLAIN",
          label: "PLAIN",
        },
        {
          key: "SLEUKIN",
          label: "SLEUKIN",
        },
        {
          key: "RPIN",
          label: "RPIN",
        },
        {
          key: "SPLAIN",
          label: "SPLAIN",
        },
        {
          key: "FPLTIN",
          label: "FPLTIN",
        },
        {
          key: "RBCINV",
          label: "RBCINV",
        },
        {
          key: "PLTINV",
          label: "PLTINV",
        },
        {
          key: "PLAINV",
          label: "PLAINV",
        },
        {
          key: "SLEUKINV",
          label: "SLEUKINV",
        },
        {
          key: "RPINV",
          label: "RPINV",
        },
        {
          key: "SPLAINV",
          label: "SPLAINV",
        },
        {
          key: "FPLTINV",
          label: "FPLTINV",
        },
        {
          key: "RBCOUT",
          label: "RBCOUT",
        },
        {
          key: "PLTOUT",
          label: "PLTOUT",
        },
        {
          key: "PLAOUT",
          label: "PLAOUT",
        },
        {
          key: "SLEUKOUT",
          label: "SLEUKOUT",
        },
        {
          key: "RPOUT",
          label: "RPOUT",
        },
        {
          key: "SPLAOUT",
          label: "SPLAOUT",
        },
        {
          key: "FPLTOUT",
          label: "FPLTOUT",
        },
        {
          key: "Do_Init",
          label: "Do_Init",
        },
        {
          key: "Do_Look",
          label: "Do_Look",
        },
        {
          key: "actions",
          label: "Edit",
        },
      ],
      component_config: [],
    };
  },
  mounted() {
    this.getComp();
  },
  methods: {
    async getComp() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/component",
      })
        .then((response) => {
          this.component_config = response.data;
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
  },
};
</script>

<style>
#btn {
  margin-bottom: 50px;
}
#margin {
  margin-top: 20px;
  margin-bottom: 20px;
}
h1 {
  text-align: center;
}
</style>

