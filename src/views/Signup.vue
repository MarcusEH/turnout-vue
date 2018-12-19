<template>
  <div class="signup">
    <!-- <div class="container"> -->
      <section>
        <div class="container">
          
          <div class="row">

            <!-- LOGIN -->
            <div class="col-md-6 col-sm-6">

              <!-- ALERT -->
              
              <!-- /ALERT -->

              <!-- register form -->
              <form class="m-0 sky-form boxed" action="#" method="post" v-on:submit.prevent="submit()">
                <header>
                  <i class="fa fa-users"></i> Register
                  </header>

                <fieldset class="m-0">          
                  <div class="row mb-10">
                    <div class="col-md-6">
                      <label class="input">
                        <input type="text" placeholder="First name" v-model="first_name">
                      </label>
                    </div>
                    <div class="col col-md-6">
                      <label class="input">
                        <input type="text" placeholder="Last name" v-model="last_name">
                      </label>
                    </div>
                  </div>
                  <label class="input mb-10">
                    <i class="ico-append fa fa-envelope"></i>
                    <input type="text" placeholder="email" v-model="email">
                    <b class="tooltip tooltip-bottom-right">Make sure you enter your email correctly!</b>
                  </label>
                  <label class="input mb-10">
                    <i class="ico-append fa fa-lock"></i>
                    <input type="password" placeholder="Password" v-model="password">
                    <b class="tooltip tooltip-bottom-right">Keep your password safe!</b>
                  </label>
                
                  <label class="input mb-10">
                    <i class="ico-append fa fa-lock"></i>
                    <input type="password" placeholder="Confirm password" v-model="passwordConfirmation">
                    <b class="tooltip tooltip-bottom-right">Double check your password!</b>
                  </label>            
                </fieldset>

                <div class="row mb-20">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary" value="Submit"><i class="fa fa-check"></i> REGISTER</button>
                  </div>
                </div>

                <!--ALERT-->
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <!--/ALERT-->

              </form>

              <!-- /register form -->

            </div>

            <!-- /LOGIN -->

            <!-- SOCIAL LOGIN -->
            <!-- <div class="col-md-6 col-sm-6">
              <form action="#" method="post" class="sky-form boxed">

                <header class="fs-18 mb-20">
                  Register using your favourite social network
                </header>
                
                <fieldset class="m-0">

                  <div class="row">
                  
                    <div class="col-md-8 offset-md-2">

                      <a class="btn btn-block btn-social btn-facebook mb-10">
                        <i class="fa fa-facebook"></i> Sign up with Facebook
                      </a>

                      <a class="btn btn-block btn-social btn-twitter mb-10">
                        <i class="fa fa-twitter"></i> Sign up with Twitter
                      </a>

                      <a class="btn btn-block btn-social btn-google mb-10">
                        <i class="fa fa-google-plus"></i> Sign up with Google
                      </a>
                  
                    </div>
                  </div>

                </fieldset>

                <footer>
                  Already have an account? <a href="page-login-1.html"><strong>Back to login!</strong></a>
                </footer>

              </form>

            </div> -->
            <!-- /SOCIAL LOGIN -->

          </div>

          
        </div>

      </section>
     <!--  <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="first_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="last_name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    }
  }
};
</script>