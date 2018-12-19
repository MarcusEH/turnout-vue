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
                

                <a href="#" class="social-icon social-icon-border social-twitter float-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

               <!--  <a href="#" class="social-icon social-icon-border social-gplus float-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a> -->

                <a href="https://www.linkedin.com/in/marcus-hamill/" class="social-icon social-icon-border social-linkedin float-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>

                <!-- <a href="#" class="social-icon social-icon-border social-rss float-left" data-toggle="tooltip" data-placement="top" title="Rss">
                  <i class="icon-rss"></i>
                  <i class="icon-rss"></i>
                </a> -->
          
              </div>
              <!-- /Social Icons -->

            </div>

          </div>

        </div>

        <div class="copyright">
          <div class="container">
            <ul class="float-right m-0 list-inline mobile-block">
              <li><button data-toggle="modal" data-target="#termsModal">Terms &amp; Conditions </button></li>
              <li>&bull;</li>
              <li><a href="#">Privacy</a></li>
            </ul>
            &copy; All Rights Reserved, Marcus Hamill
          </div>
        </div>
            <!-- MODAL terms and conditions -->
       <div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="myModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h4 class="modal-title" id="myModal">Terms &amp; Conditions</h4>
            </div>

            <div class="modal-body modal-short">
              <div class="box-dark">
              <h4><b>Introduction</b></h4>
              <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full.   If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.</p>
              <p>[You must be at least [18] years of age to use this website.  By using this website [and by agreeing to these terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>


              <h4><strong>License to use website</strong></h4>
              <p>Unless otherwise stated, TURNOUT and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
              <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
              <p>You must not:</p>
              <ul>
                <li>republish material from this website (including republication on another website);</li>
                <li>sell, rent or sub-license material from the website;</li>
                <li>show any material from the website in public;</li>
                <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>
                <li>[edit or otherwise modify any material on the website; or]</li>
                <li>[redistribute material from this website [except for content specifically and expressly made available for redistribution].]</li>
              </ul>
              <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your organisation].]</p>

              <h4><strong>Acceptable use</strong></h4>
              <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>
              <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</p>
              <p>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without TURNOUT'S express written consent.</p>
              <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>
              <p>[You must not use this website for any purposes related to marketing without TURNOUT'S express written consent.]</p>

              <h4><strong>Restricted access</strong></h4>
              <p>[Access to certain areas of this website is restricted.]  TURNOUT reserves the right to restrict access to [other] areas of this website, or indeed this entire website, at TURNOUT'S discretion.</p>
              <p>If TURNOUT provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</p>
              <p>TURNOUT may disable your user ID and password in TURNOUT'S sole discretion without notice or explanation.]</p>

              <h4><strong>User content</strong></h4>
              <p>In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.</p>
              <p>You grant to TURNOUT a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media.  You also grant to TURNOUT the right to sub-license these rights, and the right to bring an action for infringement of these rights.</p>
              <p>Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or TURNOUT or a third party (in each case under any applicable law).</p>
              <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.</p>
              <p>TURNOUT reserves the right to edit or remove any material submitted to this website, or stored on TURNOUT'S servers, or hosted or published upon this website.</p>
              <p>[Notwithstanding TURNOUT'S rights under these terms and conditions in relation to user content, TURNOUT does not undertake to monitor the submission of such content to, or the publication of such content on, this website.]</p>

              <h4><strong>No warranties</strong></h4>
              <p>This website is provided "as is" without any representations or warranties, express or implied.  TURNOUT makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>
              <p>Without prejudice to the generality of the foregoing paragraph, TURNOUT does not warrant that:</p>
              <ul>
                <li>this website will be constantly available, or available at all; or</li>
                <li>the information on this website is complete, true, accurate or non-misleading.</li>
              </ul>
              <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind.  [If you require advice in relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>

              <h4><strong>Limitations of liability</strong></h4>
              <p>TURNOUT will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>
              <ul>
                <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>
                <li>for any indirect, special or consequential loss; or</li>
                <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
              </ul>
              <p>These limitations of liability apply even if TURNOUT has been expressly advised of the potential loss.</p>

              <h4><strong>Exceptions</strong></h4>
              <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit TURNOUT'S liability in respect of any:</p>
              <ul>
                <li>death or personal injury caused by TURNOUT'S negligence;</li>
                <li>fraud or fraudulent misrepresentation on the part of TURNOUT; or</li>
                <li>matter which it would be illegal or unlawful for TURNOUT to exclude or limit, or to attempt or purport to exclude or limit, its liability.</li>
              </ul>

              <h4><strong>Reasonableness</strong></h4>
              <p>By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.</p>
              <p>If you do not think they are reasonable, you must not use this website.</p>

              <h4><strong>Other parties</strong></h4>
              <p>[You accept that, as a limited liability entity, TURNOUT has an interest in limiting the personal liability of its officers and employees.  You agree that you will not bring any claim personally against TURNOUT'S officers or employees in respect of any losses you suffer in connection with the website.]</p>
              <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set out in this website disclaimer will protect TURNOUT'S officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as TURNOUT.</p>

              <h4><strong>Unenforceable provisions</strong></h4>
              <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.</p>

              <h4><strong>Indemnity</strong></h4>
              <p>You hereby indemnify TURNOUT and undertake to keep TURNOUT indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by TURNOUT to a third party in settlement of a claim or dispute on the advice of TURNOUT'S legal advisers) incurred or suffered by TURNOUT arising out of any breach by you of any provision of these terms and conditions[, or arising out of any claim that you have breached any provision of these terms and conditions].</p>

              <h4><strong>Breaches of these terms and conditions</strong></h4>
              <p>Without prejudice to TURNOUT'S other rights under these terms and conditions, if you breach these terms and conditions in any way, TURNOUT may take such action as TURNOUT deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.</p>

              <h4><strong>Variation</strong></h4>
              <p>TURNOUT may revise these terms and conditions from time-to-time.  Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website.  Please check this page regularly to ensure you are familiar with the current version.</p>

              <h4><strong>Assignment</strong></h4>
              <p>TURNOUT may transfer, sub-contract or otherwise deal with TURNOUT'S rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.</p>
              <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.</p>

              <h4><strong>Severability</strong></h4>
              <p>If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.  If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>

              <h4><strong>Entire agreement</strong></h4>
              <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and TURNOUT in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p>

              <h4><strong>Law and jurisdiction</strong></h4>
              <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of [JURISDICTION].</p>

              <h4><strong>About these website terms and conditions</strong></h4>
              <p>
                We created these website terms and conditions with the help of a free website terms and conditions form developed by Contractology and available at <a href="#">www.yourwebsite.com</a>.
                Contractology supply a wide variety of commercial legal documents, such as <a href="#">template data protection statements</a>.
              </p>

              <h4><strong>Registrations and authorisations</strong></h4>
              <p>[TURNOUT is registered with [TRADE REGISTER].  You can find the online version of the register at [URL].  TURNOUT'S registration number is [NUMBER].]</p>
              <p>[TURNOUT is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>
              <p>TURNOUT is registered with [PROFESSIONAL BODY].  TURNOUT'S professional title is [TITLE] and it has been granted in [JURISDICTION].  TURNOUT is subject to the [RULES] which can be found at [URL].]</p>
              <p>[TURNOUT subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT].  [These codes/this code] can be consulted electronically at [URL(S)].</p>
              <p>[TURNOUT'S [TAX] number is [NUMBER].]]</p>

              <h4><strong>TURNOUT'S details</strong></h4>
              <p>The full name of TURNOUT is Turnout by Marcus Hamill.</p>
              <p>TURNOUT is registered in [JURISDICTION] under registration number [NUMBER].]</p>
              <p>TURNOUT'S [registered] address is [to be determined].</p>
              <p>You can contact TURNOUT by email to turnoutsupport@gmail.com.</p>


              <p class="m-top30">
                <strong>By using this  WEBSITE TERMS AND CONDITIONS template document, you agree to the 
                <a href="#">terms and conditions</a> set out on 
                <a href="#">yourdomain.com</a>.  You must retain the credit 
                set out in the section headed "ABOUT THESE WEBSITE TERMS AND CONDITIONS".  Subject to the licensing restrictions, you should 
                edit the document, adapting it to the requirements of your jurisdiction, your business and your 
                website.  If you are not a lawyer, we recommend that you take professional legal advice in relation to the editing and 
                use of the template.</strong>
              </p>

            </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <!-- <button type="button" class="btn btn-primary" id="terms-agree"><i class="fa fa-check"></i> I Agree</button> -->
              
              <!-- <a href="page-print-terms.html" target="_blank" rel="nofollow" class="btn btn-danger float-left"><i class="fa fa-print"></i><span class="hidden-xs-down"> Print</span></a> -->
            </div>

          </div> <!-- /.modal-content -->
        </div> <!--/.modal-dialog-->
      </div> 
      <!-- /MODAL -->
    </footer>
  </div>
</template>

<style>

</style>
<script>

</script>
