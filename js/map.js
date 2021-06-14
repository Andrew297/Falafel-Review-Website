
function initMap() {
  var options = {
    center: { lat: 55.9533, lng: -3.1883 },
    zoom: 14,
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
    content:'<a href=#review_1>Yum Yum Kurdish Kebab House</a>'
  });
  addMarker({
    coords:{lat:55.958692028299716, lng:-3.2076947823024535},
    content:'<a href=#review_2>Poppy</a>'
  });
  addMarker({
    coords:{lat:55.94475221780862, lng:-3.186008001495245},
    content:'<a href=#review_3>Nile Valley Cafe</a>'
  });
  /*addMarker({
    coords:{lat:55.94324119887934, lng:-3.202467894727917},
    content:'<a href=#review_4>Turkish Doner Inn</a>'
  });*/
  addMarker({
    coords:{lat:55.94324119887934, lng:-3.202467894727917},
    content:'<a href=#review_5>Hajars Shwarma House</a>'
  });
  /*addMarker({
    coords:{lat:55.94632228029747, lng:-3.185129921843514},
    content:'<a href=#review_6>Palmyra Pizza</a>'
  });*/
  /*addMarker({
    coords:{lat:55.93963204150728, lng:-3.180078625864045},
    content:'<a href=#review_7>The Ephesus</a>'
  });*/
  /*addMarker({
    coords:{lat:55.94103359249845, lng:-3.203367728451288},
    content:'<a href=#review_8>Shwarma King</a>'
  });*/
  /*addMarker({
    coords:{lat:55.94618494051073, lng:-3.1912657251507848},
    content:'<a href=#review_9>Che</a>'
  });*/
  addMarker({
    coords:{lat:55.94722444345983, lng:-3.1915467360827012},
    content:'<a href=#review_10>Pizza Paradise</a>'
  });
  /*addMarker({
    coords:{lat:55.95066960729369, lng:-3.188737378577401},
    content:'<a href=#review_11>Yum Yum (Fleshmarket Close)</a>'
  });*/
  /*addMarker({
    coords:{lat:55.94225910749085, lng:-3.182397109978837},
    content:'<a href=#review_12>Marmaris Kebab House</a>'
  });*/
}
