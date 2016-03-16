var eventFired = 1;
if ($(window).width() < 760) {
	eventFired = 0;
}
else {
    eventFired = 1;
}
$(window).on('resize', function() {
if ($(window).width() < 760) {
	eventFired = 0;
}
else {
    eventFired = 1;
}
});
    if (eventFired == 0) {       
			$("#small-menu").on("click", function (e) {
				$("#nav-bar ul").toggleClass("active");
				$(this).toggleClass("active");
				e.preventDefault();
			});
			$("#nav-bar ul").on("click", ".nav-link", function () {
				//$("#nav").slideToggle();
				//alert('fuck you ' + eventFired);
				$("#small-menu").click();
			});
        
    } 
	else {
		$(this).removeClass("active");
	}	