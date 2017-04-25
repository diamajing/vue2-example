<template>
	<div>
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Sex</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="person in people">
				<td>{{ person.name  }}</td>
				<td>{{ person.age  }}</td>
				<td>{{ person.sex  }}</td>
			</tr>
			</tbody>
		</table>
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
				people: [{
					name: 'Jack',
					age: 30,
					sex: 'Male'
				}, {
					name: 'Bill',
					age: 26,
					sex: 'Male'
				}, {
					name: 'Tracy',
					age: 22,
					sex: 'Female'
				}, {
					name: 'Chris',
					age: 36,
					sex: 'Male'
				}]
			};
		},
		components: {
		},
		methods : {
		}
	};
</script>
