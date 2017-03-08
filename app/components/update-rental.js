import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: this.get('cost'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
