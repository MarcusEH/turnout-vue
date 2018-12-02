<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <div v-for="user in users"> -->
      <a v-bind:href="'/#/users/show'" class="btn btn-secondary">profile</a>
    <!-- </div> -->
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!!!!",
      users: [],
      user: {}
      
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users').then(function(response) {
      console.log(response.data);
      this.users = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>
