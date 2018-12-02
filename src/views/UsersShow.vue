<template>
  <div class="home">
    <h1>Profile</h1>
    <div>
      <p> First Name: {{user.first_name}}</p>
      <p> Last Name: {{user.last_name}}</p>
      <p> Email: {{user.email}}</p>
      <p> Groups: {{user.groups}}</p>
      <div v-for="group in user.groups">
        <p> Groups: {{group.title}} </p>
      </div>
      <p> Openings: {{user.openings}} </p>
      <p>Interests: {{user.interests}}</p>
      <a v-bind:href="'/#/users/edit'" class="btn btn-primary">Edit</a>
    </div>
    <!-- <div class="interests-edit">
      <h3>Set Interests:</h3>
      <p>category: <input type="text" v-model="user_interest.category"></p>
      <p>interest_level: <input type="number" v-model="user_interest.interest_level"></p>
      <p></p>

    </div> -->
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      user: {},
      // user_interest: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/show').then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this));
    // axios.get('http://localhost:3000/api/user_interests/' + this.$route.params.id).then(function(response) {
    //   console.log(response.data);
    //   this.user_interests = response.data;
    // }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>