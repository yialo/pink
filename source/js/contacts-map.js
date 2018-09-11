function initMap() {
  var target = {lat: 59.938760, lng: 30.323036};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: target,
    mapTypeControl: false,
    streetViewControl: false
  });
  var marker = new google.maps.Marker({position: target, map: map});
}
