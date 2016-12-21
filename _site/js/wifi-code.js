var current_coffeebar = json.coffeebars.filter(function (coffeebar) { 
  if (coffeebar.id == localStorage.getItem("currentCoffeebarID")) {
    return coffeebar;
  }
}); 

var wifi = '';

    for (i = 0; i <  1; i++) { 
        wifi  += '<div data-id="'+current_coffeebar[0].id+'"';
        wifi +=    '<div class="wifi-username">' + '<i class="fa fa-user" aria-hidden="true"></i> ' + current_coffeebar[0].wifi.wifiname + '</div>';
        wifi +=    '<div class="wifi-code">' + '<i class="fa fa-key" aria-hidden="true"></i> ' + current_coffeebar[0].wifi.wificode + '</div>';
        wifi  += '</div>';

    }

$('.rate').html($(wifi));

function gohome()
{
localStorage.removeItem("rating");
}
      
