import Vue from 'vue'
import App from './app.vue';
import VueRouter from 'vue-router';

import News from './components/newsview.vue';

import './index.less'
import './assets/favicon.ico'
//import components from './components/'

Vue.use(VueRouter)

Vue.component('my-news',News);

// const News = {template: '<div>Hello Hacker News!</div>'};
const Comments = {template: '<div>Hello Comments</div>'};
const Show = {template: '<div>Hello Show</div>'};
const Ask = {template: '<div>Hello Ask</div>'};
const Jobs = {template: '<div>Hello Jobs</div>'};
const Ask2 = {template: '<div>Hello Ask2</div>'};

const routes = [
{path:'/new',component: Vue.component('my-news')},
{path:'/comments',component: Comments},
{path:'/show',component: Show},
{path:'/ask',component: Ask},
{path:'/jobs',component: Jobs,children:[{
	path:'/misanya',
	component: Ask2
}]},
]

const router = new VueRouter({
	routes
})


new Vue({
	el: '#app',
	router,
	render: h => h(App)
});


