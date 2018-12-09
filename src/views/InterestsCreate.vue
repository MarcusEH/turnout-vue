<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <div v-for="category in categories"> -->
    <select id="category">
      <option value="sports">sports</option>
      <option value="movies">movies</option>
      <option value="music">music</option>
      <option value="food">food</option>
      <option value="special">special</option>
      <option value="custom">custom</option>
    </select>
    <p><input type="number" v-model="newInterestLevel"></p>
    <button @click="addInterest(newInterestLevel)">Add</button>
    <!-- <button @click="submitInterests()">Finalize</button> -->
    <!-- </div> -->
  <p>Special events are... Custom events are...</p>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "What would you like to do?",
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