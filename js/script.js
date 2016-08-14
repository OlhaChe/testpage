$(document).ready(function(){
  $('#team_slider').bxSlider({
  	pager: false,
  	nextSelector: '#slider-next',
  	prevSelector: '#slider-prev',
  	nextText: '',
 	  prevText: '',
  	minSlides: 3,
  	maxSlides: 3,
  	slideWidth: '250px'
  });

  $('#quotes_slider').bxSlider({
  	controls: false,
  	minSlides: 1,
  	maxSlides: 1,
  	slideWidth: '500px',
    auto: true
  });
});