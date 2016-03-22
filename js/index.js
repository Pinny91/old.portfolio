
/*MENU FUNCTION*/
jQuery(document).ready(function(){
	var mouseClick = 0;
	if (jQuery(window).width() < 860) {
	jQuery("#small-menu").click(function() {
		event.preventDefault();
		jQuery("#small-menu").toggleClass("active");
		jQuery("#nav-list ul").toggleClass("active");
	});
	}
	else {
		jQuery("#small-menu").removeClass("active");
		jQuery("#nav-list ul").removeClass("active");
	}
	jQuery(window).resize(function() {
		if (jQuery(window).width() < 860) {
			if(mouseClick == 0){
			jQuery("#nav-list ul").addClass("active");				
			}
			jQuery("#small-menu").click(function() {
				event.preventDefault();
				if (mouseClick == 0){
					jQuery("#nav-list ul").removeClass("active");
					mouseClick = 1;
				}
				else if (mouseClick == 1){
					jQuery("#nav-list ul").addClass("active");
					mouseClick = 0;				
				}
				jQuery('.nav-link').click(function(){
					jQuery("#nav-list ul").addClass("active");
					mouseClick = 0;
				});
				console.log("Test");
			});
		}
		else {
			jQuery("#small-menu").removeClass("active");
			jQuery("#nav-list ul").removeClass("active");
		}
	});	
});

	/*PROJECTS FUNCTION*/
	jQuery(window).resize(function() {
		
	});
	
	$(document).ready(function() {
			$('.project-list > li > a').click(function(){
			event.preventDefault();//stop browser to take action for clicked anchor
						
			//get displaying tab content jQuery selector
			var active_tab_selector = $('.project-list > li.pr-active > a').attr('href');					
						
			//find actived navigation and remove 'active' css
			var actived_nav = $('.project-list > li.pr-active');
			actived_nav.removeClass('pr-active');
						
			//add 'active' css into clicked navigation
			$(this).parents('li').addClass('pr-active');
						
			//hide displaying tab content
			$(active_tab_selector).removeClass('pr-active');
			$(active_tab_selector).addClass('pr-hide');
						
			//show target tab content
			var target_tab_selector = $(this).attr('href');
			$(target_tab_selector).removeClass('pr-hide');
			$(target_tab_selector).addClass('pr-active');
			 });
	});


