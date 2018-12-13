<template>
  <div class="user_calendar">
    <full-calendar :config="config" :event-sources="eventSources"></full-calendar>
  </div>
</template>

<style>
</style>

<script>
import { FullCalendar } from 'vue-full-calendar';
var axios = require('axios');
var fcEvents = null;
export default {
  components: {
    FullCalendar,
  },
  data: function() {
    return {
      eventSources: [
        {
          events(start, end, timezone, callback) {
            axios.get('http://localhost:3000/api/groups/event_info', {timezone: timezone}).then(response => {
              console.log(response.data);
              fcEvents = response.data;
              callback(response.data);
            });
          },
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
  created: function() {
    // axios.get('http://localhost:3000/api/groups/').then(response => {
    //   console.log(response.data);
    //   this.groups = response.data;

    // });
  },
  methods: {},
  computed: {}
};
</script>