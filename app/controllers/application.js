
import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var pretender = Song.create({
  title: 'Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var SongCollection = Ember.Object.extend({
  content: [], // an array for all the songs
  sortProperties: ['rating:desc'], // in desc order of their rating
  sortedContent: Ember.computed.sort('content', 'sortProperties') // let sortedContent have the same elements are content but sorted in descending ordre of their rating
});

var songs = SongCollection.create();
// push songs into the content property of the collection and display sorted items from its sortedContent
songs.get('content').pushObject(blackDog);
songs.get('content').pushObject(yellowLedbetter);
songs.get('content').pushObject(pretender);

window.songs = songs;

var alwaysWaiting = Song.create({
  title: 'Always Waiting',
  band: 'Kaya Project',
  rating: 5
});

window.newSong = alwaysWaiting;

export default Ember.Controller.extend({
  songs: songs
});
