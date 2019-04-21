<template>
  <div :class="{active: visible}"
  		 id="location-selector">
	 <button v-on:click="$emit('hide')">x</button>
	 <div id="world-map"
	 		ref="world_map"
			@click="changeLocation">
	 		<img :src="require('@/assets/world_map.png')" />
			<div id="location-indicator" :style="locatorStyle">⚬</div>
			<resize-observer @notify="updateSize" />
	 </div>
  </div>
</template>

<script>
import axios from 'axios'

import 'vue-resize/dist/vue-resize.css'
import { ResizeObserver } from 'vue-resize'

export default {
  name: "LocationSelector",
  components: {
	  ResizeObserver
  },
  props: {
	  visible: {
		  type: Boolean,
		  default: false
	  },
	  location: Object
 },
  data() {
	  return {
		  mapWidth: 0,
		  mapHeight: 0
	  }
  },
  mounted() {
	  this.updateSize()
  },
  computed: {
	  locatorStyle: function () {
		  var latitude = this.location.latitude
		  var longitude = this.location.longitude
		  let w = this.mapWidth
		  let h = this.mapHeight
		  var x = (w/2) * ((latitude - 10)/180) + (w/2)
		  var y = (h/2) * ((longitude)/ -90) + (h/2)

		  return {paddingLeft: x+'px',paddingTop:y+'px'}
	  },
  },
	methods: {
		changeLocation: function (event) {
			var x = event.offsetX
			var y = event.offsetY
			let w = this.$refs.world_map.clientWidth
 		   let h = this.$refs.world_map.clientHeight

			var latitude = (((x / (w/2)) - 1) * 180) + 10
			if (latitude > 180){
				latitude = -180 + (latitude - 180)
			}
			var longitude = ((y / (h/2)) - 1) * -90

			this.location.latitude = latitude
			this.location.longitude = longitude
			this.location.name = '...'
			//this.$emit('changeLocation', this.location)

			this.fetchCity(latitude,longitude)
			//this.$emit('hide')
		},
		fetchCity: function (latitude,longitude) {
			var proxy = 'https://cors-anywhere.herokuapp.com/'
			var api = 'https://api.3geonames.org/'
			var call = proxy + api + longitude + ',' + latitude + '.json'

			axios
	      .get(call)
			.then(response => {
				// no changeLocation event
				if (Object.entries(response.data.major.city).length === 0) {
					this.location.name = this.formatLatLong(this.location.longitude,this.location.latitude)
				} else {
					this.location.name = response.data.major.city
					this.location.longitude = parseFloat(response.data.major.latt)
					this.location.latitude = parseFloat(response.data.major.longt)
				}
				//this.$emit('changedName',this.location.name)
				this.$emit('changedLocation', this.location)
			})
			.finally(this.$emit('hide'))
		},
		formatLatLong(latitude, longitude) {
			var north_south = latitude > 0 ? '° N' : '° S'
			var east_west = longitude > 0 ? '° E' : '° W'
			return Math.abs(latitude.toFixed(4)) + north_south + ', ' + Math.abs(longitude.toFixed(4)) + east_west
		},
		updateSize: function () {
			this.mapWidth = this.$refs.world_map.clientWidth
	 	   this.mapHeight = this.$refs.world_map.clientHeight
		}
	}
};
</script>

<style scoped>

#location-selector {
	background-color: lightGrey;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 100%;
	transition: top 0.8s linear;
}

#world-map {
	width: 100%;
	margin: 0;
	padding: 0;
	position: relative;
}

#world-map img {
	width: 100%;
}

#location-selector.active {
	top: 0%;
}

#location-indicator {
	position: absolute;
	cursor: default;
	height: 10px;
	width: 10px;
	font-size: 6pt;
	line-height: 10px;
	text-align: center;
	margin-left: -5px;
	margin-top: -5px;
	top: 0;
	left: 0;
}

</style>
