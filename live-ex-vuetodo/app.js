const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [{
        text: "Learn PHP",
        done: false
      },
      {
        text: "Learn HTML",
        done: true
      }, {
        text: "Learn VUE",
        done: true
      }, {
        text: "Learn SASS",
        done: false
      }, {
        text: "Learn JS",
        done: false
      }

    ],
    completedTasks: [],
    deletedTasks: []
  },
  methods: {
    addTask(e) {
      console.log('Adding a new task');
      console.log(this.newTask);

      this.tasks.unshift({
        text: this.newTask,
        done: false
      })
      this.newTask = ''
      console.log(e);

    },
    removeTask(i) {
      console.log('Removing task?', i);
      this.deletedTasks.unshift(this.tasks[i])
      this.tasks.splice(i, 1)

    },
    markAsDone(i) {
      const currentTask = this.tasks[i]
      console.log(currentTask);
      // Inserire task corrente nella nuova array di task completate
      this.completedTasks.push(currentTask)
      currentTask.done = true
      // Rinuoverla dalla lista di tasks da completare
      this.tasks.splice(i, 1)

    },
    restoreTask(i) {

      this.tasks.unshift(this.completedTasks[i])

      this.completedTasks.splice(i, 1)
    },
    restoreFromTrash(i) {

      this.tasks.unshift(this.deletedTasks[i])

      this.deletedTasks.splice(i, 1)
    },
    emptyBin() {
      const deleteConfimation = confirm('Are you sure you want to delete all tasks? [y/n]')
      //console.log(deleteConfimation);

      if (deleteConfimation) {
        this.deletedTasks = []
      }
    }
  }
})