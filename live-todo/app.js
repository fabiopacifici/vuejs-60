const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      'Learn Vuejs',
      'Learn PHP',
      'Learn SASS',
      'Learn SQL'

    ]
  },
  methods: {
    addTask(e) {
      console.log('Adding a new task');
      console.log(this.newTask);
      this.tasks.unshift(this.newTask)
      this.newTask = ''
      console.log(e);

    },
    removeTask(i) {
      console.log('Removing task?', i);
      this.tasks.splice(i, 1)
    }
  }
})