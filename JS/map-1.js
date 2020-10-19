var map = L.map('map', {
    center: [25.0217149, 121.5393183],
    zoom: 16
});
//使用的圖資來源
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//加上已預設資料的marker點(之後要抓後端傳來資料的json檔做處理)
var data = [
    { 'name': '中正紀念堂', lat: 25.0346119, lng: 121.5195923 },
    { 'name': '大安森林公園', lat: 25.0330001, lng: 121.5331318 },
    { 'name': '國立臺灣師範大學校本部', lat: 25.0265487, lng: 121.5248475 },
    { 'name': '國立臺灣大學綜合體育館', lat: 25.0216697, lng: 121.5331069 },
    { 'name': '臺北市立聯合醫院婦幼院區', lat: 25.0216694, lng: 121.5265408 },
]
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

for (var i = 0; data.length > i; i++) {
    L.marker([data[i].lat, data[i].lng], { icon: greenIcon }).addTo(map)
        .bindPopup('<h1>' + data[i].name + '</h1>')
}