<template>
	<div class="home">
		<p>{{ message }}</p>
		<el-row>
			<el-col :span="4">
				<el-input type="text" v-model="message"/>
			</el-col>
			<el-col :span="1">
				<el-button @click="buttonClick">change</el-button>
			</el-col>
		</el-row>
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
				message: 'Hello World!',
			};
		},
		components: {
		},
		methods : {
			buttonClick : function () {
				this.message = "Hello, Vue!";
			}
		}
	};
</script>
