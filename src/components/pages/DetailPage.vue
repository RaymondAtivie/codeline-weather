<template>
	<div>
		<div class="row mt-5">
			<div class="col-md-4">
				<wheather :city="cityName" :woeid="woeid" noLink></wheather>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-md-12">
				<h3>Other Days</h3>
				<hr />
			</div>
		</div>
		<div class="row mt-2">
			<div class="text-center" v-if="!loaded">
				<i class="fa fa-spin fa-circle-o-notch fa-4x" style="color: #6c757d"></i>
			</div>

			<div class="col-md-3 mb-4" v-for="(day, index) in allInfo.consolidated_weather" :key="index">
				<wheather showDay :dayData="day" noLink></wheather>
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
			woeid: 0,
			loaded: false,
			hasError: false,
			allInfo: [],
		}
	},
	computed: {
		cityName(){
			if(this.allInfo.title){
				return this.allInfo.title;
			}

			return "";
		}
	},
	created(){
		this.woeid = this.$route.params.woeid;

		Api.getAllWeatherById(this.woeid)
			.then(data => {
				this.allInfo = data;
			})
			.catch(error => {
				this.hasError = true;
			})
			.then(() => {
				this.loaded = true;
			})
	}
}
</script>

