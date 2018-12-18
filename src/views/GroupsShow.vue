<template>
  <div class="groups-show">
    <div class="container">

      <section>
        <div class="container">
          <div class="row">

            <!-- LEFT -->
            <div class="col-lg-3 col-md-3 col-sm-4">
            <!-- profile picture and name-->
              <div class="thumbnail text-center">
                <div v-if="group.group_image">
                  <img class="img-fluid" v-bind:src="group.group_image.url" alt="public/assets/images/eggoworld.jpg" />
                </div>
                <div v-else>
                  <img class="img-fluid" src="assets/images/eggoworld.jpg" alt="" />
                </div>
                <h2 class="fs-18 mt-10 mb-0">{{group.title}}</h2>
                <h3 class="fs-11 mt-0 mb-10 text-muted">{{group.event_type}}</h3>
              </div>
              <ul class="side-nav list-group mb-60" id="sidebar-nav">
                <li class="list-group-item"><a v-bind:href="'/#/groups/' + group.id + '/edit'">Edit Group</a></li>
              </ul>

              <!-- SIDE NAV-->
              <ul class="side-nav list-group mb-60" id="sidebar-nav">
                <h3>Your links</h3>
                <li class="list-group-item active"><a href="/#/users/show"><i class="fa fa-eye"></i> PROFILE</a></li>
                <li class="list-group-item"><a href="/#/users/edit"><i class="fa fa-tasks"></i> EDIT PROFILE</a></li>
                <li class="list-group-item"><a href="/#/groups/join"><i class="fa fa-comments-o"></i>SEE YOUR INVITES</a></li>
                <li class="list-group-item"><a href="/#/groups/new"><i class="fa fa-comments"></i> CREATE A GROUP</a></li>
                <li class="list-group-item"><a href="/#/groups/index"><i class="fa fa-eye"></i>YOUR GROUPS</a></li>
                <li class="list-group-item"><a href="/#/openings/new"><i class="fa fa-gears"></i>ADD AN OPENING</a></li>
                <li class="list-group-item"><a href="/#/interests/new"><i class="fa fa-gears"></i>ADD INTERESTS</a></li>
                <li class="list-group-item"><a href="/#/interests/edit"><i class="fa fa-gears"></i>EDIT INTERESTS</a></li>
              </ul>
              <!-- /SIDE NAV -->

            </div>


            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8">


              <div class="box-light">

                <div class="row">

                  <!--MEMBERS (changed box from 6 to 12) -->
                  <div class="col-md-12 col-sm-12">

                    <div class="box-inner">
                      <h3>
                        MEMBERS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                      

                        <div class="box-dark"><!-- post item -->
                          <div v-for="user in group.users">
                            <!-- <p><img class="thumbnail float-left" v-bind:src="user.user_image.url" width="60" height="60" alt="" /> -->
                              <div v-if="user.user_image">
                                <img class="thumbnail float-left" v-bind:src="user.user_image.url" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" width="60" height="60"/>
                              </div>
                              <div v-else>
                                <img class="thumbnail float-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" alt="" width="60" height="60"/>
                              </div>
                            <h4 class="fs-13 m-0 b-0 p-0">NAME: {{user.first_name}} {{user.last_name}}</h4></p>
                            <p><h4 class="fs-13 m-0 b-0 p-0">EMAIL: {{user.email}}</h4></p>
                            <hr>
                          </div>
                        </div><!-- /post item -->
                      </div>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal" v-on:click="setCurrentGroup(group)">Invite New Members</button> 
                      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#MailModal" v-on:click="setCurrentGroup(group)">Email Group Members</button>
                    </div>

                    <div class="box-dark">
                      <!-- INLINE SEARCH -->
                      <!-- <div class="inline-search clearfix">
                        <form action="#" method="get" class="widget_search m-0">
                          <input type="search" placeholder="Search Post..." name="s" class="serch-input">
                          <button type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                          <div class="clear"></div>
                        </form>
                      </div> -->
                      <!-- /INLINE SEARCH -->

                    </div>

                  </div>
                  <!-- /MEMBERS -->

                  <!-- EVENTS (changed box from 6 to 12) -->
                  <div class="col-md-12 col-sm-12">

                    <div class="box-inner">
                      <h3>EVENTS
                      <a v-bind:href="'/#/events/new'" class="float-right fs-11 text-warning">Create an Event</a></h3>
                      <h5>CATEGORY: {{group.group_event_category}}</h5>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">

                        <div class="box-dark"><!-- squared item -->
                          <div v-for="event in group.group_event">
                            <!-- <img class="thumbnail float-left" src="demo_files/images/people/300x300/1-min.jpg" width="40" height="40" alt="" /> -->
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Name: {{event.event_name}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Location: {{event.location}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Start time: {{event.begin_time | moment('llll')}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> End time: {{event.end_time | moment('llll')}}</h4></p>
                            
                            <hr>
                          </div>
                        </div>
                        <!-- /squared item -->

                      </div>
                    </div>                  

                    
                  </div>
                </div>
              </div>
            </div>      
          </div>          
        </div>
      </section> 
      <!--fix the background for comments-->
      <h4>Comments: </h4>
      <div class="box-light">
        
        <div class="form-group">
          <div v-for="comment in comments">
            <ul>
              <li>{{comment.comment_text}} by {{comment.user.first_name}}</li><!--fix this-->
            </ul>
          </div>
          <label for="comment">Add a Comment:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
          <button class="btn btn-primary" @click="submitComment()">Submit</button>
        </div>
      </div>
      
      <div class="modal fade" id="MailModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLabel">Send an Email</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Enter a brief message!</p>
              <p>Your message<textarea class="form-control" rows="5" id="emailText"></textarea></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button @click="submitEmail()" type="button" class="btn btn-primary">Send Your Email</button>
            </div>
          </div>
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button @click="submitInvite()" type="button" class="btn btn-primary">Add To The Group</button>
            </div>
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
      console.log(this.$route.params.id);
    });
    axios.get('http://localhost:3000/api/users/show').then(response => {
      console.log(response.data);
      this.user = response.data;
    });
    // var userParams = {
    //   id: this.$route.params.id
    // };
    // axios.get('http://localhost:3000/api/users', userParams).then(response => {
    //   console.log('in the user index request');
    //   console.log(response.data);
    //   this.users = response.data;
    // });
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

    },
    submitEmail: function() {
      var newEmail = document.getElementById("emailText").value;
      console.log(document.getElementById("emailText").value);
      var sender = this.user.first_name;
      var params = {
        id: this.$route.params.id,
        email_body: `${newEmail} sent by ${sender}`
      };
      console.log(params);
      axios.post('http://localhost:3000/api/groups/email', params).then(response => {
        console.log(response.data);

      });
    }
  },
  computed: {}
};
</script>