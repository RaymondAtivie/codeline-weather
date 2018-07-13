<template>
	<div>
		<div class="row mt-5">
			<div class="col-md-12">
				<search-bar></search-bar>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-4 mb-4" v-for="city in cities" :key="city">
				<wheather :key="city" :city="city"></wheather>
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
			cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'],
		}
	},
}
</script>

