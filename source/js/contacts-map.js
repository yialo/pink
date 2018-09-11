function initMap() {
  var target = {lat: 59.938760, lng: 30.323036};
  var mapOptions = {
    zoom: 16,
    center: target,
    mapTypeControl: false,
    streetViewControl: false
  };
  var icon = '../img/icon-map-marker.svg';

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: target
    // icon: icon
  });
}
