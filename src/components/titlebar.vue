<template>
	<div class="banner">
		<img src="favicon.ico" width="18" height="18">
		<h2>Hacker News</h2>
		<router-link to="/new">new</router-link>|
		<router-link to="/top">top</router-link>|
		<router-link to="/show">show</router-link>|
		<router-link to="/ask">ask</router-link>|
		<router-link to="/jobs">jobs</router-link>
	</div>
</template>

<script>

	export default{
		//do nothing.
	}
</script>

<style src="./titlebar.less" lang="less" scoped></style>