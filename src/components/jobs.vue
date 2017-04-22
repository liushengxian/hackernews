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
	let topList = [];
	let topData = [];

	let readData = ()=>{
		for (var i = 0; i < topList[0].length&&i<20; i++) {
			store.getItem(topList[0][i],(data)=>{
				topData.push(data);
			//异步的顺序可能会不一致？
		});
		};
	};

	module.exports = {
		mounted: function(){
			store.getJobStories((data)=>{
				topList.push(data);
				//data is an object here!
				readData();
			});
		},
		data: function(){

			return{
				testData: 'Hello',
				newsList: topList,
				newsData: topData
			}
		}
	};

</script>