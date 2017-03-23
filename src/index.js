import Vue from 'vue'
import App from './app.vue';
import VueRouter from 'vue-router';

import './index.less'
import './assets/favicon.ico'
//import components from './components/'
// var less = require('less')

console.log('hello my hackernews!');

// document.write('hello');

// Vue.use(VueRouter)

// const router = new VueRouter({
// 	routes
// })

new Vue({
	el: '#app',
	render: h => h(App)
});


