<template>
 <!--  <div class="groups-create">
    <div class="container">
      <h1>{{ message }}</h1>
      <p>Name of your group:<input type="text" v-model="newGroup.title"></p>
      <p>Type of event:(optional) <input type="text" v-model="newGroup.event_type"></p>
      <p><button class="btn btn-primary" @click="submitGroup()">Create Group</button>
      <a v-bind:href="'/#/groups/join'" class="btn btn-secondary">Join a Group</a></p>
    </div>
  </div> -->
  <section>
    <div class="container">

      <div class="row">
        <div class="col-md-6 offset-md-3">

          <div class="toggle toggle-transparent toggle-accordion toggle-noicon">

            <div class="toggle active">
              <label class="fs-20"><i class="fa fa-leaf"></i> &nbsp; Create your Group!</label>
              <div class="toggle-content">

                <div class="groups-new">
                  <div class="sky-form">
                    <div class="clearfix">
                      

                    <!-- title -->
                    
                      <label>Name:</label>
                      <label class="input mb-10">
                        <i class="ico-append fa fa-cubes"></i>
                        <input type="text" v-model="newGroup.title">
                        <b class="tooltip tooltip-bottom-right">What do you want to call your group?</b>
                      </label>

                    <!-- event type-->
                      <label>Style of your group: (optional) </label>
                      <label class="input mb-10">
                        <i class="ico-append fa fa-star"></i>
                        <input placeholder="ex. casual" type="text" v-model="newGroup.event_type">
                      </label>
                    </div>

                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-6">                            
                      </div>
                      <div class="col-md-6 col-sm-6 col-6 text-right">

                        <button class="btn btn-primary" @click="submitGroup()"><i class="fa fa-check"></i> CREATE GROUP</button>
                        <a v-bind:href="'/#/groups/join'"  class="btn btn-secondary"><i class="fa fa-handshake-o"></i> JOIN A GROUP&nbsp</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Create your Group!",
      newGroup: {},
      group: {}      
    };
  },
  created: function() {},
  methods: {
    submitGroup: function() {
      var params = {
        title: this.newGroup.title,
        event_type: this.newGroup.event_type,
      };
      axios
        .post('http://localhost:3000/api/groups', params).then(response => {
          // this.groups.push(response.data);
          console.log(response.data);
          this.group = response.data;
          var userGroupParams = {
            group_id: this.group.id
          };
          console.log(this.group.id);
          axios
            .post('http://localhost:3000/api/user_groups', userGroupParams).then(response => {
              console.log(response.data);
              // this.user_groups.push(response.data);
              this.$router.push('/groups/index');
            })
            .catch(error => {
              console.log("user groups errors");
              this.error = error.response.data.errors;
            });
        })
        .catch(error => {
          console.log("group create request errors");
          this.error = error.response.data.errors;
        });   
    }
  },
  computed: {}
};
</script>