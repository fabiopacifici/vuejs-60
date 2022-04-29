const app = new Vue({
  el: '#app',
  data: {
    number: '',
    my_data: null,
    pc_number: null,
    user_number: null

  },
  methods: {},
  mounted() {

    // Per prendere il this da dentro una funzione anonima (non arrow function) 
    const self = this
    /* Prima chiamata axios 
    con funziona aninima (non arrow) il this fa riferimento all'oggetto window e non a vue
    */
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(function (response) {
        console.log(self);
        console.log(response);
        self.pc_number = response.data.response
      })

    /* Seconda chiamata axios 
    Con arrow function this é uguale all'istanza vue*/
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(response => {
        console.log(this);
        console.log(response);
        //this.number = response.data.response
        this.my_data = response.data
        this.user_number = response.data.response
      })

  }
})