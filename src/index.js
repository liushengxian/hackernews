import Vue from 'vue'
import App from './app.vue';
import VueRouter from 'vue-router';

import News from './components/news.vue';
import Comments from './components/comments.vue';
import Show from './components/show.vue';
import Ask from './components/ask.vue';
import Jobs from './components/jobs.vue';


import './index.less'
import './assets/favicon.ico'
//import components from './components/'

Vue.use(VueRouter);

console.log('hello my hackernews!');

const routes = [
{path:'/',component: News},
{path:'/new',component: News},
{path:'/comments',component: Comments},
{path:'/show',component: Show},
{path:'/ask',component: Ask},
{path:'/jobs',component: Jobs}
];

const router = new VueRouter({
	routes
});


new Vue({
	el: '#app',
	render: h => h(App),
	router
});


