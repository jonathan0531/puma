<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <router-link v-bind:to="{ name: 'Pending' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">search</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Pending Lookbacks</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Completed' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">search</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Completed Lookbacks</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link
          v-bind:to="{ name: 'SearchLookback' }"
          class="side_bar_link"
        >
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">search</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Search Lookbacks</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link
          v-bind:to="{ name: 'SearchDonations' }"
          class="side_bar_link"
        >
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">search</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Search Blood Donations</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'ResultSet' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">edit</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text">Result Set</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link
          v-bind:to="{ name: 'DiseaseConfig' }"
          class="side_bar_link"
        >
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">edit</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Disease Configuration</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'TestConfig' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">edit</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"
              >Test Configuration</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link
          v-bind:to="{ name: 'ComponentConfig' }"
          class="side_bar_link"
        >
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">edit</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text">
              Component Config</v-list-item-content
            >
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'UserGuide' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="blue darken-2">info</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text"> User Guide</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#3257bf" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> Lookback Management System </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <div id="app">
        <router-view />
      </div>
    </v-content>
    <v-footer color="#3257bf" class="footer" app>
      <span class="white--text">Copyright &copy; 2020 by Puma Project's</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 30px;
  margin-right: 30px;
  color: #2c3e50;
}
#inspire {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.footer {
  justify-content: right;
}
#sky {
  font-weight: bolder;
  text-shadow: 2px 2px 2px red;
}
</style>
