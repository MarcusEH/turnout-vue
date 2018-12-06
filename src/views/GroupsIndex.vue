<template>
  <div class="groups_index">
    <div class="container">
      <h1>Your Groups</h1>
      <div v-for="group in groups">
        <h3> Group: {{group.title}} </h3>
        <h4> Members: </h4>
        <div v-for="user in group.users">
          <ul>
            <li>{{user.first_name}} {{user.last_name}}</li>
          </ul>
        </div>
        <p> Current Event Category: {{group.group_event_category}}</p>
        <h4> Events</h4>
        <div v-for="event in group.group_event">
          <p> Event title: {{event.event_name}}</p>
          <p> location: {{event.location}}</p>
          <p> Start time: {{event.begin_time}}</p>
          <p> End time: {{event.end_time}}</p>
        </div>
        <p><a v-bind:href="'/#/groups/' + group.id" class="btn btn-secondary">View this group</a></p>
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
      groups: [],
      // events: []
      
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/').then(response => { 
      console.log(response.data);
      this.groups = response.data;
    }); 
    // axios.get('http://localhost:3000/api/group_events').then(response => {
    //   console.log(response.data);
    //   this.events = response.data;
    // });
      
  },
  methods: {},
  computed: {}
};
</script>