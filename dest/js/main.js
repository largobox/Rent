// $(function() {
// });

$(document).ready(function() {

	toggleMobileMenu();
	toggleSearch();
	listenOutsideClick();
  $("#owl-example").owlCarousel({
  	items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [550,1]
  });
 
});

function listenOutsideClick (){
	$(window).click(function() {
		$('.search_cnt').removeClass('search_cnt_active')

		$('.search_cnt_inner').click(function(event){
			event.stopPropagation();
		});
	});
}

function toggleMobileMenu(){
	$('.mobile_nav_menu').click(function(){
		$('.popup_cnt').addClass('popup_cnt_active');
	});

	$('.popup_close_btn').click(function(){
		$('.popup_cnt').removeClass('popup_cnt_active');
	});
}

function toggleSearch(){
	$('.search_btn_cnt').click(function(event){
		event.stopPropagation();

		var c = $('.search_cnt');

		if ( c.hasClass('search_cnt_active') ) {
			c.removeClass('search_cnt_active');
		}
		else {
			c.addClass('search_cnt_active');
		}
	});
}