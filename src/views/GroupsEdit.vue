<template>
  <div class="group-edit">
    <section>
      <div class="container">
        <div class="row">

            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8 order-md-2 order-sm-2 mb-80">

              <ul class="nav nav-tabs nav-top-border">
                <li class="active"><a href="#info" data-toggle="tab">Group Info</a></li>
                <li><a href="#avatar" data-toggle="tab">Group Avatar</a></li>
              </ul>

              <div class="tab-content mt-20">

                <!-- PERSONAL INFO TAB -->
                <div class="tab-pane active" id="info">
                  <div>
                    <div class="form-group">
                      <label class="form-control-label">Group Name:</label>
                      <input type="text" placeholder="" class="form-control" v-model="group.title">
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Event Type:</label>
                      <input type="text" placeholder="ex. casual" class="form-control" v-model="group.event_type">
                    </div>                    
                    <div class="margiv-top10">
                      <button @click="submit()" class="btn btn-primary"><i class="fa fa-check"></i> Save Changes </button>
                      <a href="#/user/show" class="btn btn-default">Cancel </a>
                    </div>
                  </div>
                </div>
                <!-- /PERSONAL INFO TAB -->

                <!-- AVATAR TAB -->
                <div class="tab-pane fade" id="avatar">

                  <div class="clearfix"  >
                    <div class="form-group">

                      <div class="row">

                        <div class="col-md-3 col-sm-4">

                          <div class="thumbnail">
                            <div v-if="group.group_image">
                              <img class="img-fluid" v-bind:src="group.group_image.url" alt="" />
                            </div>
                            <div v-else>
                             <img class="img-fluid" src="assets/images/eggoworld.jpg" alt="" />
                            </div>
                          </div>

                        </div>

                        <div class="col-md-9 col-sm-8">

                          <div class="sky-form m-0"> 
                            <!--here is the picture upload-->
                            <p>Image Url:</p>
                            <input type="text" v-model="newImage.image_url"></p>
                          </div>

                          <!-- <a href="/#/users/edit" class="btn btn-danger btn-sm rad-0"><i class="fa fa-times"></i> Remove Avatar</a> -->

                          <div class="clearfix mt-20">
                            <span class="badge badge-warning">NOTE! </span>
                            <p>
                              Post only images you own!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="margiv-top10">
                      <button @click="submitImage()" class="btn btn-primary">Save Changes </button>
                      <a href="/#/users/show" class="btn btn-default">Cancel </a>
                    </div>
                  </div>
                </div>
                <!-- /AVATAR TAB -->
              </div>
            </div>

            
            <!-- LEFT -->
            <div class="col-lg-3 col-md-3 col-sm-4 pull-lg-9 order-md-1 order-sm-1">
            
              <div class="thumbnail text-center">
                <div v-if="group.group_image">
                  <img class="img-fluid" v-bind:src="group.group_image.url" alt="public/assets/images/eggoworld.jpg" />
                </div>
                <div v-else>
                  <img class="img-fluid" src="assets/images/eggoworld.jpg" alt="" />
                </div>
                <h2 class="fs-18 mt-10 mb-0">{{group.title}}</h2>
                <!-- <h3 class="fs-11 mt-0 mb-10 text-muted">DEVELOPER</h3> -->
              </div>


            
              <!-- SIDE NAV  USE THIS-->
              <ul class="side-nav list-group mb-60" id="sidebar-nav">
                <li class="list-group-item active"><a href="/#/users/show"><i class="fa fa-eye"></i> PROFILE</a></li>
                <li class="list-group-item"><a href="/#/users/edit"><i class="fa fa-tasks"></i> EDIT PROFILE</a></li>
                <li class="list-group-item"><a href="/#/groups/join"><i class="fa fa-comments-o"></i>SEE YOUR INVITES</a></li>
                <li class="list-group-item"><a href="/#/groups/create"><i class="fa fa-comments"></i> CREATE A GROUP</a></li>
                <li class="list-group-item"><a href="/#/groups/index"><i class="fa fa-eye"></i>YOUR GROUPS</a></li>
                <li class="list-group-item"><a href="/#/openings/create"><i class="fa fa-gears"></i>ADD AN OPENING</a></li>
                <li class="list-group-item"><a href="/#/interests/create"><i class="fa fa-gears"></i>ADD INTERESTS</a></li>
              </ul>
              <!-- /SIDE NAV -->
            </div>

          </div>
        </div>
    </section>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      group: {},
      newImage: {},
      errors: []
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get('http://localhost:3000/api/groups/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.group = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        id: this.group.id,
        title: this.group.title,
        event_type: this.group.event_type
      };
      console.log(params);
      axios
        .patch('http://localhost:3000/api/groups/edit', params).then(response => {
          this.$router.push('/groups/' + this.$router.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitImage: function() {
      if (this.group.group_image) {
        var params = {
          id: this.group.id,
          url: this.newImage.image_url
        };
        axios 
          .patch('http://localhost:3000/api/group_images/edit', params).then(response => {
            console.log('before redirect');
            this.$router.push('/groups/' + this.$router.params.id);
          })
          .catch(error => {
            console.log('in the errors');
            this.errors = error.response.data.errors;
          });
      } else {
        var postParams = {
          group_id: this.group.id,
          url: this.newImage.image_url
        };
        axios
          .post('http://localhost:3000/api/group_images', postParams).then(response => {
            console.log('in the post request for images');
            console.log(response.data);
            var groupParams = {
              id: response.data.group_id,
              group_image_id: response.data.id
            };
            axios
              .patch('http://localhost:3000/api/groups/edit', groupParams).then(response => {
                console.log('in the patch request for group');
                console.log(response.data);
              })
              .catch(error => {
                console.log('in the patch to group errors');
                this.errors = error.response.data.errors;
              });
            this.$router.push('/groups/' + this.$router.params.id);
          })
          .catch(error => {
            console.log('in the post request errors for images');
            this.errors = error.response.data.errors;
          });
      }
    }
  },
  computed: {}
};
</script>