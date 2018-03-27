
import Vue from 'vue'
import App from './App'
import routes from './router'

import Router from 'vue-router'

import FastClick from 'fastclick'

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
