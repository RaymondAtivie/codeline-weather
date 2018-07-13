<template>
	<div class="card pointer" :class="{'shadow hovered': hovered}" @mouseenter="hovered=true" @mouseleave="hovered=false" @click="gotoDetails">
		<div class="card-body d-flex">

			<h5 v-if="showDay" class="card-title my-3 text-center" style="color: red">
				{{dayName}}
				<div style="font-size: 1rem; color: silver;" class="text-center">
					{{info.applicable_date}}
				</div>
			</h5>

			<img class="w-25" v-if="loaded && !hasError" :src="'https://www.metaweather.com/static/img/weather/'+info.weather_state_abbr+'.svg'" />

			<h5 class="card-title my-3" style="color: red">
				{{city}}
			</h5>

			<template v-if="hasError">
				<i class="fa fa-times fa-4x" style="color: red"></i>
			</template>

			<template v-else-if="loaded">
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
		</div>
	</div>
</template>

<script>
import Api from './../../api/api.js';

export default {
	props: {
		city: {
			type: String,
		},
		woeid: {
			type: [Number, String],
		},
		dayData: {
			type: [Object, Boolean],
			default: false,
		},
		showDay: {
			type: Boolean,
			default: false,
		},
		noLink: {
			type: Boolean,
			default: false,
		}
	},
	data(){
		return {
			hovered: false,
			info: {},
			loaded: true,
			hasError: false,
		    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		}
	},
	computed: {
		dayName(){
			var d = new Date(this.info.applicable_date);
			return this.days[d.getDay()];
		}
	},
	created(){
		if(this.dayData){
			this.info = this.dayData;
			return;
		}

		this.loaded = false;
		Api.getWeatherById(this.woeid)
			.then(data => {
				this.info = data;
			})
			.catch(error => {
				this.hasError = true;
			})
			.then(() => {
				this.loaded = true;
			})
	},
	methods: {
		gotoDetails(){
			if(this.noLink){
				return;
			}

			this.$router.push({
				path: "/weather/"+this.woeid,
			});
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

