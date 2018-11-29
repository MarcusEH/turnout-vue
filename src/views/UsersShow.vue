<template>
  <div class="home">
    <h1>Profile</h1>
    <div>
      <p> First Name: {{user.first_name}}</p>
      <p> Last Name: {{user.last_name}}</p>
      <p> Email: {{user.email}}</p>
      <p> Groups: {{user.groups}}</p>
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
      user: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/' + this.$route.params.id).then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>