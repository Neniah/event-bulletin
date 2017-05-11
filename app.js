new Vue({
  el: '#events',
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },
  ready: function() {

    this.fetchEvents();
  },
  methods: {

    fetchEvents: function(){
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2017-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2017-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2018-03-11'
        }
      ];
      this.$set('events', events);
    },

    // Adds an event to the existing events array
    addEvent: function(){
      if(this.event.name){
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index){
      if(confirm("Are you sure you want to delete this event?")){
        this.event.$remove(index);
      }
    }
  }
});

this.$http.post('api/events', this.event).success(function(response){
  this.events.push(this.event);
  console.log("Event added!");
}).error(function(error){
  console.log(error);
});


this.$http.delete('api/events/' + event.id).success(function(response){
  this.events.$remove(index);
}).error(function(error){
  console.log(error);
});
