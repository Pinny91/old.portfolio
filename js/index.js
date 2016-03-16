jQuery(document).ready(function() {
  jQuery('#small-menu').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('#nav-bar ul').toggleClass('active');
    e.preventDefault();
  });
});