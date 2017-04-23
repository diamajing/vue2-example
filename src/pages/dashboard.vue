<template>
	<div class="dashboard">
		<div>Dashboard</div>
		<p>{{ message }}</p>
	</div>
</template>
<style>
	.dashboard {
		background-color: #00ff00;
	}
</style>
<script>

	export default{
		data(){
			return {
				message : "Second."
			};
		},
		components: {}
	};
</script>
