<template>
	<div class="main-container">
		<titlebar></titlebar>
		<h2 class="dn">Hello Vuejs!</h2>
		<router-view></router-view>
	</div>
</template>

<script>
	import titlebar from './components/titlebar.vue'

	export default {
		components:{
			titlebar
		}
	}
</script>

<style lang="less" scoped>
	

</style>