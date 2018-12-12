<template>
  <div class="login">
    <div class="container">
      <section>
        <div class="container">
          
          <div class="row">

            <!-- LOGIN -->
            <div class="col-md-6 col-sm-6">

              <!-- login form -->
              <form action="#" method="post" v-on:submit.prevent="submit()" class="sky-form boxed">

                <header class="fs-18 mb-20">
                  I have an account.
                </header>
                
                <fieldset class="m-0">

                  <label class="input mb-10">
                    <i class="ico-append fa fa-envelope"></i>
                    <input required type="email" placeholder="Email address" v-model="email">
                    <b class="tooltip tooltip-bottom-right">Needed to verify your account</b>
                  </label>
                
                  <label class="input mb-10">
                    <i class="ico-append fa fa-lock"></i>
                    <input required type="password" placeholder="Password" v-model="password">
                    <b class="tooltip tooltip-bottom-right" v-model="password">Only latin characters and numbers</b>
                  </label>

                  <div class="clearfix note mb-30">
                    <a class="float-right" href="#">Forgot Password?</a>
                  </div>
                  
                  <label class="checkbox fw-300">
                    <input type="checkbox" name="checkbox-inline" value="Submit">
                    <!-- <i></i> Keep me logged in -->
                  </label>

                </fieldset>

                <footer>
                  <button type="submit" @click="submit()" class="btn btn-primary rad-0 float-right"><i class="fa fa-check"></i> OK, LOG IN</button>
                </footer>

              </form>
              <!-- /login form -->

              <!-- ALERT -->
              <!-- <div class="alert alert-mini alert-danger mb-30">
                <strong>Oh snap!</strong> Login Incorrect!
              </div> --><!-- /ALERT -->

            </div>
            <!-- /LOGIN -->

            <!-- SOCIAL LOGIN -->
            <!-- <div class="col-md-6 col-sm-6">
              <form action="#" method="post" class="sky-form boxed">

                <header class="fs-18 mb-20">
                  Sign In using your favourite social network
                </header>
                
                <fieldset class="m-0">

                  <div class="row">
                  
                    <div class="col-md-8 offset-md-2">

                      <a class="btn btn-block btn-social btn-facebook mb-10">
                        <i class="fa fa-facebook"></i> Sign in with Facebook
                      </a>

                      <a class="btn btn-block btn-social btn-twitter mb-10">
                        <i class="fa fa-twitter"></i> Sign in with Twitter
                      </a>

                      <a class="btn btn-block btn-social btn-google mb-10">
                        <i class="fa fa-google-plus"></i> Sign in with Google
                      </a>
                  
                    </div>
                  </div>

                </fieldset>

                <footer>
                  Don't have an account yet? <a href="page-register-1.html"><strong>Click to register!</strong></a>
                </footer>

              </form>

            </div> -->
            <!-- /SOCIAL LOGIN -->

          </div>

          
        </div>
      </section>
      <!-- <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          if (response.data.interests.length > 0) {
            this.$router.push("/");
          }
          else {
            this.$router.push("/groups/create");
          }
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
