// Write your pseudo code here! HAPPY CODING!!

$('#showModal').on('click', function () {
	$('.modal-background').css("display", "flex").hide().fadeIn();
});

$('#close').on('click', function () {
	$('.modal-background').fadeOut();
	
});