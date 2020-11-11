<template>
  <div>
    <h1 id="margin">Component Configuration</h1>
    <div></div>
    <v-btn
      id="btn"
      color="primary"
      dark
      class="mb-2"
      v-bind:to="{ name: 'AddComponent' }"
      >Add Component</v-btn
    >
    <div style="overflow: scroll">
      <b-table striped hover :items="component_config" :fields="fields">
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
          sortable: true,
        },
        {
          key: "PLTIN",
          label: "PLTIN",
          sortable: true,
        },
        {
          key: "PLAIN",
          label: "PLAIN",
          sortable: true,
        },
        {
          key: "SLEUKIN",
          label: "SLEUKIN",
          sortable: true,
        },
        {
          key: "RPIN",
          label: "RPIN",
          sortable: true,
        },
        {
          key: "SPLAIN",
          label: "SPLAIN",
          sortable: true,
        },
        {
          key: "FPLTIN",
          label: "FPLTIN",
          sortable: true,
        },
        {
          key: "RBCINV",
          label: "RBCINV",
          sortable: true,
        },
        {
          key: "PLTINV",
          label: "PLTINV",
          sortable: true,
        },
        {
          key: "PLAINV",
          label: "PLAINV",
          sortable: true,
        },
        {
          key: "SLEUKINV",
          label: "SLEUKINV",
          sortable: true,
        },
        {
          key: "RPINV",
          label: "RPINV",
          sortable: true,
        },
        {
          key: "SPLAINV",
          label: "SPLAINV",
          sortable: true,
        },
        {
          key: "FPLTINV",
          label: "FPLTINV",
          sortable: true,
        },
        {
          key: "RBCOUT",
          label: "RBCOUT",
          sortable: true,
        },
        {
          key: "PLTOUT",
          label: "PLTOUT",
          sortable: true,
        },
        {
          key: "PLAOUT",
          label: "PLAOUT",
          sortable: true,
        },
        {
          key: "SLEUKOUT",
          label: "SLEUKOUT",
          sortable: true,
        },
        {
          key: "RPOUT",
          label: "RPOUT",
          sortable: true,
        },
        {
          key: "SPLAOUT",
          label: "SPLAOUT",
          sortable: true,
        },
        {
          key: "FPLTOUT",
          label: "FPLTOUT",
          sortable: true,
        },
        {
          key: "Do_Init",
          label: "Do_Init",
          sortable: true,
        },
        {
          key: "Do_Look",
          label: "Do_Look",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
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

