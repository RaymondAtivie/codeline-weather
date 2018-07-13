import axios from 'axios';

class Api {

	constructor() {
        axios.defaults.baseURL = "http://localhost/wheather-api/wheather.php";

        this.axios = axios;
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
							resolve(wheather);
						});
				});
		});
	}

}

export default new Api();
