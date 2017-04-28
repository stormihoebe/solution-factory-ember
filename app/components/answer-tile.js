import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm('Are you sure you want to delete this solution?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
