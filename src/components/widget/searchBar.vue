<template>
	<form @submit.prevent="gotoSearch">
		<div class="input-group mb-3">
			<input type="text" v-model="searchString" class="form-control" placeholder="City name e.g Lagos" aria-label="City name" aria-describedby="button-addon2">
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" :disabled="searchString.length < 1" type="submit" id="button-addon2">Search</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: "",
		}
	},
	data(){
		return {
			searchString: "",
		}
	},
	methods: {
		gotoSearch(){
			this.$emit("searched", this.searchString.toLowerCase());

			this.$router.push({
				name: "SearchPage",
				params: {
					keyword: this.searchString.toLowerCase()
				}
			});
		}
	},
	created(){
		this.searchString = this.value;
	}
}
</script>
