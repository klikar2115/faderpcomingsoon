//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "10 mar 2024 16:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
