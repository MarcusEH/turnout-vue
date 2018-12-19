<template>  
  <section>
        <div class="container">

          <div class="row">
            <div class="col-md-6 offset-md-3">

              <div class="toggle toggle-transparent toggle-accordion toggle-noicon">

                <div class="toggle active">
                  <label class="fs-20"><i class="fa fa-leaf"></i> &nbsp; Let's get started!</label>
                  <div class="toggle-content">

                    <div class="events-new">
                      <form class="sky-form" v-on:submit.prevent="submit()">
                        <div class="clearfix">
                          <select id="groupChoice">
                            <option v-for="group in groups" v-bind:value="group.id">
                              {{group.title}}
                            </option>
                          </select>

                        <!-- location -->
                        <!--may change the tooltip if rss feed added-->
                          <label>Location</label>
                          <label class="input mb-10">
                            <i class="ico-append fa fa-globe"></i>
                            <input type="text" v-model="newEvent.location">
                            <b class="tooltip tooltip-bottom-right">Where is your group located?</b>
                          </label>

                        <!-- Event name-->
                          <label>Name of your Event</label>
                          <label class="input mb-10">
                            <i class="ico-append fa fa-star"></i>
                            <input type="text" v-model="newEvent.eventName">
                            <b class="tooltip tooltip-bottom-right">Something creative here!</b>
                          </label>

                        </div>

                        <div class="row">

                          <div class="col-md-6 col-sm-6 col-6">
                            
                            <!-- Inform Tip -->                                        
                            <!-- <div class="form-tip pt-20">
                              <a class="no-text-decoration fs-13 mt-10 block bold" href="#">Forgot Password?</a>
                            </div>
                             -->
                          </div>

                          <div class="col-md-6 col-sm-6 col-6 text-right">

                            <button class="btn btn-primary" type="submit" value="submit"><i class="fa fa-check"></i> SUBMIT</button>

                          </div>

                        </div>

                      </form>
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
      message: "Create Your Event for your group!",
      groups: [],
      newEvent: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/').then(response => {
      console.log(response.data);
      this.groups = response.data;
      console.log(this.groups);
    });
  },
  methods: {
    submit: function() {
      var params = {
        group_id: document.getElementById("groupChoice").value,
        location: this.newEvent.location,
        event_name: this.newEvent.eventName
      };
      console.log(params);
      axios
        .post('http://localhost:3000/api/group_events', params).then(response => {
          console.log(response.data);
          this.$router.push('/groups/index');
        })
        .catch(error => {
          console.log("event create errors");
          this.error = error.response.data.errors;
        });
    }

  },
  computed: {}
};
</script>