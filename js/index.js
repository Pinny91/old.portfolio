
/*MENU FUNCTION*/
jQuery(document).ready(function(){
	if (jQuery(window).width() < 1165) {
		jQuery("#small-menu").on('click', function() {
			event.preventDefault();
			jQuery("#small-menu").toggleClass("active");
			jQuery("#nav-list ul").toggleClass("active");
		});
		jQuery('.nav-link').on('click' ,function(){
			jQuery("#nav-list ul").addClass("active");
			console.log("Test");
		});
	}
	else {
		jQuery("#nav-list ul").removeClass("active");
	}
	jQuery(window).resize(function() {
		if (jQuery(window).width() < 1165) {
			jQuery("#nav-list ul").addClass("active");
			console.log("size: " + jQuery(window).width());
			
			//When pressed on the menu icon -> open the menu, or close
			jQuery("#small-menu").on('click', function() {
				jQuery("#nav-list ul").toggleClass("active");
				console.log("Open & toe");
			});
			
			//When you clicked an element from the menu, it should close
			jQuery('.nav-link').on('click' ,function(){
				jQuery("#nav-list ul").addClass("active");
				console.log("Test");
			});
		}
		else {
			jQuery("#nav-list ul").removeClass("active");
		}
	});	
});

	/*PROJECTS FUNCTION*/
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

$(".btn").mouseup(function(){
    $(this).blur();
})
