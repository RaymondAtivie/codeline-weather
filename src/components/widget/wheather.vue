<template>
	<div class="card">
		<div class="card-body d-flex">
			<h5 class="card-title">Card title</h5>

			<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>

			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

			<a href="#" class="card-link">Card link</a>

			<a href="#" class="card-link">Another link</a>
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
			info: {}
		}
	},
	created(){
		Api.getWeatherForCity(this.city)
			.then(data => {
				console.log(data);
				this.info = data;
			})
	}
}
</script>

<style scoped>
	.card-body {
		flex-direction: column;
		min-height: 300px;
		justify-content: center;
		align-items: center;
	}
</style>

