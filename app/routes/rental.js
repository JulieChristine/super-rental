import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
        saveReview(params) {
        var newReview = this.store.createRecord('review', params);
        var rental = params.rental;
        rental.get('reviews').addObject(newReview);
        newReview.save().then(function() {
          return rental.save();
        });
        this.transitionTo('rental', rental);
    },
      destroyReview(review) {
        review.destroyRecord();
        this.transitionTo('index');
    },
    destroyRental(rental) {
      var review_deletions = rental.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return rental.destroyRecord();
      });

      this.transitionTo('index');
    }
  }
});


// saveReview(params) {
//   var newReview = this.store.createRecord('review', params); //identify the new review object (review is now child record)
//   var rental = params.rental; //identify where the child will belong to
//   rental.get('reviews').addObject(newReview); //add the new review to the reviews
//   newReview.save().then(function() { //save new review (specify to only save parent after child has been succesfully saved)
//     return rental.save();
//   });
//   this.transitionTo('rental', rental);//take is to the page displaying details for rental