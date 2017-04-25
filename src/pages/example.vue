<template>
	<div class="home">
		<h1>Hello, Vue.js!</h1>
		<h1 v-show="yes">Yes!</h1>
		<h1 v-show="no">No!</h1>
		<h1 v-show="age >= 25">Age: {{ age }}</h1>
		<h1 v-show="name.indexOf('keep') >= 0">Name: {{ name }}</h1>
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
				age: 24,
				name: 'keepfool'
			};
		},
		components: {
		},
		methods : {
		}
	};
</script>
