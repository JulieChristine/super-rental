import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcement) {
      var params = {
        writter: this.get('writter'),
        title: this.get('title'),
        details: this.get('details'),
        date: this.get('date'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    }
  }
});
