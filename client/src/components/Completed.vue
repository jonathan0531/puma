<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <th scope="row">{{ event.id }}</th>
          <td>{{ event.title }}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      return axios({
        method: "get",
        url: "http://localhost:5000/api/events",
      })
        .then((response) => {
          this.events = response.data;
        })
        .catch((err) => {
          this.msg = err.message;
          console.log(err);
        });
    },
  },
};
</script>
