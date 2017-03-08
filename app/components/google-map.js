import Ember from 'ember';

export default Ember.Component.extend({
  //will load the service in file /app/services/google-map.js
  //This injects the google-map service into the component and makes it available as the map property.
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(rental) {
      //$ is jquery -> only refering to the container -> .map-display is in css
      var container = this.$('.map-display')[0];
      //the property needs to be explicitly called with get function.
      var options = {center: this.get('map').center(rental.get('latitude'), rental.get('longitude')),
      zoom: 15
    };
    this.get('map').findMap(container, options);
    }
  }
});
