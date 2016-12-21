
if(localStorage.getItem("rating") == undefined){
    
    $('.rate').hide();
    $('.rate-text').text('Geef een rating om de wifi code te zien');
}else{
    $('.rate').show();
}    
$("[name=rating]").on("change", function(){
    localStorage.setItem("rating", $(this).val());
    
    if($(this).val() == undefined){
      $('.rate').hide();
    }
    else {
      $('.rate').show();
      $('<div>').addClass('message-wifi').text("FREE WIFI HERE").appendTo('.wifi-unlock'); 
      $('<div>').addClass('arrow arrow--message-down').appendTo('.wifi-unlock');
      $( ".wifi-unlock" ).css( {"border": "solid black 1.5vh", "opacity": "1"} );
      $( ".fa-wifi" ).css( {"color": "#FFD800", "opacity": "1"} );
    }
        
});


// description page
var current_coffeebar = json.coffeebars.filter(function (coffeebar) { 
  if (coffeebar.id == localStorage.getItem("currentCoffeebarID")) {
    return coffeebar;
  }
}); 

$('.header--global-text p').html(current_coffeebar[0].title);
$('.coffeebar').html(current_coffeebar[0].title);

