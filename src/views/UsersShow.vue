<template>
  <div class="home">

    <section>
        <div class="container">
          <div class="row">

            <!-- LEFT -->
            <div class="col-lg-3 col-md-3 col-sm-4">
            <!-- profile picture and name-->
              <div class="thumbnail text-center">
                <!--here be the image error-->
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
                <li class="list-group-item active"><a href="/#/users/show"><i class="fa fa-child"></i> PROFILE</a></li>
                <li class="list-group-item"><a href="/#/users/edit"><i class="fa fa-tasks"></i> EDIT PROFILE</a></li>
                <li class="list-group-item"><a href="/#/groups/join"><i class="fa fa-comments-o"></i>SEE YOUR INVITES</a></li>
                <li class="list-group-item"><a href="/#/groups/new"><i class="fa fa-magic"></i> CREATE A GROUP</a></li>
                <li class="list-group-item"><a href="/#/groups/index"><i class="fa fa-group"></i>YOUR GROUPS</a></li>
                <li class="list-group-item"><a href="/#/openings/new"><i class="fa fa-calendar"></i>ADD AN OPENING</a></li>
                <li class="list-group-item"><a href="/#/interests/new"><i class="fa fa-smile-o"></i>ADD INTERESTS</a></li>
              </ul>
            </div>


            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8">


              <div class="box-light"><!-- .box-light OR .box-dark -->

                <div class="row">

                  <!-- GROUPS -->
                  <div class="col-md-6 col-sm-6">

                    <div class="box-inner">
                      <h3>
                        <a class="float-right fs-11 text-warning" href="/#/groups/index">VIEW ALL</a>
                        GROUPS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                      

                        <div class="clearfix mb-10"><!-- post item -->
                          <div v-for="group in groups">
                            <p>
                              <div v-if="group.group_image">
                               <img class="thumbnail float-left" v-bind:src="group.group_image.url" width="60" height="50" alt="" />
                              </div>
                              <div v-else>
                                <img class="thumbnail float-left" src="assets/images/eggoworld.jpg"width="60" height="50" alt="" />
                              </div>
                            <h4 class="fs-13 m-0 b-0 p-0"><a v-bind:href='"/#/groups/" + group.id'>{{group.title}}</a></h4></p>
                            <hr>
                          </div>
                        </div><!-- /post item -->
                      </div>
                    </div>

                    <div class="box-footer">

                    </div>

                  </div>
                  <!-- /GROUPS -->

                  <!-- OPENINGS -->
                  <div class="col-md-6 col-sm-6">

                    <div class="box-inner">
                      <!--broken link (could be calendar)-->
                      <h3>
                        <a class="float-right fs-11 text-warning" href="/#/openings/new">ADD AN OPENING</a><!--/-->
                        OPENINGS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">

                        <div class="clearfix mb-10"><!-- squared item -->
                          <div v-for="opening in user.openings">
                            <!-- <img class="thumbnail float-left" src="demo_files/images/people/300x300/1-min.jpg" width="40" height="40" alt="" /> -->
                            <ol>
                              <li>
                                <p><h4 class="fs-14 m-0 b-0 p-0 bold"> START: {{opening.begin_time | moment("utc", "llll")}}</h4></p>
                                <p><h4 class="fs-14 m-0 b-0 p-0 bold"> END: {{opening.end_time | moment("utc", "llll")}}</h4></p></li>
                            </ol>
                            <!-- <span class="fs-12 text-muted">Lorem ipsum dolor sit amet.</span> -->
                            <hr>
                          </div>
                        </div>
                        <!-- /squared item -->

                      </div>
                    </div>                  

                    <div class="box-footer">
                      <!-- INLINE SEARCH -->
                    <!--  <div class="inline-search clearfix">
                        <form action="#" method="get" class="widget_search m-0">
                          <input type="search" placeholder="Search Friend..." name="s" class="serch-input">
                          <button type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                          <div class="clear"></div>
                        </form>
                      </div> -->
                      <!-- /INLINE SEARCH -->

                    </div>

                  </div>
                  <!-- /OPENINGS -->

                </div>


                <div class="row mt-30">

                  <!-- INTERESTS -->
                  <div class="col-md-12 col-sm-12">

                    <div class="box-inner">
                      <h3>
                        <!--broken link-->
                        <a class="float-right fs-11 text-warning" href="#">VIEW ALL</a>
                        INTERESTS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                      
                        <div class="clearfix mb-20"><!-- discussion item -->
                          <div v-for="interest in user.interests">
                            <!--here is the interest image-->
                            <!-- <p><img class="thumbnail float-left" src="demo_files/images/people/300x300/3-min.jpg" width="60" height="60" alt="" /> -->
                            <p><h4 class="fs-15 m-0 b-0 p-0 bold">Category: {{interest.category}}</h4></p>
                            <h4 class="fs-15 m-0 b-0 p-0 bold">Current interest: {{interest.interest_level}}</h4></p>
                            <p><a v-bind:href="'/#/interests/' + interest.id + '/edit'" >Edit Interest</a></p>
                            <hr>
                          </div>
                        </div><!-- /discussion item -->
                      </div>
                    </div>

                    <div class="box-footer">
                      <!-- INLINE SEARCH -->
                    <!--  <div class="inline-search clearfix">
                        <form action="#" method="get" class="widget_search m-0">
                          <input type="search" placeholder="Search Discussion..." name="s" class="serch-input">
                          <button type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                          <div class="clear"></div>
                        </form>
                      </div> -->
                      <!-- /INLINE SEARCH -->

                    </div>

                  </div>
                  <!-- /INTERESTS -->

                  <!-- NOTIFICATIONS -->
              
                  <!-- /NOTIFICATIONS -->

                </div>


              </div>


            

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
// import moment from 'moment-timezone';

export default {
  data: function() {
    return {
      user: {},
      groups: []
      // user_image: {url: ""}
      // user_interest: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/' + this.user.id).then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this));
    axios.get('http://localhost:3000/api/groups/').then(function(response) {
      console.log(response.data);
      this.groups = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>