<style src="./item.less" lang="less" scoped></style>
<style>
	.no-comments{
		background-color: pink;
		padding: 5px 25px;
		margin-top: 25px;
		text-align: center;
	}
</style>
<template>
	<div class="news-item">
		<h2 v:if='detail[0]'>{{detail[0].title}}</h2>
		<h3>{{detail[0].score}} points by {{detail[0].by}} | {{detail[0].descendants}} comments</h3>
		<h3>{{new Date(detail[0].time*1000).toLocaleString()}}</h3>
		<p v:if='detail[0]' class="summary" v-html="detail[0].text"></p>

		<div v:if='!detail[0].descendants' class="no-comments">No Comments Now!</div>
		<div v:if='detail[0].descendants'>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>

	let store = require('../store/store.js');
	let itemDetail = []; 
	let commentsList = [];

	let readComments = function(){
		if(itemDetail[0]&&itemDetail[0].kids){
			for (var i = 0; i < itemDetail[0].kids.length; i++) {
				store.getItem(itemDetail[0].kids[i],(data)=>{
					commentsList.push(data);
				});
			}	
		}
	};

	console.log(this.$route);

	export default{
		mounted: function(){
			store.getItem(this.$route.params.id,(data)=>{
				itemDetail.push(data);
				readComments();
			});
		},
		//do nothing.
		data: function(){
			return{
				hello: 'hello misanya',
				detail: itemDetail,
				comments: commentsList,
			}
		}
	}
</script>
