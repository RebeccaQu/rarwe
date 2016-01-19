import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr(),
  songs: DS.hasMany('songs'),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
});


// // BAND OBJECT
// export default Ember.Object.extend({
//   name: '',
//   description: '',
//
//   // create a new Band object with an empty array to hold songs
//   setupSongs: Ember.on('init', function() {
//     if (!this.get('songs')) {
//       this.set('songs', []);
//     }
//   }),
//
//   slug: Ember.computed('name', function() {
//     return this.get('name').dasherize();
//   })
// });
