<template>
	<div>
		<div>Index</div>
		<p>{{ message }}</p>
		<ul>
			<li v-for="(todo,index) in arr">
				<first :index="index" :title="todo.text"></first>
			</li>
		</ul>
	</div>
</template>
<style>
	body {
	}
</style>
<script>
	import first from "../component/firstcomponent";

	export default{
		data(){
			return {
				message: 'component',
				arr: [
					{ text: 'Learn JavaScript' },
					{ text: 'Learn Vue' },
					{ text: 'Build something awesome' }
				]
			};
		},
		components: {
			first
		}
	};
</script>
