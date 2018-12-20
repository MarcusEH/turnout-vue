<template>
  <div class="users-edit">
    <section>
      <div class="container">
        <div class="row">

            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8 order-md-2 order-sm-2 mb-80">

              <ul class="nav nav-tabs nav-top-border">
                <li class="active"><a href="#info" data-toggle="tab">Personal Info</a></li>
                <li><a href="#avatar" data-toggle="tab">Avatar</a></li>
              </ul>

              <div class="tab-content mt-20">

                <!-- PERSONAL INFO TAB -->
                <div class="tab-pane active" id="info">
                  <div>
                    <div class="form-group">
                      <label class="form-control-label">First Name</label>
                      <input type="text" placeholder="First Name" class="form-control" v-model="user.first_name">
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Last Name</label>
                      <input type="text" placeholder="Last Name" class="form-control" v-model="user.last_name">
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Email</label>
                      <input type="text" placeholder="" class="form-control" v-model="user.email">
                    </div>
                    
                    <div class="margiv-top10">
                      <button @click="submit()" class="btn btn-primary"><i class="fa fa-check"></i> Save Changes </button>
                      <a href="#/users/show" class="btn btn-default">Cancel </a>
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
                            <div v-if="user.user_image">
                              <img class="img-fluid" v-bind:src="user.user_image.url" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" />
                            </div>
                            <div v-else>
                             <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" alt="" />
                            </div>
                          </div>

                        </div>

                        <div class="col-md-9 col-sm-8">

                          <div class="sky-form m-0"> 
                            <!--here is the picture upload-->
                            <p>Image Url:</p>
                            <input type="text" v-model="newImage.image_url"></p>
                            <!-- <label class="label">Select File</label>
                            <label for="file" class="input input-file">
                             
                              <div class="button">
                                <input type="file" id="file" onchange="this.parentNode.nextSibling.value = this.value">Browse
                              </div><input type="text" readonly>
                            </label> -->
                          </div>

                          <!-- <a href="/#/users/edit" class="btn btn-danger btn-sm rad-0"><i class="fa fa-times"></i> Remove Avatar</a> -->

                          <div class="clearfix mt-20">
                            <span class="badge badge-warning">NOTE! </span>
                            <p>
                              Please make sure you are entering a valid URL!
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>

                    <div class="margiv-top10">
                      <button @click="submitImage()" class="btn btn-primary"><i class="fa fa-camera-retro"></i>Save Changes </button>
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
                <div v-if="user.user_image">
                  <img class="img-fluid" v-bind:src="user.user_image.url" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" />
                </div>
                  <div v-else>
                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" alt="" />
                  </div>
                <h2 class="fs-18 mt-10 mb-0">{{user.first_name}} {{user.last_name}}</h2>
              </div>


            
              <!-- SIDE NAV  USE THIS-->
              <ul class="side-nav list-group mb-60" id="sidebar-nav">
               <li class="list-group-item"><a href="/#/users/show"><i class="fa fa-child"></i> PROFILE</a></li>
                <li class="list-group-item active"><a href="/#/users/edit"><i class="fa fa-tasks"></i> EDIT PROFILE</a></li>
                <li class="list-group-item"><a href="/#/groups/join"><i class="fa fa-comments-o"></i>SEE YOUR INVITES</a></li>
                <li class="list-group-item"><a href="/#/groups/new"><i class="fa fa-magic"></i> CREATE A GROUP</a></li>
                <li class="list-group-item"><a href="/#/groups/index"><i class="fa fa-group"></i>YOUR GROUPS</a></li>
                <li class="list-group-item"><a href="/#/openings/new"><i class="fa fa-calendar"></i>ADD AN OPENING</a></li>
                <li class="list-group-item"><a href="/#/interests/new"><i class="fa fa-smile-o"></i>ADD INTERESTS</a></li>
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
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: [],
      newImage: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/show').then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email
      };
      axios
        .patch('http://localhost:3000/api/users/' + this.user.id, params).then(response => {
          this.$router.push('/users/show');
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitImage: function() {
      if (this.user.user_image) {
        var params = {
          url: this.newImage.image_url
        };      
        axios
          .patch('http://localhost:3000/api/user_images/' + this.user.user_image_id, params).then(response => {
            console.log('before redirect');
            this.$router.push('/users/show');
          })
          .catch(error => {
            console.log('in the errors');
            this.error = error.response.data.errors;
          });
      } else {
        var postParams = {
          url: this.newImage.image_url
        };
        axios
          .post('http://localhost:3000/api/user_images', postParams).then(response => {
            console.log('in the post request for images');
            console.log(response.data);
            var userParams = {
              user_image_id: response.data.id
            };
            axios
              .patch('http://localhost:3000/api/users/' + this.user.id, userParams).then(response => {
                console.log('in the patch request for users');
                console.log(response.data);
              })
              .catch(error => {
                console.log('in the patch to users errors');
                this.errors = error.response.data.errors;
              });
            this.$router.push('/users/show');
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