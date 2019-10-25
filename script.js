$(document).ready(function() {
    // all custom jQuery will go here

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

});

function filter(sel) {

	var webProjects = document.querySelectorAll(".web");
	var mobileProjects = document.querySelectorAll(".mobile");
	var select = document.getElementsByClassName("filter-button");

	if (sel === "Mobile") {
			console.log("mobile");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "none"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "block"
		}
	} else if (sel === "Web") {
			console.log("web");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "block"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "none"
		}
	} else  if (sel === "All") {
			console.log("all");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "block"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "block"
		}
	}
}
