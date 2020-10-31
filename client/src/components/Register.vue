<template>
  <div id="app">
    <v-flex xs12>
      <h1>Member Registration</h1>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              label="First Name*"
              v-model="firstName"
              :rules="nameRules"
              placeholder="FIRST NAME"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              label="Last Name*"
              v-model="lastName"
              :rules="nameRules"
              placeholder="LAST NAME"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="4">
            <v-text-field
              label="Email*"
              v-model="email"
              :rules="emailRules"
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
              :rules="pwRules"
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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nameRules: [v => !!v || 'Name cannot be left empty'],
    pwRules: [v => !!v || 'Password cannot be left empty'],
    emailRules: [
      v => !!v || 'E-mail cannot be left empty',
      v =>
        /\S+@\S+\.\S+/.test(v) || 'Invalid E-mail format. (EX: user@email.com)',
    ],
  }),
  // If validations pass, the logic inside the submit method is processed
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        return axios({
          method: 'post',
          data: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          },
          url: 'http://localhost:5000/api/members/register',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            swal(
              'Success!',
              'You have been successfully registered!',
              'success',
            );
            this.$router.push({ name: 'Login' });
          })
          .catch((error) => {
            const message = error.response.data.message;
            swal('Something went wrong..', `${message}`, 'error');
          });
      }
      return true;
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
</style>
