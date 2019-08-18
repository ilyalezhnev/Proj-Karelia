$(document).ready(function(){

	// // NAV FADE EFFECT
	// $('.header-nav > ul > li').hover(function(){
	// 	$(this).removeClass('faded').siblings().addClass('faded')
	// })
	// $('.header-nav > ul > li').on('mouseleave', function(){
	// 	$('.header-nav > ul > li').removeClass('faded')
	// })

	// // HAMBURGER MENU
	// $('.hamburger').click(function(){
	// 	var ths = $(this),
	// 			mnu = $('.hamburger-menu');
	// 	if (ths.hasClass('is-active')) {
	// 		ths.removeClass('is-active')
	// 		mnu.slideUp(200)
	// 	} else {
	// 		ths.addClass('is-active')
	// 		mnu.slideDown(200)
	// 	}
	// })

	// $(window).resize(function(){
	// 	if ($(window).width() > 991 - 17) {
	// 		$('.hamburger').removeClass('is-active')
	// 		$('.hamburger-menu').slideUp(0)
	// 	}
	// })



	// $('.hamburger-menu .container > ul > li').click(function(){
	// 	var ths = $(this);
	// 	if (ths.hasClass('active')) {
	// 		ths.children('ul').slideUp(200)
	// 		ths.removeClass('active');
	// 	} else {
	// 		ths.children('ul').slideDown(200)
	// 		ths.addClass('active');
	// 	}
	// 	ths.siblings().removeClass('active').children('ul').slideUp(200);
	// })

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




	// MAIN SLIDER
	// var slider = $('.slider-wrap');
	// slider.owlCarousel({
	// 	items: 1,
	// 	dots: false,
	// 	loop: true
	// })
	// $('.slider-prev').click(function() {
	// 	slider.trigger('prev.owl.carousel');
	// })
	// $('.slider-next').click(function() {
	// 	slider.trigger('next.owl.carousel');
	// })

	// GALLERY SLDIER
	// var gallery = $('.gallery-wrap');

	// gallery.owlCarousel({
	// 	items: 4,
	// 	dots: false,
	// 	margin: 15,
	// 	loop: true
	// })
	// $('.gallery-prev').click(function() {
	// 	gallery.trigger('prev.owl.carousel');
	// })
	// $('.gallery-next').click(function() {
	// 	gallery.trigger('next.owl.carousel');
	// })

	// PRICES
	// $('.about-prices-item').on('mouseenter', function(){
	// 	$('.about-prices-item').removeClass('active');
	// 	$(this).addClass('active')
	// })

})