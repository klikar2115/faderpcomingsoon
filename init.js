//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "11 mar 2024 22:00:00",
				format: "off"
			},
			
			function() {
				// callback function
			});

});	
