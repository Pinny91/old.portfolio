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
