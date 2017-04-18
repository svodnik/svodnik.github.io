function animateIcons () {
	$('.bug').toggleClass('transformed');
}

setInterval(animateIcons, 1000);


$('#bug1Btn').on('click', function () {
	$('#bug1').toggleClass('faded');
});


$('#bug2Btn').on('click', function () {
	$('#bug2').toggleClass('faded');
});