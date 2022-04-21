// Vue js Intro

// Create una nuona istanza dell'oggetto vue

const app = new Vue(
  // Options object
  {
    // el property 
    el: '#app',
    // data object
    data: {
      greetings: 'Hello VueJS',
      text: 'a Progressive framework',
      userName: 'Fabio',
      css_classes: 'text-red bold',
      counter: 0
    },
    methods: {
      /* ES5 */
      saluta: function () {
        return 'Ciao';
      },

      /* ES6 */
      sayHi() {

      },
      incrementCounter() {
        console.log(this);
        this.counter += 1
      }

    }


  }
) 