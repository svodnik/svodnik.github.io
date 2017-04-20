
var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;
var flyBugOffset = $('#flybug').offset().top;
var butterflyOffset = $('#butterfly').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance from the top of the page to the nav is: ' + stickyNavOffset);
	console.log('The distance scrolled is: ' + distanceScrolled);

	// Code to stick nav to top
	if (distanceScrolled > stickyNavOffset) {
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled');
	}

	// Code to run when the user has scrolled to the flybug section
	if (distanceScrolled > flyBugOffset) {

		$('.part').addClass('faded-in');

	} else {

		$('.part').removeClass('faded-in');
	}

	// Code to run when the user has scrolled to the butterfly section
	if (distanceScrolled > butterflyOffset) {

		// Slide the butterfly in.
		$('.butterfly').addClass('animated');

	} else {

		$('.butterfly').removeClass('animated');
	}

});