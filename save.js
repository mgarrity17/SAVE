function init(){

				var coords = new google.maps.LatLng(42.3519, -71.0551);
			
				var myOptions = {
					zoom: 13, 
					center: coords,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
};