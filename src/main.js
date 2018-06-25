// Import Vue
import Vue from 'vue';
import App from './app';
import Routes from './routes/routes';
import store from './store';
import VueFire from 'vuefire';
import VueFilters from 'vue2-filters';
import '@/service/firebase';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.haoe', // App bundle ID
    name: 'Framework7', // App name
    theme: 'md', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
