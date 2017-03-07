import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('announcement');
  },

  actions: {
    saveAnnouncement3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
    },
    update(announcement, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          announcement.set(key, params[key]);
        }
      });
      announcement.save();
    },

    destroyAnnouncement(announcement){
      announcement.destroyRecord();
    }
  }
});
