<template>
	<div id="app">
		<nav class="navbar navbar-light bg-light justify-content-center shadow-sm">
			<a class="navbar-brand" :to="{name: 'HomePage'}">Codebase Weather</a>
		</nav>
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
