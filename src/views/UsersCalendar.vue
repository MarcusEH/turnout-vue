<template>
  <div class="user_calendar">
    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#legendModal">LEGEND</button>
    <hr>
    <full-calendar :config="config" :event-sources="eventSources"></full-calendar>
  
  <!--LEGEND modal-->
  <div class="modal fade" id="legendModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLabel">CALENDAR LEGEND</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>TODAY'S DATE: Yellow</p>
              <p>TURNOUT EVENTS: Green</p>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!--/LEGEND modal-->
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
          color: 'green',
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