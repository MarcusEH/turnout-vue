<template>
  <div class="events-create">
    <h1>{{ message }}</h1>
      <select id="groupChoice">
        <option v-for="group in groups" v-bind:value="group.id">
          {{group.title}}
        </option>
      </select>
      <p> Location: <input type="text" v-model="newEvent.location"></p>
      <p> Event Name: <input type="text" v-model="newEvent.eventName"></p>
      <p><button @click="submitEvent()">Create Event</button></p>
    
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Create Your Event for your group!",
      groups: [],
      newEvent: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/').then(response => {
      console.log(response.data);
      this.groups = response.data;
      console.log(this.groups);
    });
  },
  methods: {
    submitEvent: function() {
      var params = {
        group_id: document.getElementById("groupChoice").value,
        location: this.newEvent.location,
        event_name: this.newEvent.eventName
      };
      console.log(params);
      axios
        .post('http://localhost:3000/api/group_events', params).then(response => {
          console.log(response.data);
          this.$router.push('/users/show');
        })
        .catch(error => {
          console.log("event create errors");
          this.error = error.response.data.errors;
        });
    }

  },
  computed: {}
};
</script>