import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
  return this.store.findRecord('question', params.question_id);
},

actions: {
  update(question, params) {
    Object.keys(params).forEach(key=>{
      if(params[key]!==undefined){
        question.set(key, params[key]);
      }
    });
    question.save();
  },
    delete(question){
      if(confirm("Are you sure you want to delete this question?")){
        var answer_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function(){
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    }
  }
});
