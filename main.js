let latitude = 22. 7868542, longitude = 8.3643296;

    'top-left'
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-vll',
    center: [longitude, latitude],
    zoom: 4
});
var img1 = document.querySelector("#amber")
var marker1= new mapboxgl.Marker({
    element: img1
})
.setlnglat([75.85133, 26.98547])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
