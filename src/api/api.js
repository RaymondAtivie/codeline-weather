import axios from 'axios';
import CONFIG from './../config';

class Api {

	constructor() {
        axios.defaults.baseURL = CONFIG.API_URL;

        this.axios = axios;
	}

	searchCities(keyword){
		return new Promise((resolve, reject) => {

			axios.get("?command=search&keyword="+keyword)
				.then(({data}) => {
					let cities = data;
					resolve(cities);
				});
		});
	}

	findCityId(city){
		return new Promise((resolve, reject) => {

			axios.get("?command=search&keyword="+city)
				.then(({data}) => {
					let city = data[0];
					if(city){
						resolve(city.woeid);
					}
					reject(false);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	getWeatherById(woeid){
		return new Promise((resolve, reject) => {
			axios.get("?command=location&woeid="+woeid)
				.then(({data}) => {
					let wheather = data.consolidated_weather[0];
					if(wheather){
						resolve(wheather);
					}else{
						reject(false);
					}
				})
				.catch(error => {
					reject(error);
				})
		});
	}

	getAllWeatherById(woeid){
		return new Promise((resolve, reject) => {
			axios.get("?command=location&woeid="+woeid)
				.then(({data}) => {
					let wheather = data;
					if(wheather){
						resolve(wheather);
					}else{
						reject(false);
					}
				})
				.catch(error => {
					reject(error);
				})
		});
	}

}

export default new Api();
