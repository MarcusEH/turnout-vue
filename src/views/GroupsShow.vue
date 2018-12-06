<template>
  <div class="groups-show">
    <div class="container">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios") ;
export default {
  data: function() {
    return {
      group: {}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/groups/' + this.$route.params.id).then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>