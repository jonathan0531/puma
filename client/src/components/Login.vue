<template>
  <div id="app">
    <v-flex xs12>
      <h1>Member Login</h1>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              label="Email*"
              v-model="email"
              placeholder="USER@EMAIL.COM"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              label="Password*"
              v-model="password"
              placeholder="PASSWORD"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <p>*Required</p>
        <v-btn class="button" @click="submit" :disabled="!valid">submit</v-btn>
        <v-btn class="button" @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /\S+@\S+\.\S+/.test(v) || "E-mail must be valid",
    // ],
  }),
  // The submit method hits the API endpoint, takes the
  // parameter from the form, and responds with the correct message.
  methods: {
    async submit() {
      return axios({
        method: 'POST',
        data: {
          email: this.email,
          password: this.password,
        },
        url: 'http://localhost:5000/api/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // window.localStorage.setItem("auth", response.data.token);
          swal('Login Success!', 'You are ready to start!', 'success');
          this.$router.push({ name: 'Completed' });
        })
        .catch((error) => {
          const message = error.response.data.message;
          swal('Login Denied', `${message}`, 'error');
          this.$router.push({ name: 'Login' });
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
  padding-top: 20px;
}
v-flex {
  margin: 0;
  padding: 0;
}
</style>
