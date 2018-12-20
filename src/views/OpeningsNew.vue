<template>
  <div class="opening-create">
    <div class="container">
      <div class="box-light">
        <div class="box-inner">
          <br>
          <h1>Create an Opening</h1>
          <br>
          <p>Start of Availability: <input type="datetime-local" v-model="opening.begin_time"></p>
          <p>&nbspEnd of Availability: <input type="datetime-local" v-model="opening.end_time"></p>
          <p><button class="btn btn-primary" @click="submitOpening()">SUBMIT</button><a class="btn btn-secondary" v-bind:href="'/#/users/show'">CANCEL</a> </p>
          <p> This should be the date and time when you feel you can join this group for the group event.</p>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      opening: {}
    };
  },
  created: function() {},
  methods: {
    submitOpening: function() {
      var params = {
        begin_time: this.opening.begin_time,
        end_time: this.opening.end_time
      };
      axios
        .post('http://localhost:3000/api/user_calendar_openings', params).then(response => {
          this.$router.push('/users/show');
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>