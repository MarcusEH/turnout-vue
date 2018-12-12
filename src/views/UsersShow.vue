<template>
  <div class="home">
<!--     <h1>Profile</h1>
      <a v-bind:href="'/#/users/edit'" class="btn btn-primary">Edit Profile</a>
     <a v-bind:href="'/#/groups/create'" class="btn btn-secondary">New Group</a>
     <a v-bind:href="'/#/groups/join'" class="btn btn-primary">See your invites</a>
    <div>
      <p> First Name: {{user.first_name}}</p>
      <p> Last Name: {{user.last_name}}</p>
      <p> Email: {{user.email}}</p>
      
      <div v-for="group in user.groups">
        <p> Groups: {{group.title}} </p>
        <a v-bind:href="'/#/groups/index'" class="btn btn-primary">More</a>
      </div>
      <hr>
      <p> Openings: {{user.openings}} </p>
      <a v-bind:href="'/#/openings/create'" class="btn btn-primary">Add Opening</a>
      <hr>
      <div class="interests">
        <div v-for="interest in user.interests">
          <p>Interests: {{interest}}</p>
          <p><a v-bind:href="'/#/interests/' + interest.id + '/edit'" class="btn btn-secondary">Edit Interests</a>
          <a v-bind:href="'/#/interests/create'" class="btn btn-secondary">Add an Interest</a></p>
        </div>
      </div>
    </div> -->
    <section>
        <div class="container">
          <div class="row">

            <!-- LEFT -->
            <div class="col-lg-3 col-md-3 col-sm-4">
            <!-- profile picture and name-->
              <div class="thumbnail text-center">
                <img class="img-fluid" src="demo_files/images/people/460x700/8-min.jpg" alt="" />
                <h2 class="fs-18 mt-10 mb-0">{{user.first_name}} {{user.last_name}}</h2>
                <!-- <h3 class="fs-11 mt-0 mb-10 text-muted">DEVELOPER</h3> -->
              </div>

              <!-- completed  NOPE-->
              <!-- <div class="mb-30">
                <label>88% completed profile</label>
                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="width: 88%; min-width: 2em;"></div>
                </div>
              </div> -->
              <!-- /completed -->

              <!-- SIDE NAV  USE THIS-->
              <ul class="side-nav list-group mb-60" id="sidebar-nav">
                <li class="list-group-item active"><a href="/#/users/show"><i class="fa fa-eye"></i> PROFILE</a></li>
                <li class="list-group-item"><a href="/#/users/edit"><i class="fa fa-tasks"></i> EDIT PROFILE</a></li>
                <li class="list-group-item"><a href="/#/groups/join"><i class="fa fa-comments-o"></i>SEE YOUR INVITES</a></li>
                <li class="list-group-item"><a href="/#/groups/create"><i class="fa fa-comments"></i> CREATE A GROUP</a></li>
                <li class="list-group-item"><a href="/#/groups/index"><i class="fa fa-eye"></i>YOUR GROUPS</a></li>
                <li class="list-group-item"><a href="/#/openings/create"><i class="fa fa-gears"></i>ADD AN OPENING</a></li>
                <li class="list-group-item"><a href="/#/interests/create"><i class="fa fa-gears"></i>ADD INTERESTS</a></li>
                <!-- <li class="list-group-item"><a href="/#/interests/edit"><i class="fa fa-gears"></i>EDIT INTERESTS</a></li> -->

                <!-- <li class="list-group-item list-toggle">              
                  <a data-toggle="collapse" href="#collapse-1">DROPDOWN EXAMPLE</a>
                  
                  <ul id="collapse-1" class="collapse">
                    <li><a href="#"><i class="fa fa-angle-right"></i> SUMBENU 1</a></li>
                    <li>
                      <span class="badge badge-red">New</span>
                      <a href="#"><i class="fa fa-angle-right"></i> SUMBENU 2</a>
                    </li>
                    <li class="active"><a href="#"><i class="fa fa-angle-right"></i> SUMBENU 3</a></li>
                    <li><a href="#"><i class="fa fa-angle-right"></i> SUMBENU 4</a></li>
                  </ul>
                </li> -->
              </ul>
              <!-- /SIDE NAV -->


              <!-- info -->
              <!-- <div class="box-light mb-30">
                <div class="row mb-20">
                  <div class="col-md-4 col-sm-4 col-4 text-center bold">
                    <h2 class="fs-30 mt-10 mb-0 font-raleway">12</h2>
                    <h3 class="fs-11 mt-0 mb-10 text-info">PROJECTS</h3>
                  </div>

                  <div class="col-md-4 col-sm-4 col-4 text-center bold">
                    <h2 class="fs-30 mt-10 mb-0 font-raleway">34</h2>
                    <h3 class="fs-11 mt-0 mb-10 text-info">TASKS</h3>
                  </div>

                  <div class="col-md-4 col-sm-4 col-4 text-center bold">
                    <h2 class="fs-30 mt-10 mb-0 font-raleway">32</h2>
                    <h3 class="fs-11 mt-0 mb-10 text-info">UPLOADS</h3>
                  </div>
                </div>
                /info

                <div class="text-muted">
                  <h2 class="fs-18 text-muted mb-6"><b>About</b> Felicia Doe</h2>
                  <p>Lorem ipsum dolor sit amet diam nonummy nibh dolore.</p>
                  
                  <ul class="list-unstyled m-0">
                    <li class="mb-10"><i class="fa fa-globe fw-20 hidden-xs-down hidden-sm"></i> <a href="http://www.stepofweb.com">www.stepofweb.com</a></li>
                    <li class="mb-10"><i class="fa fa-facebook fw-20 hidden-xs-down hidden-sm"></i> <a href="http://www.facebook.com/stepofweb">stepofweb</a></li>
                    <li class="mb-10"><i class="fa fa-twitter fw-20 hidden-xs-down hidden-sm"></i> <a href="http://www.twitter.com/stepofweb">@stepofweb</a></li>
                  </ul>
                </div>
              
              </div> -->

            </div>


            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8">

              <!-- FLIP BOX -->
            <!--  <div class="box-flip box-icon box-icon-center box-icon-round box-icon-large text-center m-0">
                <div class="front">
                  <div class="box1 rad-0">
                    <div class="box-icon-title">
                      <i class="fa fa-user"></i>
                      <h2>Felica Doe &ndash; Profile</h2>
                    </div>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere</p>
                  </div>
                </div>

                <div class="back">
                  <div class="box2 rad-0">
                    <h4>WHO AM I?</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque.</p>
                  </div>
                </div>
              </div> -->
              <!-- /FLIP BOX -->


              <div class="box-light"><!-- .box-light OR .box-dark -->

                <div class="row">

                  <!-- POPULAR POSTS -->
                  <div class="col-md-6 col-sm-6">

                    <div class="box-inner">
                      <h3>
                        <a class="float-right fs-11 text-warning" href="/#/groups/index">VIEW ALL</a>
                        GROUPS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                      

                        <div class="clearfix mb-10"><!-- post item -->
                          <div v-for="group in user.groups">
                            <p><img class="thumbnail float-left" src="demo_files/images/people/300x300/6-min.jpg" width="60" height="60" alt="" />
                            <h4 class="fs-13 m-0 b-0 p-0"><a v-bind:href='"/#/groups/" + group.id'>{{group.title}}</a></h4></p>
                            <hr>
                          </div>
                        </div><!-- /post item -->

                



                      </div>
                    </div>

                    <div class="box-footer">
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
                  <!-- /POPULAR POSTS -->

                  <!-- OPENINGS -->
                  <div class="col-md-6 col-sm-6">

                    <div class="box-inner">
                      <!--broken link (could be calendar)-->
                      <h3>
                        <a class="float-right fs-11 text-warning" href="/#/openings/create">ADD AN OPENING</a><!--/-->
                        OPENINGS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">

                        <div class="clearfix mb-10"><!-- squared item -->
                          <div v-for="opening in user.openings">
                            <!-- <img class="thumbnail float-left" src="demo_files/images/people/300x300/1-min.jpg" width="40" height="40" alt="" /> -->
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> START: {{opening.begin_time}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> END: {{opening.end_time}}</h4></p>
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
export default {
  data: function() {
    return {
      user: {},
      // user_interest: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/show').then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>