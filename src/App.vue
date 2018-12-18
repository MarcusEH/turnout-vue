<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
  
    <div id="header" class="navbar-toggleable-md clearfix">

        <!-- TOP NAV -->
        <header id="topNav">
          <div class="container">

            <!-- Mobile Menu Button -->
            <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
              <i class="fa fa-bars"></i>
            </button>

            <!-- BUTTONS -->
            <ul class="float-right nav nav-pills nav-second-main">

              <!-- SEARCH -->
              <li class="search">
                <a href="javascript:;">
                  <i class="fa fa-search"></i>
                </a>
                <div class="search-box">
                  <form action="page-search-result-1.html" method="get">
                    <div class="input-group">
                      <input type="text" name="src" placeholder="Search" class="form-control" />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="submit">Search</button>
                      </span>
                    </div>
                  </form>
                </div> 
              </li>
              <!-- /SEARCH -->

            </ul>
            <!-- /BUTTONS -->

            <!-- Logo -->
            <a class="logo float-left" href="/">
              <img src="assets/images/demo-t.png" alt="" />
            </a>

            <!-- 
              Top Nav 
              
              AVAILABLE CLASSES:
              submenu-dark = dark sub menu
            -->
            <div class="navbar-collapse collapse float-right nav-main-collapse submenu-dark">
              <nav class="nav-main">
                <ul id="topMain" class="nav nav-pills nav-main">
                  <a href="/">HOME</a>
                  <li class="dropdown"><!-- DROPDOWNS -->
                    <li class="dropdown active">
                      <a class="dropdown-toggle" href="#">
                          LOGIN/SIGNUP
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="#/signup">SIGNUP</a></li>
                        <li><a href="#/login">LOGIN</a></li>
                        <li><a href="#/logout">LOGOUT</a></li>
                      </ul>
                     </li> 
                   </li>
                   <li class="dropdown">
                    <li class="dropdown active">
                      <a class="dropdown-toggle" href="#">
                      YOUR STUFF
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown">
                          <a class="dropdown-toggle" >
                          Profile
                          </a>
                          <ul class="dropdown-menu">
                            <li class="dropdown"><a href="#/users/show">View Profile</a></li>
                            <li><a href="#/users/edit">Edit Profile</a></li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a class="dropdown-toggle" href="#">
                          Groups
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#/groups/index">YOUR GROUPS</a></li>
                            <li><a href="#/groups/new">CREATE A GROUP</a></li>
                            <li><a href="#/groups/join">Join A GROUP</a></li>
                          </ul>
                        </li>
                        <li class="dropdown">
                         <a class="dropdown-toggle" href="#">
                          EVENTS
                          </a>
                          <ul class="dropdown-menu">
                            <!-- <li><a href="#/events/index">YOUR EVENTS</a></li> -->
                            <li><a href="#/users/calendar">YOUR CALENDAR</a></li>
                            <li><a href="#/users/googlecalendar">GOOGLE CALENDAR</a></li>
                            <li><a href="#/openings/new">ADD AVAILABILITY</a></li>
                          </ul>
                        </li>
                        <!-- <li><a href="page-sitemap.html">SITEMAP</a></li> -->
                      </ul>
                    </li>
                  </ul>
                </li>
                  
                  
                  
                  



                  <!-- 
                    MENU ANIMATIONS
                      .nav-animate-fadeIn
                      .nav-animate-fadeInUp
                      .nav-animate-bounceIn
                      .nav-animate-bounceInUp
                      .nav-animate-flipInX
                      .nav-animate-flipInY
                      .nav-animate-zoomIn
                      .nav-animate-slideInUp

                      .nav-hover-animate    = animate text on hover

                      .hover-animate-bounceIn = bounceIn effect on mouse over of main menu
                  -->
                
                </ul>

              </nav>
            </div>

          </div>
        </header>
        <!-- /Top Nav -->

    </div>
    
    <router-view/>
    <footer id="footer">
        <div class="container">

          <div class="row">
            
            <div class="col-md-3">
              <!-- Footer Logo -->
              <img class="footer-logo" src="demo_files/images/demo-t.png" alt="" />

              <!-- Small Description -->
              <p>Turnout by Marcus Hamill.</p>

              <!-- Contact Address -->
              <address>
                <ul class="list-unstyled">
                  <li class="footer-sprite address">
                    <!-- PO Box 21132<br> -->
                    Buffalo Grove, IL<br>
                    USA<br>
                  </li>
                  <li class="footer-sprite phone">
                    Phone: 1-555-555-5555
                  </li>
                  <li class="footer-sprite email">
                    <a href="mailto:marcusehamill@gmail.com">Support</a>
                  </li>
                </ul>
              </address>
              <!-- /Contact Address -->

            </div>

            <div class="col-md-3">

              <!-- Latest Blog Post -->
          <!--    <h4 class="letter-spacing-1">LATEST NEWS</h4>
              <ul class="footer-posts list-unstyled">
                <li>
                  <a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
                  <small>29 June 2017</small>
                </li>
                <li>
                  <a href="#">Nullam id dolor id nibh ultricies</a>
                  <small>29 June 2017</small>
                </li>
                <li>
                  <a href="#">Duis mollis, est non commodo luctus</a>
                  <small>29 June 2017</small>
                </li>
              </ul> -->
              <!-- /Latest Blog Post -->

            </div>

            <div class="col-md-2">

              <!-- Links -->
            <!--  <h4 class="letter-spacing-1">EXPLORE SMARTY</h4>
              <ul class="footer-links list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Our Clients</a></li>
                <li><a href="#">Our Pricing</a></li>
                <li><a href="#">Smarty Tour</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul> -->
              <!-- /Links -->

            </div>

            <div class="col-md-4">

            

              <!-- Social Icons -->
              <div class="mt-20">
                <a href="#" class="social-icon social-icon-border social-facebook float-left" data-toggle="tooltip" data-placement="top" title="Facebook">

                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-twitter float-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-gplus float-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-linkedin float-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-rss float-left" data-toggle="tooltip" data-placement="top" title="Rss">
                  <i class="icon-rss"></i>
                  <i class="icon-rss"></i>
                </a>
          
              </div>
              <!-- /Social Icons -->

            </div>

          </div>

        </div>

        <div class="copyright">
          <div class="container">
            <ul class="float-right m-0 list-inline mobile-block">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li>&bull;</li>
              <li><a href="#">Privacy</a></li>
            </ul>
            &copy; All Rights Reserved, Marcus Hamill
          </div>
        </div>
    </footer>
  </div>
</template>

<style>

</style>
<script>

</script>
