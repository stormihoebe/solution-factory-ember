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
          return answer.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
