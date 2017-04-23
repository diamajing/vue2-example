<template>
	<div class="home">
		<div>Index</div>
		<p>{{ message }}</p>
	</div>
</template>
<style>
	.home {
		background-color: #ff0000;
	}
</style>
<script>
	import first from "../component/firstcomponent";

	export default{
		data(){
			return {
				message: 'first',
			};
		},
		components: {
			first
		}
	};
</script>
