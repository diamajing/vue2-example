<template>
	<div>
		<ul class="pagination">
			<li v-for="n in pageCount">
				<a href="javascripit:void(0)" v-bind:class="activeNumber === n ? 'active' : ''">{{ n }}</a>
			</li>
		</ul>
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
				activeNumber: 1,
				pageCount: 10
			};
		},
		components: {
		},
		methods : {
		}
	};
</script>
