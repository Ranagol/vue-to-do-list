new Vue({
  el: '#app',
  data: {
    task: '',
    randomText: 'random text',
    tasks: [
      {task: 'do laundry', completed: false},
      {task: 'do housework', completed: false},
    ],

  },
  methods: {
    createTask(){
      this.tasks.unshift({
        task: this.task, completed: false
      });
    },

    removeTask(task){
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }
});