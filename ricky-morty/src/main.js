import Vue from 'vue'
import App from './App.vue'
import "@fontsource/poppins"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/900.css"

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
