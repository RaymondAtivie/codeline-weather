<template>
	<div>
		<div class="row mt-5">
			<div class="col-md-12">
				<search-bar :value="keyword" @searched="searchForThis"></search-bar>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-12">
				<div>
					<i v-if="seaching">Searching for {{keyword}}</i> &nbsp;
				</div>
				<h2>{{cities.length}} results for <span style="color: red">{{resultsKeyword}}</span></h2>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-4 mb-4" v-for="city in cities" :key="city.woeid">
				<wheather :key="city.woeid" :city="city.title" :woeid="city.woeid"></wheather>
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
			keyword: '',
			resultsKeyword: '',
			seaching: false,
			loading: false,
			cities: [],
		}
	},
	methods: {
		searchForThis(keyword){
			this.seaching = true;
			this.keyword = keyword;
			console.log(keyword);
			this.loading = true;

			Api.searchCities(keyword)
				.then(cities => {
					this.cities = cities;
					console.log(this.cities);
				})
				.catch(error => {

				})
				.then(() => {
					this.seaching = false;
					this.resultsKeyword = this.keyword;
				})
		}
	},
	created(){
		let keyword = this.$route.params.keyword;
		this.searchForThis(keyword);
	},
}
</script>

