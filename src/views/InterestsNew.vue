<template>
  <div class="home">
    
    
  <!--   <select id="category">
      <option value="sports">sports</option>
      <option value="movies">movies</option>
      <option value="music">music</option>
      <option value="food">food</option>
      <option value="special">special</option>
      <option value="custom">custom</option>
    </select>
    <p><input type="number" v-model="newInterestLevel"></p>
    <button @click="addInterest(newInterestLevel)">Add</button>
   
  <p>Special events are... Custom events are...</p> -->
  <section>
        <div class="container">
          <div class="box-light">
            <div class="box-inner">
              <div class="row">
            <div class="col-md-6 offset-md-3">

              <div class="toggle toggle-transparent toggle-accordion toggle-noicon">

                <div class="toggle active">
                  <label class="fs-20"><i class="fa fa-smile-o"></i> &nbsp; Add an Interest!</label>
                  <div class="toggle-content">
                    <div>
                      <div class="clearfix">

                        <select id="category">
                          <option value="sports">sports</option>
                          <option value="movies">movies</option>
                          <option value="music">music</option>
                          <option value="food">food</option>
                          <option value="special">special</option>
                          <option value="custom">custom</option>
                        </select>
                      <!-- interest level -->
                        <label>How much does this type of event interest you? (scale 0-10) </label>
                        <label class="input mb-10">
                          <i class="ico-append fa fa-sort-numeric-desc"></i>
                          <input type="number" v-model="newInterestLevel" min=0 max=10>
                          <b class="tooltip tooltip-bottom-right">Love it? Hate it? Kind of meh?</b>
                        </label>

                      

                      </div>

                      <div class="row">

                        <div class="col-md-6 col-sm-6 col-6">
                          
                        </div>

                        <div class="col-md-6 col-sm-6 col-6 text-right">

                          <button class="btn btn-primary" @click="addInterest(newInterestLevel)"><i class="fa fa-check"></i> SUBMIT</button>
                          <p><a class="btn btn-secondary" href="/#/users/show"><i class="fa fa-child"></i>&nbspPROFILE</a></p>

                        </div>
                          <p><i class="fa fa-check-circle-o"></i> Special events are are events that may only occur once but are not user created such as a special theme day at a museum.</p>
                          <p><i class="fa fa-check-circle-o"></i> Custom events are your own events that do not fit in the other categories. Example: a party hosted by a group member at their home.</p>
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
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      
      // categories: ["sports", "movies", "music", "food", "special", "custom"],
      newInterestLevel: 0,
      interests: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/show').then(response => {
      this.user = response.data;
    });
  },
  methods: {
    addInterest: function(number) {
      var interests = [];
      var newInterest = {category: "", interest_level: 0};
      var newCategory = document.getElementById("category");
      console.log(newCategory.value);
      newInterest.category = newCategory.value;
      newInterest.interest_level = number;
      // console.log(newInterest);
      // console.log(interests);
      // interests.push(newInterest);
      var params = {
        category: newInterest.category,
        interest_level: newInterest.interest_level
      };
      axios
        .post('http://localhost:3000/api/user_interests', params).then(response => {
          console.log(response.data);
          this.interests = response.data;
        })
        .catch(error => {
          console.log("user interests add error");
          this.error = error.response.data.errors;
        });

    }
  },
  computed: {
  }
};
</script>