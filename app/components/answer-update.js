import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerShowing: false,
  actions: {
    updateAnswerShow(){
      this.set('updateAnswerShowing', true);
    },
    updateAnswer(answer){
      var params = {
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateAnswerShowing', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
