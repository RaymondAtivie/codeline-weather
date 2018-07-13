import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage';
import SearchPage from '@/components/pages/SearchPage';
import DetailPage from '@/components/pages/DetailPage';
import PageNotFound from '@/components/pages/PageNotFound';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: HomePage,
		},
		{
			path: '/search/:keyword',
			name: 'SearchPage',
			component: SearchPage,
		},
		{
			path: '/weather/:woeid',
			name: 'DetailPage',
			component: DetailPage,
		},
		{ path: "*", component: PageNotFound }
	]
});
