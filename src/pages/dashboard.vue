<template>
	<div class="dashboard">
		<p>{{ message }}</p>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
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
			movie1 : function () {
				movieRes(this).get({"count":"10"}).then(function (data) {
					this.articles = data.subjects;
				}.bind(this));
			}
		}
	};
</script>
