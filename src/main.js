import Vue from 'vue';
import App from './App.vue';
import {
  Map,
  TileLayer,
  OsmSource,
  Geoloc,
  Feature,
  MultiPointGeom,
} from 'vuelayers';
import 'vuelayers/lib/style.css'; // needs css-loader
import router from './router/index';

// Vue.use(VueLayers);
Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(Geoloc);
Vue.use(Feature);
Vue.use(MultiPointGeom);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

/*new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});
*/
