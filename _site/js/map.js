var map;
var gent = new google.maps.LatLng(51.0555447, 3.7102833);
var gogcan = new google.maps.LatLng(current_coffeebar[0].latitude, current_coffeebar[0].longitude);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [ { "stylers": [ { "saturation": -100 }, { "lightness": -5 } ] } ];

  var mapOptions = {
    zoom: 12,
    center: gent,
    mapTypeControl: false,
    scrollwheel: false,
    zoomControl: true,
    mapTypeId: MY_MAPTYPE_ID
  };
  
  map = new google.maps.Map(document.getElementById('map_div'),
      mapOptions);

  var customMapType = new google.maps.StyledMapType(featureOpts);
  
  var contentString = 
      
      '<div id="infowindow-content">'+
      '<ul>'+
        '<li>' + current_coffeebar[0].title + '</li>'+
        '<li>' + current_coffeebar[0].adres + '</li>'+
        '<li>' + current_coffeebar[0].openingsuren.maandag + '</li>'+
      '</ul>'+
      '</div>';
  
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  var marker = new google.maps.Marker({
      position: gogcan,
      map: map,
      draggable: false,
      icon: "../images/marker.png",
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", function() {
 
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});

$('.map_info .koffiebar-name').html(current_coffeebar[0].title);
$('.map_info .koffiebar-adres').html(current_coffeebar[0].adres);
$('.map_info .koffiebar-openingsuren').html(current_coffeebar[0].adres);
$('.map_info .koffiebar-openingsuren-maandag').html(current_coffeebar[0].openingsuren.maandag);
$('.map_info .koffiebar-openingsuren-dinsdag').html(current_coffeebar[0].openingsuren.dinsdag);
$('.map_info .koffiebar-openingsuren-woensdag').html(current_coffeebar[0].openingsuren.woensdag);
$('.map_info .koffiebar-openingsuren-donderdag').html(current_coffeebar[0].openingsuren.donderdag);
$('.map_info .koffiebar-openingsuren-vrijdag').html(current_coffeebar[0].openingsuren.vrijdag);
$('.map_info .koffiebar-openingsuren-zaterdag').html(current_coffeebar[0].openingsuren.zaterdag);
$('.map_info .koffiebar-openingsuren-zondag').html(current_coffeebar[0].openingsuren.zondag);