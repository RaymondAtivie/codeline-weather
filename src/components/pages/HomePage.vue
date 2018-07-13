<template>
	<div>
		<!-- <h1>Home Page</h1>
		<p>Testing</p> -->

		<div class="row mt-5">
			<div class="col-md-4 mb-4" v-for="city in cities" :key="city">
				<wheather :key="city" :city="city"></wheather>
			</div>
		</div>

	</div>
</template>

<script>
import Api from './../../api/api.js';
import Wheather from './../widget/wheather';
export default {
	components: {
		Wheather,
	},
	data(){
		return {
			cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'],
		}
	},
	mounted(){
		Api.getWeatherForCity(this.cities[0])
			.then(data => {
				console.log(data);
			})
	}
}
</script>

