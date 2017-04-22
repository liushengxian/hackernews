import Vue from 'vue'
import App from './app.vue';
import VueRouter from 'vue-router';

import News from './components/news.vue';
import Top from './components/top.vue';
import Show from './components/show.vue';
import Ask from './components/ask.vue';
import Jobs from './components/jobs.vue';
import Item from './components/item.vue';


import './index.less'
import './assets/favicon.ico'
//import components from './components/'

Vue.use(VueRouter);

console.log('hello my hackernews!');

const routes = [
{path:'/',component: News},
{path:'/new',component: News},
{path:'/top',component: Top},
{path:'/show',component: Show},
{path:'/ask',component: Ask},
{path:'/jobs',component: Jobs},
{path:'/item/:id',component: Item}
];

const router = new VueRouter({
	routes
});


new Vue({
	el: '#app',
	render: h => h(App),
	router
});


