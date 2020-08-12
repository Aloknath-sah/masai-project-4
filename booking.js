function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(12.9716,77.5946),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}