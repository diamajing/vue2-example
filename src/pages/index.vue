<template>
	<div>
		<div>Index</div>
		<p v-if="type==='0'">{{ message }}</p>
		<p v-else>other</p>
		<input v-model="type"></input>
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
				message: 'Hello World!',
				type : '0'
			};
		},
		components: {}
	};
</script>
