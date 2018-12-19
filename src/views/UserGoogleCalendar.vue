<template>
  <div id="app">
  <div class='authentification'>
    <h2>Your Turnout Events with Google Calendar</h2>
    <button class="btn btn-primary" v-if='!authorized' @click="handleAuthClick"><i class="fa fa-google"></i>Sign In to Google</button>
    <button class="btn btn-primary" v-if='authorized' @click="handleSignoutClick">Sign Out</button>
  </div>
  <hr>
  <button class="btn btn-primary" v-if='authorized' @click="getEvents"><i class="fa fa-calendar"></i>Add your Google events</button>
  <div class="item-container" v-if="authorized && items">
  </div>
  <div class="user_calendar">
      <full-calendar :config="config" :event-sources="eventSources"></full-calendar>
  </div>
</div>
</template>
<style>
</style>
<script>
// import VueGAPI from 'vue-gapi';
import { FullCalendar } from 'vue-full-calendar';
var axios = require('axios');
var fcEvents = null;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

export default {
  data: function() {
    return {
      items: undefined,
      api: undefined,
      keys: [],
      authorized: false,
      eventSources: [
        {
          events(start, end, timezone, callback)  {
            axios.get('http://localhost:3000/api/groups/event_info', {timezone: timezone}).then(response => {
              console.log(response.data);
              fcEvents = response.data;
              callback(response.data);
            });
          },
          color: 'green',
          textColor: 'white',
        },
        {
          events: [
          ],
          color: 'gray',
          textColor: 'white',
        }
      ],
      config: {
        defaultView: "month",
        timeFormat: 'h(:mm)t',
        eventRender: function(event, element) {
          element.attr('title', event.tip);
        }
      }
    };
  },
  events: {
    'event-drop': function(event) {
      console.log(event);
    }
  },
  mounted: function() {
    setTimeout(function() {
      gapi.load('auth2', function() { });
      this.api = gapi;
      this.handleClientLoad();
    }.bind(this), 200);
  },
  methods: {
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    handleClientLoad() {
      this.api.load('client:auth2', this.initClient);
    },

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    initClient() {
      var vm = this;
      var CLIENT_ID;
      var API_KEY;
      var keys = [];
      axios.get('http://localhost:3000/api/users/keys').then(response => {
        keys = response.data;
        CLIENT_ID = keys[1];
        API_KEY = keys[0];
        vm.api.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(_ => {
          // Listen for sign-in state changes.
          vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
        });
      });
    },

    // Sign in.
    handleAuthClick(event) {
      Promise.resolve(this.api.auth2.getAuthInstance().signIn())
        .then(_ => {
          this.authorized = true;
        });
    },

    // Sign out.
    handleSignoutClick(event) {
      Promise.resolve(this.api.auth2.getAuthInstance().signOut())
        .then(_ => {
          this.authorized = false;
        });
      console.log('after clicking to authorize');
    },

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. 
     */
    getEvents() {
      var vm = this;
      vm.api.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        console.log(response.result.items);
        
        // this.eventSources[1].events.push({title: response.result.items[0].summary, start: response.result.items[0].start.dateTime, end: response.result.items[0].end.dateTime});
        // console.log(this.eventSources[1].events);
        var events = [];
        response.result.items.forEach(function(item) {
          events.push({title: item.summary, start: item.start.dateTime, end: item.end.dateTime});
          console.log(events);
        });
        console.log(this.eventSources);
        this.eventSources[1].events = events;
        vm.items = response.result.items;
      });
    },
  },
  computed: {}
};
</script>