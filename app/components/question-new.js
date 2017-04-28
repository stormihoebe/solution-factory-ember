import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionShowing: false,
  actions: {
    newQuestionShow(){
      this.set('newQuestionShowing', true);
    },
    saveQuestion(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        notes: this.get('notes'),
      };
      this.set('newQuestionShowing', false);
      this.sendAction('saveQuestion', params);
    },
  }
});
