<template>
  <div class="groups-show">
    <div class="container">
      <h3>Group: {{group.title}}</h3>
      <h4> Members: </h4>
      <div v-for="user in group.users">
        <ul>
          <li>Name: {{user.first_name}} {{user.last_name}} Email: {{user.email}}</li>
        </ul>
      </div>
      <p> Current Event Category: {{group.group_event_category}}</p>
      <div v-for="event in group.group_event">
        <p> Event title: {{event.event_name}}</p>
        <p> location: {{event.location}}</p>
        <p> Start time: {{event.begin_time}}</p>
        <p> End time: {{event.end_time}}</p>
      </div>
      <h4>Comments: </h4>
      <div class="form-group">
        <div v-for="comment in comments">
          <ul>
            <li>{{comment}}</li>
          </ul>
        </div>
        <label for="comment">Add a Comment:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
        <button @click="submitComment()">Submit</button>
      </div>
    </div>
  </div>
</template>

<style>
  textarea {
     resize: none;
  }
</style>

<script>
var axios = require("axios") ;
export default {
  data: function() {
    return {
      group: {},
      message: "Hello, welcome to your group!",
      comments: [""],
      newComment: ""
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.group = response.data;
    });
  },
  methods: {
    submitComment: function() {
      var newComment = document.getElementById("comment").value;
      var comments = [];
      console.log(newComment);
      this.comments.push(newComment);
      console.log(comments);
      // this.newComment = "";
    }
  },
  computed: {}
};
</script>