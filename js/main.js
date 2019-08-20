$(document).ready(function(){

	// HAMBURGER MENU
	$('.hamburger').click(function(){
		var ths = $(this),
				mnu = $('.hamburger-menu');
		if (ths.hasClass('is-active')) {
			ths.removeClass('is-active')
			mnu.slideUp(200)
		} else {
			ths.addClass('is-active')
			mnu.slideDown(200)
		}
	})

	$(window).resize(function(){
		if ($(window).width() > 991 - 17) {
			$('.hamburger').removeClass('is-active')
			$('.hamburger-menu').slideUp(0)
		}
	})

	// // SELECT CUSTOMIZE
	$('select').niceSelect();

	// RESULTS SLIDER
	var results = $('.slider');
	results.owlCarousel({
		loop: true,
		dots: false,
		items: 1,
	})
	$('.arrow-left').click(function() {
		results.trigger('prev.owl.carousel');
	})
	$('.arrow-right').click(function() {
		results.trigger('next.owl.carousel');
	})

})