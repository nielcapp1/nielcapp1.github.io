// description page
var current_coffeebar = json.coffeebars.filter(function (coffeebar) { 
  if (coffeebar.id == localStorage.getItem("currentCoffeebarID")) {
    return coffeebar;
  }
}); 

$('.header--global-text p').html(current_coffeebar[0].title);

var mhtml = '';

for (i = 0; i < current_coffeebar[0].menu.drinks.length; i++) { 
    mhtml += '<div data-id="'+current_coffeebar[0].id+'" class="swiper-slide">';
    mhtml +=    '<div class="slider--cover"><img src="'+current_coffeebar[0].menu.drinks[i].image+'" /></div>';
    mhtml +=    '<div class="slider--description"><h1>'+current_coffeebar[0].menu.drinks[i].name+'</h1><p>'+current_coffeebar[0].menu.drinks[i].description+'</p><ul><li><i class="coffee-small fa fa-coffee"></i>'+current_coffeebar[0].menu.drinks[i].priceSmall+'</li><li><i class="coffee-large fa fa-coffee"></i>'+current_coffeebar[0].menu.drinks[i].priceLarge+'</li></ul></div>';
    mhtml += '</div>';

}



$('.slider .swiper-wrapper').append($(mhtml));// append DOM only one time.

var barsSlider = new Swiper('.container .slider .swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
});