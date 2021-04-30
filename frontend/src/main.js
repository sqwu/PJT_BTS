import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';
import VueMoment from 'vue-moment'
Vue.use(VueMoment);
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
Vue.config.productionTip = false;

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt, faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt, faChevronLeft,faChevronRight, faLink,faBold,faItalic
  ,faStrikethrough,faUnderline,faCode,faFileCode,faParagraph,faListOl,faListUl,
  faQuoteLeft,faWindowMinimize,faUndo,faRedo,faImage,
}from '@fortawesome/free-solid-svg-icons';
library.add(faPencilAlt,faChevronLeft,faChevronRight,faLink,faBold,faItalic,
  faStrikethrough,faUnderline,faCode,faFileCode,faParagraph,faListOl,
  faListUl,faQuoteLeft,faWindowMinimize,faUndo,faRedo,faImage,
  faTrashAlt,faCalendarAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Modal',VueModal);
new Vue({
  router,
  store,
  vuetify : new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
