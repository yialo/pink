function initMap() {
  var mapElement = document.getElementById('map');
  var target = {lat: 59.938760, lng: 30.323036};
  var mapOptions = {
    zoom: 16,
    center: target,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollWheel: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  var map = new google.maps.Map(mapElement, mapOptions);

  var markerIcon = {
    url: 'img/icon-map-marker.svg',
    size: new google.maps.Size(36, 36),
    scaleSize: new google.maps.Size(36, 36),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(18, 18)
  };
  var marker = new google.maps.Marker({
    map: map,
    position: target,
    icon: markerIcon
  });
}
