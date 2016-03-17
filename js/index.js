var eventFired = 1;
if ($(window).width() < 860) {
	eventFired = 0;
}
else {
    eventFired = 1;
}
$(window).on("resize", function() {
if ($(window).width() < 860) {
	eventFired = 0;
}
else {
    eventFired = 1;
}
});
    
if (eventFired == 0) {
jQuery(document).ready(function(){
  jQuery("#nav-bar").click(function() {
	   jQuery("#small-menu").toggleClass("active");
	   jQuery("#nav-bar ul").toggleClass("active");
		//e.preventDefault();
		jQuery(".nav-link").click(function(e) {
		if ("#nav-bar".hasClass('active')) {
			"#nav-bar".removeClass('active');
			alert("Boe");
		}
		
  });
  	

 });
});
}
else {
		
	}