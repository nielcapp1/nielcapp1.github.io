;(function() {

  function WeatherWidget(id, parentContainer) {
    this.API_URL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime'; // Database linken
    this.id = id; // parameter 1
    this.parentContainer = parentContainer; // parameter 2

    this.loadData = function() { // Functie laten werken als de data is geladen
      var that = this; // Hack om foutmelding te vermijden

      var xhr = new XMLHttpRequest(); // Request naar data set
      xhr.open('get', this.API_URL, true); // Geeft Json code terug van de database
      xhr.responseType = 'json';
      xhr.onload = function() { // Laadt de json code
        if(xhr.status == 200) { // als de status 200 is, dan is alles goed
          var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response; // Als er code in zit mag je alles in de variabele query steken
          var query = data; // data zit nu in var query
          

          var la1 = current_coffeebar[0].latitude;
          var lo1 = current_coffeebar[0].longitude;

          function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
              ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c * 1000; // Distance in m
            return d;
          }

          function deg2rad(deg) {
            return deg * (Math.PI/180)
          }

          var tempStr = '';
          var distance = [];
          for (i = 0; i < data.length; i++) {          
            var x = getDistanceFromLatLonInKm(la1,lo1,data[i].latitude,data[i].longitude);
            data[i].distance = x;
            data.sort(function(a,b) {
                return a.distance - b.distance;
            });
          }
          tempStr += '<div class="parking--title">Parking voor ' + current_coffeebar[0].title +'</div>';
          tempStr += '<div class="parkingspot">' + '<div class="parkingspot--available-capacity">' + data[0].parkingStatus.availableCapacity + '</div>' + '<div class="parkingspot--name">' + data[0].name + '</div>' + '<div class="parkingspot--distance">' + Math.round(data[0].distance) + 'm van ' + current_coffeebar[0].title + '</div>' + '</div>';
          tempStr += '<div class="parkingspot">' + '<div class="parkingspot--available-capacity">' + data[1].parkingStatus.availableCapacity + '</div>' + '<div class="parkingspot--name">' + data[1].name + '</div>' + '<div class="parkingspot--distance">' + Math.round(data[1].distance) + 'm van ' + current_coffeebar[0].title + '</div>' + '</div>';
          tempStr += '<div class="parkingspot">' + '<div class="parkingspot--available-capacity">' + data[2].parkingStatus.availableCapacity + '</div>' + '<div class="parkingspot--name">' + data[2].name + '</div>' + '<div class="parkingspot--distance">' + Math.round(data[2].distance) + 'm van ' + current_coffeebar[0].title + '</div>' + '</div>';



          that.parentContainer.innerHTML = tempStr; // container wordt gevuld met de html code uit de variabele tempStr
        } else {
          console.log('ERROR MAN'); // foutmelding als de status niet 200 is
        }
      }
      xhr.onerror = function() {
        console.log('ERROR MAN'); // foutmelding als de request naar de data set niet goed is
      }
      xhr.send();
    };

    this.updateUI = function() {

    };

    this.toString = function() {
      return `park widget with id: ${this.id}`;
    };

  };

  var ww1 = new WeatherWidget(1, document.querySelector('.content-parking'));
  ww1.loadData();
  console.log(ww1.toString());

})();








// calculate distance between coffeebars and parkingspots


// var la1 = current_coffeebar[0].latitude;
// var lo1 = current_coffeebar[0].longitude;
// console.log(data[0].latitude);

// var la2 = data[0].latitude;
// var lo2 = data[0].longitude;

// function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1); 
//   var a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ; 
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c; // Distance in km
//   return d;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI/180)
// }

// var x = getDistanceFromLatLonInKm(la1,lo1,la2,lo2);
// console.log(x);