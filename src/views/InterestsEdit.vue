<template>
  <div class="interests-edit">
    <div class="container">
      <h1>{{message}} </h1>
      <div class="box-dark">
        <a v-bind:href="'/#/users/show'" class="btn btn-secondary">Return to Profile</a>
        <p>Category: {{interest.category}}</p>
        <p>Current Level of Interest: {{interest.interest_level}} </p>
        <p>New Level of Interest: <input type="number" v-model="interest.interest_level" min=0 max=10> </p>
        <p><button class="btn btn-secondary" @click="submitInterestEdit()">Submit Changes</button> </p>
      </div>
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
      message: "Edit Your Interests",
      user: {},
      interest: {}

    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/user_interests/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.interest = response.data;
    });
  },
  methods: {
    submitInterestEdit: function() {
      console.log("Edit function");
      var params = {
        category: this.interest.category,
        interest_level: this.interest.interest_level
      };
      axios
        .patch("http://localhost:3000/api/user_interests/" + this.$route.params.id, params).then(response => {
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