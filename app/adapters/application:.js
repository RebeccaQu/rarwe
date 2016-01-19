import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: 'http://json-api.rockandrollwithemberjs.com'
});
