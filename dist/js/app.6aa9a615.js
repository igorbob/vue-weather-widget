(function(t){function e(e){for(var o,r,c=e[0],l=e[1],u=e[2],d=0,f=[];d<c.length;d++)r=c[d],i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-weather-widget/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"0405":function(t,e,n){t.exports=n.p+"img/Cloud-Sun.edcd03a0.svg"},1608:function(t,e,n){t.exports=n.p+"img/Cloud-Moon.3d959590.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"resizable"}},[n("WeatherWidget")],1)])},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"weather-widget"}},[n("img",{attrs:{src:t.icon_src}}),t.errored?n("section",[t._v("\n\t\t  ERROR: could not fetch weather data\n\t  ")]):n("section",[t.loading?n("div",[t._v(" Loading...")]):n("div",[t._v("\n\t\t\t  It is "+t._s(t.temperature)+"°C in "),n("button",{on:{click:function(e){t.show_location_selector=!0}}},[t._v(t._s(t.location.name))])])]),n("LocationSelector",{attrs:{visible:t.show_location_selector,location:t.location},on:{changedLocation:t.updateLocation,changedName:t.updateName,hide:function(e){t.show_location_selector=!1}}})],1)},c=[],l=n("bc3a"),u=n.n(l),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{active:t.visible},attrs:{id:"location-selector"}},[o("button",{on:{click:function(e){return t.$emit("hide")}}},[t._v("x")]),o("div",{ref:"world_map",attrs:{id:"world-map"},on:{click:t.changeLocation}},[o("img",{attrs:{src:n("a7c5")}}),o("div",{style:t.locatorStyle,attrs:{id:"location-indicator"}},[t._v("⚬")]),o("resize-observer",{on:{notify:t.updateSize}})],1)])},d=[],f=n("59ad"),p=n.n(f),h=n("2d1f"),g=n.n(h),m=(n("6eb0"),n("252c")),v={name:"LocationSelector",components:{ResizeObserver:m["a"]},props:{visible:{type:Boolean,default:!1},location:Object},data:function(){return{mapWidth:0,mapHeight:0}},mounted:function(){this.updateSize()},computed:{locatorStyle:function(){var t=this.location.latitude,e=this.location.longitude,n=this.mapWidth,o=this.mapHeight,i=n/2*((t-10)/180)+n/2,a=o/2*(e/-90)+o/2;return{paddingLeft:i+"px",paddingTop:a+"px"}}},methods:{changeLocation:function(t){var e=t.offsetX,n=t.offsetY,o=this.$refs.world_map.clientWidth,i=this.$refs.world_map.clientHeight,a=180*(e/(o/2)-1)+10;a>180&&(a=a-180-180);var r=-90*(n/(i/2)-1);this.location.latitude=a,this.location.longitude=r,this.location.name="...",this.fetchCity(a,r)},fetchCity:function(t,e){var n=this,o="https://cors-anywhere.herokuapp.com/",i="https://api.3geonames.org/",a=o+i+e+","+t+".json";u.a.get(a).then(function(t){0===g()(t.data.major.city).length?n.location.name=n.formatLatLong(n.location.longitude,n.location.latitude):(n.location.name=t.data.major.city,n.location.longitude=p()(t.data.major.latt),n.location.latitude=p()(t.data.major.longt)),n.$emit("changedLocation",n.location)}).finally(this.$emit("hide"))},formatLatLong:function(t,e){var n=t>0?"° N":"° S",o=e>0?"° E":"° W";return Math.abs(t.toFixed(4))+n+", "+Math.abs(e.toFixed(4))+o},updateSize:function(){this.mapWidth=this.$refs.world_map.clientWidth,this.mapHeight=this.$refs.world_map.clientHeight}}},b=v,y=(n("a85a"),n("2877")),_=Object(y["a"])(b,s,d,!1,null,"df25b7d8",null),w=_.exports,x={name:"WeatherWidget",components:{LocationSelector:w},props:{initialLocation:{type:Object,default:function(){return{name:"Amsterdam",latitude:"4.9036",longitude:"52.3680"}}}},data:function(){return{info:null,loading:!0,errored:!1,location:this.initialLocation,show_location_selector:!1,temperature:null,icon:"clear-day"}},computed:{icon_src:function(){var t={"clear-day":"Sun","clear-night":"Moon",rain:"Cloud-Drizzle",snow:"Cloud-Snow-Alt",sleet:"Cloud-Hail",wind:"Wind",fog:"Cloud-Fog",cloudy:"Cloud","partly-cloudy-day":"Cloud-Sun","partly-cloudy-night":"Cloud-Moon"};return name=t[this.icon],n("6f32")("./"+name+".svg")}},mounted:function(){this.fetchWeatherData()},methods:{fetchWeatherData:function(){var t=this,e="https://cors-anywhere.herokuapp.com/",n="https://api.darksky.net/forecast/",o="841c8e5705ec8fe6289069e5fc6c679d",i="/"+this.location.longitude+","+this.location.latitude,a=e+n+o+i;u.a.get(a,{params:{exclude:"[minutely,hourly,daily,alerts,flags]",units:"si"}}).then(function(e){return t.load(e.data)}).catch(function(e){console.log(e),t.errored=!0}).finally(function(){return t.loading=!1})},load:function(t){this.icon=t.currently.icon,this.temperature=Math.round(t.currently.temperature),this.info=t},updateLocation:function(t){console.log(t),this.location=t,this.fetchWeatherData()},updateName:function(t){this.location.name=t}}},C=x,S=(n("c0c4"),Object(y["a"])(C,r,c,!1,null,"068bb8f2",null)),O=S.exports,j={name:"app",components:{WeatherWidget:O}},L=j,W=(n("034f"),Object(y["a"])(L,i,a,!1,null,null,null)),M=W.exports;new o["a"]({render:function(t){return t(M)}}).$mount("#app")},"5e69":function(t,e,n){},"64a9":function(t,e,n){},"6f10":function(t,e,n){t.exports=n.p+"img/Moon.410db39f.svg"},"6f32":function(t,e,n){var o={"./Cloud-Drizzle.svg":"871d","./Cloud-Fog.svg":"9e69","./Cloud-Hail.svg":"eb15","./Cloud-Moon.svg":"1608","./Cloud-Snow-Alt.svg":"fb00","./Cloud-Sun.svg":"0405","./Cloud.svg":"e09d","./Moon.svg":"6f10","./Sun.svg":"8048","./Wind.svg":"9128"};function i(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id="6f32"},8048:function(t,e,n){t.exports=n.p+"img/Sun.e2dfc31d.svg"},"871d":function(t,e,n){t.exports=n.p+"img/Cloud-Drizzle.b73f501b.svg"},9128:function(t,e,n){t.exports=n.p+"img/Wind.28aeaec7.svg"},"9e69":function(t,e,n){t.exports=n.p+"img/Cloud-Fog.1acef361.svg"},a7c5:function(t,e,n){t.exports=n.p+"img/world_map.aa2d299d.png"},a85a:function(t,e,n){"use strict";var o=n("5e69"),i=n.n(o);i.a},c0c4:function(t,e,n){"use strict";var o=n("fd51"),i=n.n(o);i.a},e09d:function(t,e,n){t.exports=n.p+"img/Cloud.831706c7.svg"},eb15:function(t,e,n){t.exports=n.p+"img/Cloud-Hail.10907649.svg"},fb00:function(t,e,n){t.exports=n.p+"img/Cloud-Snow-Alt.a91a8d95.svg"},fd51:function(t,e,n){}});
//# sourceMappingURL=app.6aa9a615.js.map