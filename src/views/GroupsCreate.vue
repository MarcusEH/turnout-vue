<template>
  <div class="groups-create">
    <div class="container">
      <h1>{{ message }}</h1>
      <p>Name of your group:<input type="text" v-model="newGroup.title"></p>
      <p>Type of event:(optional) <input type="text" v-model="newGroup.event_type"></p>
      <p><button @click="submitGroup()">Create Group</button></p>
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
      message: "Create your Group!",
      newGroup: {},
      group: {}      
    };
  },
  created: function() {},
  methods: {
    submitGroup: function() {
      var params = {
        title: this.newGroup.title,
        event_type: this.newGroup.event_type,
      };
      axios
        .post('http://localhost:3000/api/groups', params).then(response => {
          // this.groups.push(response.data);
          console.log(response.data);
          this.group = response.data;
          var userGroupParams = {
            group_id: this.group.id
          };
          console.log(this.group.id);
          axios
            .post('http://localhost:3000/api/user_groups', userGroupParams).then(response => {
              console.log(response.data);
              // this.user_groups.push(response.data);
              this.$router.push('/groups/');
            })
            .catch(error => {
              console.log("user groups errors");
              this.error = error.response.data.errors;
            });
        })
        .catch(error => {
          console.log("group create errors");
          this.error = error.response.data.errors;
        });   
    }
  },
  computed: {}
};
</script>