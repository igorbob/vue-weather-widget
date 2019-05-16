<template>
  <div class="weather-widget">
	  <img :src="icon_src" />
	  <section v-if="errored">
		  ERROR: could not fetch weather data
	  </section>
	  <section v-else>
		  <div v-if="loading"> Loading...</div>
		  <div v-else>
			  It is {{temperature}}°C in <button @click="show_location_selector = true">{{location.name}}</button>
		  </div>
	  </section>
	  <LocationSelector :visible="show_location_selector"
	  						  :location="location"
							  @changedLocation="updateLocation"
							  @changedName="updateName"
	   					  @hide="show_location_selector = false"/>
  </div>
</template>

<script>
import axios from 'axios'
import LocationSelector from './LocationSelector.vue'

export default {
  name: "WeatherWidget",
  components: {
	  LocationSelector
  },
  props: {
    initialLocation: {
		 type: Object,
		 default: () => ({
			 name: 'Amsterdam',
			 latitude: '4.9036',
			 longitude: '52.3680'
		 })
	 }
 },
  data() {
	  return {
		  info: null,
		  loading: true,
		  errored: false,
		  location: this.initialLocation,
		  show_location_selector: false,
		  temperature: null,
		  icon: 'clear-day',
	  }
  },
  computed: {
	  icon_src() {
		  const iconNames = {
			  'clear-day': 'Sun',
			  'clear-night': 'Moon',
			  'rain': 'Cloud-Drizzle',
			  'snow': 'Cloud-Snow-Alt',
			  'sleet': 'Cloud-Hail',
			  'wind': 'Wind',
			  'fog': 'Cloud-Fog',
			  'cloudy': 'Cloud',
			  'partly-cloudy-day': 'Cloud-Sun',
			  'partly-cloudy-night': 'Cloud-Moon'
		  }
		  	name = iconNames[this.icon]
			return require(`@/assets/icons/${name}.svg`)
	  }
  },
	mounted() {
		this.fetchWeatherData()
	},
	methods: {
		fetchWeatherData() {
			const proxy = 'https://cors-anywhere.herokuapp.com'
			const api = 'https://api.darksky.net/forecast'
			const key = '841c8e5705ec8fe6289069e5fc6c679d'
			const longitude = this.location.longitude
			const latitude = this.location.latitude
			const call = `${proxy}/${api}/${key}/${longitude},${latitude}/`

			axios
	      .get(call , {
				params: {
					exclude: '[minutely,hourly,daily,alerts,flags]',
					units: 'si'
				}
			})
			.then(response => this.load(response.data))
			.catch( error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => this.loading = false)
		},
		load(data) {
			this.icon = data.currently.icon
			this.temperature = Math.round(data.currently.temperature)
			this.info = data
		},
		updateLocation (new_location) {
			console.log(new_location)
			this.location = new_location
			this.fetchWeatherData()
		},
		updateName (location_name) {
			this.location.name = location_name
		}
	}
};
</script>

<style scoped>

.weather-widget {
	background-color: skyblue;
	position: relative;
	color: black;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

</style>
