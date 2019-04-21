<template>
  <div id="app">
	 <div id="resizable">
	    <WeatherWidget/>
	 </div>
  </div>
</template>

<script>
import WeatherWidget from "./components/WeatherWidget.vue";

export default {
  name: "app",
  components: {
    WeatherWidget
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#resizable {
  border: 2px solid;
  padding: 20px;
  width: 300px;
  resize: both;
  overflow: auto;
  position: relative;
}
</style>
