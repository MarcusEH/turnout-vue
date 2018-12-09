<template>
  <div class="groups-join">
    <h1>{{ message }}</h1>
    <!-- <p>Enter your email to start: <input type="text" v-model="inputEmail"></p>
    <button @click="submitEmail()">Submit</button> -->
    <div v-for="invite in invites">
      <h3>Your invites:</h3>
      <p>Group Name: {{invite.group.title}}</p>
      <!-- <p>{{invite.group.id}} </p> -->
      <p><button @click="joinGroup(invite)">Join this Group</button></ins></p>
    </div>
    <a v-bind:href="'/#/users/show'" class="btn btn-secondary">Return to Profile</a>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Join a group!",
      inputEmail: "",
      invites: [],
      user: {}
    };
  },
  created: function() {
    var params = {
      email: this.user.email
    };
    axios.get('http://localhost:3000/api/invites', params).then(response => {
      console.log(response.data);
      this.invites = response.data;
      // var keys = [];
      // var values = [];
      // for (var i = this.invites.length - 1; i >= 0; i--) {
      //   this.invites[i];
      //   for (var key in this.invites[i]) {
      //     if (this.invites[i].hasOwnProperty(key)) {
      //       if (key === "title") {
      //         values.push(this.invites[i][key]);
      //       }
      //     }
      //   }
      // }
      // console.log(values);
      // this.values = values;
    });
  },
  methods: {
    joinGroup: function(group) {
      var params = {
        group_id: group.group.id
      };
      axios
        .post('http://localhost:3000/api/user_groups', params).then(response => {
          this.$router.push('/interests/create');
        })
        .catch(error => {
          console.log("join group errors");
          this.error = error.response.data.errors;
        });
      // var destroyParams = {
      //   id: group.id
      // };
      console.log(group);
      console.log(group.id);
      axios
        .delete('http://localhost:3000/api/invites/' + group.id).then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("in delete invite errors");
          this.error = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>