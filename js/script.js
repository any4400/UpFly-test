$(document).ready(function(){
	$('.imdiz-open').click(function(){
		$('.overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.imdiz-modal').css({'visibility': 'visible', 'opacity': 1});
	});
	$('.imdiz-close').click(function(){
		$('.overlay').css({'visibility': 'hidden', 'opacity': 0});
		$('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
	});
	$('.burger-open').click(function(){
		$('.overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.menu').css({'visibility': 'visible', 'opacity': 1});
	});
	$('.burger-close').click(function(){
		$('.overlay').css({'visibility': 'hidden', 'opacity': 0});
		$('.menu').css({'visibility': 'hidden', 'opacity': 0});
	});
});