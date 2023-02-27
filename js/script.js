$(document).ready(function(){
	$('.modal-open-js').click(function(){
		$('.overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.imdiz-modal').css({'visibility': 'visible', 'opacity': 1});
	});
	$('.modal-close-js').click(function(){
		$('.overlay').css({'visibility': 'hidden', 'opacity': 0});
		$('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
	});
	$('.burger-menu-open-js').click(function(){
		$('.overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.menu').css({'visibility': 'visible', 'opacity': 1});
	});
	$('.burger-menu-close-js').click(function(){
		$('.overlay').css({'visibility': 'hidden', 'opacity': 0});
		$('.menu').css({'visibility': 'hidden', 'opacity': 0});
	});
});