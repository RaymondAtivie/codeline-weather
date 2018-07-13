<template>
	<div id="app">
		<nav class="navbar navbar-light bg-light justify-content-center shadow-sm">
			<a class="navbar-brand pointer" @click="goHome">Codeline Weather App</a>
		</nav>
		<div class="container">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
	  goHome(){
		  this.$router.push({name: 'HomePage'});
	  }
  }
}
</script>

<style>
.pointer{
	cursor: pointer;
}
</style>
