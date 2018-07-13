<template>
	<div class="text-center mt-5">
		<h1>404</h1>
		<h2>Page Not Found</h2>
	</div>
</template>

<script>
import Api from './../../api/api.js';
import Wheather from './../widget/wheather';
import SearchBar from './../widget/searchBar';
export default {
	components: {
		Wheather,
		SearchBar,
	},
	data(){
		return {
			cityNames: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'],
			cities: [],
		}
	},
	created(){
		this.cityNames.forEach(cityName => {
			Api.findCityId(cityName)
				.then(woeid => {
					this.cities.push({
						name: cityName,
						woeid: woeid
					});
				})
		})
	}
}
</script>

