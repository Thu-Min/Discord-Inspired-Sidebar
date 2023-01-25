import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBoltLightning, faFireFlameCurved, faLightbulb, faPlus, faPoo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPoo, faBoltLightning, faPlus, faFireFlameCurved, faLightbulb)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
