import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
/* Font Awesome icons*/
/* import the fontawesome core */
import {
  library
} from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import {
  faStar as fasStar
} from '@fortawesome/free-solid-svg-icons'
import {
  faStar as farStar
} from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(fasStar, farStar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* lang Flags component */
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
