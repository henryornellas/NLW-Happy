//mapa
const map = L.map('mapid').setView([-18.6479366,-48.1926229], 14);

//tileLayer, sei lá que poha é essa...
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//icon
const icon = L.icon({
  iconUrl: "./Imagens/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

//popup
const popup = L.popup({
  closeButton: false,
  className: map-popup,
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="escolher-orfanato"> <img src="./Imagens/arrow-white.svg"> </a>')

//pin
L
.marker([-18.6479366,-48.1926229], {icon})
.addTo(map)
.bindPopup(popup)
