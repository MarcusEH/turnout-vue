<template>
  <div class="groups_index">
    <div class="container">

      <div v-for="group in groups">

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
            </div>


            <!-- RIGHT -->
            <div class="col-lg-9 col-md-9 col-sm-8">


              <div class="box-light"><!-- .box-light OR .box-dark -->

                <div class="row">

                  <!--MEMBERS (changed box from 6 to 12) -->
                  <div class="col-md-12 col-sm-12">

                    <div class="box-inner">
                      <h3>
                        <a v-bind:href="'/#/groups/' + group.id" class="float-right fs-11 text-warning">VIEW THIS GROUP</a>
                        MEMBERS
                      </h3>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                      

                        <div class="box-dark"><!-- post item -->
                          <div v-for="user in group.users">
                            <div v-if="user.user_image">
                                <img class="thumbnail float-left" v-bind:src="user.user_image.url" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" width="60" height="60"/>
                              </div>
                              <div v-else>
                                <img class="thumbnail float-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWK74VLFjbzPXDTEwI6MFhmZiQJY42s2I1u0yK6XzEi1Ket-s_g" alt="" width="60" height="40"/>
                              </div>
                            <!-- <p><img class="thumbnail float-left" src="demo_files/images/people/300x300/6-min.jpg" width="60" height="60" alt="" /> -->
                            <h4 class="fs-13 m-0 b-0 p-0">
                              NAME: {{user.first_name}} {{user.last_name}}</h4></p>
                            <p><h4 class="fs-13 m-0 b-0 p-0">EMAIL: {{user.email}}</h4></p>
                            <hr>
                          </div>
                        </div><!-- /post item -->
                        <!-- <h3><a v-bind:href="'/#/groups/' + group.id" class="float-right fs-11 text-warning">VIEW THIS GROUP</a></h3> -->
                      </div>
                    </div>

                    <div class="box-dark">
                      
                    </div>

                  </div>
                  <!-- /MEMBERS -->

                  <!-- EVENTS (changed box from 6 to 12) -->
                  <div class="col-md-12 col-sm-12">

                    <div class="box-inner">
                      <h3>EVENTS</h3>
                      <h5>Category: {{group.group_event_category}}</h5>
                      <div class="h-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">

                        <div class="box-dark"><!-- squared item -->
                          <div v-for="event in group.group_event">
                            <!-- <img class="thumbnail float-left" src="demo_files/images/people/300x300/1-min.jpg" width="40" height="40" alt="" /> -->
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Name: {{event.event_name}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Location: {{event.location}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> Start time: {{event.begin_time | moment('llll')}}</h4></p>
                            <p><h4 class="fs-14 m-0 b-0 p-0 bold"> End time: {{event.end_time | moment('llll')}}</h4></p>
                            <!-- <span class="fs-12 text-muted">Lorem ipsum dolor sit amet.</span> -->
                            <hr>
                          </div>
                        </div>
                        <!-- /squared item -->

                      </div>
                    </div>                  

                    <div class="box-footer">
                    </div>
                  </div>
                </div>
              </div>
            </div>      
          </div>          
        </div>
      </section>

        <!-- <h3> Group: {{group.title}} </h3>
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
        <p><a v-bind:href="'/#/groups/' + group.id" class="btn btn-secondary">View this group</a></p> -->
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