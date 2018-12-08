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
      newGroup: {}      
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
          this.groups.push(response.data);
          this.$router.push('/groups/');
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>