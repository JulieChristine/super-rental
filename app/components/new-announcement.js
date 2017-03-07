import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    AnnouncementFormShow () {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var params = {
        writter: this.get('writter'),
        title: this.get('title'),
        details: this.get('details'),
        date: this.get('date'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
