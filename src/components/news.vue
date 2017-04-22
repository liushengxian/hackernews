<style src="./common.less" lang="less"></style>
<style lang="less" scoped>
</style>
<template>
	<div>
		<ol class="news-list">
			<li v-for='item in newsData' class="news-item">
				<a v-if='item.url' v-bind:href='item.url'><span>{{item.title}}</span></a>
				<a v-if='!item.url' v-bind:href='"/#/item/"+item.id'><span>{{item.title}}</span></a>
				<p>
					<span v-if='(item.score>1)'>{{item.score}} points by {{item.by}} </span>
					<span v-if='(item.score<=1)'>{{item.score}} point by {{item.by}} </span>
					<span> {{new Date(item.time*1000).toLocaleString()}}</span>
				</p>
			</li>
		</ol>
	</div>
</template>

<script>
	let store = require('../store/store.js');
	let newsList = [];
	let newsData = [];



	let readData = ()=>{
		for (var i = 0; i < newsList[0].length&&i<20; i++) {
			store.getItem(newsList[0][i],(data)=>{
				newsData.push(data);
			//异步的顺序可能会不一致？
		});
		};
	};

	module.exports = {
		mounted: function(){
			store.getNewStories((data)=>{
				newsList.push(data);
				readData();
			});
		},
		data: function(){
			return{
				testData: 'Hello',
				newsList: newsList,
				newsData: newsData
			}
		}
	};

</script>