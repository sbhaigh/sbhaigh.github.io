/* ----------------------------------

Name: custom.js
Author: Fourtabs
Website: https://www.fourtabs.com
Exclusively available here: https://themeforest.net/user/fourtabsthemes

------------------------------------- */







/*====================================================


	Table of Contents
	
	
		01. Loading Screen 

		02. Lightbox
		
		03. Scroll to top

	
	
====================================================*/



jQuery(document).ready(function($) {
	"use strict";

	
	
/*======================

	01. Loading Screen 

========================*/



	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);

	
	
	

	
/*======================

	02. Lightbox 

========================*/





	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
	
	
	
/*======================

	03. Scroll to top 

========================*/

	
	
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});
	
});