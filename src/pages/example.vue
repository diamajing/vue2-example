<template>
	<div>
		<p><input type="text" v-model="message"></p>
		<p>
			<!--click事件直接绑定一个方法-->
			<button v-on:click="greet">Greet</button>
		</p>
		<p>
			<!--click事件使用内联语句-->
			<button v-on:click="say('Hi')">Hi</button>
		</p>
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
				message: 'Hello, Vue.js!'
			};
		},
		components: {
		},
		methods: {
			greet: function() {
				// // 方法内 `this` 指向 vm
				this.message = 'greet';
			},
			say: function(msg) {
				this.message = msg;
			}
		}
	};
</script>
