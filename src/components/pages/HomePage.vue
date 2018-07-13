<template>
	<div>
		<div class="row mt-5">
			<div class="col-md-12">
				<search-bar></search-bar>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-4 mb-4" v-for="city in cities" :key="city.woeid">
				<wheather :key="city.woeid" :city="city.name" :woeid="city.woeid"></wheather>
			</div>
		</div>

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

