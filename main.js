new Vue({
  el: '#app',
  data: {
    task: '',
    randomText: 'TO-DO',
    tasks: [
      /*{id: 1, task: 'do laundry', completed: false},
      {id: 2, task: 'do housework', completed: false},*/
    ],

  },
  methods: {
    createTask(){
      this.tasks.unshift({
        task: this.task, 
        //completed: false
      });
      this.task = '';
      //https://www.w3schools.com/jsref/prop_win_localstorage.asp
      localStorage.setItem('tasks', JSON.stringify(this.tasks));//with this, we are also storing our tasks array in our browsers localstore(/Inspect/Application/Storage/Local storage), underr key 'tasks'

    },

    removeTask(task){
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    created(){
      this.tasks = JSON.parse(localStorage.getItem('tasks'));//when the page is created, check if we have tasks in local store, and get them to our tasks in data. OR If there is no tasks in the local store, then use an empty array.
    }
  }
});