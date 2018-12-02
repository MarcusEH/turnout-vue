<template>
  <div class="users-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Profile</h1>
        <div class="form-group">
          <label>First name:</label> 
          <input type="text" class="form-control" v-model="user.first_name">
        </div>
        <div class="form-group">
          <label>Last name:</label> 
          <input type="text" class="form-control" v-model="user.last_name">
        </div>
        <div class="form-group">
          <label>Email:</label> 
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <!-- <div class="form-group">
          <label>New password:</label> 
          <input type="text" class="form-control" v-model="user.password">
        </div>
        <div class="form-group">
          <label>Confirm New Password:</label> 
          <input type="text" class="form-control" v-model="user.password_confirmation">
        </div> -->
        <input type="submit" class="btn btn-primary" value="Submit">    
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/show').then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        // password: this.user.password,
        // password_confirmation: this.user.password_confirmation,
      };
      axios
        .patch('http://localhost:3000/api/users/edit', params).then(response => {
          this.$router.push('/users/show');
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>