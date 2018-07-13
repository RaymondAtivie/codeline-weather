<template>
	<div class="card pointer" :class="{'shadow hovered': hovered}" @mouseenter="hovered=true" @mouseleave="hovered=false" @click="gotoDetails">
		<div class="card-body d-flex">

			<img class="w-25" v-if="loaded" :src="'https://www.metaweather.com/static/img/weather/'+info.weather_state_abbr+'.svg'" />

			<h5 class="card-title my-3" style="color: red">{{city}}</h5>

			<template v-if="loaded">
				<h6 class="card-subtitle mb-2 text-muted">{{Math.round(info.the_temp)}} &deg;C</h6>

				<div class="row w-100">
					<div class="col text-center">
						<div>minimum</div>
						<div class="small-temp text-muted">{{Math.round(info.min_temp)}} &deg;C</div>
					</div>
					<div class="col text-center">
						<div>maximum</div>
						<div class="small-temp text-muted">{{Math.round(info.max_temp)}} &deg;C</div>
					</div>
				</div>
			</template>

			<template v-else>
				<i class="fa fa-spin fa-circle-o-notch fa-4x" style="color: #6c757d"></i>
			</template>

			<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->

			<!-- <a href="#" class="card-link">Card link</a> -->

			<!-- <a href="#" class="card-link">Another link</a> -->
		</div>
	</div>
</template>

<script>
import Api from './../../api/api.js';

export default {
	props: {
		city: {
			type: String,
			required: true,
		}
	},
	data(){
		return {
			hovered: false,
			info: {},
			loaded: false,
		}
	},
	created(){
		Api.getWeatherForCity(this.city)
			.then(data => {
				console.log(data);
				this.info = data;
				this.loaded = true;
			})
	},
	methods: {
		gotoDetails(){
			this.$router.push({
				name: "DetailPage",
				params: {
					woeid: this.info.woeid
				}
			})
		}
	}
}
</script>

<style scoped>
	.card{
		transition: all 0.2s;
	}
	.card.hovered{
		transform: scale(1.02);
	}
	.card-body {
		flex-direction: column;
		min-height: 300px;
		justify-content: center;
		align-items: center;
	}
	.card-subtitle{
		font-size: 3rem;
	}
	.small-temp{
		font-size: 1.5rem;
	}
</style>

