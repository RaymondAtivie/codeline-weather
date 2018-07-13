import axios from 'axios';

class Api {

	constructor() {
        axios.defaults.baseURL = "http://localhost/wheather-api/wheather.php";

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
				});
		});
	}

	getWeatherById(woeid){
		return new Promise((resolve, reject) => {
			axios.get("?command=location&woeid="+woeid)
				.then(({data}) => {
					let wheather = data.consolidated_weather[0];
					resolve(wheather);
				});
		});
	}

	getWeatherForCity(location){
		return new Promise((resolve, reject) => {
			this.findCityId(location)
				.then(woeid => {
					this.getWeatherById(woeid)
						.then(wheather => {
							wheather.woeid = woeid;
							resolve(wheather);
						});
				});
		});
	}

}

export default new Api();
