import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionShowing: false,
  actions: {
    updateQuestionShow(){
      this.set('updateQuestionShowing', true);
    },
    update(question){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionShowing', false);
      this.sendAction('update', question, params);
    }
  }
});
