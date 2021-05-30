

function initMap() {
  var options = {
    center: { lat: 55.9533, lng: -3.1883 },
    zoom: 13,
    mapTypeControl: false
  }
  var map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map: map
    });
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
  }
  addMarker({
    coords:{lat:55.94793160643684, lng:-3.19157913358109},
    content:'<a href=#review_1>Yum Yum Kurdish Kebab Huse</a>'
  });
  addMarker({
    coords:{lat:55.94425452319719, lng:-3.1838907593539996},
    content:'<a href=#review_2>The Shawarma House</a>'
  });
  addMarker({
    coords:{lat:55.94324119887934, lng:-3.202467894727917},
    content:'<a href=#review_3>Turkish Doner Inn</a>'
  });
}
