/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import axios from 'axios'
import moment from 'moment'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-143423314-1'
})
import Jazzicon from 'vue-jazzicon'

Vue.component('jazzicon', Jazzicon) // or Vue.component(Jazzicon.name, Jazzicon);
// import Plugin from './plugins/Plugin'

Vue.config.productionTip = false
// Vue.use(Plugin)

Vue.prototype.moment = moment
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(ArgonDashboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
