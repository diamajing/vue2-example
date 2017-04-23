<template>
	<div class="dashboard">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<h1 style="line-height: 36px; color: #20A0FF">{{ message }}</h2>
			</div>
			<div v-for="article in articles" class="text item">
				{{article.title}}
			</div>
		</el-card>
	</div>
</template>
<style>
	.dashboard {
		/*background-color: #00ff00;*/
		border: 1px #000000 solid;
	}
</style>
<script>

	import movieRes from "src/resource/test/movie";

	export default{
		data(){
			return {
				message : "电影排行榜",
				articles : []
			};
		},
		components: {},
		mounted: function() {
			this.movie();
		},
		methods:{
			movie : function () {
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
					headers: {
					},
					emulateJSON: true
				}).then(function(response) {
					// 这里是处理正确的回调

					this.articles = response.data.subjects;
					// this.articles = response.data["subjects"] 也可以

				}, function(response) {
					// 这里是处理错误的回调
					console.log(response);
				});
			},
		}
	};
</script>
