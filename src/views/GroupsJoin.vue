<template>
  <div class="groups-join">
    <h1>{{ message }}</h1>
    <div v-if="invites.length > 0">
      <div v-for="invite in invites">
        <h3>Your invites:</h3>
        <p>Group Name: {{invite.group.title}}</p>
        <!-- <p>{{invite.group.id}} </p> -->
        <p><button class="btn btn-primary" @click="joinGroup(invite)">Join this Group</button></ins></p>
      </div>
    </div>
    <div v-else>
      <h3>Nothing to see here. What a shame!</h3>
    </div>
    <!-- <a v-bind:href="'/#/users/show'" class="btn btn-secondary">Return to Profile</a> -->
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Join a group!",
      inputEmail: "",
      invites: [],
      user: {}
    };
  },
  created: function() {
    var params = {
      email: this.user.email
    };
    axios.get('http://localhost:3000/api/invites', params).then(response => {
      console.log(response.data);
      this.invites = response.data;  
      // var keys = [];
      // var values = [];
      // for (var i = this.invites.length - 1; i >= 0; i--) {
      //   this.invites[i];
      //   for (var key in this.invites[i]) {
      //     if (this.invites[i].hasOwnProperty(key)) {
      //       if (key === "title") {
      //         values.push(this.invites[i][key]);
      //       }
      //     }
      //   }
      // }
      // console.log(values);
      // this.values = values;
    
    });
    
      
   
  },
  methods: {
    joinGroup: function(group) {
      var params = {
        group_id: group.group.id
      };
      axios
        .post('http://localhost:3000/api/user_groups', params).then(response => {
          // start of new stuff here
          axios.get('http://localhost:3000/api/user_interests').then(response => {
            this.interests = response.data;
            if (this.interests.length === 0) {  
              var emptyInterests = [{category: "sports", interest_level: 0}, {category: "movies", interest_level: 0}, {category: "music", interest_level: 0}, {category: "food", interest_level: 0}, {category: "special", interest_level: 0}, {category: "custom", interest_level: 0}];
              emptyInterests.forEach(function(element) {
                params = {
                  // group_id: group.group.id,
                  category: element.category,
                  interest_level: element.interest_level
                }; //end of params
                console.log(params);
                axios
                  .post('http://localhost:3000/api/user_interests', params).then(response => {
                    console.log('in the interests add');
                    console.log(response.data);

                  }) //end of post request to userinterests
                  .catch(error => {
                    console.log('interests add errors');
                    this.error = error.response.data.errors;
                  }); //end of errors for user interests
              });//end of loop
              this.$router.push('/interests/create');
            } else {
              this.$router.push('/groups/index');
            } //end of else statement
            // end of new stuff here
            
          }); //end of get request for user interests
        }) // end of post request for user groups
        .catch(error => {
          console.log("join group errors");
          this.error = error.response.data.errors;
        }); //end of errors for join group
      // var destroyParams = {
      //   id: group.id
      // };
      console.log(group);
      console.log(group.id);
      axios
        .delete('http://localhost:3000/api/invites/' + group.id).then(response => {
          console.log(response.data);
        }) //end of delete request for invite
        .catch(error => {
          console.log("in delete invite errors");
          this.error = error.response.data.errors;
        }); //end of errors for invite delete
    }    
  },
  computed: {}
};
</script>