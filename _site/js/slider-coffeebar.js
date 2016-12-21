
var mhtml = '';

$.each(json.coffeebars, function(key, val){
    mhtml += '<div data-id="'+val.id+'" class="swiper-slide">';
    mhtml +=    '<div class="slider--cover"><img src="'+val.image+'" /></div>';
    mhtml +=    '<div class="slider--description"><h1>'+val.title+'</h1><p>'+val.description+'</p></div>';
    mhtml += '</div>';
});
$('.slider .swiper-wrapper').append($(mhtml));// append DOM only one time.

var barsSlider = new Swiper('.container .slider .swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    onSlideChangeEnd : function(swiper){
       localStorage.setItem("currentCoffeebarID", barsSlider.slides[swiper.activeIndex].dataset.id)
    }
});
barsSlider.slideTo(localStorage.getItem("currentCoffeebarID")-1);