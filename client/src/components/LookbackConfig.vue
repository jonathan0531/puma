<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid class="pa-0">
        <v-row align="center">
          <v-col cols="12" sm="16">
            <div class="text-center">
              <div class="my-2">
                <v-btn
                  x-large
                  color="primary"
                  dark
                  v-bind:to="{ name: 'ResultSet' }"
                >
                  Result Set
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  x-large
                  color="primary"
                  dark
                  v-bind:to="{ name: 'Donor' }"
                >
                  Disease Configuration
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  x-large
                  color="primary"
                  dark
                  v-bind:to="{ name: 'TestConfig' }"
                >
                  Test Configuration
                </v-btn>
              </div>
              <div class="my-2">
                <v-btn
                  x-large
                  color="primary"
                  dark
                  v-bind:to="{ name: 'ComponentConfig' }"
                >
                  Component Configuration
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<style>
</style>
