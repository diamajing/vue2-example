<template>
	<div class="home">
		<h1>Hello, Vue.js!</h1>
		<h1 v-if="yes">Yes!</h1>
		<h1 v-if="no">No!</h1>
		<h1 v-if="age >= 25">Age: {{ age }}</h1>
		<h1 v-if="name.indexOf('jack') >= 0">Name: {{ name }}</h1>
	</div>
</template>
<style>
	/*.home {
		background-color: #ff0000;
	}*/
</style>
<script>
	export default{
		data(){
			return {
				yes: true,
				no: false,
				age: 28,
				name: 'keepfool'
			};
		},
		components: {
		},
		methods : {
		}
	};
</script>
