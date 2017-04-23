<template>
	<div>
		<div>Index</div>
		<p>{{ message }}</p>
		<input v-model="message"></input>
	</div>
</template>
<style>
	body {
	}
</style>
<script>
	export default{
		data(){
			return {
				message: 'Hello World!'
			};
		},
		components: {}
	};
</script>
