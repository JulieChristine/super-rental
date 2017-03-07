import DS from 'ember-data';

export default DS.Model.extend({
  writter: DS.attr(),
  title: DS.attr(),
  details: DS.attr(),
  date: DS.attr('date')
});
