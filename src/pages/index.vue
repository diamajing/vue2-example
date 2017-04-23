<template>
	<div>
		<div>Index</div>
		<p>{{ message }}</p>
		<ul>
			<li v-for="todo in arr">
				{{todo.text}}
			</li>
		</ul>
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
				message: 'v-for',
				arr: [
					{ text: 'Learn JavaScript' },
					{ text: 'Learn Vue' },
					{ text: 'Build something awesome' }
				]
			};
		},
		components: {}
	};
</script>
