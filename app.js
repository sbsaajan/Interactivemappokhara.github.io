var map = L.map('map').setView([28.6, 85.25], 10);
var titleUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
var attribution ='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var tiles = L.tileLayer(titleUrl, {attribution });
tiles.addTo(map);

var clayer= L.circle([28.5, 85.1], {radius:20000, color:'blue', fillColor:'green'});
clayer.addTo(map); 

var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];

 var rectangle = L.rectangle(bounds, {color:"red", weight:1});
 rectangle.addTo(map);
 var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 var polygon = L.polygon(latlngs, {color:'yellow'});
 polygon.addTo(map);

 var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
 var polyline= L.polyline(latlngs, {color:'red'});
 polyline.addTo(map);

 var cmarker= L.circleMarker([27.55, 85.68] , {color:'black'});
 cmarker.addTo(map);
  var marker = L.marker([27.55, 85.68]);
  marker.addTo(map);