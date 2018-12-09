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

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal" v-on:click="setCurrentGroup(group)">Invite New Members</button>
      <p> Current Event Category: {{group.group_event_category}}</p>
      <a v-bind:href="'/#/events/create'" class="btn btn-secondary">Create an Event</a>
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
            <li>{{comment.comment_text}} by {{comment.user_id}}</li><!--fix this-->
          </ul>
        </div>
        <label for="comment">Add a Comment:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
        <button @click="submitComment()">Submit</button>
      </div>
      
    </div>
    <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Invites</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Invite a new member!</p>
            <p>Email<input type="text" v-model="newInvite"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="submitInvite()" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
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
var axios = require("axios");
export default {
  data: function() {
    return {
      group: {},
      message: "Hello, welcome to your group!",
      comments: [],
      newComment: "",
      newInvite: "",
      invites: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.group = response.data;
    });
    axios.get('http://localhost:3000/api/comments?group_id=' + this.$route.params.id).then(response => {
      console.log('here are the comments');
      console.log(response.data);
      this.comments = response.data;
    });
  },
  methods: {
    submitComment: function() {
      var newComment = document.getElementById("comment").value;
      console.log(document.getElementById("comment").value);
      var params = {
        comment_text: newComment,
        group_id: this.$route.params.id
      };
      axios.post('http://localhost:3000/api/comments', params).then(response => {
        this.comments.push(response.data);
      });
      // this.newComment = "";
    },
    setCurrentGroup: function(inputGroup) {
      console.log(inputGroup);
      this.currentGroup = inputGroup;
    },
    submitInvite: function() {
      var params = {
        email: this.newInvite,
        group_id: this.$route.params.id
      };
      axios.post('http://localhost:3000/api/invites', params).then(response => {
        this.invites.push(response.data);
      });

    }
  },
  computed: {}
};
</script>